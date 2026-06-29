import { Link, Navigate, useParams } from "react-router"
import servicesData from "../data/servicesData"
import {
  ArrowIcon,
  CheckIcon,
  InfoPanel,
} from "../components/CardStandards"


function ServiceImage({
  src,
  alt,
  label,
  className = "",
  imageClassName = "",
}) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#08101d]
        shadow-[0_18px_50px_rgba(0,0,0,0.22)]
        sm:rounded-3xl
        ${className}
      `}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          ${imageClassName}
        `}
        onError={(event) => {
          event.currentTarget.style.display = "none"
        }}
      />

      {/* Placeholder background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-linear-to-br
          from-blue-950/80
          via-[#08101d]
          to-[#050505]
        "
      />

      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -top-24
          -right-20
          -z-10
          h-64
          w-64
          rounded-full
          bg-blue-500/15
          blur-[90px]
        "
      />

      {/* Image overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-linear-to-t
          from-black/50
          via-transparent
          to-black/5
        "
      />

      {/* Image label — hidden on mobile */}
      <div
        className="
          pointer-events-none
          absolute
          right-4
          bottom-4
          hidden
          sm:block
        "
      >
        <span
          className="
            rounded-full
            border
            border-white/15
            bg-black/35
            px-4
            py-2
            text-xs
            font-medium
            tracking-[0.14em]
            text-white/80
            uppercase
            backdrop-blur-md
          "
        >
          {label}
        </span>
      </div>
    </div>
  )
}


