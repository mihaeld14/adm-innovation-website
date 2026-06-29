import { Link } from "react-router"
import servicesData from "../data/servicesData"
import {
  ArrowIcon,
  CheckIcon,
  ClickableCard,
  InfoPanel,
} from "../components/CardStandards"


const customServices = servicesData.filter(
  (service) => service.slug !== "basic-website",
)


const projectSteps = [
  {
    number: "01",
    title: "Scope and price",
    description:
      "We define what will be built, what is included and the agreed project price before development begins.",
  },
  {
    number: "02",
    title: "Working solution",
    description:
      "We build the agreed solution and present a working version for your review.",
  },
  {
    number: "03",
    title: "Approval and handover",
    description:
      "After you approve the result, payment is completed and the agreed files, access and solution are handed over.",
  },
]


function ServiceCard({ service }) {
  const features = service.capabilities?.slice(0, 4) ?? []

  return (
    <ClickableCard
      to={`/services/${service.slug}`}
      className="p-6 sm:p-7"
      contentClassName="pr-12"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/8 text-sm font-semibold text-blue-300">
        {service.number}
      </span>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          {service.title}
        </h2>

        <p className="mt-3 leading-relaxed text-gray-400">
          {service.shortDescription}
        </p>

        {features.length > 0 && (
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature.title}
                className="flex items-start gap-2.5 text-sm text-gray-300"
              >
                <CheckIcon className="mt-0.5" />
                <span>{feature.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </ClickableCard>
  )
}


function Services() {
  return (
    <div className="relative overflow-hidden">
      {/* Compact hero */}
      <section className="mx-auto max-w-6xl px-5 pt-28 pb-10 sm:px-6 sm:pt-36 sm:pb-12 lg:pt-40">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_360px] lg:gap-12">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.2em]">
              Services
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl leading-[1] font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
              Digital solutions built around your business.
            </h1>

            <p className="mt-5 max-w-2xl leading-relaxed text-gray-400 sm:mt-6 sm:text-lg">
              Explore custom software, websites, AI solutions, automation and
              system integration designed around real business requirements.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
              For custom projects, the scope and price are agreed in advance.
              You review the working solution before payment is due.
            </p>
          </div>

          <InfoPanel
            as="aside"
            className="p-6"
          >
            <p className="text-xs font-medium tracking-[0.16em] text-blue-400 uppercase">
              Custom project payment
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Review first. Pay after approval.
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              No upfront development payment is required for custom projects.
              The agreed price changes only if you request and approve a change
              in scope.
            </p>

            <p className="mt-5 border-t border-white/8 pt-4 text-xs leading-relaxed text-gray-500">
              The Basic Business Website package is paid in advance.
            </p>
          </InfoPanel>
        </div>
      </section>


      {/* Clickable quick paths */}
      <section className="mx-auto max-w-6xl px-5 pb-10 sm:px-6 sm:pb-12">
        <div className="grid gap-4 md:grid-cols-2">
          <ClickableCard
            href="#custom-services"
            indicator="down"
            className="p-6"
            contentClassName="pr-12"
          >
            <p className="text-xs font-medium tracking-[0.16em] text-blue-400 uppercase">
              Custom solutions
            </p>

            <h2 className="mt-4 text-xl font-semibold text-white">
              Software, AI and automation
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Tailored projects based on your workflows and requirements.
            </p>
          </ClickableCard>

          <ClickableCard
            to="/services/basic-website"
            className="p-6"
            contentClassName="pr-12"
          >
            <p className="text-xs font-medium tracking-[0.16em] text-blue-400 uppercase">
              Fixed-price option
            </p>

            <h2 className="mt-4 text-xl font-semibold text-white">
              Basic Business Website
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Up to six pages from €120, paid in advance.
            </p>
          </ClickableCard>
        </div>
      </section>


      {/* Clickable service cards */}
      <section
        id="custom-services"
        className="mx-auto max-w-6xl scroll-mt-28 px-5 pt-8 pb-16 sm:px-6 sm:pt-10 sm:pb-20"
      >
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.18em] text-blue-400 uppercase sm:text-sm">
            Custom development services
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:mt-4 sm:text-5xl">
            Choose the capability that matches your challenge.
          </h2>

          <p className="mt-4 leading-relaxed text-gray-400 sm:mt-5">
            Each service page explains typical use cases, capabilities,
            deliverables, technologies and the project process.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {customServices.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
            />
          ))}
        </div>
      </section>


      {/* Informational process section */}
      <section className="border-y border-white/6 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.18em] text-blue-400 uppercase sm:text-sm">
              How custom projects work
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:mt-4 sm:text-5xl">
              A clear process before any payment is required.
            </h2>

            <p className="mt-4 max-w-2xl leading-relaxed text-gray-400 sm:mt-5">
              The project scope and price are confirmed first, so you know what
              will be built and what it will cost before development starts.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-3">
            {projectSteps.map((step) => (
              <InfoPanel
                as="article"
                key={step.number}
                className="p-6"
              >
                <p className="text-sm font-semibold text-blue-400">
                  {step.number}
                </p>

                <h3 className="mt-4 text-xl font-semibold text-white">
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


      {/* Final CTA — informational surface with a separate button */}
      <section className="mx-auto max-w-6xl px-5 py-16 pb-24 sm:px-6 sm:py-20 sm:pb-28">
        <InfoPanel className="px-6 py-11 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-96 max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/8 blur-[80px]" />

          <div className="relative">
            <p className="text-xs font-medium tracking-[0.18em] text-blue-400 uppercase sm:text-sm">
              Start a project
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Not sure which service fits your project?
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-gray-400">
              Describe the problem or process you want to improve. We will help
              identify the most appropriate solution.
            </p>

            <Link
              to="/contact"
              className="group mt-7 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Discuss your project
              <ArrowIcon />
            </Link>
          </div>
        </InfoPanel>
      </section>
    </div>
  )
}


export default Services
