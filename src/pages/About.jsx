import { Link } from "react-router"
import heroGraphic from "../assets/hero.webp"
import {
  ArrowIcon,
  CheckIcon,
  InfoPanel,
} from "../components/CardStandards"
import Reveal from "../components/Reveal"
import usePageMeta from "../lib/meta"


const letters = [
  {
    letter: "A",
    word: "Automate",
    accent: "text-blue-300 border-blue-400/30 bg-blue-500/6",
    description:
      "Repetitive work belongs to machines. Every process we touch should need fewer clicks, less retyping and fewer reminders than before.",
  },
  {
    letter: "D",
    word: "Design",
    accent: "text-cyan-300 border-cyan-400/30 bg-cyan-500/6",
    description:
      "Powerful systems fail when people avoid using them. We design software employees open willingly, not because they have to.",
  },
  {
    letter: "M",
    word: "Modernise",
    accent: "text-sky-300 border-sky-400/30 bg-sky-500/6",
    description:
      "Yesterday's tools should not run tomorrow's business. We replace spreadsheets, paper trails and patched-together tools with real systems.",
  },
]


const values = [
  {
    title: "Clarity over jargon",
    description:
      "You always know what is being built, why it matters and what it costs — in plain language, without buzzwords.",
  },
  {
    title: "Ownership of the result",
    description:
      "We do not hand over code and disappear. We deliver working outcomes and stand behind them after launch.",
  },
  {
    title: "Attention to detail",
    description:
      "Spacing, wording, loading time, edge cases. The small things are what make software feel professional rather than merely tolerable.",
  },
  {
    title: "Long-term thinking",
    description:
      "Every system is built so it can grow — new features, users and integrations without starting over.",
  },
]


function About() {
  usePageMeta({
    title: "About — practical software, built to measure",
    description:
      "ADM Innovations is an independent software studio from Bulgaria, building websites, internal systems, AI tools and automations for growing companies.",
    path: "/about",
  })

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-32 pb-14 sm:px-6 sm:pt-40 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="font-mono text-xs font-medium tracking-[0.18em] text-blue-400 uppercase">
            About
          </p>

          <h1 className="mt-4 text-4xl leading-[1.02] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Built to measure.{" "}
            <span className="gradient-text">Serious systems.</span>
          </h1>

          <p className="mt-5 max-w-2xl leading-relaxed text-gray-400 sm:text-lg">
            ADM Innovations is an independent software studio based in
            Bulgaria. We build websites, internal systems, AI tools and
            automations for companies tired of manual work and awkward
            off-the-shelf software.
          </p>

          <p className="mt-4 max-w-2xl leading-relaxed text-gray-400">
            Every project is scoped, designed and built around the way your
            business actually works — never bent to fit a product we happen
            to sell.
          </p>
        </div>

        <div className="relative flex justify-center">
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[90px]"
            aria-hidden="true"
          />

          <img
            src={heroGraphic}
            alt="Three-dimensional circuit board carrying the ADM logo"
            width="420"
            height="420"
            loading="eager"
            decoding="async"
            className="relative z-10 w-[70%] max-w-[380px] drop-shadow-[0_0_60px_rgba(59,130,246,0.15)] lg:w-full lg:max-w-[420px]"
          />
        </div>
      </section>


      {/* The three letters */}
      <section className="border-y border-white/6 bg-white/[0.012]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-xs font-medium tracking-[0.18em] text-blue-400 uppercase">
              What the name stands for
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Three letters. One way of working.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {letters.map((item, index) => (
              <Reveal
                key={item.letter}
                delay={index * 0.08}
                className="h-full"
              >
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-7 transition duration-300 hover:border-white/16">
                  <span
                    className="text-outline pointer-events-none absolute -top-10 -right-4 font-display text-[10rem] leading-none font-bold opacity-60 transition duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    {item.letter}
                  </span>

                  <span
                    className={`relative flex h-12 w-12 items-center justify-center rounded-xl border font-display text-xl font-bold ${item.accent}`}
                  >
                    {item.letter}
                  </span>

                  <h3 className="relative mt-5 text-xl font-bold text-white">
                    {item.word}
                  </h3>

                  <p className="relative mt-3 text-sm leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* Why we exist */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="font-mono text-xs font-medium tracking-[0.18em] text-cyan-300 uppercase">
            Why ADM exists
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Behind most companies sits the same picture.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5 leading-relaxed text-gray-400">
            <p>
              Information copied between spreadsheets. Reports assembled by
              hand. Reminders that live in someone's head. Programs that
              almost — but never quite — fit the way people actually work.
            </p>

            <p>
              ADM Innovations was started to attack exactly that. Not
              technology for its own sake, but systems that quietly remove
              repetitive work, make information visible and let a business
              look as professional online as it is in person.
            </p>

            <p>
              That is also why we work the way we do: fixed scope before the
              start, a review of the working solution before payment, and code
              that ends up belonging to you.
            </p>
          </div>
        </Reveal>
      </section>


      {/* Values */}
      <section className="border-t border-white/6 bg-white/[0.012]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-xs font-medium tracking-[0.18em] text-blue-400 uppercase">
              Values
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              What we refuse to compromise on.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {values.map((value, index) => (
              <Reveal
                key={value.title}
                delay={(index % 2) * 0.07}
                className="h-full"
              >
                <InfoPanel
                  as="article"
                  className="h-full p-6 sm:p-7"
                >
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-gray-400">
                    {value.description}
                  </p>
                </InfoPanel>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-16 pb-24 sm:px-6 sm:pb-28">
        <Reveal>
          <InfoPanel className="px-6 py-11 text-center sm:px-12 sm:py-14">
            <div
              className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-96 max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[80px]"
              aria-hidden="true"
            />

            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                The best way to know us is to build something with us.
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-400">
                The first conversation is free, direct and jargon-free. Bring
                a problem, a process or an idea.
              </p>

              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.28)]"
                >
                  Start the conversation
                  <ArrowIcon />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/12 bg-white/4 px-6 py-3.5 font-semibold text-gray-200 transition hover:border-white/25 hover:bg-white/7"
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
