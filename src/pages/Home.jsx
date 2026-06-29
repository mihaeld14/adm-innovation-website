import { lazy, Suspense, useEffect, useState } from "react"
import { Link } from "react-router"
import heroGraphic from "../assets/hero.png"
import {
  ArrowIcon,
  CheckIcon,
  InfoPanel,
} from "../components/CardStandards"


const AnimatedWord = lazy(() => import("./AnimatedWord"))


const rotatingWords = [
  "websites",
  "software",
  "AI tools",
  "automations",
]


const proofPoints = [
  {
    value: "01",
    label: "Strategy first",
  },
  {
    value: "02",
    label: "Clean execution",
  },
  {
    value: "03",
    label: "Scalable systems",
  },
  {
    value: "04",
    label: "Measured impact",
  },
]


const capabilities = [
  {
    title: "Premium websites",
    body: "Fast, polished websites with clear structure, strong visuals and a professional first impression.",
    accent: "border-blue-400/40 text-blue-300",
  },
  {
    title: "Business software",
    body: "Custom platforms, internal tools and dashboards built around the way your company actually works.",
    accent: "border-cyan-400/40 text-cyan-300",
  },
  {
    title: "AI workflows",
    body: "AI assistants, content systems and smart decision flows that reduce repetitive thinking and admin.",
    accent: "border-emerald-400/40 text-emerald-300",
  },
  {
    title: "Automation engines",
    body: "Connected apps, data flows and background processes that remove manual steps from daily operations.",
    accent: "border-amber-400/40 text-amber-300",
  },
]


const processSteps = [
  {
    step: "Discover",
    title: "Map the real business problem",
    body: "We clarify the workflow, the bottlenecks and the result the system needs to create.",
  },
  {
    step: "Design",
    title: "Shape a practical solution",
    body: "The structure, user flow and technical approach are planned before heavy development starts.",
  },
  {
    step: "Build",
    title: "Move fast with precision",
    body: "Interfaces, automations and integrations are built with performance and maintainability in mind.",
  },
  {
    step: "Improve",
    title: "Refine after launch",
    body: "The product can evolve with analytics, feedback and new operational needs.",
  },
]


const outcomes = [
  "A sharper digital presence",
  "Less repetitive manual work",
  "Better internal visibility",
  "Software that fits the business",
  "AI that supports real workflows",
  "A partner who can think and build",
]


function Home() {
  const [wordIndex, setWordIndex] = useState(0)
  const [effectsReady, setEffectsReady] = useState(true)

  const currentWord = rotatingWords[wordIndex]


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
      setWordIndex((currentIndex) => {
        return (currentIndex + 1) % rotatingWords.length
      })

      intervalId = window.setInterval(() => {
        setWordIndex((currentIndex) => {
          return (currentIndex + 1) % rotatingWords.length
        })
      }, 3400)
    }, 800)

    return () => {
      window.clearTimeout(firstChangeTimeout)

      if (intervalId) {
        window.clearInterval(intervalId)
      }
    }
  }, [effectsReady])


  return (
    <div>
      <section className="relative mx-auto grid min-h-screen max-w-7xl items-center justify-center gap-8 px-6 pt-34 pb-20 text-center lg:grid-cols-[auto_auto] lg:gap-6 lg:pt-36 lg:text-left">
        <div className="relative -mt-10 flex justify-center lg:justify-self-end lg:justify-end">
          <img
            src={heroGraphic}
            alt="Layered digital platform visual"
            width="346"
            height="360"
            loading="eager"
            decoding="async"
            className="relative z-10 w-[72%] max-w-[430px] translate-x-0 lg:w-[500px] lg:max-w-none lg:translate-x-8"
          />
        </div>

        <div className="mx-auto -mt-10 max-w-4xl lg:mx-0 lg:-translate-x-30 lg:justify-self-start">
          <h1 className="max-w-4xl text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl md:text-7xl xl:text-[5.6rem]">
            <span className="block">Premium</span>

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

            <span className="mt-3 block">for your business.</span>
          </h1>
        </div>
      </section>


      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 py-6 sm:grid-cols-4">
          {proofPoints.map((point) => (
            <div
              key={point.label}
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
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.24em] text-blue-300 uppercase">
            Capabilities
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Everything a modern business needs to look sharp and work smarter.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((capability) => (
            <InfoPanel
              as="article"
              key={capability.title}
              className="p-6"
            >
              <div className={`mb-6 grid h-10 w-10 place-items-center rounded-lg border text-sm font-semibold ${capability.accent}`}>
                {capability.title.slice(0, 2)}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {capability.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {capability.body}
              </p>
            </InfoPanel>
          ))}
        </div>
      </section>


      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-10 lg:grid-cols-[0.86fr_1.14fr] lg:py-24">
        <div>
          <p className="text-sm font-semibold tracking-[0.24em] text-cyan-300 uppercase">
            Method
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Professional work feels calm, structured and deliberate.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-400">
            The goal is not to throw features at a problem. The goal is to
            understand the business, build the right system and make every
            interaction feel intentional.
          </p>
        </div>

        <div className="grid gap-4">
          {processSteps.map((item, index) => (
            <InfoPanel
              as="article"
              key={item.step}
              className="grid gap-5 p-5 sm:grid-cols-[92px_1fr]"
              contentClassName="contents"
            >
              <div>
                <p className="text-xs tracking-[0.2em] text-gray-500 uppercase">
                  Step {index + 1}
                </p>

                <p className="mt-2 text-blue-300">
                  {item.step}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {item.body}
                </p>
              </div>
            </InfoPanel>
          ))}
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-6 py-24">
        <InfoPanel
          className="grid p-0 lg:grid-cols-[1fr_1.1fr]"
          contentClassName="contents"
        >
          <div className="border-b border-white/10 p-8 sm:p-10 lg:border-r lg:border-b-0">
            <p className="text-sm font-semibold tracking-[0.24em] text-emerald-300 uppercase">
              Outcome
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Built to impress clients and make daily work easier.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-gray-400">
              ADM Innovations combines design taste, technical execution and
              operational thinking, so the final product looks professional and
              solves the right problems behind the scenes.
            </p>
          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            {outcomes.map((outcome) => (
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
      </section>


      <section className="mx-auto max-w-7xl px-6 pb-32">
        <InfoPanel className="px-6 py-10 text-center sm:px-10">
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-96 max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/8 blur-[80px]" />

          <div className="relative">
            <p className="text-sm font-semibold tracking-[0.24em] text-blue-300 uppercase">
              Ready when you are
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Let us turn your idea, workflow or business problem into a serious digital product.
            </h2>

            <div className="mt-8 flex justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-black transition duration-300 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Tell us what to build
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </InfoPanel>
      </section>
    </div>
  )
}


export default Home
