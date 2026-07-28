import { Link } from "react-router"
import {
  ArrowIcon,
  CheckIcon,
  InfoPanel,
} from "../components/CardStandards"
import Reveal from "../components/Reveal"


const letters = [
  {
    letter: "A",
    word: "Automate",
    accent: "text-blue-300 border-blue-400/30 bg-blue-500/6",
    glow: "bg-blue-500/12",
    description:
      "Repetitive work belongs to machines. Every workflow we touch should need fewer clicks, fewer copies and fewer reminders than before.",
  },
  {
    letter: "D",
    word: "Design",
    accent: "text-cyan-300 border-cyan-400/30 bg-cyan-500/6",
    glow: "bg-cyan-500/12",
    description:
      "Powerful systems fail when people avoid using them. We design software that employees actually enjoy opening every morning.",
  },
  {
    letter: "M",
    word: "Modernize",
    accent: "text-purple-300 border-purple-400/30 bg-purple-500/6",
    glow: "bg-purple-500/12",
    description:
      "Yesterday's tools should not run tomorrow's business. We replace spreadsheets, paper trails and duct-taped tools with real systems.",
  },
]


const values = [
  {
    title: "Clarity over jargon",
    description:
      "You should always understand what is being built, why it matters and what it costs — in plain language, not buzzwords.",
  },
  {
    title: "Ownership of the result",
    description:
      "We do not deliver code and disappear. We deliver working outcomes, and we stand behind them after launch.",
  },
  {
    title: "Craft in the details",
    description:
      "Spacing, wording, loading time, edge cases. The small things are what make software feel professional instead of tolerable.",
  },
  {
    title: "Long-term thinking",
    description:
      "Every system is built so it can grow — new features, new users and new integrations without starting over.",
  },
]


const principles = [
  {
    number: "01",
    title: "Understand before building",
    description:
      "The first conversation is about your business, not about technology. The right solution comes from the real problem.",
  },
  {
    number: "02",
    title: "Agree the scope and price upfront",
    description:
      "Before development starts, you know exactly what will be built and what it will cost. No moving targets.",
  },
  {
    number: "03",
    title: "Show, don't promise",
    description:
      "For custom projects you review a working solution before payment is due. The result speaks before the invoice does.",
  },
  {
    number: "04",
    title: "Boring where it should be, brilliant where it counts",
    description:
      "Reliable, proven technology under the hood. Creativity and polish where your customers and employees can feel it.",
  },
  {
    number: "05",
    title: "Ship, then keep improving",
    description:
      "Launch is the beginning. Real usage, feedback and new needs shape what the system becomes next.",
  },
]


const stats = [
  {
    value: "1",
    label: "direct line to the person actually building your system",
  },
  {
    value: "0",
    label: "recycled templates — every project starts from your workflow",
  },
  {
    value: "6",
    label: "services, one connected way of thinking about your business",
  },
  {
    value: "24/7",
    label: "the systems we ship keep working while you sleep",
  },
]


const technologies = [
  "React",
  "Python",
  "JavaScript",
  "Tailwind CSS",
  "SQL databases",
  "REST APIs",
  "LLM & AI APIs",
  "Vector search",
  "Webhooks",
  "Cloud hosting",
  "Vite",
  "Document processing",
]


