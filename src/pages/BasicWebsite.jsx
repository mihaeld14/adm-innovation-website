import { Link } from "react-router"
import {
  ArrowIcon,
  CheckIcon,
  InfoPanel,
} from "../components/CardStandards"
import Reveal from "../components/Reveal"
import usePageMeta from "../lib/meta"


const included = [
  {
    title: "Up to 6 pages",
    description:
      "Home, services, about, contact and more — the pages your business actually uses.",
  },
  {
    title: "Responsive design",
    description: "Works equally well on phone, tablet and desktop.",
  },
  {
    title: "Professional presentation",
    description:
      "A clean, credible design built around your company and services — not a template.",
  },
  {
    title: "Contact form",
    description: "A straightforward way for customers to reach you.",
  },
  {
    title: "Basic SEO",
    description:
      "Proper headings, page titles, descriptions and image alt text.",
  },
  {
    title: "Deployment",
    description:
      "Help publishing the site and connecting your domain.",
  },
]


const processSteps = [
  {
    number: "01",
    title: "Confirm the scope",
    description:
      "We agree the pages, the content and the fixed €120 package price.",
  },
  {
    number: "02",
    title: "Payment and development",
    description:
      "After the advance payment the site is designed and built — typically 5–7 working days once the content is supplied.",
  },
  {
    number: "03",
    title: "Review",
    description:
      "You review the site and send one consolidated list of corrections.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "After approval the finished site is published and the domain connected.",
  },
]


const notIncluded = [
  "Domain and hosting (paid separately)",
  "Online store or payments",
  "User accounts and login",
  "Booking or reservation systems",
  "Admin panel",
  "Professional copywriting",
  "More than one language",
  "Ongoing maintenance",
]


const faqs = [
  {
    question: "What does the €120 include?",
    answer:
      "A responsive informational website with up to six standard pages, a contact form, basic SEO setup, one consolidated revision round and deployment support.",
  },
  {
    question: "When is payment due?",
    answer:
      "The fixed €120 price is paid in advance once the scope has been confirmed. This is the only service we ask to be paid up front.",
  },
  {
    question: "Are domain and hosting included?",
    answer:
      "No — those are paid separately by you (typically €20–50 per year in total). We help you choose and configure a suitable provider.",
  },
  {
    question: "What content do we need to provide?",
    answer:
      "Your logo, page copy, service information, contact details and any images you want to use.",
  },
  {
    question: "Can the site be extended later?",
    answer:
      "Yes. Additional pages, languages and functionality can be added under a separate quote whenever you need them.",
  },
]


