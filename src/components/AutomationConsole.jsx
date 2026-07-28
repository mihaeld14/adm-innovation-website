import { useEffect, useState } from "react"


function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
}


const scenarios = [
  {
    id: "invoice-intake",
    label: "invoice-intake",
    lines: [
      { tone: "cmd", text: "adm run invoice-intake" },
      { tone: "muted", text: "· watching inbox for attachments…" },
      { tone: "info", text: "→ new invoice detected — INV-2047.pdf" },
      { tone: "ok", text: "✓ data extracted: client, total, due date (0.8s)" },
      { tone: "ok", text: "✓ record added to the accounting sheet" },
      { tone: "ok", text: "✓ payment reminder scheduled automatically" },
      { tone: "ok", text: "✓ summary sent to finance@yourcompany.com" },
      { tone: "done", text: "● done in 4.2s — 0 manual steps" },
    ],
  },
  {
    id: "weekly-report",
    label: "weekly-report",
    lines: [
      { tone: "cmd", text: "adm run weekly-report" },
      { tone: "muted", text: "· collecting data from 4 connected systems…" },
      { tone: "ok", text: "✓ sales figures pulled from the CRM" },
      { tone: "ok", text: "✓ hours synced from the time tracker" },
      { tone: "ok", text: "✓ KPIs calculated and charted" },
      { tone: "info", text: "→ report compiled — weekly-report.pdf" },
      { tone: "ok", text: "✓ delivered to the management channel" },
      { tone: "done", text: "● done in 6.8s — every Monday, 07:00" },
    ],
  },
  {
    id: "lead-router",
    label: "lead-router",
    lines: [
      { tone: "cmd", text: "adm run lead-router" },
      { tone: "muted", text: "· new form submission received…" },
      { tone: "ok", text: "✓ lead enriched with company details" },
      { tone: "ok", text: "✓ scored 87/100 — high intent" },
      { tone: "info", text: "→ routed to sales with full context" },
      { tone: "ok", text: "✓ follow-up email drafted for approval" },
      { tone: "done", text: "● done in 2.1s — human approves, robot types" },
    ],
  },
]


const toneClasses = {
  cmd: "text-gray-100",
  muted: "text-gray-500",
  info: "text-sky-300",
  ok: "text-emerald-300",
  done: "text-amber-300",
}


function ConsoleLine({ line, animate }) {
  return (
    <p
      className={`${animate ? "console-line" : ""} ${toneClasses[line.tone]} leading-relaxed`}
    >
      {line.tone === "cmd" && (
        <span className="mr-2 text-blue-400">$</span>
      )}

      {line.text}
    </p>
  )
}


/*
  Fake terminal that "runs" example automations line by line,
  cycling between scenarios. Visitors can also switch scenarios
  through the tabs above the output.
*/
function AutomationConsole() {
  const reducedMotion = prefersReducedMotion()

  const [scenarioIndex, setScenarioIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(0)

  const scenario = scenarios[scenarioIndex]
  const finished = visibleCount >= scenario.lines.length
  const running = !reducedMotion && !finished


  useEffect(() => {
    if (reducedMotion) {
      return undefined
    }

    let timeoutId

    if (!finished) {
      timeoutId = window.setTimeout(() => {
        setVisibleCount((count) => count + 1)
      }, visibleCount === 0 ? 400 : 620)
    } else {
      timeoutId = window.setTimeout(() => {
        setVisibleCount(0)
        setScenarioIndex((index) => (index + 1) % scenarios.length)
      }, 3400)
    }

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [reducedMotion, finished, visibleCount, scenarioIndex])


  const handleTabClick = (index) => {
    setScenarioIndex(index)
    setVisibleCount(reducedMotion ? scenarios[index].lines.length : 0)
  }


  const linesToShow = reducedMotion
    ? scenario.lines
    : scenario.lines.slice(0, visibleCount)


  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#070a10]/90
        shadow-[0_24px_80px_rgba(0,0,0,0.45)]
      "
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-blue-500/10 blur-[80px]"
        aria-hidden="true"
      />

      {/* Window header */}
      <div className="flex items-center justify-between gap-4 border-b border-white/8 px-5 py-3.5">
        <div
          className="flex items-center gap-2"
          aria-hidden="true"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
        </div>

        <p className="hidden text-xs font-medium tracking-[0.14em] text-gray-500 uppercase sm:block">
          adm · automation console
        </p>

        <p className="flex items-center gap-2 text-xs font-medium text-emerald-300">
          <span
            className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-status"
            aria-hidden="true"
          />
          live
        </p>
      </div>

      {/* Scenario tabs */}
      <div
        className="flex flex-wrap gap-1.5 border-b border-white/8 px-4 py-3"
        role="tablist"
        aria-label="Example automations"
      >
        {scenarios.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={index === scenarioIndex}
            onClick={() => handleTabClick(index)}
            className={`
              rounded-lg
              px-3
              py-1.5
              font-mono
              text-xs
              transition
              ${
                index === scenarioIndex
                  ? "bg-blue-500/12 text-blue-300"
                  : "text-gray-500 hover:bg-white/5 hover:text-gray-300"
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Output */}
      <div
        className="min-h-[264px] px-5 py-5 font-mono text-[13px] sm:min-h-[276px] sm:px-6 sm:text-sm"
        aria-live="off"
      >
        {linesToShow.map((line) => (
          <ConsoleLine
            key={`${scenario.id}-${line.text}`}
            line={line}
            animate={!reducedMotion}
          />
        ))}

        {running && (
          <span
            className="caret-blink mt-0.5 inline-block h-4 w-2 bg-blue-400/80 align-middle"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  )
}


export default AutomationConsole
