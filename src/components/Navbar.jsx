import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router"
import logo from "../assets/Logo.webp"
import servicesData from "../data/servicesData"


const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]


const serviceNavigation = [
  ...servicesData.map((service) => ({
    label: service.title,
    href: `/services/${service.slug}`,
    description: service.shortDescription,
    number: service.number,
  })),
  {
    label: "Basic Business Website",
    href: "/services/basic-website",
    description:
      "A professional business website with up to six pages from €120.",
    number: "07",
  },
]


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


function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="
        h-4
        w-4
        transition-transform
        duration-200
        group-hover/service:translate-x-1
      "
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


function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const location = useLocation()

  const servicesActive =
    location.pathname === "/services" ||
    location.pathname.startsWith("/services/")


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


  useEffect(() => {
    window.scrollTo(0, 0)

    const closeMenuTimer = window.setTimeout(() => {
      setMenuOpen(false)
      setServicesOpen(false)
      setMobileServicesOpen(false)
    }, 0)

    return () => {
      window.clearTimeout(closeMenuTimer)
    }
  }, [location.pathname])


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
        scrolled ? "py-2.5" : "py-5"
      } ${
        scrolled || menuOpen || servicesOpen
          ? "border-white/10 bg-[#050505]/85 backdrop-blur-lg"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="w-full px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 lg:gap-6">
          {/* Logo */}
          <Link
            to="/"
            className="
              group
              relative
              z-50
              flex
              min-w-0
              items-center
              justify-self-start
              gap-3
            "
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


          {/* Desktop navigation */}
          <nav
            className="
              hidden
              items-center
              justify-self-center
              gap-1
              rounded-full
              border
              border-white/10
              bg-white/3
              p-1
              md:flex
            "
            aria-label="Main navigation"
          >
            {navigation.map((item) => {
              if (item.label === "Services") {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    onFocus={() => setServicesOpen(true)}
                    onBlur={handleServicesBlur}
                  >
                    <NavLink
                      to={item.href}
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                      className={`
                        flex
                        items-center
                        gap-1.5
                        rounded-full
                        px-4
                        py-2
                        text-sm
                        font-medium
                        transition
                        ${
                          servicesActive
                            ? "bg-white/9 text-white shadow-sm"
                            : "text-gray-400 hover:bg-white/6 hover:text-white"
                        }
                      `}
                    >
                      Services
                      <ChevronIcon open={servicesOpen} />
                    </NavLink>


                    {/* Desktop services dropdown */}
                    <div
                      className={`
                        absolute
                        top-full
                        left-1/2
                        z-50
                        w-[calc(100vw-2rem)]
                        max-w-[760px]
                        -translate-x-1/2
                        pt-4
                        transition-all
                        duration-200
                        ${
                          servicesOpen
                            ? "visible translate-y-0 opacity-100"
                            : "invisible -translate-y-2 opacity-0"
                        }
                      `}
                    >
                      <div
                        className="
                          overflow-hidden
                          rounded-3xl
                          border
                          border-white/10
                          bg-[#080808]/97
                          p-3
                          shadow-[0_30px_100px_rgba(0,0,0,0.65)]
                          backdrop-blur-2xl
                        "
                      >
                        <div className="grid grid-cols-2 gap-1">
                          {serviceNavigation.map((service) => {
                            const isActive =
                              location.pathname === service.href

                            return (
                              <Link
                                key={service.href}
                                to={service.href}
                                className={`
                                  group/service
                                  flex
                                  items-start
                                  gap-4
                                  rounded-2xl
                                  border
                                  px-4
                                  py-4
                                  transition
                                  duration-200
                                  ${
                                    isActive
                                      ? "border-blue-500/25 bg-blue-500/8"
                                      : "border-transparent hover:border-white/8 hover:bg-white/5"
                                  }
                                `}
                              >
                                <span
                                  className="
                                    mt-0.5
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-blue-400/15
                                    bg-blue-500/7
                                    text-xs
                                    font-semibold
                                    text-blue-300
                                  "
                                >
                                  {service.number}
                                </span>

                                <span className="min-w-0 flex-1">
                                  <span className="flex items-center justify-between gap-3">
                                    <span className="font-medium text-white">
                                      {service.label}
                                    </span>

                                    <span
                                      className="
                                        shrink-0
                                        text-gray-600
                                        transition
                                        group-hover/service:text-blue-300
                                      "
                                    >
                                      <ArrowIcon />
                                    </span>
                                  </span>

                                  <span
                                    className="
                                      mt-1.5
                                      block
                                      line-clamp-2
                                      text-xs
                                      leading-relaxed
                                      text-gray-500
                                      transition
                                      group-hover/service:text-gray-400
                                    "
                                  >
                                    {service.description}
                                  </span>
                                </span>
                              </Link>
                            )
                          })}
                        </div>

                        <div
                          className="
                            mt-3
                            flex
                            items-center
                            justify-between
                            gap-5
                            border-t
                            border-white/8
                            px-4
                            pt-3
                          "
                        >
                          <p className="text-xs text-gray-500">
                            Explore all services and project options.
                          </p>

                          <Link
                            to="/services"
                            className="
                              group/service
                              inline-flex
                              items-center
                              gap-2
                              text-sm
                              font-medium
                              text-gray-300
                              transition
                              hover:text-white
                            "
                          >
                            View all services
                            <ArrowIcon />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }

              return (
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
              )
            })}
          </nav>


          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="
              group
              relative
              isolate
              hidden
              items-center
              justify-center
              justify-self-end
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/3
              px-5
              py-2.5
              text-sm
              font-semibold
              whitespace-nowrap
              text-white
              shadow-[0_0_34px_rgba(37,99,235,0.14)]
              backdrop-blur-md
              transition
              hover:scale-[1.02]
              hover:border-white/20
              hover:bg-white/8
              hover:shadow-[0_0_44px_rgba(59,130,246,0.22)]
              active:scale-[0.98]
              md:inline-flex
            "
          >
            <span
              className="
                pointer-events-none
                absolute
                -inset-10
                -z-10
                rounded-full
                bg-blue-500/12
                opacity-80
                blur-2xl
                transition
                duration-300
                group-hover:bg-blue-400/18
                group-hover:opacity-100
              "
              aria-hidden="true"
            />

            <span className="relative">
              Start a project
            </span>

            <span
              className="
                relative
                text-gray-400
                transition
                group-hover:text-blue-200
              "
              aria-hidden="true"
            >
              &rarr;
            </span>
          </Link>


          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="
              relative
              z-50
              col-start-3
              flex
              h-11
              w-11
              items-center
              justify-center
              justify-self-end
              rounded-xl
              border
              border-white/10
              bg-white/4
              text-white
              transition
              hover:bg-white/8
              md:hidden
            "
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <div className="relative h-5 w-5">
              <span
                className={`absolute top-0.75 left-0 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                  menuOpen
                    ? "translate-y-1.5 rotate-45"
                    : ""
                }`}
              />

              <span
                className={`absolute top-2.25 left-0 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                  menuOpen
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              />

              <span
                className={`absolute top-3.75 left-0 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                  menuOpen
                    ? "-translate-y-1.5 -rotate-45"
                    : ""
                }`}
              />
            </div>
          </button>
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
          <div className="mx-auto w-full px-3 pt-5 pb-3 sm:px-4">
            <nav
              className="
                max-h-[calc(100vh-110px)]
                overflow-y-auto
                rounded-2xl
                border
                border-white/10
                bg-[#0a0a0a]/95
                p-3
                shadow-2xl
                shadow-black/50
              "
              aria-label="Mobile navigation"
            >
              {navigation.map((item, index) => {
                if (item.label === "Services") {
                  return (
                    <div
                      key={item.label}
                      style={{
                        transitionDelay: menuOpen
                          ? `${index * 40}ms`
                          : "0ms",
                      }}
                      className={`transition-all duration-200 ${
                        menuOpen
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-2.5 opacity-0"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setMobileServicesOpen((current) => !current)
                        }
                        className={`
                          flex
                          w-full
                          items-center
                          justify-between
                          rounded-xl
                          px-4
                          py-3.5
                          text-left
                          text-base
                          font-medium
                          transition
                          ${
                            servicesActive
                              ? "bg-white/8 text-white"
                              : "text-gray-300 hover:bg-white/6 hover:text-white"
                          }
                        `}
                        aria-expanded={mobileServicesOpen}
                        aria-controls="mobile-services-navigation"
                      >
                        <span>Services</span>
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
                          <div
                            className="
                              mt-1
                              space-y-1
                              border-l
                              border-white/10
                              py-1
                              pl-3
                              ml-4
                            "
                          >
                            <Link
                              to="/services"
                              className="
                                flex
                                items-center
                                justify-between
                                rounded-xl
                                px-3
                                py-3
                                text-sm
                                font-medium
                                text-blue-300
                                transition
                                hover:bg-white/5
                                hover:text-blue-200
                              "
                            >
                              View all services
                              <span aria-hidden="true">
                                &rarr;
                              </span>
                            </Link>

                            {serviceNavigation.map((service) => {
                              const isActive =
                                location.pathname === service.href

                              return (
                                <Link
                                  key={service.href}
                                  to={service.href}
                                  className={`
                                    flex
                                    items-center
                                    justify-between
                                    gap-3
                                    rounded-xl
                                    px-3
                                    py-3
                                    text-sm
                                    transition
                                    ${
                                      isActive
                                        ? "bg-blue-500/8 text-white"
                                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                                    }
                                  `}
                                >
                                  <span className="flex items-center gap-3">
                                    <span className="text-xs font-semibold text-blue-400">
                                      {service.number}
                                    </span>

                                    <span>
                                      {service.label}
                                    </span>
                                  </span>

                                  <span
                                    className="text-gray-600"
                                    aria-hidden="true"
                                  >
                                    &rarr;
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
                    key={item.label}
                    to={item.href}
                    end={item.href === "/"}
                    style={{
                      transitionDelay: menuOpen
                        ? `${index * 40}ms`
                        : "0ms",
                    }}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-200 ${
                        menuOpen
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-2.5 opacity-0"
                      } ${
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
                to="/contact"
                className="
                  mt-3
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-white
                  px-5
                  py-3.5
                  font-semibold
                  text-black
                  transition
                  hover:bg-gray-200
                "
              >
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