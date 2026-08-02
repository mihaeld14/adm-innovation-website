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


function BasicWebsite() {
  const { language, t } = useLanguage()

  usePageMeta({
    title: t.basicWebsite.meta.title,
    description: t.basicWebsite.meta.description,
    path: "/services/basic-website",
    language,
  })

  const url = (path) => localisePath(path, language)

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-32 pb-12 sm:px-6 sm:pt-40 sm:pb-16">
        <Link
          to={url("/services")}
          className="group inline-flex min-h-10 items-center gap-2 text-sm text-gray-400 transition hover:text-white"
        >
          <span
            className="transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          >
            ←
          </span>
          {t.common.backToServices}
        </Link>

        <div className="mt-7 grid items-end gap-8 lg:grid-cols-[1fr_300px] lg:gap-12">
          <div>
            <p className="font-mono text-xs font-medium tracking-[0.18em] text-blue-400 uppercase">
              {t.basicWebsite.label}
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl leading-[1.02] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.basicWebsite.heading}
            </h1>

            <p className="mt-5 max-w-2xl leading-relaxed text-gray-400 sm:text-lg">
              {t.basicWebsite.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to={url("/contact")}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.28)]"
              >
                {t.basicWebsite.requestCta}
                <ArrowIcon />
              </Link>

              <a
                href="#included"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/12 bg-white/4 px-6 py-3.5 font-semibold text-gray-200 transition hover:border-white/25 hover:bg-white/7"
              >
                {t.basicWebsite.seeIncluded}
              </a>
            </div>
          </div>

          {/* Price */}
          <InfoPanel className="p-6 sm:p-7">
            <p className="font-mono text-xs tracking-[0.14em] text-gray-400 uppercase">
              {t.basicWebsite.price.from}
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
              {t.basicWebsite.price.note}
            </p>

            <div className="mt-4 space-y-2 border-t border-white/8 pt-4">
              <p className="text-base leading-relaxed text-gray-400">
                {t.basicWebsite.price.confirm}
              </p>

              <p className="text-sm leading-relaxed text-gray-500">
                {t.basicWebsite.price.domainNote}
              </p>
            </div>
          </InfoPanel>
        </div>
      </section>


      {/*
        Live demo. The href comes from the dictionary, so an English
        visitor lands on the English demo and a Bulgarian one on /bg —
        the language they are already reading in.
      */}
      <section className="mx-auto max-w-6xl px-5 pb-12 sm:px-6 sm:pb-14">
        <Reveal>
          <InfoPanel className="p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
              <div>
                <p className="font-mono text-xs font-medium tracking-[0.16em] text-blue-400 uppercase">
                  {t.basicWebsite.demo.label}
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {t.basicWebsite.demo.heading}
                </h2>

                <p className="mt-3 max-w-xl text-base leading-relaxed text-gray-400">
                  {t.basicWebsite.demo.body}
                </p>
              </div>

              <div className="lg:justify-self-end">
                <a
                  href={t.basicWebsite.demo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition duration-200 hover:bg-gray-200"
                >
                  {t.basicWebsite.demo.button}

                  {/* Marks the link as leaving the site */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      d="M14 5h5v5M19 5l-8 8M18 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <p className="mt-3 text-sm text-gray-500 lg:text-right">
                  {t.basicWebsite.demo.note}
                </p>
              </div>
            </div>
          </InfoPanel>
        </Reveal>
      </section>


      {/* Quick facts */}
      <section className="mx-auto max-w-6xl px-5 pb-12 sm:px-6 sm:pb-16">
        <InfoPanel
          className="grid p-0 sm:grid-cols-3"
          contentClassName="contents"
        >
          {t.basicWebsite.facts.map((fact, index) => (
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
              {t.basicWebsite.included.label}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.basicWebsite.included.heading}
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.basicWebsite.included.items.map((feature, index) => (
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

                  <p className="mt-2 text-base leading-relaxed text-gray-400">
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
              {t.basicWebsite.how.label}
            </p>

            <div className="mt-5 space-y-5">
              {t.basicWebsite.how.steps.map((step) => (
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

                    <p className="mt-1 text-base leading-relaxed text-gray-400">
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
              {t.basicWebsite.notIncluded.label}
            </p>

            <p className="mt-3 text-base leading-relaxed text-gray-400">
              {t.basicWebsite.notIncluded.intro}
            </p>

            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {t.basicWebsite.notIncluded.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-base leading-relaxed text-gray-400"
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
            {t.basicWebsite.faq.label}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.basicWebsite.faq.heading}
          </h2>
        </Reveal>

        <div className="mt-8 space-y-3">
          {t.basicWebsite.faq.items.map((faq) => (
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
                {t.basicWebsite.cta.heading}
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-400">
                {t.basicWebsite.cta.body}
              </p>

              <Link
                to={url("/contact")}
                className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.28)]"
              >
                {t.basicWebsite.requestCta}
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
