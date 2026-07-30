import { useState } from "react"
import {
  ArrowIcon,
  CheckIcon,
  InfoPanel,
} from "../components/CardStandards"
import usePageMeta from "../lib/meta"


const contactEmail = "contact@adm-innovations.com"


const projectTypes = [
  "Business software / internal system",
  "AI solution or assistant",
  "Process automation",
  "New website or platform",
  "Basic Business Website (€120)",
  "Support for an existing system",
  "Something else / not sure yet",
]


const budgetOptions = [
  "Under €500",
  "€500 – €1,500",
  "€1,500 – €5,000",
  "Over €5,000",
  "Not sure yet",
]


const timelineOptions = [
  "Within 1 month",
  "1 – 3 months",
  "More than 3 months",
  "Flexible",
]


const nextSteps = [
  {
    number: "01",
    title: "We review your enquiry",
    description:
      "We read through the information and identify the main objective of the project.",
  },
  {
    number: "02",
    title: "A short free conversation",
    description:
      "We discuss the process, the problem and the possible approaches — with no obligation.",
  },
  {
    number: "03",
    title: "You receive a written quote",
    description:
      "Fixed scope, price and timeline, before any development has started.",
  },
  {
    number: "04",
    title: "You review and approve",
    description:
      "On custom projects you see the working solution before you pay.",
  },
]


const initialForm = {
  name: "",
  company: "",
  email: "",
  projectType: "",
  description: "",
  budget: "",
  timeline: "",
  consent: false,
  /* Honeypot — hidden from people, irresistible to bots. */
  website: "",
}


