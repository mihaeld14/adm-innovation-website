import { useEffect, useRef, useState } from "react"
import { Link, NavLink, useLocation } from "react-router"

import logo from "../assets/Logo.webp"
import LanguageSwitcher from "./LanguageSwitcher"
import { useLanguage } from "../i18n/context"
import { localisePath } from "../i18n/config"
import { getServices } from "../data/servicesData"


function ChevronIcon({ open = false }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`h-4 w-4 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="m5 7.5 5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const servicesRef = useRef(null)
  const location = useLocation()

  const { language, basePath, t } = useLanguage()

  /* Resolves a language-free path to the current language. */
  const url = (path) => localisePath(path, language)

  const navigation = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.process, href: "/process" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ]

  const serviceNavigation = [
    ...getServices(language).map((service) => ({
      label: service.nav,
      href: `/services/${service.slug}`,
      description: service.shortDescription,
      number: service.number,
    })),
    {
      label: t.nav.basicWebsite,
      href: "/services/basic-website",
      description: t.nav.basicWebsiteDescription,
      number: "06",
    },
  ]

  const servicesActive = basePath.startsWith("/services")


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


  /* On navigation: scroll to top and close any open menus */
  useEffect(() => {
    window.scrollTo(0, 0)

    const closeTimer = window.setTimeout(() => {
      setMenuOpen(false)
      setServicesOpen(false)
      setMobileServicesOpen(false)
    }, 0)

    return () => {
      window.clearTimeout(closeTimer)
    }
  }, [location.pathname])


  /* Escape closes the dropdown and the mobile navigation */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setServicesOpen(false)
        setMenuOpen(false)
        setMobileServicesOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])


  /* A click outside the dropdown closes it */
  useEffect(() => {
    if (!servicesOpen) {
      return undefined
    }

    const handlePointerDown = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setServicesOpen(false)
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
    }
  }, [servicesOpen])


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
        setMobileServicesOpen(false)
      } else {
        setServicesOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])


  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])


  const handleServicesBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setServicesOpen(false)
    }
  }


  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "py-2" : "py-3.5"
      } ${
        scrolled || menuOpen || servicesOpen
          ? "border-white/10 bg-[#060709]/88 backdrop-blur-lg"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="w-full px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 lg:gap-6">
          {/* Logo */}
          <Link
            to={url("/")}
            className="group relative z-50 flex min-w-0 items-center justify-self-start gap-3"
            aria-label={t.nav.homeAria}
          >
            <img
              src={logo}
              alt=""
              width="160"
              height="160"
              fetchPriority="high"
              decoding="async"
              className={`h-11 w-auto shrink-0 origin-left object-contain transition-transform duration-300 sm:h-14 ${
                scrolled ? "scale-90" : "scale-100"
              }`}
            />

            <span className="min-w-0">
              <span className="block font-display text-sm leading-tight font-bold whitespace-nowrap text-white sm:text-base">
                ADM Innovations
              </span>

              <span className="block font-mono text-[8px] leading-tight tracking-[0.14em] whitespace-nowrap text-gray-500 uppercase sm:text-[10px]">
                {t.nav.tagline}
              </span>
            </span>
          </Link>


          {/* Desktop navigation */}
          <nav
            className="hidden items-center justify-self-center gap-0.5 rounded-full border border-white/10 bg-white/3 p-1 md:flex"
            aria-label={t.nav.mainNavigation}
          >
            {navigation.map((item) => {
              if (item.href === "/services") {
                return (
                  <div
                    key={item.href}
                    ref={servicesRef}
                    className="relative flex items-center"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    onBlur={handleServicesBlur}
                  >
                    <NavLink
                      to={url(item.href)}
                      className={`rounded-l-full py-2 pr-1.5 pl-3.5 text-sm font-medium transition ${
                        servicesActive
                          ? "bg-white/9 text-white shadow-sm"
                          : "text-gray-400 hover:bg-white/6 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </NavLink>

                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                      aria-label={t.nav.openServicesSubmenu}
                      onClick={() => setServicesOpen((current) => !current)}
                      className={`rounded-r-full py-2.5 pr-2.5 pl-0.5 transition ${
                        servicesActive
                          ? "bg-white/9 text-white"
                          : "text-gray-400 hover:bg-white/6 hover:text-white"
                      }`}
                    >
                      <ChevronIcon open={servicesOpen} />
                    </button>


                    {/* Services dropdown */}
                    <div
                      className={`absolute top-full left-1/2 z-50 w-[calc(100vw-2rem)] max-w-[720px] -translate-x-1/2 pt-4 transition-[transform,opacity] duration-200 ${
                        servicesOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-2 opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d13]/97 p-2.5 shadow-[0_30px_100px_rgba(0,0,0,0.65)] backdrop-blur-2xl">
                        <div className="grid grid-cols-2 gap-1">
                          {serviceNavigation.map((service) => {
                            const isActive = basePath === service.href

                            return (
                              <Link
                                key={service.href}
                                to={url(service.href)}
                                tabIndex={servicesOpen ? 0 : -1}
                                className={`group/service flex items-start gap-3.5 rounded-xl border px-3.5 py-3.5 transition duration-200 ${
                                  isActive
                                    ? "border-blue-500/25 bg-blue-500/8"
                                    : "border-transparent hover:border-white/8 hover:bg-white/5"
                                }`}
                              >
                                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-400/15 bg-blue-500/7 font-mono text-[11px] font-semibold text-blue-300">
                                  {service.number}
                                </span>

                                <span className="min-w-0 flex-1">
                                  <span className="block font-medium text-white">
                                    {service.label}
                                  </span>

                                  <span className="mt-1 block line-clamp-2 text-xs leading-relaxed text-gray-500 transition group-hover/service:text-gray-400">
                                    {service.description}
                                  </span>
                                </span>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <NavLink
                  key={item.href}
                  to={url(item.href)}
                  end={item.href === "/"}
                  className={({ isActive }) =>
                    `rounded-full px-3.5 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-white/9 text-white shadow-sm"
                        : "text-gray-400 hover:bg-white/6 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            })}
          </nav>


          {/* Language switch + primary CTA */}
          <div className="hidden items-center justify-self-end gap-2.5 md:flex">
            <LanguageSwitcher />

            <Link
              to={url("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-white shadow-[0_0_30px_rgba(37,99,235,0.25)] transition duration-200 hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] active:scale-[0.98]"
            >
              {t.common.freeConsultation}
            </Link>
          </div>


          {/* Mobile: language switch sits outside the menu so it is always reachable */}
          <div className="col-start-3 flex items-center gap-2 justify-self-end md:hidden">
            <LanguageSwitcher />

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-white transition hover:bg-white/8"
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <span className="relative block h-5 w-5">
                <span
                  className={`absolute top-0.75 left-0 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                    menuOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />

                <span
                  className={`absolute top-2.25 left-0 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />

                <span
                  className={`absolute top-3.75 left-0 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                    menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>


      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
          menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mx-auto w-full px-3 pt-4 pb-3 sm:px-4">
            <nav
              className="max-h-[calc(100vh-100px)] overflow-y-auto rounded-2xl border border-white/10 bg-[#0a0d13]/96 p-3 shadow-2xl shadow-black/50"
              aria-label={t.nav.mobileNavigation}
            >
              {navigation.map((item) => {
                if (item.href === "/services") {
                  return (
                    <div key={item.href}>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileServicesOpen((current) => !current)
                        }
                        className={`flex min-h-12 w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium transition ${
                          servicesActive
                            ? "bg-white/8 text-white"
                            : "text-gray-300 hover:bg-white/6 hover:text-white"
                        }`}
                        aria-expanded={mobileServicesOpen}
                        aria-controls="mobile-services-navigation"
                      >
                        <span>{item.label}</span>
                        <ChevronIcon open={mobileServicesOpen} />
                      </button>

                      <div
                        id="mobile-services-navigation"
                        className={`grid transition-[grid-template-rows,opacity] duration-250 ${
                          mobileServicesOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="mt-1 ml-4 space-y-0.5 border-l border-white/10 py-1 pl-3">
                            <Link
                              to={url("/services")}
                              className="flex min-h-11 items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-blue-300 transition hover:bg-white/5 hover:text-blue-200"
                            >
                              {t.common.allServices}
                              <span aria-hidden="true">&rarr;</span>
                            </Link>

                            {serviceNavigation.map((service) => (
                              <Link
                                key={service.href}
                                to={url(service.href)}
                                className={`flex min-h-11 items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                                  basePath === service.href
                                    ? "bg-blue-500/8 text-white"
                                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                                }`}
                              >
                                <span className="font-mono text-xs font-semibold text-blue-400">
                                  {service.number}
                                </span>

                                <span>{service.label}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }

                return (
                  <NavLink
                    key={item.href}
                    to={url(item.href)}
                    end={item.href === "/"}
                    className={({ isActive }) =>
                      `flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition ${
                        isActive
                          ? "bg-white/8 text-white"
                          : "text-gray-300 hover:bg-white/6 hover:text-white"
                      }`
                    }
                  >
                    {item.label}

                    <span
                      className="text-gray-600"
                      aria-hidden="true"
                    >
                      &rarr;
                    </span>
                  </NavLink>
                )
              })}

              <Link
                to={url("/contact")}
                className="mt-3 flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
              >
                {t.common.freeConsultation}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}


export default Navbar
