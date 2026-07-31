import { Link } from "react-router"

import {
  ArrowIcon,
  CheckIcon,
  InfoPanel,
} from "../components/CardStandards"
import Reveal from "../components/Reveal"
import usePageMeta from "../lib/meta"
import { useLanguage } from "../i18n/context"
import { localisePath } from "../i18n/config"


function Process() {
  const { language, t } = useLanguage()

  usePageMeta({
    title: t.process.meta.title,
    description: t.process.meta.description,
    path: "/process",
    language,
  })

  const url = (path) => localisePath(path, language)

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-32 pb-12 sm:px-6 sm:pt-40 sm:pb-14">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_360px] lg:gap-12">
          <div>
            <p className="font-mono text-xs font-medium tracking-[0.18em] text-blue-400 uppercase">
              {t.process.label}
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl leading-[1.02] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.process.heading}
            </h1>

            <p className="mt-5 max-w-2xl leading-relaxed text-gray-400 sm:text-lg">
              {t.process.intro}
            </p>
          </div>

          <InfoPanel
            as="aside"
            className="p-6"
          >
            <p className="font-mono text-xs font-medium tracking-[0.14em] text-blue-400 uppercase">
              {t.process.essentials.label}
            </p>

            <ul className="mt-4 space-y-3">
              {t.process.essentials.items.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-base leading-relaxed text-gray-300"
                >
                  <CheckIcon className="mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </InfoPanel>
        </div>
      </section>


      {/* Steps */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-14">
        <div className="space-y-4">
          {t.process.steps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={Math.min(index * 0.04, 0.12)}
            >
              <InfoPanel
                as="article"
                className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[90px_1.2fr_1fr]"
                contentClassName="contents"
              >
                <div>
                  <span className="font-display text-3xl font-bold text-blue-400">
                    {step.number}
                  </span>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white sm:text-2xl">
                    {step.title}
                  </h2>

                  <p className="mt-1 font-mono text-xs text-gray-600">
                    {step.duration}
                  </p>

                  <p className="mt-3 leading-relaxed text-gray-400">
                    {step.description}
                  </p>
                </div>

                <div className="lg:border-l lg:border-white/8 lg:pl-8">
                  <p className="font-mono text-[11px] tracking-[0.14em] text-gray-600 uppercase">
                    {t.process.receiveLabel}
                  </p>

                  <ul className="mt-3 space-y-2">
                    {step.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="flex items-start gap-2.5 text-base leading-relaxed text-gray-300"
                      >
                        <CheckIcon className="mt-0.5" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </InfoPanel>
            </Reveal>
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
                {t.process.cta.heading}
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-400">
                {t.process.cta.body}
              </p>

              <Link
                to={url("/contact")}
                className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.28)]"
              >
                {t.common.freeConsultation}
                <ArrowIcon />
              </Link>
            </div>
          </InfoPanel>
        </Reveal>
      </section>
    </div>
  )
}


export default Process