function Contact() {
  usePageMeta({
    title: "Contact — free consultation",
    description:
      "Get in touch with ADM Innovations: describe the problem or process you want to improve. We reply within 1 business day.",
    path: "/contact",
  })

  const [formData, setFormData] = useState(initialForm)

  /* "idle" | "sending" | "sent" | "error" */
  const [status, setStatus] = useState("idle")
  const [errorMessage, setErrorMessage] = useState("")


  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === "checkbox" ? checked : value,
    }))
  }


  const handleSubmit = async (event) => {
    event.preventDefault()

    if (status === "sending") {
      return
    }

    setStatus("sending")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        setErrorMessage(
          result.error ||
            "Something went wrong while sending. Please try again.",
        )
        setStatus("error")
        return
      }

      setFormData(initialForm)
      setStatus("sent")
    } catch {
      setErrorMessage(
        "We could not reach the server. Please check your connection and try again.",
      )
      setStatus("error")
    }
  }


  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-32 pb-10 sm:px-6 sm:pt-40 sm:pb-14">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-medium tracking-[0.18em] text-blue-400 uppercase">
            Contact
          </p>

          <h1 className="mt-4 text-4xl leading-[1.02] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tell us what you want to improve.
          </h1>

          <p className="mt-5 max-w-2xl leading-relaxed text-gray-400 sm:text-lg">
            No technical specification required — a short description of the
            problem, the current process and the result you want is plenty to
            get started.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-gray-400">
            {[
              "Reply within 1 business day",
              "No obligation",
              "First consultation is free",
            ].map((point) => (
              <span
                key={point}
                className="flex items-center gap-2"
              >
                <CheckIcon />
                {point}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* Form + what happens next */}
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-6 sm:pb-20">
        <div className="grid items-start gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Form */}
          <InfoPanel
            as="form"
            onSubmit={handleSubmit}
            className="p-6 sm:p-8"
          >
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Project enquiry
            </h2>

            <p className="mt-3 leading-relaxed text-gray-400">
              Send it straight from here and we will reply to the address you
              give us, usually within one business day.
            </p>

            {/* Honeypot: off-screen, skipped by keyboard, hidden from
                assistive tech. Only a bot fills this in. */}
            <div
              aria-hidden="true"
              className="absolute left-[-9999px] h-px w-px overflow-hidden"
            >
              <label htmlFor="website">Leave this field empty</label>

              <input
                id="website"
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <Input
                label="Your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />

              <Input
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                autoComplete="organization"
                placeholder="Optional"
              />

              <Input
                label="Work email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />

              <Select
                label="Project type"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                options={projectTypes}
                required
              />

              <Select
                label="Approximate budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                options={budgetOptions}
                hint="Optional — helps us suggest a realistic approach"
              />

              <Select
                label="Desired timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                options={timelineOptions}
                hint="Optional"
              />

              <div className="sm:col-span-2">
                <Textarea
                  label="Short description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Example: “Every week we collect reports from 5 sites into Excel by hand. We want that to happen automatically.”"
                  required
                />
              </div>
            </div>

            <label className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-gray-400">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="mt-1 h-4 w-4 shrink-0 accent-blue-600"
              />

              <span>
                I agree that the information I submit may be used to review
                and respond to my enquiry.
              </span>
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition duration-200 hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.28)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-blue-600 disabled:hover:shadow-none sm:w-auto"
            >
              {status === "sending" ? (
                <>
                  Sending…
                  <span
                    className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                    aria-hidden="true"
                  />
                </>
              ) : (
                <>
                  Send the enquiry
                  <ArrowIcon />
                </>
              )}
            </button>

            {/*
              Kept in the DOM at all times so screen readers announce
              whatever lands here, rather than missing a node that only
              appears after the fact.
            */}
            <div
              role="status"
              aria-live="polite"
              className="mt-5 empty:mt-0"
            >
              {status === "sent" && (
                <p className="flex items-start gap-2.5 leading-relaxed text-emerald-300">
                  <CheckIcon className="mt-1" />
                  <span>
                    Thanks — your enquiry is on its way. We will reply to{" "}
                    the address you gave us, usually within one business day.
                  </span>
                </p>
              )}

              {status === "error" && (
                <p className="leading-relaxed text-red-300">
                  {errorMessage} You can also email us directly at{" "}
                  <a
                    href={`mailto:${contactEmail}`}
                    className="underline decoration-red-300/50 underline-offset-4 hover:text-red-200"
                  >
                    {contactEmail}
                  </a>
                  .
                </p>
              )}
            </div>
          </InfoPanel>


          {/* What happens next */}
          <InfoPanel
            as="aside"
            className="p-6 sm:p-7 lg:sticky lg:top-24"
          >
            <p className="font-mono text-xs font-medium tracking-[0.16em] text-blue-400 uppercase">
              What happens next
            </p>

            <div className="mt-6 space-y-5">
              {nextSteps.map((step) => (
                <article
                  key={step.number}
                  className="flex items-start gap-4"
                >
                  <span className="font-mono text-sm font-semibold text-blue-400">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-base leading-relaxed text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7 border-t border-white/8 pt-6">
              <p className="text-sm text-gray-500">
                Prefer plain email?
              </p>

              <a
                href={`mailto:${contactEmail}`}
                className="mt-1.5 inline-flex min-h-10 items-center font-medium text-gray-200 transition hover:text-blue-300"
              >
                {contactEmail}
              </a>

              <p className="mt-3 text-xs text-gray-600">
                Monday – Friday · Bulgaria · Remote projects
              </p>
            </div>
          </InfoPanel>
        </div>
      </section>
    </div>
  )
}


function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  autoComplete,
  required = false,
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-300">
        {label}
        {required && (
          <span
            className="text-blue-400"
            aria-hidden="true"
          >
            {" "}
            *
          </span>
        )}
      </span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white transition outline-none placeholder:text-gray-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/15"
      />
    </label>
  )
}


function Textarea({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-300">
        {label}
        {required && (
          <span
            className="text-blue-400"
            aria-hidden="true"
          >
            {" "}
            *
          </span>
        )}
      </span>

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows="6"
        className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white transition outline-none placeholder:text-gray-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/15"
      />
    </label>
  )
}


function Select({
  label,
  name,
  value,
  onChange,
  options,
  hint,
  required = false,
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-300">
        {label}
        {required && (
          <span
            className="text-blue-400"
            aria-hidden="true"
          >
            {" "}
            *
          </span>
        )}
      </span>

      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b0d11] px-4 py-3 text-white transition outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/15"
      >
        <option value="">Select…</option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>

      {hint && (
        <span className="mt-1.5 block text-xs text-gray-600">
          {hint}
        </span>
      )}
    </label>
  )
}


export default Contact