function BasicWebsite() {
  usePageMeta({
    title: "Basic Business Website — €120",
    description:
      "A professional company website with up to six pages for €120 — responsive design, contact form, basic SEO and launch in 5–7 working days.",
    path: "/services/basic-website",
  })

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-32 pb-12 sm:px-6 sm:pt-40 sm:pb-16">
        <Link
          to="/services"
          className="group inline-flex min-h-10 items-center gap-2 text-sm text-gray-400 transition hover:text-white"
        >
          <span
            className="transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          >
            ←
          </span>
          All services
        </Link>

        <div className="mt-7 grid items-end gap-8 lg:grid-cols-[1fr_300px] lg:gap-12">
          <div>
            <p className="font-mono text-xs font-medium tracking-[0.18em] text-blue-400 uppercase">
              Fixed package
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl leading-[1.02] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              A professional website without unnecessary complexity.
            </h1>

            <p className="mt-5 max-w-2xl leading-relaxed text-gray-400 sm:text-lg">
              For small businesses, independent professionals and local
              services that need a credible online presence at a clear
              starting price.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.28)]"
              >
                Request a website
                <ArrowIcon />
              </Link>

              <a
                href="#included"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/12 bg-white/4 px-6 py-3.5 font-semibold text-gray-200 transition hover:border-white/25 hover:bg-white/7"
              >
                What is included
              </a>
            </div>
          </div>

          {/* Price */}
          <InfoPanel className="p-6 sm:p-7">
            <p className="font-mono text-xs tracking-[0.14em] text-gray-400 uppercase">
              Package from
            </p>

            <div className="mt-3 flex items-start">
              <span className="mt-1 text-xl font-semibold text-blue-300">
                €
              </span>

              <span className="font-display text-6xl leading-none font-bold tracking-tight text-white">
                120
              </span>
            </div>

            <p className="mt-3 text-sm font-medium text-gray-300">
              Fixed price · paid in advance
            </p>

            <div className="mt-4 space-y-2 border-t border-white/8 pt-4">
              <p className="text-sm leading-relaxed text-gray-400">
                The scope and price are confirmed before payment.
              </p>

              <p className="text-xs leading-relaxed text-gray-500">
                Domain and hosting are paid separately.
              </p>
            </div>
          </InfoPanel>
        </div>
      </section>


      {/* Quick facts */}
      <section className="mx-auto max-w-6xl px-5 pb-12 sm:px-6 sm:pb-16">
        <InfoPanel
          className="grid p-0 sm:grid-cols-3"
          contentClassName="contents"
        >
          {[
            { label: "Pages", value: "Up to 6" },
            { label: "Delivery", value: "5–7 working days" },
            { label: "Revisions", value: "One full round" },
          ].map((fact, index) => (
            <div
              key={fact.label}
              className={`p-5 sm:p-6 ${
                index < 2 ? "border-b border-white/8 sm:border-r sm:border-b-0" : ""
              }`}
            >
              <p className="font-mono text-xs text-gray-500 uppercase">
                {fact.label}
              </p>

              <p className="mt-2 text-lg font-bold text-white">
                {fact.value}
              </p>
            </div>
          ))}
        </InfoPanel>
      </section>


      {/* Included */}
      <section
        id="included"
        className="scroll-mt-28 border-y border-white/6 bg-white/[0.012]"
      >
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-xs tracking-[0.18em] text-blue-400 uppercase">
              Included in the package
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything needed for a credible online presence
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {included.map((feature, index) => (
              <Reveal
                key={feature.title}
                delay={(index % 3) * 0.06}
                className="h-full"
              >
                <InfoPanel
                  as="article"
                  className="h-full p-6"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/8">
                    <CheckIcon />
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {feature.description}
                  </p>
                </InfoPanel>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* Process + what is not included */}
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-8">
        <Reveal>
          <InfoPanel className="h-full p-6 sm:p-8">
            <p className="font-mono text-xs tracking-[0.16em] text-blue-400 uppercase">
              How it works
            </p>

            <div className="mt-5 space-y-5">
              {processSteps.map((step) => (
                <div
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

                    <p className="mt-1 text-sm leading-relaxed text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </InfoPanel>
        </Reveal>

        <Reveal delay={0.08}>
          <InfoPanel className="h-full p-6 sm:p-8">
            <p className="font-mono text-xs tracking-[0.16em] text-blue-400 uppercase">
              Outside the package
            </p>

            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              These are not included in the €120 price, but most of them can
              be added under a separate quote:
            </p>

            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {notIncluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-400"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-600"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </InfoPanel>
        </Reveal>
      </section>


      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-10 sm:px-6 sm:py-14">
        <Reveal className="text-center">
          <p className="font-mono text-xs tracking-[0.18em] text-blue-400 uppercase">
            Questions
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-white/8 bg-white/3 p-5 open:border-blue-500/25 open:bg-blue-500/5"
            >
              <summary className="flex min-h-8 cursor-pointer list-none items-center justify-between gap-5 font-semibold text-white">
                <span>{faq.question}</span>

                <span
                  className="shrink-0 text-xl font-light text-blue-400 transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
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
      </section>


      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-10 pb-24 sm:px-6 sm:pb-28">
        <Reveal>
          <InfoPanel className="px-6 py-11 text-center sm:px-12 sm:py-14">
            <div
              className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-96 max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[80px]"
              aria-hidden="true"
            />

            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready for an online presence that fits your business?
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-400">
                Tell us about the company and the site you need — we will
                confirm the scope and get started.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.28)]"
              >
                Request a website
                <ArrowIcon />
              </Link>
            </div>
          </InfoPanel>
        </Reveal>
      </section>
    </div>
  )
}


export default BasicWebsite
