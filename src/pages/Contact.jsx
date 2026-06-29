import { useState } from "react"
import { Link } from "react-router"


const contactEmail = "contact@adminnovations.com"


const services = [
  "Custom Software Development",
  "Web Development",
  "AI Solutions",
  "Business Automation",
  "System Integration",
  "Support & Improvement",
  "Basic Business Website — from €120",
  "Not sure yet",
]


const budgetOptions = [
  "Under €500",
  "€500–€1,500",
  "€1,500–€5,000",
  "€5,000+",
  "Not sure yet",
]


const nextSteps = [
  {
    number: "01",
    title: "We review your request",
    description:
      "We examine the information you provide and identify the main objective of the project.",
  },
  {
    number: "02",
    title: "We confirm the scope and price",
    description:
      "Before development begins, you receive a defined project scope and an agreed price.",
  },
  {
    number: "03",
    title: "We build and present the solution",
    description:
      "For custom projects, no payment is due while we build. You first review a working version of the agreed result.",
  },
  {
    number: "04",
    title: "You approve, pay and receive the project",
    description:
      "After approval, the agreed payment is completed and the final files, access and project handover follow.",
  },
]


const faqs = [
  {
    question: "When do I pay for a custom project?",
    answer:
      "The scope and price are agreed before development begins, but no advance development payment is required. You first review a working version of the agreed solution. Payment is completed after approval and before the final project handover. The €120 Basic Business Website package is the exception and is paid in advance.",
  },
  {
    question: "How quickly will you respond?",
    answer:
      "We normally respond within one business day. More complex requests may require additional time for an initial review.",
  },
  {
    question: "Do I need a complete technical specification?",
    answer:
      "No. A short explanation of the business problem, current process and desired result is enough to begin the discussion.",
  },
  {
    question: "Do you work with businesses outside Bulgaria?",
    answer:
      "Yes. Projects can be completed remotely for businesses in Bulgaria and other countries.",
  },
  {
    question: "Is the initial discussion free?",
    answer:
      "Yes. The initial project discussion and review are free and do not create an obligation to proceed.",
  },
]


const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  projectDescription: "",
  consent: false,
}


