import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion"


/*
  Thin gradient bar along the top of the viewport that fills
  as the visitor scrolls through the page.
*/
function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.4,
  })

  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return null
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="
          fixed
          inset-x-0
          top-0
          z-60
          h-0.5
          origin-left
          bg-linear-to-r
          from-blue-500
          via-cyan-400
          to-purple-500
        "
        style={{ scaleX }}
        aria-hidden="true"
      />
    </LazyMotion>
  )
}


export default ScrollProgress
