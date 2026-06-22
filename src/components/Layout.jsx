import {
  lazy,
  Suspense,
  useEffect,
  useState,
} from "react"

import { Outlet } from "react-router"
import Navbar from "./Navbar"


const ParticleField = lazy(() => import("./ParticleField"))


function Layout() {
  const [effectsReady, setEffectsReady] = useState(false)


  useEffect(() => {
    /*
      Първо позволяваме на браузъра да покаже navbar-а
      и страницата. След това активираме тежките визуални ефекти.
    */
    const timer = window.setTimeout(() => {
      setEffectsReady(true)
    }, 700)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])


  return (
    <div
      className="
        relative
        isolate
        min-h-screen
        overflow-x-hidden
        bg-[#050505]
        text-white
      "
    >
      {/* Global background */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          overflow-hidden
          bg-[#050505]
        "
        aria-hidden="true"
      >
        {effectsReady && (
          <>
            {/* Central blue glow */}

            <div
              className="
                absolute
                left-1/2
                top-[25%]
                h-130
                w-215
                max-w-[95vw]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-blue-600/7.5
                blur-[100px]
              "
            />


            {/* Upper blue atmosphere */}

            <div
              className="
                absolute
                left-1/2
                -top-65
                h-140
                w-155
                -translate-x-1/2
                rounded-full
                bg-blue-600/10
                blur-[90px]
              "
            />


            {/* Bottom-right purple glow */}

            <div
              className="
                absolute
                -right-35
                -bottom-55
                h-125
                w-125
                rounded-full
                bg-purple-600/7.5
                blur-[100px]
              "
            />


            {/* Animated particles */}

            <Suspense fallback={null}>
              <ParticleField />
            </Suspense>
          </>
        )}
      </div>


      {/* Website content */}

      <div className="relative z-10 min-h-screen">
        <Navbar />

        <main className="min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  )
}


export default Layout