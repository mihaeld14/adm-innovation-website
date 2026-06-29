import { Link } from "react-router"
import {
  ArrowIcon,
  CheckIcon,
  InfoPanel,
} from "../components/CardStandards"


const includedFeatures = [
  {
    title: "Up to 6 pages",
    description:
      "A complete informational website with the pages your business actually needs.",
  },
  {
    title: "Responsive design",
    description:
      "Optimized for phones, tablets, laptops and desktop displays.",
  },
  {
    title: "Professional presentation",
    description:
      "A clean and credible design structured around your company and services.",
  },
  {
    title: "Contact form",
    description:
      "A straightforward way for potential customers to contact your business.",
  },
  {
    title: "Basic SEO setup",
    description:
      "Structured headings, page titles, descriptions and image alt text.",
  },
  {
    title: "Deployment assistance",
    description:
      "Support with publishing the website and connecting the selected domain.",
  },
]


const processSteps = [
  {
    number: "01",
    title: "Confirm scope and content",
    description:
      "We confirm the required pages, supplied content and the fixed €120 package price.",
  },
  {
    number: "02",
    title: "Payment and development",
    description:
      "After the advance payment is completed, the website is designed and developed for desktop and mobile devices.",
  },
  {
    number: "03",
    title: "Review",
    description:
      "You review the website and send one consolidated list of minor corrections.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "After approval, the completed website is prepared for publication.",
  },
]


const notIncluded = [
  "Domain and hosting costs",
  "Online store or payments",
  "User accounts and login",
  "Booking or reservation systems",
  "Administration panel",
  "Database functionality",
  "Professional copywriting",
  "Multiple languages",
  "Ongoing maintenance",
]


const optionalUpgrades = [
  "Additional pages",
  "Extra revision rounds",
  "Additional languages",
  "Professional copywriting",
  "Advanced animations",
  "Booking functionality",
  "Online payments",
  "Business email configuration",
  "Ongoing maintenance",
  "Advanced SEO",
]


const faqs = [
  {
    question: "What is included in the €120 price?",
    answer:
      "The package includes a responsive informational website with up to six standard pages, a contact form, basic SEO setup, one revision round and deployment assistance.",
  },
  {
    question: "When is payment required?",
    answer:
      "The fixed €120 package price is paid in advance after the scope has been confirmed. Development begins once the required content and payment have been received.",
  },
  {
    question: "Are domain and hosting included?",
    answer:
      "No. Domain and hosting expenses are paid separately by the customer. We can assist with selecting and configuring an appropriate provider.",
  },
  {
    question: "What content do I need to provide?",
    answer:
      "You need to provide your logo, page texts, service information, contact details and the images you want to use.",
  },
  {
    question: "How long does development take?",
    answer:
      "A standard project usually takes approximately 5–7 working days after all required content has been received.",
  },
  {
    question: "Can I request changes?",
    answer:
      "Yes. The package includes one consolidated revision round for minor changes to text, images, colors and spacing.",
  },
  {
    question: "Can advanced functionality be added?",
    answer:
      "Yes. Additional pages and advanced functionality can be added through a separate quotation.",
  },
]


