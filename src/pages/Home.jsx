import { lazy, Suspense, useEffect, useState } from "react"
import { Link } from "react-router"
import heroGraphic from "../assets/hero.png"

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


const paymentSteps = [
  {
    number: "01",
    title: "Scope and price agreed",
    body: "The required result and project price are confirmed before development begins.",
  },
  {
    number: "02",
    title: "Working solution presented",
    body: "You see the agreed solution working and review it before any payment is due.",
  },
  {
    number: "03",
    title: "Approval, payment and handover",
    body: "After approval, the agreed payment is completed and the finished project is handed over.",
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
    <section
      className="
        relative
        mx-auto
        grid
        min-h-screen
        max-w-7xl
        items-center
        justify-center
        gap-8
        px-6
        pt-34
        pb-20
        text-center
        lg:grid-cols-[auto_auto]
        lg:gap-6
        lg:pt-36
        lg:text-left
      "
    >

        <div
          className="
            -mt-10
            relative
            flex
            justify-center
            lg:justify-end
            lg:justify-self-end
          "
          >
          <img
            src={heroGraphic}
            alt="Layered digital platform visual"
            width="346"
            height="360"
            loading="eager"
            decoding="async"
            className="
              relative
              z-10
              w-[72%]
              max-w-[430px]
              translate-x-0
              lg:w-[500px]
              lg:max-w-none
              lg:translate-x-8
            "
          />
          </div>

        {/* Text */}
        <div className="-mt-10 lg:-translate-x-30 mx-auto max-w-4xl lg:mx-0 lg:justify-self-start">
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
            <div key={point.label} className="px-3 py-5 text-center">
              <p className="text-lg font-semibold text-blue-300">{point.value}</p>
              <p className="mt-2 text-lg text-gray-300">{point.label}</p>
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
            <article
              key={capability.title}
              className="rounded-lg border border-white/10 bg-white/[0.035] p-6 transition duration-300"
            >
              <div className={`mb-6 h-10 w-10 rounded-lg border ${capability.accent} grid place-items-center text-sm font-semibold`}>
                {capability.title.slice(0, 2)}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {capability.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {capability.body}
              </p>
            </article>
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
            <article
              key={item.step}
              className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.035] p-5 sm:grid-cols-[92px_1fr]"
            >
              <div>
                <p className="text-xs tracking-[0.2em] text-gray-500 uppercase">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-blue-300">{item.step}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Payment approach */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
        <div className="overflow-hidden rounded-lg border border-blue-400/20 bg-blue-500/[0.055]">
          <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.24em] text-blue-300 uppercase">
                A more confident way to start
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                See the finished solution before you pay.
              </h2>

              <p className="mt-5 max-w-2xl leading-relaxed text-gray-400">
                For custom projects, the scope and agreed price are confirmed
                before development begins. We build the solution and present a
                working version for your review. No payment is due until you
                approve the agreed result.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                The €120 Basic Business Website is the only package paid in
                advance.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {paymentSteps.map((item) => (
                <article
                  key={item.number}
                  className="rounded-lg border border-white/10 bg-black/15 p-5"
                >
                  <p className="text-sm font-semibold text-blue-300">
                    {item.number}
                  </p>

                  <h3 className="mt-4 font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] lg:grid-cols-[1fr_1.1fr]">
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
              <div key={outcome} className="bg-[#090909] p-6">
                <p className="text-lg font-medium text-white">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="rounded-lg border border-blue-400/20 bg-blue-500/[0.07] px-6 py-10 text-center sm:px-10">
          <p className="text-sm font-semibold tracking-[0.24em] text-blue-300 uppercase">
            Ready when you are
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Let us turn your idea, workflow or business problem into a serious digital product.
          </h2>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="rounded-lg bg-white px-8 py-4 font-semibold text-black transition duration-300"
            >
              Tell us what to build
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
