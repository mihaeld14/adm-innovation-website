import { Link } from "react-router"
import {
  ArrowIcon,
  CheckIcon,
  InfoPanel,
} from "../components/CardStandards"
import Reveal from "../components/Reveal"
import usePageMeta from "../lib/meta"


const steps = [
  {
    number: "01",
    title: "Discovery and analysis",
    duration: "Free · no obligation",
    description:
      "A short conversation about your business: how the process works today, where time is lost and what result you are after. No technical preparation needed — we talk in business terms.",
    deliverables: [
      "A short written summary of the problem",
      "Possible approaches with trade-offs",
      "An honest view on whether you need software at all",
    ],
  },
  {
    number: "02",
    title: "Scope and quote",
    duration: "A few working days",
    description:
      "We define exactly what will be built, in which stages and at what price. All of it in writing — no hidden conditions and no 'we'll see later'.",
    deliverables: [
      "A fixed scope in writing",
      "Fixed price and a stage-by-stage timeline",
      "Clear responsibilities — yours and ours",
    ],
  },
  {
    number: "03",
    title: "Prototype and validation",
    duration: "First working versions",
    description:
      "Before full development you see the key screens and logic in action. That lets us correct direction early, while changes are still cheap and easy.",
    deliverables: [
      "A working prototype of the main screens",
      "A chance to change direction",
      "Confirmation that the solution fits the process",
    ],
  },
  {
    number: "04",
    title: "Development and testing",
    duration: "On the agreed schedule",
    description:
      "The system is built in stages with regular demos. You see real working progress, not progress reports.",
    deliverables: [
      "Regular demos of working features",
      "Testing against real scenarios and edge cases",
      "Transparency on any deviation from the plan",
    ],
  },
  {
    number: "05",
    title: "Review, approval and deployment",
    duration: "Payment only after approval",
    description:
      "You review the finished solution in working form. After your approval, payment is completed, the system is deployed and your team is trained.",
    deliverables: [
      "A working system in your environment",
      "Team training",
      "Documentation and full access credentials",
    ],
  },
  {
    number: "06",
    title: "Support and development",
    duration: "A long-term partnership",
    description:
      "The business changes and the system has to follow. We plan support and further improvements based on real usage and feedback.",
    deliverables: [
      "A support plan that matches your needs",
      "A prioritised list of improvements",
      "One accountable partner for the system",
    ],
  },
]


function Process() {
  usePageMeta({
    title: "Process — how we work",
    description:
      "Six clear steps from the first conversation to a working system: fixed scope, prototype, regular demos and payment after approval.",
    path: "/process",
  })

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-32 pb-12 sm:px-6 sm:pt-40 sm:pb-14">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_360px] lg:gap-12">
          <div>
            <p className="font-mono text-xs font-medium tracking-[0.18em] text-blue-400 uppercase">
              Process
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl leading-[1.02] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              A clear process, minimal risk for you.
            </h1>

            <p className="mt-5 max-w-2xl leading-relaxed text-gray-400 sm:text-lg">
              Every stage produces something concrete that you receive. You
              know what is happening, what comes next and what it costs — from
              the first conversation to the working system.
            </p>
          </div>

          <InfoPanel
            as="aside"
            className="p-6"
          >
            <p className="font-mono text-xs font-medium tracking-[0.14em] text-blue-400 uppercase">
              The essentials
            </p>

            <ul className="mt-4 space-y-3">
              {[
                "Scope and price in writing, before we start",
                "No advance payment on custom projects",
                "You see the working solution before paying",
                "The code and credentials become yours",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-relaxed text-gray-300"
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
          {steps.map((step, index) => (
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
                    You receive
                  </p>

                  <ul className="mt-3 space-y-2">
                    {step.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-300"
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
                Step 01 is free. Start there.
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-400">
                A 30-minute conversation with no obligation — worst case, you
                walk away with an outside perspective on your processes.
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


export default Process
