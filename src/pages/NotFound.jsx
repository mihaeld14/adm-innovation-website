import { Link } from "react-router"
import { ArrowIcon } from "../components/CardStandards"


const quickLinks = [
  {
    label: "Home",
    href: "/",
    description: "Back to the beginning",
  },
  {
    label: "Services",
    href: "/services",
    description: "What we build",
  },
  {
    label: "Products",
    href: "/products",
    description: "What we are building",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Tell us your idea",
  },
]


function NotFound() {
  return (
    <section
      className="
        relative
        mx-auto
        flex
        min-h-screen
        max-w-4xl
        flex-col
        items-center
        justify-center
        overflow-hidden
        px-5
        py-28
        text-center
        sm:px-6
      "
    >
      {/* Giant floating 404 */}
      <p
        className="
          text-outline
          animate-float
          pointer-events-none
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          font-display
          text-[44vw]
          leading-none
          font-bold
          tracking-tighter
          sm:text-[26rem]
        "
        aria-hidden="true"
      >
        404
      </p>

      <div className="relative">
        <p className="text-xs font-medium tracking-[0.18em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.2em]">
          Error 404
        </p>

        <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
          This page never shipped.
        </h1>

        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-gray-400 sm:text-lg">
          The address you followed does not exist, or it moved somewhere more
          useful. Nothing is broken on your side.
        </p>

        {/* Terminal note */}
        <div
          className="
            mx-auto
            mt-9
            max-w-md
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-[#070a10]/90
            text-left
            font-mono
            text-[13px]
            shadow-[0_18px_60px_rgba(0,0,0,0.4)]
          "
        >
          <div className="flex items-center gap-2 border-b border-white/8 px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-red-400/60" />
            <span className="h-2 w-2 rounded-full bg-amber-400/60" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/60" />
          </div>

          <div className="space-y-1.5 px-4 py-4">
            <p className="text-gray-100">
              <span className="mr-2 text-blue-400">$</span>
              adm locate page
            </p>

            <p className="text-gray-500">· searching the site map…</p>

            <p className="text-amber-300">
              ! no match found
            </p>

            <p className="text-emerald-300">
              ✓ suggesting somewhere better
              <span
                className="caret-blink ml-1 inline-block h-3.5 w-1.5 translate-y-0.5 bg-blue-400/80"
                aria-hidden="true"
              />
            </p>
          </div>
        </div>

        {/* Quick links */}
        <div className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="
                group
                flex
                items-center
                justify-between
                gap-4
                rounded-2xl
                border
                border-white/8
                bg-white/[0.025]
                px-5
                py-4
                text-left
                transition
                duration-300
                hover:-translate-y-0.5
                hover:border-blue-500/30
                hover:bg-white/[0.05]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500/60
              "
            >
              <span>
                <span className="block font-semibold text-white">
                  {link.label}
                </span>

                <span className="mt-0.5 block text-sm text-gray-500">
                  {link.description}
                </span>
              </span>

              <span className="text-gray-600 transition group-hover:text-blue-300">
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>

        <Link
          to="/"
          className="
            group
            mt-9
            inline-flex
            items-center
            gap-3
            rounded-xl
            bg-white
            px-6
            py-3.5
            font-semibold
            text-black
            transition
            hover:bg-gray-200
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-400/70
            focus-visible:ring-offset-2
            focus-visible:ring-offset-black
          "
        >
          Return home
          <ArrowIcon />
        </Link>
      </div>
    </section>
  )
}


export default NotFound
