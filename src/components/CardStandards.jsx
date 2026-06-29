import { Link } from "react-router"


function joinClasses(...classes) {
  return classes.filter(Boolean).join(" ")
}


export function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={joinClasses(
        "h-5 w-5 transition-transform duration-300 group-hover:translate-x-1",
        className,
      )}
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


export function DownIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={joinClasses(
        "h-5 w-5 transition-transform duration-300 group-hover:translate-y-1",
        className,
      )}
    >
      <path
        d="M12 5v14M6 13l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


export function CheckIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={joinClasses(
        "h-4 w-4 shrink-0 text-blue-400",
        className,
      )}
    >
      <path
        d="m4 10 4 4 8-8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


export function ActionIndicator({
  direction = "right",
  className = "",
}) {
  return (
    <span
      className={joinClasses(
        `
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-black/10
          text-gray-500
          transition
          duration-300
          group-hover:border-blue-400/35
          group-hover:bg-blue-500/8
          group-hover:text-blue-300
        `,
        className,
      )}
    >
      {direction === "down" ? <DownIcon /> : <ArrowIcon />}
    </span>
  )
}


/*
  Static information standard:
  - smaller corner radius;
  - flat neutral background;
  - blue accent line on the left;
  - no hover movement or pointer affordance.
*/
export function InfoPanel({
  as: Component = "div",
  children,
  className = "",
  contentClassName = "",
  glow = true,
  ...props
}) {
  return (
    <Component
      className={joinClasses(
        `
          relative
          overflow-hidden
          rounded-2xl
          border
          border-white/8
          border-l-2
          border-l-blue-500/60
          bg-white/[0.025]
        `,
        className,
      )}
      {...props}
    >
      {glow && (
        <div
          className="pointer-events-none absolute -top-16 -left-16 h-36 w-36 rounded-full bg-blue-500/8 blur-[70px]"
          aria-hidden="true"
        />
      )}

      <div className={joinClasses("relative", contentClassName)}>
        {children}
      </div>
    </Component>
  )
}


/*
  Clickable card standard:
  - larger corner radius;
  - visible action indicator;
  - stronger surface and shadow;
  - movement, border and glow feedback on hover;
  - keyboard focus ring.
*/
export function ClickableCard({
  to,
  href,
  children,
  className = "",
  contentClassName = "",
  indicator = "right",
  indicatorClassName = "absolute top-6 right-6",
  ...props
}) {
  const classes = joinClasses(
    `
      group
      relative
      block
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/[0.035]
      shadow-[0_16px_45px_rgba(0,0,0,0.14)]
      transition
      duration-300
      hover:-translate-y-1
      hover:border-blue-500/35
      hover:bg-white/[0.06]
      hover:shadow-[0_22px_65px_rgba(0,0,0,0.24)]
      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-blue-500/60
    `,
    className,
  )

  const content = (
    <>
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-blue-500/0 blur-[70px] transition duration-500 group-hover:bg-blue-500/14"
        aria-hidden="true"
      />

      {indicator && (
        <ActionIndicator
          direction={indicator}
          className={indicatorClassName}
        />
      )}

      <div className={joinClasses("relative", contentClassName)}>
        {children}
      </div>

      <div
        className="absolute right-7 bottom-0 left-7 h-px origin-left scale-x-0 bg-linear-to-r from-transparent via-blue-500 to-transparent transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </>
  )

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        {...props}
      >
        {content}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={classes}
      {...props}
    >
      {content}
    </a>
  )
}
