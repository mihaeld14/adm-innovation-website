import { useEffect, useState } from "react"
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion"


/* ---------------------------------------------------------------------------
   Letter shapes

   Each letter is described as points inside its own 1x1 box, with y running
   from 0 at the top to 1 at the bottom. Once per cycle the particles settle
   onto these points to spell ADM, then scatter again.
--------------------------------------------------------------------------- */

function line(x1, y1, x2, y2, count) {
  return Array.from({ length: count }, (_, index) => {
    const t = count === 1 ? 0 : index / (count - 1)
    return [x1 + (x2 - x1) * t, y1 + (y2 - y1) * t]
  })
}


const letterA = [
  ...line(0.5, 0, 0.06, 1, 5),
  ...line(0.5, 0, 0.94, 1, 5).slice(1),
  ...line(0.24, 0.66, 0.76, 0.66, 3),
]


const letterD = [
  ...line(0.08, 0, 0.08, 1, 5),
  /* Right bowl — half an ellipse. The endpoints are left out so they do
     not double up with the top and bottom of the stem. */
  ...Array.from({ length: 5 }, (_, index) => {
    const angle = -Math.PI / 2 + Math.PI * ((index + 1) / 6)
    return [0.08 + 0.8 * Math.cos(angle), 0.5 + 0.5 * Math.sin(angle)]
  }),
]


const letterM = [
  ...line(0.05, 1, 0.05, 0, 4),
  ...line(0.05, 0, 0.5, 0.62, 4).slice(1),
  ...line(0.5, 0.62, 0.95, 0, 4).slice(1),
  ...line(0.95, 0, 0.95, 1, 4).slice(1),
]


const LETTER_GAP = 0.3
const WORD_WIDTH = 3 + LETTER_GAP * 2

/* Every point of the word, in units where the word is WORD_WIDTH across
   and one unit tall. */
const wordPoints = [
  ...letterA,
  ...letterD.map(([x, y]) => [x + 1 + LETTER_GAP, y]),
  ...letterM.map(([x, y]) => [x + 2 + LETTER_GAP * 2, y]),
]


/* ---------------------------------------------------------------------------
   Particles

   The first `wordPoints.length` particles take part in the formation; the
   rest simply drift, so the sky never looks too tidy.
--------------------------------------------------------------------------- */

const particles = Array.from({ length: 48 }, (_, index) => ({
  leftPct: 3 + ((index * 37) % 94),
  topPct: 4 + ((index * 53) % 91),
  size: 2 + (index % 4),
  driftX: 7 + (index % 6) * 2,
  driftY: 9 + (index % 7) * 2,
  duration: 5.2 + (index % 6) * 0.65,
  delay: (index % 12) * 0.2,
}))


/* One full drift → gather → hold → scatter → drift cycle. Deliberately
   long: the word is meant to be noticed, not watched. */
const CYCLE = 26

const KEYFRAME_TIMES = [0, 0.26, 0.42, 0.56, 0.72, 1]

const KEYFRAME_EASE = [
  "easeInOut",
  "easeInOut",
  "linear",
  "easeOut",
  "easeInOut",
]


function useViewport() {
  /* Measured during the first render so the particles mount straight into
     the right animation, rather than starting as drifters and swapping a
     frame later. */
  const [size, setSize] = useState(() => ({
    width: typeof window === "undefined" ? 0 : window.innerWidth,
    height: typeof window === "undefined" ? 0 : window.innerHeight,
  }))

  useEffect(() => {
    const update = () => {
      setSize((current) => {
        const width = window.innerWidth
        const height = window.innerHeight

        /*
          Re-measuring restarts every particle animation, so ignore small
          changes. On mobile the browser chrome hides and shows while
          scrolling, which fires resize constantly for a height change
          nobody asked about.
        */
        const changed =
          Math.abs(width - current.width) > 60 ||
          Math.abs(height - current.height) > 140

        return changed ? { width, height } : current
      })
    }

    update()

    window.addEventListener("resize", update)

    return () => {
      window.removeEventListener("resize", update)
    }
  }, [])

  return size
}


