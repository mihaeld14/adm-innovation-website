import { Link } from "react-router"

import logo from "../assets/Logo.webp"
import LanguageSwitcher from "./LanguageSwitcher"
import { useLanguage } from "../i18n/context"
import { localisePath } from "../i18n/config"
import { getServices } from "../data/servicesData"


function FooterLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="group inline-flex min-h-8 items-center gap-2 text-sm text-gray-400 transition hover:text-white"
      >
        <span
          className="h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-3"
          aria-hidden="true"
        />
        {children}
      </Link>
    </li>
  )
}


function Footer() {
  const { language, t } = useLanguage()

  const year = new Date().getFullYear()
  const url = (path) => localisePath(path, language)

  const pageLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.process, href: "/process" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ]

  const serviceLinks = [
    ...getServices(language).map((service) => ({
      label: service.nav,
      href: `/services/${service.slug}`,
    })),
    {
      label: t.nav.basicWebsite,
      href: "/services/basic-website",
    },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-[#050608]">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[640px] max-w-full -translate-x-1/2 rounded-full bg-blue-600/6 blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-6 sm:pt-16">
        {/* Large watermark behind the content */}
        <div
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden"
          aria-hidden="true"
        >
          <p className="text-outline text-center font-display text-[30vw] leading-[0.75] font-bold tracking-tight whitespace-nowrap lg:text-[19rem]">
            ADM
          </p>
        </div>

        <div className="relative grid gap-12 lg:grid-cols-[1.25fr_0.75fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              to={url("/")}
              className="inline-flex items-center gap-3"
              aria-label={t.nav.homeAria}
            >
              <img
                src={logo}
                alt=""
                width="160"
                height="160"
                loading="lazy"
                decoding="async"
                className="h-13 w-auto object-contain"
              />

              <span>
                <span className="block font-display font-bold text-white">
                  ADM Innovations
                </span>

                <span className="block font-mono text-[10px] tracking-[0.14em] text-gray-500 uppercase">
                  {t.nav.tagline}
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-gray-400">
              {t.footer.blurb}
            </p>

            <a
              href={`mailto:${t.common.email}`}
              className="mt-6 inline-flex min-h-10 items-center gap-2 text-sm font-medium text-gray-200 transition hover:text-blue-300"
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-status"
                aria-hidden="true"
              />
              {t.common.email}
            </a>

            <p className="mt-2 text-xs text-gray-600">
              {t.footer.location}
            </p>

            <LanguageSwitcher className="mt-5 w-fit" />
          </div>


          {/* Pages */}
          <nav aria-label={t.footer.pages}>
            <p className="font-mono text-xs font-semibold tracking-[0.16em] text-gray-500 uppercase">
              {t.footer.pages}
            </p>

            <ul className="mt-4 space-y-1.5">
              {pageLinks.map((page) => (
                <FooterLink
                  key={page.href}
                  to={url(page.href)}
                >
                  {page.label}
                </FooterLink>
              ))}
            </ul>
          </nav>


          {/* Services */}
          <nav aria-label={t.footer.services}>
            <p className="font-mono text-xs font-semibold tracking-[0.16em] text-gray-500 uppercase">
              {t.footer.services}
            </p>

            <ul className="mt-4 space-y-1.5">
              {serviceLinks.map((service) => (
                <FooterLink
                  key={service.href}
                  to={url(service.href)}
                >
                  {service.label}
                </FooterLink>
              ))}
            </ul>
          </nav>


          {/* Start a project */}
          <div>
            <p className="font-mono text-xs font-semibold tracking-[0.16em] text-gray-500 uppercase">
              {t.footer.startProject}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {t.footer.startProjectBlurb}
            </p>

            <Link
              to={url("/contact")}
              className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]"
            >
              {t.common.freeConsultation}

              <span aria-hidden="true">&rarr;</span>
            </Link>

            <p className="mt-4 text-xs text-gray-600">
              {t.footer.replyNote}
            </p>
          </div>
        </div>


        {/* Bottom bar */}
        <div className="relative mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 sm:flex-row">
          <p className="text-xs text-gray-600">
            &copy; {year} ADM Innovations. {t.footer.rights}
          </p>

          <div className="flex items-center gap-5">
            <Link
              to={url("/privacy")}
              className="text-xs text-gray-600 transition hover:text-gray-300"
            >
              {t.footer.privacy}
            </Link>

            <p className="text-xs text-gray-600">
              {t.footer.credit}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer
