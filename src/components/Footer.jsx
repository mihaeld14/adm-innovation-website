import { Link } from "react-router"
import logo from "../assets/Logo.webp"
import servicesData from "../data/servicesData"


const contactEmail = "contact@adminnovations.com"


const pageLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]


const serviceLinks = [
  ...servicesData.map((service) => ({
    label: service.title,
    href: `/services/${service.slug}`,
  })),
  {
    label: "Basic Business Website",
    href: "/services/basic-website",
  },
]


function FooterLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="
          group
          inline-flex
          items-center
          gap-2
          text-sm
          text-gray-400
          transition
          hover:text-white
        "
      >
        <span
          className="
            h-px
            w-0
            bg-blue-400
            transition-all
            duration-300
            group-hover:w-3
          "
          aria-hidden="true"
        />
        {children}
      </Link>
    </li>
  )
}


function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-[#040404]">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[640px] max-w-full -translate-x-1/2 rounded-full bg-blue-600/6 blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-6 sm:pt-16">
        {/* Giant watermark, sitting behind the footer content */}
        <div
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden"
          aria-hidden="true"
        >
          <p
            className="
              text-outline
              text-center
              font-display
              text-[30vw]
              leading-[0.75]
              font-bold
              tracking-tight
              whitespace-nowrap
              lg:text-[19rem]
            "
          >
            ADM
          </p>
        </div>

        <div className="relative grid gap-12 lg:grid-cols-[1.25fr_0.75fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              aria-label="ADM Innovations home"
            >
              <img
                src={logo}
                alt="ADM Innovations logo"
                width="160"
                height="160"
                loading="lazy"
                decoding="async"
                className="h-14 w-auto object-contain"
              />

              <span>
                <span className="block font-semibold text-white">
                  ADM Innovations
                </span>

                <span className="block text-[10px] tracking-[0.18em] text-gray-500 uppercase">
                  Software &amp; Automations
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-gray-400">
              Premium websites, custom software, AI tools and automations —
              built around the way your business actually works.
            </p>

            <a
              href={`mailto:${contactEmail}`}
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-gray-200
                transition
                hover:text-blue-300
              "
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-status"
                aria-hidden="true"
              />
              {contactEmail}
            </a>

            <p className="mt-3 text-xs text-gray-600">
              Bulgaria · Working with businesses worldwide
            </p>
          </div>


          {/* Pages */}
          <nav aria-label="Footer pages">
            <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase">
              Pages
            </p>

            <ul className="mt-5 space-y-3">
              {pageLinks.map((page) => (
                <FooterLink
                  key={page.href}
                  to={page.href}
                >
                  {page.label}
                </FooterLink>
              ))}
            </ul>
          </nav>


          {/* Services */}
          <nav aria-label="Footer services">
            <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase">
              Services
            </p>

            <ul className="mt-5 space-y-3">
              {serviceLinks.map((service) => (
                <FooterLink
                  key={service.href}
                  to={service.href}
                >
                  {service.label}
                </FooterLink>
              ))}
            </ul>
          </nav>


          {/* Start a project */}
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase">
              Start a project
            </p>

            <p className="mt-5 text-sm leading-relaxed text-gray-400">
              Describe the problem, the current process and the result you
              want. A short message is enough to begin.
            </p>

            <Link
              to="/contact"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/12
                bg-white/4
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:border-blue-400/40
                hover:bg-blue-500/10
                hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]
              "
            >
              Tell us your idea

              <span
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                &rarr;
              </span>
            </Link>

            <p className="mt-4 text-xs text-gray-600">
              Free initial discussion · Reply within 1 business day
            </p>
          </div>
        </div>


        {/* Bottom bar */}
        <div
          className="
            relative
            mt-14
            flex
            flex-col
            items-center
            justify-between
            gap-3
            border-t
            border-white/8
            pt-6
            sm:flex-row
          "
        >
          <p className="text-xs text-gray-600">
            &copy; {year} ADM Innovations. All rights reserved.
          </p>

          <p className="text-xs text-gray-600">
            Designed &amp; engineered in-house — like everything we ship.
          </p>
        </div>
      </div>
    </footer>
  )
}


export default Footer
