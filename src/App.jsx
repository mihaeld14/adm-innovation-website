import { lazy, Suspense } from "react"
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router"

import Layout from "./components/Layout"
import Home from "./pages/Home"
import { LANGUAGES } from "./i18n/config"


/*
  Home ships in the main bundle so the landing page paints immediately.
  Every other route is split out and fetched on navigation.
*/
const Services = lazy(() => import("./pages/Services"))
const ServiceDetails = lazy(() => import("./pages/ServiceDetails"))
const BasicWebsite = lazy(() => import("./pages/BasicWebsite"))
const Process = lazy(() => import("./pages/Process"))
const About = lazy(() => import("./pages/About"))
const Contact = lazy(() => import("./pages/Contact"))
const Privacy = lazy(() => import("./pages/Privacy"))
const NotFound = lazy(() => import("./pages/NotFound"))


function PageFallback() {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      role="status"
      aria-label="Loading"
    >
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-blue-500" />
    </div>
  )
}


function lazyRoute(element) {
  return <Suspense fallback={<PageFallback />}>{element}</Suspense>
}


/*
  The same page tree for every language. English is served from the root
  and Bulgarian from /bg, so each language has its own real URL that can
  be linked, cached and indexed. `prefix` is prepended to the redirect
  targets so a visitor is never bounced out of their language.
*/
function pageRoutes(prefix) {
  return [
    {
      index: true,
      element: <Home />,
    },

    {
      path: "services",
      element: lazyRoute(<Services />),
    },

    {
      path: "services/basic-website",
      element: lazyRoute(<BasicWebsite />),
    },

    {
      path: "services/:slug",
      element: lazyRoute(<ServiceDetails />),
    },

    /* Old URLs from previous versions of the site */
    {
      path: "products",
      element: <Navigate to={`${prefix}/services`} replace />,
    },

    {
      path: "projects",
      element: <Navigate to={`${prefix}/services`} replace />,
    },

    {
      path: "process",
      element: lazyRoute(<Process />),
    },

    {
      path: "about",
      element: lazyRoute(<About />),
    },

    {
      path: "contact",
      element: lazyRoute(<Contact />),
    },

    {
      path: "privacy",
      element: lazyRoute(<Privacy />),
    },

    {
      path: "*",
      element: lazyRoute(<NotFound />),
    },
  ]
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      /* Bulgarian first: /bg must match before the catch-all below it. */
      {
        path: LANGUAGES.bg.prefix.replace("/", ""),
        children: pageRoutes(LANGUAGES.bg.prefix),
      },

      ...pageRoutes(""),
    ],
  },
])


function App() {
  return <RouterProvider router={router} />
}


export default App
