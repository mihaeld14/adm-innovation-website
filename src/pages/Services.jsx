import { Link } from "react-router"

import { getServices } from "../data/servicesData"
import {
  ArrowIcon,
  CheckIcon,
  ClickableCard,
  InfoPanel,
} from "../components/CardStandards"
import Reveal from "../components/Reveal"
import usePageMeta from "../lib/meta"
import { useLanguage } from "../i18n/context"
import { localisePath } from "../i18n/config"


function Services() {
  const { language, t } = useLanguage()

  usePageMeta({
    title: t.services.meta.title,
    description: t.services.meta.description,
    path: "/services",
    language,
  })

  const url = (path) => localisePath(path, language)
  const services = getServices(language)

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-32 pb-12 sm:px-6 sm:pt-40 sm:pb-14">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_360px] lg:gap-12">
          <div>
            <p className="font-mono text-xs font-medium tracking-[0.18em] text-blue-400 uppercase">
              {t.services.label}
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl leading-[1.02] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.services.heading}
            </h1>

            <p className="mt-5 max-w-2xl leading-relaxed text-gray-400 sm:text-lg">
              {t.services.intro}
            </p>
          </div>

          <InfoPanel
            as="aside"
            className="p-6"
          >
            <p className="font-mono text-xs font-medium tracking-[0.14em] text-blue-400 uppercase">
              {t.services.payment.label}
            </p>

            <h2 className="mt-3 text-xl font-bold tracking-tight text-white">
              {t.services.payment.heading}
            </h2>

            <p className="mt-3 text-base leading-relaxed text-gray-400">
              {t.services.payment.body}
            </p>

            <p className="mt-4 border-t border-white/8 pt-3.5 text-sm leading-relaxed text-gray-500">
              {t.services.payment.note}
            </p>
          </InfoPanel>
        </div>
      </section>


      {/* Services — detailed cards */}
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-6 sm:pb-20">
        <div className="space-y-4">
          {services.map((service, index) => (
            <Reveal
              key={service.slug}
              delay={Math.min(index * 0.05, 0.15)}
            >
              <ClickableCard
                to={url(`/services/${service.slug}`)}
                className="p-6 sm:p-8"
                contentClassName="grid gap-6 pr-10 lg:grid-cols-[220px_1fr_1fr]"
              >
                <div>
                  <span className="font-mono text-xs font-semibold text-blue-400">
                    {service.number}
                  </span>

                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
                    {service.title}
                  </h2>
                </div>

                <div>
                  <p className="font-mono text-[11px] tracking-[0.14em] text-gray-600 uppercase">
                    {t.services.problemLabel}
                  </p>

                  <p className="mt-2 text-base leading-relaxed text-gray-400">
                    {service.problem}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[11px] tracking-[0.14em] text-gray-600 uppercase">
                    {t.services.solutionLabel}
                  </p>

                  <p className="mt-2 text-base leading-relaxed text-gray-300">
                    {service.solution}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {service.useCases.slice(0, 3).map((useCase) => (
                      <li
                        key={useCase}
                        className="flex items-start gap-2 text-sm text-gray-500"
                      >
                        <CheckIcon className="mt-0.5 h-3.5 w-3.5" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </ClickableCard>
            </Reveal>
          ))}
        </div>


        {/* Fixed package */}
        <Reveal className="mt-4">
          <ClickableCard
            to={url("/services/basic-website")}
            className="border-dashed p-6 sm:p-8"
            contentClassName="flex flex-wrap items-center justify-between gap-6 pr-10"
          >
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-semibold text-blue-400">
                {t.services.package.label}
              </span>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
                {t.services.package.heading}
              </h2>

              <p className="mt-2 text-base leading-relaxed text-gray-400">
                {t.services.package.body}
              </p>
            </div>

            <span className="inline-flex items-center gap-2 font-semibold text-blue-300">
              {t.services.package.cta}
            </span>
          </ClickableCard>
        </Reveal>
      </section>


      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-6 sm:pb-28">
        <Reveal>
          <InfoPanel className="px-6 py-11 text-center sm:px-12 sm:py-14">
            <div
              className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-96 max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/8 blur-[80px]"
              aria-hidden="true"
            />

            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t.services.cta.heading}
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-400">
                {t.services.cta.body}
              </p>

              <Link
                to={url("/contact")}
                className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.28)]"
              >
                {t.services.cta.button}
                <ArrowIcon />
              </Link>
            </div>
          </InfoPanel>
        </Reveal>
      </section>
    </div>
  )
}


export default Services
