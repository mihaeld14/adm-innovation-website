import { lazy, Suspense } from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"

import Layout from "./components/Layout"
import Home from "./pages/Home"


/*
  Home ships in the main bundle so the landing page paints immediately.
  Every other route is split out and fetched on navigation.
*/
const Services = lazy(() => import("./pages/Services"))
const Products = lazy(() => import("./pages/Products"))
const About = lazy(() => import("./pages/About"))
const Contact = lazy(() => import("./pages/Contact"))
const NotFound = lazy(() => import("./pages/NotFound"))
const BasicWebsite = lazy(() => import("./pages/BasicWebsite"))
const ServiceDetails = lazy(() => import("./pages/ServiceDetails"))


function PageFallback() {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      role="status"
      aria-label="Loading page"
    >
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-blue-500" />
    </div>
  )
}


function lazyRoute(element) {
  return <Suspense fallback={<PageFallback />}>{element}</Suspense>
}


const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,

    children: [

      {
        index: true,
        element: <Home />,
      },

      {
        path: "services",
        element: lazyRoute(<Services />),
      },

      {
        path: "products",
        element: lazyRoute(<Products />),
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
        path: "*",
        element: lazyRoute(<NotFound />),
      },

      {
        path: "/services/basic-website",
        element: lazyRoute(<BasicWebsite />),
      },

      {
        path: "services/:slug",
        element: lazyRoute(<ServiceDetails />),
      },

    ],

  },

])


function App() {

  return (
    <RouterProvider router={router} />
  )

}


export default App
