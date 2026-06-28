import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"

import Layout from "./components/Layout"

import Home from "./pages/Home"
import Services from "./pages/Services"
import Products from "./pages/Products"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import BasicWebsite from "./pages/BasicWebsite"
import ServiceDetails from "./pages/ServiceDetails"


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
        element: <Services />,
      },

      {
        path: "products",
        element: <Products />,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "*",
        element: <NotFound />,
      },

      {
        path: "/services/basic-website",
        element: <BasicWebsite />,
      },
      {
        path: "services/:slug",
        element: <ServiceDetails />,
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