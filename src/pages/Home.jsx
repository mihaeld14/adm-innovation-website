import { lazy, Suspense, useEffect, useState } from "react"
import { Link } from "react-router"

import heroGraphic from "../assets/hero.webp"
import {
  ArrowIcon,
  CheckIcon,
  InfoPanel,
} from "../components/CardStandards"
import Reveal from "../components/Reveal"
import usePageMeta from "../lib/meta"
import { useLanguage } from "../i18n/context"
import { localisePath } from "../i18n/config"


const AnimatedWord = lazy(() => import("./AnimatedWord"))
const AutomationConsole = lazy(() => import("../components/AutomationConsole"))


const capabilityAccents = [
  "border-blue-400/40 text-blue-300",
  "border-cyan-400/40 text-cyan-300",
  "border-emerald-400/40 text-emerald-300",
  "border-amber-400/40 text-amber-300",
]


function Home() {
  const { language, t } = useLanguage()

  usePageMeta({
    title: t.home.meta.title,
    description: t.home.meta.description,
    path: "/",
    language,
  })

  const url = (path) => localisePath(path, language)

  const rotatingWords = t.home.hero.rotatingWords

  const [wordIndex, setWordIndex] = useState(0)
  const [effectsReady, setEffectsReady] = useState(true)

  const currentWord = rotatingWords[wordIndex % rotatingWords.length]


  useEffect(() => {
    let frameOne
    let frameTwo

    frameOne = requestAnimationFrame(() => {
      frameTwo = requestAnimationFrame(() => {
        setEffectsReady(true)
      })
    })

    return () => {
      cancelAnimationFrame(frameOne)
      cancelAnimationFrame(frameTwo)
    }
  }, [])


  useEffect(() => {
    if (!effectsReady) {
      return undefined
    }

    let intervalId

    const firstChangeTimeout = window.setTimeout(() => {
      setWordIndex((currentIndex) => (currentIndex + 1) % rotatingWords.length)

      intervalId = window.setInterval(() => {
        setWordIndex((currentIndex) => (currentIndex + 1) % rotatingWords.length)
      }, 3400)
    }, 800)

    return () => {
      window.clearTimeout(firstChangeTimeout)

      if (intervalId) {
        window.clearInterval(intervalId)
      }
    }
  }, [effectsReady, rotatingWords.length])


  return (
    <div>
      <section className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-6 pt-34 pb-20 text-center lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12 lg:pt-36 lg:text-left">
        <div className="relative -mt-10 flex justify-center lg:mt-0 lg:justify-end">
          {/* Glow behind the chip */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[90px]"
            aria-hidden="true"
          />

          <img
            src={heroGraphic}
            alt={t.home.hero.imageAlt}
            width="500"
            height="500"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="relative z-10 w-[72%] max-w-[430px] drop-shadow-[0_0_60px_rgba(59,130,246,0.15)] lg:w-full lg:max-w-[460px]"
          />
        </div>

        <div className="mx-auto -mt-10 max-w-4xl lg:mx-0 lg:mt-0 lg:max-w-none">
          <h1 className="text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-6xl xl:text-[4.75rem]">
            <span className="block">{t.home.hero.lead}</span>

            <span className="relative mt-2 flex min-h-[1.12em] items-center justify-center overflow-visible perspective-[1000px] lg:justify-start">
              {effectsReady ? (
                <Suspense
                  fallback={
                    <span className="inline-flex items-center justify-center whitespace-nowrap text-blue-500">
                      {currentWord}
                    </span>
                  }
                >
                  <AnimatedWord currentWord={currentWord} />
                </Suspense>
              ) : (
                <span className="inline-flex items-center justify-center whitespace-nowrap text-blue-500">
                  {currentWord}
                </span>
              )}
            </span>

            <span className="mt-3 block">{t.home.hero.trail}</span>
          </h1>
        </div>
      </section>


      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 py-6 sm:grid-cols-4">
          {t.home.proofPoints.map((point) => (
            <div
              key={point.value}
              className="px-3 py-5 text-center"
            >
              <p className="text-lg font-semibold text-blue-300">
                {point.value}
              </p>

              <p className="mt-2 text-lg text-gray-300">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.24em] text-blue-300 uppercase">
            {t.home.capabilities.label}
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {t.home.capabilities.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {t.home.capabilities.items.map((capability, index) => (
            <Reveal
              key={capability.title}
              delay={index * 0.08}
            >
              <InfoPanel
                as="article"
                className="h-full p-6"
              >
                <div
                  className={`mb-6 grid h-10 w-10 place-items-center rounded-lg border text-sm font-semibold ${capabilityAccents[index % capabilityAccents.length]}`}
                >
                  {capability.title.slice(0, 2)}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {capability.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-gray-400">
                  {capability.body}
                </p>
              </InfoPanel>
            </Reveal>
          ))}
        </div>
      </section>


      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.24em] text-sky-300 uppercase">
            {t.home.liveLogic.label}
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {t.home.liveLogic.heading}
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-400">
            {t.home.liveLogic.body}
          </p>

          <ul className="mt-8 space-y-4">
            {t.home.liveLogic.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-gray-300"
              >
                <CheckIcon className="mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <Suspense
            fallback={
              <div className="min-h-[380px] rounded-3xl border border-white/10 bg-[#070a10]/90" />
            }
          >
            <AutomationConsole />
          </Suspense>
        </Reveal>
      </section>


      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-10 lg:grid-cols-[0.86fr_1.14fr] lg:py-24">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.24em] text-cyan-300 uppercase">
            {t.home.method.label}
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {t.home.method.heading}
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-400">
            {t.home.method.body}
          </p>
        </Reveal>

        <div className="grid gap-4">
          {t.home.method.steps.map((item, index) => (
            <Reveal
              key={item.step}
              delay={index * 0.07}
            >
              <InfoPanel
                as="article"
                className="grid gap-5 p-5 sm:grid-cols-[92px_1fr]"
                contentClassName="contents"
              >
                <div>
                  <p className="text-xs tracking-[0.2em] text-gray-500 uppercase">
                    {t.home.method.step} {index + 1}
                  </p>

                  <p className="mt-2 text-blue-300">
                    {item.step}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-base leading-relaxed text-gray-400">
                    {item.body}
                  </p>
                </div>
              </InfoPanel>
            </Reveal>
          ))}
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <InfoPanel
            className="grid p-0 lg:grid-cols-[1fr_1.1fr]"
            contentClassName="contents"
          >
            <div className="border-b border-white/10 p-8 sm:p-10 lg:border-r lg:border-b-0">
              <p className="text-sm font-semibold tracking-[0.24em] text-emerald-300 uppercase">
                {t.home.outcome.label}
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                {t.home.outcome.heading}
              </h2>

              <p className="mt-6 text-base leading-relaxed text-gray-400">
                {t.home.outcome.body}
              </p>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {t.home.outcome.items.map((outcome) => (
                <div
                  key={outcome}
                  className="bg-[#090909] p-6"
                >
                  <p className="flex items-start gap-3 text-lg font-medium text-white">
                    <CheckIcon className="mt-1" />
                    <span>{outcome}</span>
                  </p>
                </div>
              ))}
            </div>
          </InfoPanel>
        </Reveal>
      </section>


      <section className="mx-auto max-w-7xl px-6 pb-32">
        <Reveal>
          <InfoPanel className="px-6 py-10 text-center sm:px-10">
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-96 max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/8 blur-[80px]" />

            <div className="relative">
              <p className="text-sm font-semibold tracking-[0.24em] text-blue-300 uppercase">
                {t.home.cta.label}
              </p>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
                {t.home.cta.heading}
              </h2>

              <div className="mt-8 flex justify-center">
                <Link
                  to={url("/contact")}
                  className="group inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-black transition duration-300 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  {t.home.cta.button}
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </InfoPanel>
        </Reveal>
      </section>
    </div>
  )
}


export default Home
