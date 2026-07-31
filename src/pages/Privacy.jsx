import { Link } from "react-router"

import { InfoPanel } from "../components/CardStandards"
import usePageMeta from "../lib/meta"
import { useLanguage } from "../i18n/context"
import { localisePath } from "../i18n/config"


function Privacy() {
  const { language, t } = useLanguage()

  usePageMeta({
    title: t.privacy.meta.title,
    description: t.privacy.meta.description,
    path: "/privacy",
    language,
  })

  return (
    <div className="relative overflow-hidden">
      <section className="mx-auto max-w-4xl px-5 pt-32 pb-24 sm:px-6 sm:pt-40 sm:pb-28">
        <p className="font-mono text-xs font-medium tracking-[0.18em] text-blue-400 uppercase">
          {t.privacy.label}
        </p>

        <h1 className="mt-4 text-4xl leading-[1.02] font-bold tracking-tight text-white sm:text-5xl">
          {t.privacy.heading}
        </h1>

        <p className="mt-5 max-w-2xl leading-relaxed text-gray-400">
          {t.privacy.intro}
        </p>

        <div className="mt-10 space-y-4">
          {t.privacy.sections.map((section) => (
            <InfoPanel
              key={section.title}
              as="section"
              className="p-6 sm:p-7"
            >
              <h2 className="text-lg font-bold text-white">
                {section.title}
              </h2>

              <p className="mt-3 leading-relaxed text-gray-400">
                {section.body}
              </p>
            </InfoPanel>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-500">
          {t.privacy.questions}{" "}
          <a
            href={`mailto:${t.common.email}`}
            className="text-gray-300 underline decoration-gray-600 underline-offset-4 transition hover:text-blue-300"
          >
            {t.common.email}
          </a>{" "}
          {t.privacy.orReturn}{" "}
          <Link
            to={localisePath("/", language)}
            className="text-gray-300 underline decoration-gray-600 underline-offset-4 transition hover:text-blue-300"
          >
            {t.privacy.homePage}
          </Link>
          .
        </p>
      </section>
    </div>
  )
}


export default Privacy
