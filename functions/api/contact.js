/*
  POST /api/contact

  Receives the contact form and sends it on as an email using the
  Cloudflare Email Sending REST API. Pages Functions cannot use the
  `send_email` Workers binding — it is not one of the bindings Pages
  supports — so this authenticates with an API token instead.

  Required secrets (Pages project → Settings → Variables and Secrets):
    CF_ACCOUNT_ID    Cloudflare account ID
    CF_EMAIL_TOKEN   API token with the email sending permission

  Optional plain variables, with the defaults below:
    CONTACT_TO       where enquiries are delivered
    CONTACT_FROM     sender; must be on the onboarded sending domain

  Setup this expects: adm-innovations.com onboarded to Email *Sending*
  (Compute > Email Service > Email Sending), which puts its DNS records on
  the cf-bounce subdomain and therefore leaves the root MX records — and
  the Proton mailbox they point at — alone. Email *Routing* is deliberately
  not used: it would claim the root MX and break inbound mail.

  Sending to arbitrary recipients requires the Workers Paid plan.
*/

const TO_FALLBACK = "contact@adm-innovations.com"
const FROM_FALLBACK = "website@adm-innovations.com"

const LIMITS = {
  name: 120,
  company: 160,
  email: 200,
  projectType: 140,
  budget: 60,
  timeline: 60,
  description: 5000,
}


function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  })
}


function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}


function clean(value, max) {
  return typeof value === "string" ? value.trim().slice(0, max) : ""
}


/* Deliberately loose: the aim is to catch typos, not to police addresses. */
function looksLikeEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}


async function handlePost(context) {
  const { request, env } = context

  let payload

  try {
    payload = await request.json()
  } catch {
    return json({ error: "Malformed request." }, 400)
  }

  /*
    Honeypot. A real person never sees this field, so anything in it came
    from a bot. Answer with success so it learns nothing.
  */
  if (clean(payload.website, 100)) {
    return json({ ok: true })
  }

  const form = {
    name: clean(payload.name, LIMITS.name),
    company: clean(payload.company, LIMITS.company),
    email: clean(payload.email, LIMITS.email),
    projectType: clean(payload.projectType, LIMITS.projectType),
    budget: clean(payload.budget, LIMITS.budget),
    timeline: clean(payload.timeline, LIMITS.timeline),
    description: clean(payload.description, LIMITS.description),
  }

  const missing = ["name", "email", "projectType", "description"].filter(
    (field) => !form[field],
  )

  if (missing.length > 0) {
    return json(
      { error: "Please fill in every required field.", fields: missing },
      400,
    )
  }

  if (!looksLikeEmail(form.email)) {
    return json(
      { error: "That email address does not look right.", fields: ["email"] },
      400,
    )
  }

  if (payload.consent !== true) {
    return json(
      { error: "Please confirm the consent checkbox.", fields: ["consent"] },
      400,
    )
  }

  const accountId = env.CF_ACCOUNT_ID
  const token = env.CF_EMAIL_TOKEN

  if (!accountId || !token) {
    /* Misconfiguration is ours, not the visitor's — say so in the log. */
    console.error("contact form: CF_ACCOUNT_ID or CF_EMAIL_TOKEN is missing")

    return json(
      { error: "The form is not available right now. Please email us instead." },
      503,
    )
  }

  const to = env.CONTACT_TO || TO_FALLBACK
  const from = env.CONTACT_FROM || FROM_FALLBACK

  const rows = [
    ["Name", form.name],
    ["Company", form.company || "Not provided"],
    ["Email", form.email],
    ["Project type", form.projectType],
    ["Budget", form.budget || "Not specified"],
    ["Timeline", form.timeline || "Not specified"],
  ]

  const text = [
    "New enquiry from the website",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Description:",
    form.description,
  ].join("\n")

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;line-height:1.6;color:#111">
      <h2 style="margin:0 0 16px">New enquiry from the website</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) => `
        <tr>
          <td style="padding:4px 16px 4px 0;color:#666;vertical-align:top">${escapeHtml(label)}</td>
          <td style="padding:4px 0">${escapeHtml(value)}</td>
        </tr>`,
          )
          .join("")}
      </table>
      <h3 style="margin:24px 0 8px">Description</h3>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(form.description)}</p>
    </div>
  `.trim()

  let response

  try {
    response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/email/sending/send`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          to,
          from: { address: from, name: "ADM Innovations website" },
          reply_to: { address: form.email, name: form.name },
          subject: `Enquiry — ${form.company || form.name}`,
          text,
          html,
        }),
      },
    )
  } catch (error) {
    console.error("contact form: request to Email Sending failed", error)

    return json(
      { error: "We could not send that. Please email us instead." },
      502,
    )
  }

  if (!response.ok) {
    const detail = await response.text()

    console.error(
      `contact form: Email Sending returned ${response.status}`,
      detail,
    )

    return json(
      { error: "We could not send that. Please email us instead." },
      502,
    )
  }

  return json({ ok: true })
}


/*
  A single entry point rather than an `onRequestPost` export, so the
  behaviour for every other method is explicit rather than inherited.
*/
export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
      headers: { allow: "POST" },
    })
  }

  return handlePost(context)
}
