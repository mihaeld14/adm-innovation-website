import { Link } from "react-router"
import servicesData from "../data/servicesData"

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


function ScrollDownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path
        d="M12 5v14M6.5 13.5 12 19l5.5-5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


function ServiceCard({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      aria-label={`Learn more about ${service.title}`}
      className="
        group
        relative
        block
        overflow-hidden
        rounded-3xl
        border
        border-white/8
        bg-white/3
        p-7
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/30
        hover:bg-white/5
        hover:shadow-[0_20px_60px_rgba(37,99,235,0.1)]
        sm:p-9
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

      <div className="relative flex items-start justify-between gap-6">
        <span
          className="
            flex
            h-11
            w-11
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
            transition-colors
            duration-300
            group-hover:border-blue-400/30
            group-hover:text-blue-300
          "
        >
          <ArrowIcon />
        </span>
      </div>

      <div className="relative mt-8">
        <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {service.title}
        </h3>

        <p className="mt-4 max-w-xl leading-relaxed text-gray-400">
          {service.shortDescription}
        </p>

        <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-300">
          Explore service

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            <ArrowIcon />
          </span>
        </div>
      </div>

      <div
        className="
          absolute
          right-8
          bottom-0
          left-8
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
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-36 pb-20 sm:pt-40 sm:pb-24">
        <p className="text-sm font-medium tracking-[0.2em] text-blue-400 uppercase">
          Services
        </p>

        <h1 className="mt-5 max-w-5xl text-5xl leading-[0.98] font-semibold tracking-tight text-white md:text-7xl">
          Software built around your business.
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-gray-400">
          From custom software and AI tools to websites and workflow
          automation, we create digital solutions designed around the way
          your business operates.
        </p>
      </section>


      {/* Featured service options */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          {/* Custom development card */}
          <a
            href="#capabilities"
            aria-label="Explore our custom development capabilities"
            className="
              group
              relative
              block
              overflow-hidden
              rounded-3xl
              border
              border-blue-500/25
              bg-blue-500/5
              px-7
              py-10
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-400/55
              hover:bg-blue-500/11
              hover:shadow-[0_20px_60px_rgba(37,99,235,0.14)]
              sm:px-10
              sm:py-12
            "
          >
            {/* Background glow */}
            <div
              className="
                pointer-events-none
                absolute
                -top-32
                -left-24
                h-72
                w-72
                rounded-full
                bg-blue-600/12
                blur-[90px]
              "
            />

            <div className="relative flex h-full flex-col">
              <p className="text-sm font-medium tracking-[0.18em] text-blue-400 uppercase">
                Custom development
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Digital solutions built specifically for your business.
              </h2>

              <p className="mt-5 max-w-2xl leading-relaxed text-gray-400">
                From internal software and AI tools to automation and system
                integration, every solution is designed around your processes,
                requirements and long-term goals.
              </p>

              {/* Learn more label */}
              <div className="mt-auto flex items-end pt-9">
                <span
                  className="
                    group/scroll
                    relative
                    inline-flex
                    shrink-0
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-blue-400/35
                    bg-blue-500/12
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-blue-300
                    shadow-[0_0_25px_rgba(59,130,246,0.18)]
                    transition-colors
                    duration-300
                    group-hover:border-blue-300/60
                    group-hover:bg-blue-500/20
                    group-hover:text-white
                  "
                >
                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-full
                      border
                      border-blue-400/20
                    "
                  />

                  <span className="relative">
                    Learn more
                  </span>

                  <span
                    className="
                      relative
                      transition-transform
                      duration-300
                      group-hover/scroll:translate-y-1
                      group-hover:translate-y-1
                    "
                  >
                    <ScrollDownIcon />
                  </span>
                </span>
              </div>
            </div>

            {/* Bottom accent */}
            <div
              className="
                pointer-events-none
                absolute
                right-8
                bottom-0
                left-8
                h-px
                origin-left
                scale-x-0
                bg-linear-to-r
                from-transparent
                via-blue-400/70
                to-transparent
                transition-transform
                duration-500
                group-hover:scale-x-100
              "
            />
          </a>


          {/* Basic website offer */}
          <Link
            to="/services/basic-website"
            aria-label="Learn more about the Basic Business Website offer"
            className="
              group
              relative
              block
              overflow-hidden
              rounded-3xl
              border
              border-blue-400/30
              bg-blue-500/8
              px-7
              py-10
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-400/55
              hover:bg-blue-500/11
              hover:shadow-[0_20px_60px_rgba(37,99,235,0.14)]
              sm:px-9
              sm:py-12
            "
          >
            {/* Background glow */}
            <div
              className="
                pointer-events-none
                absolute
                -top-20
                -right-20
                h-56
                w-56
                rounded-full
                bg-blue-500/20
                blur-[75px]
              "
            />

            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-end">
                <span
                  className="
                    group/offer
                    relative
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-blue-400/35
                    bg-blue-500/12
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-blue-300
                    shadow-[0_0_25px_rgba(59,130,246,0.18)]
                    transition-colors
                    duration-300
                    group-hover:border-blue-300/60
                    group-hover:bg-blue-500/20
                    group-hover:text-white
                  "
                >
                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-full
                      border
                      border-blue-400/20
                    "
                  />

                  <span className="relative">View offer</span>

                  <span
                    className="
                      relative
                      transition-transform
                      duration-300
                      group-hover/offer:translate-x-1
                      group-hover:translate-x-1
                    "
                  >
                    <ArrowIcon />
                  </span>
                </span>
              </div>

              <h2 className="mt-7 text-3xl font-semibold tracking-tight text-white">
                Basic Business Website
              </h2>

              <div className="mt-7">
                <p className="text-sm tracking-[0.14em] text-gray-400 uppercase">
                  Complete website from
                </p>

                <div className="mt-2 flex items-start">
                  <span className="mt-2 text-2xl font-semibold text-blue-300">
                    €
                  </span>

                  <span className="text-7xl leading-none font-semibold tracking-[-0.06em] text-white">
                    120
                  </span>
                </div>

                <p className="mt-3 text-sm text-gray-400">
                  One-time payment
                </p>
              </div>
            </div>

            {/* Bottom accent */}
            <div
              className="
                pointer-events-none
                absolute
                right-8
                bottom-0
                left-8
                h-px
                origin-left
                scale-x-0
                bg-linear-to-r
                from-transparent
                via-blue-400/70
                to-transparent
                transition-transform
                duration-500
                group-hover:scale-x-100
              "
            />
          </Link>
        </div>
      </section>


      {/* Custom services heading */}
      <section
        id="capabilities"
        className="mx-auto max-w-6xl scroll-mt-28 px-6 pt-16 pb-10"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-[0.18em] text-blue-400 uppercase">
            Our capabilities
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Explore our custom development services.
          </h2>

          <p className="mt-5 leading-relaxed text-gray-400">
            Choose from a range of development capabilities designed to solve
            operational problems, improve productivity and support business
            growth.
          </p>
        </div>
      </section>


      {/* Custom service cards */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="grid gap-5 md:grid-cols-2">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.number}
              service={service}
            />
          ))}
        </div>
      </section>


      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-blue-500/20
            bg-blue-500/6
            px-7
            py-12
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
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-blue-600/10
              blur-[80px]
            "
          />

          <div className="relative">
            <p className="text-sm font-medium tracking-[0.18em] text-blue-400 uppercase">
              Start a project
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Have a process that takes too much time?
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-gray-400">
              Let&apos;s explore how custom software, AI or automation can
              improve the way your business operates.
            </p>

            <Link
              to="/contact"
              className="
                group
                mt-8
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
                duration-300
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