function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 h-4 w-4 shrink-0 text-blue-400"
    >
      <path
        d="m4 10 4 4 8-8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path
        d="M4 6.5h16v11H4v-11Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="m5 7.5 7 5 7-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)


  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === "checkbox" ? checked : value,
    }))
  }


  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(
      `Project inquiry — ${formData.company || formData.name}`,
    )

    const body = encodeURIComponent(
      `
ADM INNOVATIONS PROJECT REQUEST

CONTACT INFORMATION
Name: ${formData.name}
Company: ${formData.company || "Not provided"}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}

PROJECT INFORMATION
Service: ${formData.service}
Budget: ${formData.budget || "Not specified"}

PROJECT DESCRIPTION
${formData.projectDescription}
      `.trim(),
    )

    setSubmitted(true)

    window.location.href =
      `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }


  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section
        className="
          mx-auto
          max-w-6xl
          px-5
          pt-28
          pb-14
          sm:px-6
          sm:pt-40
          sm:pb-20
          lg:pb-24
        "
      >
        <div
          className="
            grid
            items-end
            gap-8
            lg:grid-cols-[1fr_340px]
            lg:gap-12
          "
        >
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.2em]">
              Contact
            </p>

            <h1
              className="
                mt-4
                max-w-4xl
                text-4xl
                leading-[1]
                font-semibold
                tracking-tight
                text-white
                sm:mt-5
                sm:text-6xl
                md:text-7xl
              "
            >
              Tell us what you want to build.
            </h1>

            <p className="mt-5 max-w-2xl leading-relaxed text-gray-400 sm:mt-7 sm:text-lg">
              Tell us what you want to create, improve or automate. A short
              explanation of the problem and your desired result is enough to
              start.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-400 sm:mt-9">
              <div className="flex items-center gap-2">
                <CheckIcon />
                No obligation
              </div>

              <div className="flex items-center gap-2">
                <CheckIcon />
                Clear project scope
              </div>

              <div className="flex items-center gap-2">
                <CheckIcon />
                Direct communication
              </div>
            </div>
          </div>


          {/* Contact information card */}
          <aside
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-blue-500/20
              bg-blue-500/6
              p-6
              sm:p-7
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -top-20
                -right-16
                h-48
                w-48
                rounded-full
                bg-blue-500/20
                blur-[75px]
              "
            />

            <div className="relative">
              <p className="text-xs font-medium tracking-[0.16em] text-blue-400 uppercase sm:text-sm">
                Contact information
              </p>

              <div className="mt-6 space-y-6">
                <ContactDetail
                  label="Email"
                  value={contactEmail}
                  href={`mailto:${contactEmail}`}
                />

                <ContactDetail
                  label="Response time"
                  value="Usually within 1 business day"
                />

                <ContactDetail
                  label="Availability"
                  value="Monday – Friday"
                />

                <ContactDetail
                  label="Location"
                  value="Bulgaria / Remote projects"
                />
              </div>
            </div>
          </aside>
        </div>
      </section>


      {/* Contact form and process */}
      <section
        className="
          mx-auto
          max-w-6xl
          px-5
          pb-14
          sm:px-6
          sm:pb-20
          lg:pb-24
        "
      >
        <div
          className="
            grid
            items-start
            gap-5
            lg:grid-cols-[1.2fr_0.8fr]
          "
        >
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="
              rounded-3xl
              border
              border-white/8
              bg-white/3
              p-6
              sm:p-9
            "
          >
            <div className="max-w-2xl">
              <p className="text-xs font-medium tracking-[0.16em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.18em]">
                Project request
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:mt-4 sm:text-4xl">
                Tell us about your project
              </h2>

              <p className="mt-4 leading-relaxed text-gray-400">
                You do not need a complete technical specification. Describe
                the problem, the current process and what you want to achieve.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Input
                label="Your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Input
                label="Company name"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />

              <Input
                label="Email address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Input
                label="Phone number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Optional"
              />

              <Select
                label="Service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                options={services}
                required
              />

              <Select
                label="Estimated budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                options={budgetOptions}
              />

              <div className="sm:col-span-2">
                <Textarea
                  label="Project description"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  placeholder="Describe what you want to build, improve or automate..."
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
                I agree that the submitted information may be used to review
                and respond to my project inquiry.
              </span>
            </label>

            <button
              type="submit"
              className="
                group
                mt-7
                inline-flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-blue-600
                px-6
                py-4
                font-semibold
                text-white
                transition
                duration-300
                hover:bg-blue-500
                hover:shadow-[0_0_35px_rgba(59,130,246,0.28)]
                sm:w-auto
              "
            >
              Send project request
              <ArrowIcon />
            </button>

            {submitted && (
              <p className="mt-5 text-sm leading-relaxed text-blue-300">
                Your email application should now open with your project
                information already prepared.
              </p>
            )}
          </form>


          {/* What happens next */}
          <aside
            className="
              rounded-3xl
              border
              border-white/8
              bg-white/3
              p-6
              sm:p-8
              lg:sticky
              lg:top-28
            "
          >
            <p className="text-xs font-medium tracking-[0.16em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.18em]">
              What happens next
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:mt-4">
              A clear path from request to project.
            </h2>

            <div className="mt-8 space-y-6">
              {nextSteps.map((step) => (
                <article
                  key={step.number}
                  className="grid grid-cols-[42px_1fr] gap-4"
                >
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-blue-400/20
                      bg-blue-500/8
                      text-sm
                      font-semibold
                      text-blue-300
                    "
                  >
                    {step.number}
                  </span>

                  <div>
                    <h3 className="font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 border-t border-white/8 pt-7">
              <ul className="space-y-3">
                {[
                  "Scope and price agreed before development",
                  "No upfront payment for custom projects",
                  "Working solution shown before payment",
                  "Basic Website package paid in advance",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>


      {/* FAQ */}
      <section
        className="
          border-y
          border-white/6
          bg-white/[0.015]
        "
      >
        <div
          className="
            mx-auto
            max-w-4xl
            px-5
            py-14
            sm:px-6
            sm:py-20
            lg:py-24
          "
        >
          <div className="text-center">
            <p className="text-xs font-medium tracking-[0.18em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.2em]">
              Questions
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:mt-5 sm:text-5xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-8 space-y-3 sm:mt-12 sm:space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/8
                  bg-white/3
                  p-5
                  open:border-blue-500/25
                  open:bg-blue-500/5
                  sm:p-6
                "
              >
                <summary
                  className="
                    flex
                    cursor-pointer
                    list-none
                    items-center
                    justify-between
                    gap-5
                    font-semibold
                    text-white
                  "
                >
                  <span>{faq.question}</span>

                  <span
                    className="
                      shrink-0
                      text-xl
                      font-light
                      text-blue-400
                      transition-transform
                      duration-300
                      group-open:rotate-45
                    "
                  >
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-2xl leading-relaxed text-gray-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>


      {/* Direct email CTA */}
      <section
        className="
          mx-auto
          max-w-6xl
          px-5
          py-14
          pb-20
          sm:px-6
          sm:py-20
          sm:pb-28
          lg:py-24
          lg:pb-32
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-blue-500/25
            bg-blue-500/7
            px-6
            py-11
            text-center
            sm:px-12
            sm:py-16
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              top-1/2
              left-1/2
              h-72
              w-[520px]
              max-w-full
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-blue-600/12
              blur-[100px]
            "
          />

          <div className="relative">
            <div
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-blue-400/25
                bg-blue-500/10
                text-blue-300
              "
            >
              <MailIcon />
            </div>

            <p className="mt-5 text-xs font-medium tracking-[0.18em] text-blue-400 uppercase sm:text-sm">
              Prefer email?
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Send your project details directly.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-gray-400">
              You can contact us directly at{" "}
              <span className="text-gray-200">{contactEmail}</span>.
            </p>

            <a
              href={`mailto:${contactEmail}`}
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-blue-600
                px-6
                py-3.5
                font-semibold
                text-white
                transition
                hover:bg-blue-500
                hover:shadow-[0_0_35px_rgba(59,130,246,0.28)]
                sm:mt-8
              "
            >
              Send an email
              <ArrowIcon />
            </a>

            <div className="mt-6">
              <Link
                to="/services"
                className="text-sm font-semibold text-gray-400 transition hover:text-white"
              >
                Explore all services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


function ContactDetail({
  label,
  value,
  href,
}) {
  const content = (
    <>
      <p className="text-sm text-gray-500">{label}</p>

      <p className="mt-1 font-medium text-gray-200">
        {value}
      </p>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className="block transition hover:opacity-80"
      >
        {content}
      </a>
    )
  }

  return <div>{content}</div>
}


function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  required = false,
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-300">
        {label}
        {required && <span className="text-blue-400"> *</span>}
      </span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="
          mt-2
          w-full
          rounded-xl
          border
          border-white/10
          bg-black/20
          px-4
          py-3.5
          text-white
          outline-none
          transition
          placeholder:text-gray-600
          focus:border-blue-500/60
          focus:ring-2
          focus:ring-blue-500/10
        "
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
        {required && <span className="text-blue-400"> *</span>}
      </span>

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows="6"
        className="
          mt-2
          w-full
          resize-y
          rounded-xl
          border
          border-white/10
          bg-black/20
          px-4
          py-3.5
          text-white
          outline-none
          transition
          placeholder:text-gray-600
          focus:border-blue-500/60
          focus:ring-2
          focus:ring-blue-500/10
        "
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
  required = false,
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-300">
        {label}
        {required && <span className="text-blue-400"> *</span>}
      </span>

      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="
          mt-2
          w-full
          rounded-xl
          border
          border-white/10
          bg-[#0b0b0b]
          px-4
          py-3.5
          text-white
          outline-none
          transition
          focus:border-blue-500/60
          focus:ring-2
          focus:ring-blue-500/10
        "
      >
        <option value="">
          Select an option
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}


export default Contact