function About() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-28 pb-14 sm:px-6 sm:pt-40 sm:pb-20">
        <p className="text-xs font-medium tracking-[0.18em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.2em]">
          About
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl leading-[1] font-semibold tracking-tight text-white sm:mt-5 sm:text-6xl md:text-7xl">
          Small studio.{" "}
          <span className="gradient-text">Serious systems.</span>
        </h1>

        <p className="mt-5 max-w-2xl leading-relaxed text-gray-400 sm:mt-7 sm:text-lg">
          ADM Innovations is an independent software studio from Bulgaria. We
          build websites, custom software, AI tools and automations for
          businesses that are tired of manual work and generic tools.
        </p>
      </section>


      {/* The three letters */}
      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-6 sm:pb-20">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.18em] text-blue-400 uppercase sm:text-sm">
            What the name stands for
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:mt-4 sm:text-5xl">
            Three letters. One way of working.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-3">
          {letters.map((item, index) => (
            <Reveal
              key={item.letter}
              delay={index * 0.1}
            >
              <article
                className="
                  group
                  relative
                  h-full
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/8
                  bg-white/[0.025]
                  p-7
                  transition
                  duration-300
                  hover:border-white/16
                  hover:bg-white/[0.045]
                "
              >
                {/* Giant watermark letter */}
                <span
                  className="
                    text-outline
                    pointer-events-none
                    absolute
                    -top-10
                    -right-4
                    font-display
                    text-[11rem]
                    leading-none
                    font-bold
                    opacity-60
                    transition
                    duration-500
                    group-hover:opacity-100
                  "
                  aria-hidden="true"
                >
                  {item.letter}
                </span>

                <span
                  className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full ${item.glow} opacity-0 blur-[70px] transition duration-500 group-hover:opacity-100`}
                  aria-hidden="true"
                />

                <span
                  className={`relative flex h-12 w-12 items-center justify-center rounded-xl border font-display text-xl font-bold ${item.accent}`}
                >
                  {item.letter}
                </span>

                <h3 className="relative mt-6 text-2xl font-semibold text-white">
                  {item.word}
                </h3>

                <p className="relative mt-3 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>


      {/* Story */}
      <section className="border-y border-white/6 bg-white/[0.015]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-24">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.18em] text-cyan-300 uppercase sm:text-sm">
              Why ADM exists
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:mt-4 sm:text-5xl">
              Most businesses don't have a software problem. They have a
              busywork problem.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 leading-relaxed text-gray-400">
              <p>
                Behind most companies there is the same picture: information
                copied between spreadsheets, reports assembled by hand,
                reminders that live in someone's head and tools that almost —
                but never quite — fit the way people actually work.
              </p>

              <p>
                ADM Innovations was started to attack exactly that. Not
                technology for its own sake, but systems that quietly remove
                repetitive work, make information visible and let a business
                look as professional online as it is in person.
              </p>

              <p>
                Being a small studio is a deliberate choice. You talk directly
                to the person designing and building your system — no account
                managers, no hand-offs, no telephone game between you and the
                code.
              </p>
            </div>
          </Reveal>
        </div>
      </section>


      {/* Honest numbers */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.value}
              delay={index * 0.08}
            >
              <InfoPanel
                as="article"
                className="h-full p-6"
              >
                <p className="font-display text-5xl font-bold tracking-tight text-white">
                  <span className="gradient-text">{stat.value}</span>
                </p>

                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  {stat.label}
                </p>
              </InfoPanel>
            </Reveal>
          ))}
        </div>
      </section>


      {/* Values */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-14">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.18em] text-blue-400 uppercase sm:text-sm">
            Values
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:mt-4 sm:text-5xl">
            What we refuse to compromise on.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-2">
          {values.map((value, index) => (
            <Reveal
              key={value.title}
              delay={index * 0.07}
            >
              <InfoPanel
                as="article"
                className="h-full p-7"
              >
                <h3 className="text-xl font-semibold text-white">
                  {value.title}
                </h3>

                <p className="mt-3 leading-relaxed text-gray-400">
                  {value.description}
                </p>
              </InfoPanel>
            </Reveal>
          ))}
        </div>
      </section>


      {/* Principles */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-24">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-medium tracking-[0.18em] text-emerald-300 uppercase sm:text-sm">
            How we work
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:mt-4 sm:text-5xl">
            Five principles behind every project.
          </h2>

          <p className="mt-5 leading-relaxed text-gray-400">
            They shape how projects are scoped, priced, built and delivered —
            including our review-first payment approach for custom work.
          </p>
        </Reveal>

        <div className="space-y-4">
          {principles.map((principle, index) => (
            <Reveal
              key={principle.number}
              delay={index * 0.06}
            >
              <InfoPanel
                as="article"
                className="grid gap-4 p-6 sm:grid-cols-[56px_1fr] sm:gap-6 sm:p-7"
                contentClassName="contents"
              >
                <span className="font-display text-xl font-bold text-blue-400">
                  {principle.number}
                </span>

                <div>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {principle.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-400 sm:text-base">
                    {principle.description}
                  </p>
                </div>
              </InfoPanel>
            </Reveal>
          ))}
        </div>
      </section>


      {/* Technology marquee */}
      <section className="border-y border-white/6 bg-white/[0.015] py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <p className="text-center text-xs font-medium tracking-[0.18em] text-gray-500 uppercase">
            Tools we reach for
          </p>
        </div>

        <div
          className="relative mt-7 overflow-hidden"
          aria-hidden="true"
        >
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-[#050505] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-[#050505] to-transparent" />

          <div className="animate-marquee flex w-max gap-3">
            {[...technologies, ...technologies].map((technology, index) => (
              <span
                key={`${technology}-${index}`}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/4
                  px-5
                  py-2.5
                  text-sm
                  whitespace-nowrap
                  text-gray-300
                "
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <p className="sr-only">
          {technologies.join(", ")}
        </p>
      </section>


      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-16 pb-24 sm:px-6 sm:py-20 sm:pb-28">
        <Reveal>
          <InfoPanel className="px-6 py-11 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-96 max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/8 blur-[80px]" />

            <div className="relative">
              <p className="text-xs font-medium tracking-[0.18em] text-blue-400 uppercase sm:text-sm">
                Work with us
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                The best way to know us is to build something with us.
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-gray-400">
                The first conversation is free, direct and jargon-free. Bring a
                problem, a process or an idea.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Start the conversation
                  <ArrowIcon />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/4 px-6 py-3.5 font-semibold text-gray-200 transition hover:border-white/25 hover:bg-white/7"
                >
                  <CheckIcon />
                  See what we build
                </Link>
              </div>
            </div>
          </InfoPanel>
        </Reveal>
      </section>
    </div>
  )
}


export default About
