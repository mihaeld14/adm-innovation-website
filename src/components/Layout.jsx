import { lazy, Suspense } from "react"
import { Outlet } from "react-router"
import Navbar from "./Navbar"
import Footer from "./Footer"


const ParticleField = lazy(() => import("./ParticleField"))


function Layout() {
  return (
    <div className="grain relative isolate min-h-screen overflow-x-hidden bg-canvas text-ink">
      {/* Global background */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-canvas"
        aria-hidden="true"
      >
        {/* Central blue glow */}
        <div className="absolute left-1/2 top-[25%] h-130 w-215 max-w-[95vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/7.5 blur-[100px]" />

        {/* Upper blue atmosphere */}
        <div className="absolute left-1/2 -top-65 h-140 w-155 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[90px]" />

        {/* Bottom-right purple glow */}
        <div className="absolute -right-35 -bottom-55 h-125 w-125 rounded-full bg-purple-600/7.5 blur-[100px]" />

        {/* Floating particles — lazy loaded so they never block first paint */}
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      </div>


      {/* Page content */}
      <div className="relative z-10 min-h-screen">
        <a
          href="#main"
          className="skip-link"
        >
          Skip to content
        </a>

        <div
          className="scroll-progress"
          aria-hidden="true"
        />

        <Navbar />

        <main
          id="main"
          className="min-h-screen"
        >
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}


export default Layout