/*
  How far a formation particle has to travel to reach its letter point, and
  where it flies off to afterwards. Offsets are in pixels, relative to the
  particle's own resting position.
*/
function getFormationOffsets(index, viewport) {
  const point = wordPoints[index]

  if (!point) {
    return null
  }

  const wordWidth = Math.min(viewport.width * 0.62, 620)
  const unit = wordWidth / WORD_WIDTH

  const originX = viewport.width / 2 - wordWidth / 2
  const originY = viewport.height / 2 - unit / 2

  const targetX = originX + point[0] * unit
  const targetY = originY + point[1] * unit

  const homeX = (particles[index].leftPct / 100) * viewport.width
  const homeY = (particles[index].topPct / 100) * viewport.height

  const toTargetX = targetX - homeX
  const toTargetY = targetY - homeY

  /* Scatter outward from the middle of the word, with some variation so
     they do not all leave along the same lines. */
  const angle =
    Math.atan2(targetY - viewport.height / 2, targetX - viewport.width / 2) +
    ((index % 7) - 3) * 0.26

  const distance = 300 + (index % 5) * 70

  return {
    toTargetX,
    toTargetY,
    scatterX: toTargetX + Math.cos(angle) * distance,
    scatterY: toTargetY + Math.sin(angle) * distance,
  }
}


const particleClassName =
  "absolute rounded-full bg-blue-300 shadow-[0_0_12px_rgba(96,165,250,0.8)]"


function ParticleField() {
  const prefersReducedMotion = useReducedMotion()
  const viewport = useViewport()

  const canForm = !prefersReducedMotion && viewport.width > 0

  return (
    <LazyMotion features={domAnimation}>
      {particles.map((particle, index) => {
        const style = {
          left: `${particle.leftPct}%`,
          top: `${particle.topPct}%`,
          width: particle.size,
          height: particle.size,
        }

        if (prefersReducedMotion) {
          return (
            <span
              key={index}
              className={`${particleClassName} opacity-25`}
              style={style}
            />
          )
        }

        const formation = canForm
          ? getFormationOffsets(index, viewport)
          : null

        /* Particles that spell the word share a single timeline with no
           delay, so they all arrive together. */
        if (formation) {
          return (
            <m.span
              key={index}
              className={particleClassName}
              style={style}
              initial={{ x: 0, y: 0, opacity: 0.1, scale: 0.8 }}
              animate={{
                x: [
                  0,
                  particle.driftX,
                  formation.toTargetX,
                  formation.toTargetX,
                  formation.scatterX,
                  0,
                ],
                y: [
                  0,
                  -particle.driftY,
                  formation.toTargetY,
                  formation.toTargetY,
                  formation.scatterY,
                  0,
                ],
                opacity: [0.1, 0.4, 0.5, 0.5, 0, 0.1],
                scale: [0.8, 1.1, 1, 1, 0.6, 0.8],
              }}
              transition={{
                duration: CYCLE,
                times: KEYFRAME_TIMES,
                ease: KEYFRAME_EASE,
                repeat: Infinity,
              }}
            />
          )
        }

        /* Everything else keeps drifting the way it always has. */
        return (
          <m.span
            key={index}
            className={particleClassName}
            style={style}
            initial={{ x: 0, y: 0, opacity: 0.08, scale: 0.7 }}
            animate={{
              x: [0, particle.driftX, -particle.driftX * 0.45, 0],
              y: [0, -particle.driftY, particle.driftY * 0.5, 0],
              opacity: [0.08, 0.55, 0.2, 0.08],
              scale: [0.7, 1.2, 0.85, 0.7],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )
      })}
    </LazyMotion>
  )
}


export default ParticleField
