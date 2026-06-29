import { Link } from "react-router"
import servicesData from "../data/servicesData"


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
      className="h-4 w-4 shrink-0 text-blue-400"
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


function ServiceCard({ service }) {
  const features = service.capabilities?.slice(0, 4) ?? []

  return (
    <Link
      to={`/services/${service.slug}`}
      className="
        group
        relative
        block
        overflow-hidden
        rounded-3xl
        border
        border-white/8
        bg-white/3
        p-6
        transition
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/30
        hover:bg-white/5
        sm:p-7
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          -top-24
          -right-24
          h-48
          w-48
          rounded-full
          bg-blue-600/0
          blur-3xl
          transition-colors
          duration-500
          group-hover:bg-blue-600/12
        "
      />

      <div className="relative flex items-start justify-between gap-5">
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
          {service.number}
        </span>

        <span
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            text-gray-500
            transition
            group-hover:border-blue-400/30
            group-hover:text-blue-300
          "
        >
          <ArrowIcon />
        </span>
      </div>

      <div className="relative mt-6">
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
                <CheckIcon />
                <span>{feature.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div
        className="
          absolute
          right-7
          bottom-0
          left-7
          h-px
          origin-left
          scale-x-0
          bg-linear-to-r
          from-transparent
          via-blue-500
          to-transparent
          transition-transform
          duration-500
          group-hover:scale-x-100
        "
      />
    </Link>
  )
}


function Services() {
  return (
    <div className="relative overflow-hidden">
      {/* Compact hero */}
      <section
        className="
          mx-auto
          max-w-6xl
          px-5
          pt-28
          pb-10
          sm:px-6
          sm:pt-36
          sm:pb-12
          lg:pt-40
        "
      >
        <div
          className="
            grid
            items-end
            gap-8
            lg:grid-cols-[1fr_360px]
            lg:gap-12
          "
        >
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.2em]">
              Services
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
                sm:text-6xl
                md:text-7xl
              "
            >
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

          {/* Quick payment summary */}
          <aside
            className="
              rounded-3xl
              border
              border-blue-500/20
              bg-blue-500/6
              p-6
            "
          >
            <p className="text-xs font-medium tracking-[0.16em] text-blue-400 uppercase">
              Custom project payment
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-white">
              Review first. Pay after approval.
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              No upfront development payment is required for custom projects.
              The agreed price changes only if you request and approve a change
              in scope.
            </p>

            <p className="mt-4 border-t border-white/8 pt-4 text-xs leading-relaxed text-gray-500">
              The Basic Business Website package is paid in advance.
            </p>
          </aside>
        </div>
      </section>


      {/* Quick service paths */}
      <section className="mx-auto max-w-6xl px-5 pb-10 sm:px-6 sm:pb-12">
        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="#custom-services"
            className="
              group
              rounded-2xl
              border
              border-white/8
              bg-white/3
              p-5
              transition
              hover:border-blue-500/25
              hover:bg-white/5
            "
          >
            <p className="text-xs font-medium tracking-[0.16em] text-blue-400 uppercase">
              Custom solutions
            </p>

            <div className="mt-3 flex items-end justify-between gap-5">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Software, AI and automation
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  Tailored projects based on your workflows and requirements.
                </p>
              </div>

              <span className="shrink-0 text-gray-500 transition group-hover:text-blue-300">
                ↓
              </span>
            </div>
          </a>

          <Link
            to="/services/basic-website"
            className="
              group
              rounded-2xl
              border
              border-blue-500/20
              bg-blue-500/6
              p-5
              transition
              hover:border-blue-400/35
              hover:bg-blue-500/9
            "
          >
            <p className="text-xs font-medium tracking-[0.16em] text-blue-400 uppercase">
              Fixed-price option
            </p>

            <div className="mt-3 flex items-end justify-between gap-5">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Basic Business Website
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  Up to six pages from €120, paid in advance.
                </p>
              </div>

              <span className="shrink-0 text-blue-300">
                <ArrowIcon />
              </span>
            </div>
          </Link>
        </div>
      </section>


      {/* Service cards appear immediately */}
      <section
        id="custom-services"
        className="
          mx-auto
          max-w-6xl
          scroll-mt-28
          px-5
          pt-8
          pb-16
          sm:px-6
          sm:pt-10
          sm:pb-20
        "
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


      {/* Informative payment/process section */}
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
            max-w-6xl
            px-5
            py-14
            sm:px-6
            sm:py-20
          "
        >
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

          <div className="mt-8 grid gap-4 md:grid-cols-3 sm:mt-12">
            {projectSteps.map((step) => (
              <article
                key={step.number}
                className="
                  rounded-2xl
                  border
                  border-white/8
                  bg-white/3
                  p-6
                "
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
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section
        className="
          mx-auto
          max-w-6xl
          px-5
          py-16
          pb-24
          sm:px-6
          sm:py-20
          sm:pb-28
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-blue-500/20
            bg-blue-500/6
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
              h-64
              w-96
              max-w-full
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-blue-600/10
              blur-[80px]
            "
          />

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
              "
            >
              Discuss your project
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


export default Services
