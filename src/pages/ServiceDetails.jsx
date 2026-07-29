import { Link, Navigate, useParams } from "react-router"
import servicesData, { legacySlugMap } from "../data/servicesData"
import {
  ArrowIcon,
  CheckIcon,
  InfoPanel,
} from "../components/CardStandards"
import Reveal from "../components/Reveal"
import usePageMeta from "../lib/meta"


function ServiceDetails() {
  const { slug } = useParams()

  const resolvedSlug = legacySlugMap[slug] ?? slug

  const service = servicesData.find(
    (item) => item.slug === resolvedSlug,
  )

  usePageMeta({
    title: service ? service.title : "Services",
    description: service
      ? service.shortDescription
      : "ADM Innovations services",
    path: service ? `/services/${service.slug}` : "/services",
  })

  if (!service) {
    return <Navigate to="/services" replace />
  }

  /* Old URL → redirect to the current one */
  if (slug !== resolvedSlug) {
    return <Navigate to={`/services/${resolvedSlug}`} replace />
  }

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

        <div className="mt-7 max-w-4xl">
          <p className="font-mono text-xs font-medium tracking-[0.18em] text-blue-400 uppercase">
            Service {service.number} · {service.title}
          </p>

          <h1 className="mt-4 text-4xl leading-[1.02] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {service.heroTitle}
          </h1>

          <p className="mt-5 max-w-2xl leading-relaxed text-gray-400 sm:text-lg">
            {service.heroDescription}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.28)]"
            >
              Free consultation
              <ArrowIcon />
            </Link>

            <a
              href="#details"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/12 bg-white/4 px-6 py-3.5 font-semibold text-gray-200 transition hover:border-white/25 hover:bg-white/7"
            >
              Explore the details
            </a>
          </div>
        </div>
      </section>


      {/* Problem → solution */}
      <section
        id="details"
        className="scroll-mt-28 border-y border-white/6 bg-white/[0.012]"
      >
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <InfoPanel className="h-full p-6 sm:p-8">
              <p className="font-mono text-[11px] tracking-[0.14em] text-gray-500 uppercase">
                The problem
              </p>

              <p className="mt-4 text-lg leading-relaxed text-gray-300">
                {service.problem}
              </p>
            </InfoPanel>
          </Reveal>

          <Reveal delay={0.08}>
            <InfoPanel className="h-full p-6 sm:p-8">
              <p className="font-mono text-[11px] tracking-[0.14em] text-blue-400 uppercase">
                Our solution
              </p>

              <p className="mt-4 text-lg leading-relaxed text-white">
                {service.solution}
              </p>
            </InfoPanel>
          </Reveal>
        </div>
      </section>


      {/* Use cases */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs font-medium tracking-[0.18em] text-blue-400 uppercase">
            Examples
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Where this service creates value
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {service.useCases.map((useCase, index) => (
            <Reveal
              key={useCase}
              delay={(index % 2) * 0.06}
            >
              <div className="flex h-full items-start gap-3 rounded-xl border border-white/8 bg-white/[0.02] p-4">
                <CheckIcon className="mt-0.5" />

                <span className="text-base leading-relaxed text-gray-300">
                  {useCase}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>


      {/* Benefits */}
      <section className="border-y border-white/6 bg-white/[0.012]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-xs font-medium tracking-[0.18em] text-blue-400 uppercase">
              The result
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What your company gains
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {service.benefits.map((benefit, index) => (
              <Reveal
                key={benefit.title}
                delay={(index % 2) * 0.07}
                className="h-full"
              >
                <InfoPanel
                  as="article"
                  className="h-full p-6 sm:p-7"
                >
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-gray-400">
                    {benefit.description}
                  </p>
                </InfoPanel>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* Deliverables + payment */}
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <Reveal>
          <InfoPanel className="h-full p-6 sm:p-8">
            <p className="font-mono text-xs font-medium tracking-[0.16em] text-blue-400 uppercase">
              What you receive
            </p>

            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.deliverables.map((deliverable) => (
                <li
                  key={deliverable}
                  className="flex items-start gap-3 text-base leading-relaxed text-gray-300"
                >
                  <CheckIcon className="mt-0.5" />
                  {deliverable}
                </li>
              ))}
            </ul>
          </InfoPanel>
        </Reveal>

        <Reveal delay={0.08}>
          <InfoPanel className="h-full p-6 sm:p-8">
            <p className="font-mono text-xs font-medium tracking-[0.16em] text-blue-400 uppercase">
              Payment
            </p>

            <h2 className="mt-3 text-xl font-bold tracking-tight text-white">
              You review the finished solution before you pay.
            </h2>

            <p className="mt-3 text-base leading-relaxed text-gray-400">
              The scope and price are confirmed in writing before development
              begins. You see a working version of the solution, approve it,
              and only then does payment and final handover happen.
            </p>

            <p className="mt-4 border-t border-white/8 pt-3.5 text-sm leading-relaxed text-gray-500">
              Any change outside the confirmed scope is discussed and approved
              before it can affect the price.
            </p>
          </InfoPanel>
        </Reveal>
      </section>


      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-6 sm:py-20">
        <Reveal className="text-center">
          <p className="font-mono text-xs font-medium tracking-[0.18em] text-blue-400 uppercase">
            Questions
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <div className="mt-8 space-y-3">
          {service.faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-white/8 bg-white/3 p-5 open:border-blue-500/25 open:bg-blue-500/5"
            >
              <summary className="flex min-h-8 cursor-pointer list-none items-center justify-between gap-5 font-semibold text-white">
                <span>{item.question}</span>

                <span
                  className="shrink-0 text-xl font-light text-blue-400 transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
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
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-6 sm:pb-28">
        <Reveal>
          <InfoPanel className="px-6 py-11 text-center sm:px-12 sm:py-14">
            <div
              className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-96 max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[80px]"
              aria-hidden="true"
            />

            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Recognise this problem in your company?
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-400">
                Tell us about the process and the result you want. You will
                get a concrete proposal, not a sales presentation.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.28)]"
              >
                Free consultation
                <ArrowIcon />
              </Link>
            </div>
          </InfoPanel>
        </Reveal>
      </section>
    </div>
  )
}


export default ServiceDetails
