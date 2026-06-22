import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion"

const gradientStops = [
  [109, 40, 217],
  [59, 130, 246],
  [96, 165, 250]
]

function getLetterColor(index, total) {
  const progress = total <= 1 ? 0 : index / (total - 1)
  const scaledProgress = progress * (gradientStops.length - 1)
  const stopIndex = Math.min(Math.floor(scaledProgress), gradientStops.length - 2)
  const localProgress = scaledProgress - stopIndex
  const start = gradientStops[stopIndex]
  const end = gradientStops[stopIndex + 1]
  const [red, green, blue] = start.map((value, colorIndex) => {
    return Math.round(value + (end[colorIndex] - value) * localProgress)
  })

  return `rgb(${red}, ${green}, ${blue})`
}

function AnimatedWord({ currentWord }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait" initial={false}>
        <m.span
          key={currentWord}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative inline-flex items-center justify-center whitespace-nowrap drop-shadow-[0_0_28px_rgba(37,99,235,0.28)] transform-3d"
        >
          <m.span
            className="pointer-events-none absolute inset-x-[5%] bottom-[3%] h-[30%] rounded-full bg-linear-to-r from-blue-500/30 via-indigo-500/25 to-purple-950/35 blur-2xl"
            initial={{ opacity: 0, scaleX: 0.4 }}
            animate={{ opacity: [0, 0.8, 0.25], scaleX: [0.4, 1.1, 0.85] }}
            exit={{ opacity: 0, scaleX: 0.4 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />

          {currentWord.split("").map((letter, index) => {
            const direction = index % 2 === 0 ? -1 : 1
            return (
              <m.span
                key={`${currentWord}-${index}`}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 34 * direction,
                    z: -120,
                    rotateX: 75 * direction,
                    rotateY: 18 * direction,
                    filter: "blur(12px)",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    z: 0,
                    rotateX: 0,
                    rotateY: 0,
                    filter: "blur(0px)",
                    transition: {
                      delay: index * 0.06,
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                  exit: {
                    opacity: 0,
                    y: -38 * direction,
                    z: -90,
                    rotateX: -65 * direction,
                    rotateY: -16 * direction,
                    filter: "blur(10px)",
                    transition: {
                      delay: 0.025 * (currentWord.length - index),
                      duration: 0.4,
                      ease: [0.7, 0, 0.84, 0],
                    },
                  },
                }}
                className="relative inline-block backface-hidden transform-3d"
                style={{
                  color: getLetterColor(index, currentWord.length),
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </m.span>
            )
          })}

          {!prefersReducedMotion && (
            <>
              <m.span
                className="pointer-events-none absolute top-[-8%] bottom-[-8%] w-[16%] skew-x-[-14deg] bg-linear-to-r from-transparent via-white/70 to-transparent blur-[3px] mix-blend-screen"
                initial={{ left: "-22%", opacity: 0 }}
                animate={{ left: ["-22%", "108%"], opacity: [0, 1, 0] }}
                transition={{ delay: 0.7, duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
              />
              <m.span
                className="pointer-events-none absolute bottom-[-0.12em] left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-blue-300 to-purple-950/70 shadow-[0_0_16px_rgba(79,70,229,0.85)]"
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: ["0%", "92%", "58%"], opacity: [0, 1, 0.45] }}
                exit={{ width: "0%", opacity: 0 }}
                transition={{ delay: 0.45, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </>
          )}
        </m.span>
      </AnimatePresence>
    </LazyMotion>
  )
}

export default AnimatedWord
