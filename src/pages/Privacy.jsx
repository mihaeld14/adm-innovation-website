import { Link } from "react-router"
import { InfoPanel } from "../components/CardStandards"
import usePageMeta from "../lib/meta"


const sections = [
  {
    title: "What this site collects",
    body: "This site uses no tracking cookies, no advertising tools and no third-party behavioural analytics. No user profiles are created and nothing is collected from you automatically.",
  },
  {
    title: "The contact form",
    body: "The enquiry form does not send data to any server of ours — it prepares a message in your own email application, which you decide whether to send. Anything you email us is used solely to review and respond to your enquiry, and is never passed to third parties.",
  },
  {
    title: "Hosting",
    body: "The site is hosted on Vercel. As with any web hosting, loading the pages involves processing technical data such as your IP address — that is a standard part of how the internet works and is governed by the hosting provider's own policy.",
  },
  {
    title: "Confidentiality of project information",
    body: "The information, documents and data you share with us during conversations and projects are used only for that project. We are happy to sign a confidentiality agreement before the first detailed conversation.",
  },
  {
    title: "Your rights",
    body: "If you have written to us and would like that correspondence deleted, email contact@adminnovations.com and we will take care of it.",
  },
]


function Privacy() {
  usePageMeta({
    title: "Privacy",
    description:
      "How ADM Innovations handles your data: no tracking cookies, no server-side storage from the contact form.",
    path: "/privacy",
  })

  return (
    <div className="relative overflow-hidden">
      <section className="mx-auto max-w-4xl px-5 pt-32 pb-24 sm:px-6 sm:pt-40 sm:pb-28">
        <p className="font-mono text-xs font-medium tracking-[0.18em] text-blue-400 uppercase">
          Privacy
        </p>

        <h1 className="mt-4 text-4xl leading-[1.02] font-bold tracking-tight text-white sm:text-5xl">
          Short and honest — like everything else here.
        </h1>

        <p className="mt-5 max-w-2xl leading-relaxed text-gray-400">
          This site is built to inform you, not to track you. Here is what
          that means in practice.
        </p>

        <div className="mt-10 space-y-4">
          {sections.map((section) => (
            <InfoPanel
              key={section.title}
              as="section"
              className="p-6 sm:p-7"
            >
              <h2 className="text-lg font-bold text-white">
                {section.title}
              </h2>

              <p className="mt-3 leading-relaxed text-gray-400">
                {section.body}
              </p>
            </InfoPanel>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Questions about privacy? Email us at{" "}
          <a
            href="mailto:contact@adminnovations.com"
            className="text-gray-300 underline decoration-gray-600 underline-offset-4 transition hover:text-blue-300"
          >
            contact@adminnovations.com
          </a>{" "}
          or head back to the{" "}
          <Link
            to="/"
            className="text-gray-300 underline decoration-gray-600 underline-offset-4 transition hover:text-blue-300"
          >
            home page
          </Link>
          .
        </p>
      </section>
    </div>
  )
}


export default Privacy
