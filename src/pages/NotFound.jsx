import { Link } from "react-router"

import { ArrowIcon } from "../components/CardStandards"
import usePageMeta from "../lib/meta"
import { useLanguage } from "../i18n/context"
import { localisePath } from "../i18n/config"


function NotFound() {
  const { language, t } = useLanguage()

  usePageMeta({
    title: t.notFound.meta.title,
    description: t.notFound.meta.description,
    path: "/404",
    language,
  })

  const url = (path) => localisePath(path, language)

  return (
    <section className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center overflow-hidden px-5 py-28 text-center sm:px-6">
      {/* Large 404 in the background */}
      <p
        className="text-outline pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[44vw] leading-none font-bold tracking-tighter sm:text-[24rem]"
        aria-hidden="true"
      >
        404
      </p>

      <div className="relative">
        <p className="font-mono text-xs font-medium tracking-[0.18em] text-blue-400 uppercase">
          {t.notFound.label}
        </p>

        <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {t.notFound.heading}
        </h1>

        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-gray-400 sm:text-lg">
          {t.notFound.body}
        </p>

        {/* Quick links */}
        <div className="mx-auto mt-9 grid max-w-2xl gap-3 sm:grid-cols-2">
          {t.notFound.links.map((link) => (
            <Link
              key={link.href}
              to={url(link.href)}
              className="group flex min-h-14 items-center justify-between gap-4 rounded-xl border border-white/8 bg-white/[0.025] px-5 py-3.5 text-left transition duration-300 hover:-translate-y-0.5 hover:border-blue-500/30 hover:bg-white/[0.05]"
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
          to={url("/")}
          className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.28)]"
        >
          {t.notFound.button}
          <ArrowIcon />
        </Link>
      </div>
    </section>
  )
}


export default NotFound