function SectionHeading({
  label,
  title,
  description,
  centered = false,
}) {
  return (
    <div
      className={
        centered
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl"
      }
    >
      <p className="text-xs font-medium tracking-[0.16em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.18em]">
        {label}
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:mt-4 sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 leading-relaxed text-gray-400 sm:mt-5 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}


function ServiceDetails() {
  const { slug } = useParams()

  const service = servicesData.find(
    (item) => item.slug === slug,
  )

  if (!service) {
    return <Navigate to="/services" replace />
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
          pb-12
          sm:px-6
          sm:pt-36
          sm:pb-20
          lg:pt-40
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
            items-center
            gap-8
            sm:mt-10
            sm:gap-12
            lg:grid-cols-[1.05fr_0.95fr]
          "
        >
          {/* Hero text */}
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.2em]">
              {service.heroLabel}
            </p>

            <h1
              className="
                mt-4
                text-4xl
                leading-[1]
                font-semibold
                tracking-tight
                text-white
                sm:mt-5
                sm:text-5xl
                md:text-7xl
              "
            >
              {service.heroTitle}
            </h1>

            <p
              className="
                mt-5
                max-w-2xl
                leading-relaxed
                text-gray-400
                sm:mt-7
                sm:text-lg
              "
            >
              {service.heroDescription}
            </p>

            {/* Optional price */}
            {service.price && (
              <InfoPanel className="mt-6 inline-flex px-5 py-4 sm:mt-8 sm:px-6 sm:py-5">
                <div>
                  <p className="text-xs tracking-[0.12em] text-gray-400 uppercase sm:text-sm sm:tracking-[0.14em]">
                    {service.price.label}
                  </p>

                  <div className="mt-2 flex items-start">
                    <span className="mt-1 text-lg font-semibold text-blue-300 sm:text-xl">
                      €
                    </span>

                    <span className="text-5xl leading-none font-semibold text-white sm:text-6xl">
                      {service.price.amount}
                    </span>
                  </div>

                  <p className="mt-3 max-w-sm text-xs leading-relaxed text-gray-500 sm:text-sm">
                    {service.price.note}
                  </p>
                </div>
              </InfoPanel>
            )}

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
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
                  hover:bg-blue-500
                  hover:shadow-[0_0_35px_rgba(59,130,246,0.28)]
                "
              >
                Discuss your project
                <ArrowIcon />
              </Link>

              <a
                href="#overview"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/12
                  bg-white/4
                  px-6
                  py-3.5
                  font-semibold
                  text-gray-200
                  transition
                  hover:border-white/25
                  hover:bg-white/7
                "
              >
                Explore the service
              </a>
            </div>
          </div>

          {/* Hero image */}
          <ServiceImage
            src={service.heroImage}
            alt={`${service.title} service`}
            label="Service preview"
            className="
              aspect-[4/3]
              w-full
              sm:aspect-[16/11]
              lg:aspect-auto
              lg:min-h-[520px]
            "
          />
        </div>
      </section>


      {/* Overview */}
      <section
        id="overview"
        className="
          mx-auto
          max-w-6xl
          scroll-mt-28
          px-5
          py-12
          sm:px-6
          sm:py-20
          lg:py-24
        "
      >
        <div
          className="
            grid
            items-center
            gap-7
            sm:gap-10
            lg:grid-cols-2
            lg:gap-12
          "
        >
          {/* Overview text first on mobile */}
          <div className="order-1 lg:order-2">
            <p className="text-xs font-medium tracking-[0.16em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.18em]">
              Overview
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:mt-4 sm:text-5xl">
              {service.introTitle}
            </h2>

            <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
              {service.introText.map((paragraph) => (
                <p
                  key={paragraph}
                  className="leading-relaxed text-gray-400"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Overview image second on mobile */}
          <div className="order-2 lg:order-1">
            <ServiceImage
              src={service.overviewImage}
              alt={`${service.title} overview`}
              label="Service overview"
              className="
                aspect-[16/10]
                w-full
                sm:aspect-[4/3]
                lg:aspect-auto
                lg:min-h-[360px]
              "
            />
          </div>
        </div>
      </section>


      {/* Capabilities */}
      <section
        className="
          mx-auto
          max-w-6xl
          px-5
          py-12
          sm:px-6
          sm:py-20
          lg:py-24
        "
      >
        <SectionHeading
          label="What we can build"
          title="Service capabilities"
          description="The exact scope is adapted to your processes, existing systems and business requirements."
        />

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
          {service.capabilities.map((capability, index) => (
            <InfoPanel
              as="article"
              key={capability.title}
              className="p-6 sm:p-7"
            >
              <span className="text-sm font-semibold text-blue-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-xl font-semibold text-white sm:mt-7">
                {capability.title}
              </h3>

              <p className="mt-3 leading-relaxed text-gray-400">
                {capability.description}
              </p>
            </InfoPanel>
          ))}
        </div>
      </section>


      {/* Use cases */}
      <section
        className="
          mx-auto
          max-w-6xl
          px-5
          py-12
          sm:px-6
          sm:py-20
          lg:py-24
        "
      >
        <InfoPanel
          className="
            grid
            gap-7
            p-6
            sm:gap-10
            sm:p-10
            lg:grid-cols-[0.85fr_1.15fr]
          "
          contentClassName="contents"
        >
          <div>
            <p className="text-xs font-medium tracking-[0.16em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.18em]">
              Common use cases
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:mt-4 sm:text-4xl">
              Where this service creates value
            </h2>

            <p className="mt-4 leading-relaxed text-gray-400 sm:mt-5">
              Every implementation is different, but these are common examples
              of business problems this service can address.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {service.useCases.map((useCase) => (
              <div
                key={useCase}
                className="
                  flex
                  items-start
                  gap-3
                  rounded-2xl
                  border
                  border-white/8
                  bg-black/15
                  p-4
                "
              >
                <CheckIcon />

                <span className="text-sm leading-relaxed text-gray-300">
                  {useCase}
                </span>
              </div>
            ))}
          </div>
        </InfoPanel>
      </section>


      {/* Benefits */}
      <section
        className="
          mx-auto
          max-w-6xl
          px-5
          py-12
          sm:px-6
          sm:py-20
          lg:py-24
        "
      >
        <SectionHeading
          label="Business value"
          title="What your organization can gain"
        />

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2">
          {service.benefits.map((benefit) => (
            <InfoPanel
              as="article"
              key={benefit.title}
              className="p-6 sm:p-9"
            >
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                {benefit.title}
              </h3>

              <p className="mt-3 leading-relaxed text-gray-400 sm:mt-4">
                {benefit.description}
              </p>
            </InfoPanel>
          ))}
        </div>
      </section>


      {/* Process */}
      <section
        className="
          mx-auto
          max-w-6xl
          px-5
          py-12
          sm:px-6
          sm:py-20
          lg:py-24
        "
      >
        <div
          className="
            grid
            items-start
            gap-8
            sm:gap-12
            lg:grid-cols-[0.85fr_1.15fr]
          "
        >
          {/* Process heading and image */}
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              label="Our process"
              title="A structured path from problem to solution"
              description="Each project is divided into clear stages so requirements, progress and decisions remain visible."
            />

            <ServiceImage
              src={service.processImage}
              alt={`${service.title} project process`}
              label="Project process"
              className="
                mt-7
                aspect-[16/10]
                w-full
                sm:mt-9
                sm:aspect-[4/3]
                lg:aspect-auto
                lg:min-h-[300px]
              "
            />
          </div>

          {/* Process cards */}
          <div className="space-y-4 sm:space-y-5">
            {service.process.map((item) => (
              <InfoPanel
                as="article"
                key={item.step}
                className="grid gap-4 p-6 sm:grid-cols-[70px_1fr] sm:gap-5 sm:p-8"
                contentClassName="contents"
              >
                <span className="text-xl font-semibold text-blue-400 sm:text-2xl">
                  {item.step}
                </span>

                <div>
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 leading-relaxed text-gray-400 sm:mt-3">
                    {item.description}
                  </p>
                </div>
              </InfoPanel>
            ))}
          </div>
        </div>
      </section>


      {/* Payment approach */}
      <section
        className="
          mx-auto
          max-w-6xl
          px-5
          py-8
          sm:px-6
          sm:py-12
        "
      >
        <InfoPanel
          className="
            grid
            gap-6
            p-6
            sm:p-8
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-center
          "
          contentClassName="contents"
        >
          <div>
            <p className="text-xs font-medium tracking-[0.16em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.18em]">
              Payment approach
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:mt-4 sm:text-3xl">
              Review the finished solution before payment.
            </h2>
          </div>

          <div>
            <p className="leading-relaxed text-gray-300">
              The project scope and agreed price are confirmed before
              development begins. You review a working version of the agreed
              solution before any payment is due. After approval, the agreed
              payment is completed and the final files, access and project
              handover follow.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              No advance development payment is required for this custom
              service, and any change outside the confirmed scope is discussed
              before it can affect the price.
            </p>
          </div>
        </InfoPanel>
      </section>


      {/* Technologies and deliverables */}
      <section
        className="
          mx-auto
          max-w-6xl
          px-5
          py-12
          sm:px-6
          sm:py-20
          lg:py-24
        "
      >
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
          <InfoPanel
            as="article"
            className="p-6 sm:p-9"
          >
            <p className="text-xs font-medium tracking-[0.16em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.18em]">
              Technology
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-white sm:mt-4 sm:text-3xl">
              Tools and implementation
            </h2>

            <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">
              {service.technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/4
                    px-3
                    py-2
                    text-sm
                    text-gray-300
                    sm:px-4
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </InfoPanel>

          <InfoPanel
            as="article"
            className="p-6 sm:p-9"
          >
            <p className="text-xs font-medium tracking-[0.16em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.18em]">
              Deliverables
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-white sm:mt-4 sm:text-3xl">
              What can be included
            </h2>

            <div className="mt-6 grid gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-4">
              {service.deliverables.map((deliverable) => (
                <div
                  key={deliverable}
                  className="flex items-start gap-3"
                >
                  <CheckIcon />

                  <span className="text-sm leading-relaxed text-gray-300">
                    {deliverable}
                  </span>
                </div>
              ))}
            </div>
          </InfoPanel>
        </div>
      </section>


      {/* Result image */}
      <section
        className="
          mx-auto
          max-w-6xl
          px-5
          py-12
          sm:px-6
          sm:py-20
          lg:py-24
        "
      >
        <ServiceImage
          src={service.resultImage}
          alt={`${service.title} final result`}
          label="Solution result"
          className="
            aspect-[16/9]
            w-full
            sm:aspect-[16/10]
            lg:aspect-auto
            lg:min-h-[560px]
          "
        />
      </section>


      {/* Exclusions for Basic Website */}
      {service.exclusions && (
        <section
          className="
            mx-auto
            max-w-6xl
            px-5
            py-12
            sm:px-6
            sm:py-20
            lg:py-24
          "
        >
          <InfoPanel className="p-6 sm:p-10">
            <p className="text-xs font-medium tracking-[0.16em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.18em]">
              Not included
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:mt-4 sm:text-5xl">
              Functionality outside the basic package
            </h2>

            <p className="mt-4 max-w-2xl leading-relaxed text-gray-400 sm:mt-5">
              These features are not included in the standard €120 package,
              but they can be discussed as separately priced upgrades or
              custom development.
            </p>

            <div
              className="
                mt-7
                grid
                gap-3
                sm:mt-9
                sm:gap-4
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              {service.exclusions.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/8
                    bg-black/15
                    p-4
                    text-sm
                    text-gray-300
                  "
                >
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-gray-600
                      text-xs
                      text-gray-500
                    "
                  >
                    ×
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </InfoPanel>
        </section>
      )}


      {/* FAQ */}
      <section
        className="
          mx-auto
          max-w-4xl
          px-5
          py-12
          sm:px-6
          sm:py-20
          lg:py-24
        "
      >
        <SectionHeading
          label="Frequently asked questions"
          title="Questions about this service"
          centered
        />

        <div className="mt-8 space-y-3 sm:mt-12 sm:space-y-4">
          {service.faq.map((item) => (
            <details
              key={item.question}
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
                <span>{item.question}</span>

                <span
                  className="
                    shrink-0
                    text-xl
                    text-blue-400
                    transition-transform
                    duration-300
                    group-open:rotate-45
                  "
                >
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-3xl leading-relaxed text-gray-400">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>


      {/* CTA */}
      <section
        className="
          mx-auto
          max-w-6xl
          px-5
          pt-12
          pb-20
          sm:px-6
          sm:pt-20
          sm:pb-28
          lg:pt-24
          lg:pb-32
        "
      >
        <InfoPanel className="px-6 py-11 text-center sm:px-12 sm:py-18">
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
            <p className="text-xs font-medium tracking-[0.16em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.18em]">
              Start a conversation
            </p>

            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:mt-4 sm:text-5xl">
              Have a project related to{" "}
              {service.title.toLowerCase()}?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-400 sm:mt-5">
              Tell us about your current process, the problem you want to solve
              and the result you want to achieve.
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
              Discuss your project
              <ArrowIcon />
            </Link>
          </div>
        </InfoPanel>
      </section>
    </div>
  )
}


export default ServiceDetails