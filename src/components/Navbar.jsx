import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router"
import logo from "../assets/Logo.webp"

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)

    const closeMenuTimer = window.setTimeout(() => {
      setMenuOpen(false)
    }, 0)

    return () => {
      window.clearTimeout(closeMenuTimer)
    }
  }, [location.pathname])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "py-2.5" : "py-5"
      } ${
        scrolled || menuOpen
          ? "border-white/10 bg-[#050505]/85 backdrop-blur-lg"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="w-full px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 lg:gap-6">
          <Link
            to="/"
            className="group relative z-50 flex min-w-0 items-center justify-self-start gap-3"
            aria-label="ADM Innovations home"
          >
            <img
              src={logo}
              alt="ADM Innovations logo"
              width="160"
              height="160"
              fetchPriority="high"
              decoding="async"
              className={`h-13 w-auto shrink-0 origin-left object-contain transition-transform duration-300 min-[380px]:h-15 sm:h-20 ${
                scrolled ? "scale-90" : "scale-100"
              }`}
            />

            <div
              className={`min-w-0 origin-left transition-transform duration-300 ${
                scrolled ? "scale-[0.94]" : "scale-100"
              }`}
            >
              <div className="text-[13px] leading-tight font-semibold whitespace-nowrap text-white min-[380px]:text-sm sm:text-base">
                ADM Innovations
              </div>
              <div className="text-[8px] leading-tight tracking-[0.06em] whitespace-nowrap text-gray-500 uppercase min-[380px]:text-[9px] sm:text-[11px] sm:tracking-[0.18em]">
                Software &amp; Automations
              </div>
            </div>
          </Link>

          <nav
            className="hidden items-center justify-self-center gap-1 rounded-full border border-white/10 bg-white/3 p-1 md:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                end={item.href === "/"}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-white/9 text-white shadow-sm"
                      : "text-gray-400 hover:bg-white/6 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="group relative isolate hidden items-center justify-center justify-self-end gap-2 rounded-full border border-white/10 bg-white/3 px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-white shadow-[0_0_34px_rgba(37,99,235,0.14)] backdrop-blur-md transition hover:scale-[1.02] hover:border-white/20 hover:bg-white/8 hover:shadow-[0_0_44px_rgba(59,130,246,0.22)] active:scale-[0.98] md:inline-flex"
          >
            <span
              className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-blue-500/12 opacity-80 blur-2xl transition duration-300 group-hover:bg-blue-400/18 group-hover:opacity-100"
              aria-hidden="true"
            />
            <span className="relative">Start a project</span>
            <span
              className="relative text-gray-400 transition group-hover:text-blue-200"
              aria-hidden="true"
            >
              &rarr;
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="relative z-50 col-start-3 flex h-11 w-11 items-center justify-center justify-self-end rounded-xl border border-white/10 bg-white/4 text-white transition hover:bg-white/8 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <div className="relative h-5 w-5">
              <span className={`absolute top-0.75 left-0 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`absolute top-2.25 left-0 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute top-3.75 left-0 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mx-auto w-full px-3 pt-5 pb-3 sm:px-4">
            <nav className="rounded-2xl border border-white/10 bg-[#0a0a0a]/95 p-3 shadow-2xl shadow-black/50" aria-label="Mobile navigation">
              {navigation.map((item, index) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  end={item.href === "/"}
                  style={{ transitionDelay: menuOpen ? `${index * 40}ms` : "0ms" }}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-200 ${
                      menuOpen ? "translate-x-0 opacity-100" : "-translate-x-2.5 opacity-0"
                    } ${
                      isActive
                        ? "bg-white/8 text-white"
                        : "text-gray-300 hover:bg-white/6 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                  <span className="text-gray-600" aria-hidden="true">&rarr;</span>
                </NavLink>
              ))}

              <Link to="/contact" className="mt-3 flex items-center justify-center rounded-xl bg-white px-5 py-3.5 font-semibold text-black transition hover:bg-gray-200">
                Start a project
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
