import { Link } from "react-router"
import servicesData from "../data/servicesData"
import {
  ArrowIcon,
  CheckIcon,
  ClickableCard,
  InfoPanel,
} from "../components/CardStandards"
import Reveal from "../components/Reveal"
import usePageMeta from "../lib/meta"


function Services() {
  usePageMeta({
    title: "Services — software, AI and automation",
    description:
      "Custom business software, AI solutions, process automation, websites and support — with a fixed scope and review before payment.",
    path: "/services",
  })

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-32 pb-12 sm:px-6 sm:pt-40 sm:pb-14">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_360px] lg:gap-12">
          <div>
            <p className="font-mono text-xs font-medium tracking-[0.18em] text-blue-400 uppercase">
              Services
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl leading-[1.02] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              We start with the problem, not the technology.
            </h1>

            <p className="mt-5 max-w-2xl leading-relaxed text-gray-400 sm:text-lg">
              Every service is described by what it solves — not by
              programming languages. Pick whichever is closest to your
              situation, or simply describe the problem to us.
            </p>
          </div>

          <InfoPanel
            as="aside"
            className="p-6"
          >
            <p className="font-mono text-xs font-medium tracking-[0.14em] text-blue-400 uppercase">
              How payment works
            </p>

            <h2 className="mt-3 text-xl font-bold tracking-tight text-white">
              Review first. Pay after.
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Custom projects require no advance payment — you see the working
              solution before you pay. Scope and price are fixed in writing
              before we start.
            </p>

            <p className="mt-4 border-t border-white/8 pt-3.5 text-xs leading-relaxed text-gray-500">
              Exception: the Basic Business Website package (€120) is paid in
              advance.
            </p>
          </InfoPanel>
        </div>
      </section>


      {/* Services — detailed cards */}
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-6 sm:pb-20">
        <div className="space-y-4">
          {servicesData.map((service, index) => (
            <Reveal
              key={service.slug}
              delay={Math.min(index * 0.05, 0.15)}
            >
              <ClickableCard
                to={`/services/${service.slug}`}
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
                    The problem
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {service.problem}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[11px] tracking-[0.14em] text-gray-600 uppercase">
                    Our solution
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-gray-300">
                    {service.solution}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {service.useCases.slice(0, 3).map((useCase) => (
                      <li
                        key={useCase}
                        className="flex items-start gap-2 text-xs text-gray-500"
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
            to="/services/basic-website"
            className="border-dashed p-6 sm:p-8"
            contentClassName="flex flex-wrap items-center justify-between gap-6 pr-10"
          >
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-semibold text-blue-400">
                Fixed package · the only service paid in advance
              </span>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
                Basic Business Website — €120
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                Up to six pages, responsive design, a contact form, basic SEO
                and deployment support. Around 5–7 working days once the
                content is supplied.
              </p>
            </div>

            <span className="inline-flex items-center gap-2 font-semibold text-blue-300">
              Package details
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
                Not sure which service you need?
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-400">
                Describe the problem or the process — we will suggest the most
                suitable and most economical approach.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.28)]"
              >
                Describe your problem
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