function BasicWebsite() {
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
          lg:pt-44
          lg:pb-24
        "
      >
        <Link
          to="/services"
          className="
            group
            inline-flex
            items-center
            gap-2
            text-sm
            text-gray-400
            transition
            hover:text-white
          "
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>

          Back to services
        </Link>

        <div
          className="
            mt-8
            grid
            items-end
            gap-8
            sm:mt-10
            lg:grid-cols-[1fr_300px]
            lg:gap-12
          "
        >
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.2em]">
              Basic Business Website
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
              A professional website without unnecessary complexity.
            </h1>

            <p className="mt-5 max-w-2xl leading-relaxed text-gray-400 sm:mt-7 sm:text-lg">
              A modern responsive website for small businesses, freelancers
              and local service providers that need a credible online presence
              at a clear starting price.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-blue-600
                  px-6
                  py-3.5
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:bg-blue-500
                  hover:shadow-[0_0_35px_rgba(59,130,246,0.28)]
                "
              >
                Start your website
                <ArrowIcon />
              </Link>

              <a
                href="#included"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/3
                  px-6
                  py-3.5
                  font-semibold
                  text-white
                  transition
                  hover:border-white/20
                  hover:bg-white/6
                "
              >
                See what is included
              </a>
            </div>
          </div>

          {/* Price */}
          <InfoPanel className="p-6 sm:p-7">
            <div className="relative">
              <p className="text-xs tracking-[0.14em] text-gray-400 uppercase sm:text-sm">
                Website package from
              </p>

              <div className="mt-3 flex items-start">
                <span className="mt-1 text-xl font-semibold text-blue-300">
                  €
                </span>

                <span className="text-6xl leading-none font-semibold tracking-tight text-white">
                  120
                </span>
              </div>

              <p className="mt-3 text-sm font-medium text-gray-300">
                Fixed price · paid in advance
              </p>

              <div className="mt-5 space-y-2 border-t border-white/8 pt-5">
                <p className="text-sm leading-relaxed text-gray-400">
                  The scope and €120 price are confirmed before payment and
                  development begins.
                </p>

                <p className="text-sm leading-relaxed text-gray-500">
                  Domain and hosting expenses are not included.
                </p>
              </div>
            </div>
          </InfoPanel>
        </div>
      </section>


      {/* Quick facts */}
      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-6 sm:pb-20">
        <InfoPanel
          className="grid p-0 sm:grid-cols-3"
          contentClassName="contents"
        >
          <div className="border-b border-white/8 p-5 sm:border-r sm:border-b-0 sm:p-7">
            <p className="text-sm text-gray-500">Pages</p>

            <p className="mt-2 text-lg font-semibold text-white sm:text-xl">
              Up to 6 pages
            </p>
          </div>

          <div className="border-b border-white/8 p-5 sm:border-r sm:border-b-0 sm:p-7">
            <p className="text-sm text-gray-500">Delivery</p>

            <p className="mt-2 text-lg font-semibold text-white sm:text-xl">
              Around 5–7 working days
            </p>
          </div>

          <div className="p-5 sm:p-7">
            <p className="text-sm text-gray-500">Revisions</p>

            <p className="mt-2 text-lg font-semibold text-white sm:text-xl">
              One revision round
            </p>
          </div>
        </InfoPanel>
      </section>


      {/* Included */}
      <section
        id="included"
        className="
          scroll-mt-28
          border-y
          border-white/6
          bg-white/[0.015]
        "
      >
        <div
          className="
            mx-auto
            max-w-6xl
            px-5
            py-14
            sm:px-6
            sm:py-20
            lg:py-24
          "
        >
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.18em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.2em]">
              Included in the package
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:mt-5 sm:text-5xl">
              The essentials for a professional online presence.
            </h2>

            <p className="mt-4 max-w-2xl leading-relaxed text-gray-400 sm:mt-5">
              The package is focused on clear company information, responsive
              design and straightforward customer contact.
            </p>
          </div>

          <div
            className="
              mt-8
              grid
              gap-4
              sm:mt-12
              sm:gap-5
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {includedFeatures.map((feature) => (
              <InfoPanel
                as="article"
                key={feature.title}
                className="p-6 sm:p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/8">
                  <CheckIcon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-relaxed text-gray-400">
                  {feature.description}
                </p>
              </InfoPanel>
            ))}
          </div>
        </div>
      </section>


      {/* Scope */}
      <section
        className="
          mx-auto
          max-w-6xl
          px-5
          py-14
          sm:px-6
          sm:py-20
          lg:py-24
        "
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {/* Not included */}
          <InfoPanel
            as="article"
            className="p-6 sm:p-9"
          >
            <p className="text-xs tracking-[0.16em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.18em]">
              Standard package
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              What is <u>not</u> included
            </h2>

            <p className="mt-4 leading-relaxed text-gray-400">
              These features are outside the standard €120 package.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {notIncluded.map((item) => (
                <li
                  key={item}
                  className="
                    flex
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-white/8
                    bg-black/15
                    p-4
                    text-sm
                    text-gray-300
                  "
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </InfoPanel>

          {/* Optional upgrades */}
          <InfoPanel
            as="article"
            className="p-6 sm:p-9"
          >
            <p className="text-xs tracking-[0.16em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.18em]">
              Optional upgrades
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Add more when you need it
            </h2>

            <p className="mt-4 leading-relaxed text-gray-400">
              Additional functionality can be included through a separate
              quotation.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {optionalUpgrades.map((upgrade) => (
                <li
                  key={upgrade}
                  className="
                    flex
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-white/8
                    bg-black/15
                    p-4
                    text-sm
                    text-gray-300
                  "
                >
                  <CheckIcon />
                  <span>{upgrade}</span>
                </li>
              ))}
            </ul>
          </InfoPanel>
        </div>
      </section>


      {/* Process */}
      <section className="border-y border-white/6 bg-white/[0.015]">
        <div
          className="
            mx-auto
            max-w-6xl
            px-5
            py-14
            sm:px-6
            sm:py-20
            lg:py-24
          "
        >
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.18em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.2em]">
              Process
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:mt-5 sm:text-5xl">
              Four clear steps from content to launch.
            </h2>
          </div>

          <div
            className="
              mt-8
              grid
              gap-4
              sm:mt-12
              sm:gap-5
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {processSteps.map((step) => (
              <InfoPanel
                as="article"
                key={step.number}
                className="p-6"
              >
                <p className="text-sm font-semibold text-blue-400">
                  {step.number}
                </p>

                <h3 className="mt-4 text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {step.description}
                </p>
              </InfoPanel>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section
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
          <p className="text-xs tracking-[0.18em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.2em]">
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
      </section>


      {/* Final CTA */}
      <section
        className="
          mx-auto
          max-w-6xl
          px-5
          pt-6
          pb-20
          sm:px-6
          sm:pt-8
          sm:pb-28
          lg:pb-32
        "
      >
        <InfoPanel className="px-6 py-11 text-center sm:px-12 sm:py-16">
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
            <p className="text-xs tracking-[0.16em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.18em]">
              Start your website
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Ready to establish your online presence?
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-gray-400">
              Tell us about your business and the website you need. We will
              review the information and contact you with the next steps.
            </p>

            <Link
              to="/contact"
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
              Discuss your website
              <ArrowIcon />
            </Link>
          </div>
        </InfoPanel>
      </section>
    </div>
  )
}


export default BasicWebsite