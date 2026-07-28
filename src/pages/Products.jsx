import { useState } from "react"
import { Link } from "react-router"
import {
  ArrowIcon,
  CheckIcon,
  InfoPanel,
} from "../components/CardStandards"
import Reveal from "../components/Reveal"


const statusStyles = {
  building: {
    label: "In development",
    className: "border-blue-400/30 bg-blue-500/8 text-blue-300",
    dot: "bg-blue-400",
  },
  design: {
    label: "In design",
    className: "border-cyan-400/30 bg-cyan-500/8 text-cyan-300",
    dot: "bg-cyan-400",
  },
  concept: {
    label: "Concept",
    className: "border-purple-400/30 bg-purple-500/8 text-purple-300",
    dot: "bg-purple-400",
  },
}


const products = [
  {
    name: "Flowdesk",
    tagline: "The operations hub for small teams",
    status: "building",
    category: "Internal operations",
    description:
      "One place for tasks, assets, requests and approvals — instead of six spreadsheets and a group chat. Built for companies that outgrew the shared folder but do not want enterprise software.",
    features: [
      "Task and project tracking",
      "Company asset register",
      "Request and approval flows",
      "Role-based employee access",
    ],
  },
  {
    name: "Paperless",
    tagline: "Documents in, structured data out",
    status: "design",
    category: "AI document processing",
    description:
      "Drop in invoices, contracts or forms and get clean, structured records back. Fields are extracted, validated and pushed straight into the systems you already use.",
    features: [
      "Automatic field extraction",
      "Validation before anything is saved",
      "Export to sheets, databases or APIs",
      "Full audit trail per document",
    ],
  },
  {
    name: "Pulse",
    tagline: "Your business in one honest dashboard",
    status: "design",
    category: "Reporting & visibility",
    description:
      "Connects the tools a company already runs on and turns them into a single view of what actually happened this week — no manual report assembly required.",
    features: [
      "Connectors for common business tools",
      "Scheduled reports by email",
      "Custom metrics per team",
      "Alerts when numbers move",
    ],
  },
  {
    name: "Deskmate",
    tagline: "An AI assistant that knows your company",
    status: "concept",
    category: "AI knowledge",
    description:
      "An internal assistant grounded in your own procedures, policies and documentation, so employees stop asking the same questions and start getting sourced answers.",
    features: [
      "Answers from approved internal documents",
      "Source references on every reply",
      "Permission-aware responses",
      "Fits inside your existing tools",
    ],
  },
]


const productPrinciples = [
  {
    title: "Built from real projects",
    description:
      "Every product on this page started as something a client actually needed. Nothing here is a feature checklist invented in a meeting.",
  },
  {
    title: "Small enough to learn in a day",
    description:
      "If a team needs a training programme to use your software, the software is wrong. These tools aim to be obvious.",
  },
  {
    title: "Your data stays yours",
    description:
      "Clear boundaries about what is stored, where it lives and who can see it — including with anything AI-powered.",
  },
]


function StatusBadge({ status }) {
  const style = statusStyles[status]

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${style.className}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${style.dot}`}
        aria-hidden="true"
      />
      {style.label}
    </span>
  )
}


function Products() {
  const [openProduct, setOpenProduct] = useState(products[0].name)

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-28 pb-12 sm:px-6 sm:pt-40 sm:pb-16">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_330px] lg:gap-12">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.2em]">
              Products
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl leading-[1] font-semibold tracking-tight text-white sm:mt-5 sm:text-6xl md:text-7xl">
              Tools we are building{" "}
              <span className="gradient-text">in the open.</span>
            </h1>

            <p className="mt-5 max-w-2xl leading-relaxed text-gray-400 sm:mt-7 sm:text-lg">
              Alongside client projects, we develop our own software products.
              Each one began as a problem we kept solving over and over — so we
              decided to solve it properly, once.
            </p>
          </div>

          <InfoPanel
            as="aside"
            className="p-6"
          >
            <p className="text-xs font-medium tracking-[0.16em] text-blue-400 uppercase">
              Honest status
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              None of these are on sale yet.
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              This is a roadmap, not a shop. If one of them solves a problem you
              have today, we can build your version as a custom project now.
            </p>
          </InfoPanel>
        </div>
      </section>


      {/* Product list */}
      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-6 sm:pb-20">
        <div className="space-y-4">
          {products.map((product, index) => {
            const isOpen = openProduct === product.name

            return (
              <Reveal
                key={product.name}
                delay={index * 0.06}
              >
                <article
                  className={`
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    transition
                    duration-300
                    ${
                      isOpen
                        ? "border-blue-500/25 bg-white/[0.045]"
                        : "border-white/8 bg-white/[0.025] hover:border-white/16"
                    }
                  `}
                >
                  <div
                    className={`pointer-events-none absolute -top-24 -right-16 h-52 w-52 rounded-full bg-blue-500/10 blur-[80px] transition duration-500 ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setOpenProduct(isOpen ? null : product.name)
                    }
                    aria-expanded={isOpen}
                    className="
                      relative
                      flex
                      w-full
                      cursor-pointer
                      flex-col
                      gap-4
                      p-6
                      text-left
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-blue-500/60
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                      sm:gap-8
                      sm:p-8
                    "
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                          {product.name}
                        </h2>

                        <StatusBadge status={product.status} />
                      </div>

                      <p className="mt-2 text-gray-400">
                        {product.tagline}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-4">
                      <span className="hidden text-xs tracking-[0.14em] text-gray-600 uppercase lg:block">
                        {product.category}
                      </span>

                      <span
                        className={`
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          text-lg
                          font-light
                          transition
                          duration-300
                          ${
                            isOpen
                              ? "rotate-45 border-blue-400/35 bg-blue-500/8 text-blue-300"
                              : "border-white/10 bg-black/10 text-gray-500"
                          }
                        `}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </div>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="relative grid gap-6 border-t border-white/8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
                        <p className="leading-relaxed text-gray-400">
                          {product.description}
                        </p>

                        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                          {product.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-3 text-sm text-gray-300"
                            >
                              <CheckIcon className="mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>


      {/* Product principles */}
      <section className="border-y border-white/6 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.18em] text-blue-400 uppercase sm:text-sm">
              How we build products
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:mt-4 sm:text-5xl">
              Fewer features, better decisions.
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-3">
            {productPrinciples.map((principle, index) => (
              <Reveal
                key={principle.title}
                delay={index * 0.08}
              >
                <InfoPanel
                  as="article"
                  className="h-full p-6 sm:p-7"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {principle.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-gray-400">
                    {principle.description}
                  </p>
                </InfoPanel>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-16 pb-24 sm:px-6 sm:py-20 sm:pb-28">
        <Reveal>
          <InfoPanel className="px-6 py-11 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-96 max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/8 blur-[80px]" />

            <div className="relative">
              <p className="text-xs font-medium tracking-[0.18em] text-blue-400 uppercase sm:text-sm">
                Need it sooner?
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                We can build your version before ours is finished.
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-gray-400">
                Tell us which of these problems you recognize. A custom build
                shaped around your workflow can start now.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Discuss a custom build
                  <ArrowIcon />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center rounded-xl border border-white/12 bg-white/4 px-6 py-3.5 font-semibold text-gray-200 transition hover:border-white/25 hover:bg-white/7"
                >
                  Explore services
                </Link>
              </div>
            </div>
          </InfoPanel>
        </Reveal>
      </section>
    </div>
  )
}


export default Products
