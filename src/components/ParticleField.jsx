import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion"

const pageParticles = Array.from({ length: 48 }, (_, index) => ({
  left: `${3 + ((index * 37) % 94)}%`,
  top: `${4 + ((index * 53) % 91)}%`,
  size: 2 + (index % 4),
  distanceX: 7 + (index % 6) * 2,
  distanceY: 9 + (index % 7) * 2,
  duration: 5.2 + (index % 6) * 0.65,
  delay: (index % 12) * 0.2,
}))

function ParticleField() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <LazyMotion features={domAnimation}>
      {pageParticles.map((particle, index) => (
        <m.span
          key={index}
          className="
            absolute
            rounded-full
            bg-blue-300
            shadow-[0_0_12px_rgba(96,165,250,0.8)]
          "
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          initial={
            prefersReducedMotion
              ? {
                  opacity: 0.25,
                }
              : {
                  x: 0,
                  y: 0,
                  opacity: 0.08,
                  scale: 0.7,
                }
          }
          animate={
            prefersReducedMotion
              ? {
                  opacity: 0.25,
                }
              : {
                x: [
                  0,
                  particle.distanceX,
                  -particle.distanceX * 0.45,
                  0,
                ],
                y: [
                  0,
                  -particle.distanceY,
                  particle.distanceY * 0.5,
                  0,
                ],
                  opacity: [0.08, 0.68, 0.2, 0.08],
                  scale: [0.7, 1.25, 0.85, 0.7],
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </LazyMotion>
  )
}

export default ParticleField
