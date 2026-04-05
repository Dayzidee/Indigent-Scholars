'use client'

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react'
import { AnimatePresence, motion, type Variants } from 'framer-motion'

// ─── Context ─────────────────────────────────────────────────
interface SliderContextType {
  activeIndex: number
  direction: number
  next: () => void
  prev: () => void
  goTo: (index: number) => void
  total: number
}

const SliderContext = createContext<SliderContextType | undefined>(undefined)

export function useSlider() {
  const ctx = useContext(SliderContext)
  if (!ctx) throw new Error('useSlider must be used inside <SliderTransition>')
  return ctx
}

// ─── Animation variants ─────────────────────────────────────
// `custom` = direction: +1 (forward) or -1 (backward)
const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    scale: 0.95,
    opacity: 0,
    z: -50,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
  center: {
    x: 0,
    scale: 1,
    opacity: 1,
    z: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    scale: 0.95,
    opacity: 0,
    z: -50,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  }),
}

// ─── Component ───────────────────────────────────────────────
interface SliderTransitionProps {
  children: ReactNode[]
  /** Optional CSS class for the outer wrapper */
  className?: string
}

/**
 * SliderTransition — A carousel wrapper powered by Framer Motion.
 *
 * Outgoing slides scale down (0.95) and fade out with a backward Z shift.
 * Incoming slides push forward into view, creating a tangible depth effect.
 *
 * Usage:
 *   <SliderTransition>
 *     <SlideA />
 *     <SlideB />
 *     <SlideC />
 *   </SliderTransition>
 *
 * Controls are available via the useSlider() hook or the render props.
 */
export function SliderTransition({
  children,
  className = '',
}: SliderTransitionProps) {
  const [[activeIndex, direction], setPage] = useState([0, 0])
  const total = React.Children.count(children)
  const slides = React.Children.toArray(children)

  const next = useCallback(() => {
    setPage(([prev]) => [(prev + 1) % total, 1])
  }, [total])

  const prev = useCallback(() => {
    setPage(([prev]) => [(prev - 1 + total) % total, -1])
  }, [total])

  const goTo = useCallback(
    (index: number) => {
      setPage(([current]) => [
        index % total,
        index > current ? 1 : -1,
      ])
    },
    [total]
  )

  return (
    <SliderContext.Provider
      value={{ activeIndex, direction, next, prev, goTo, total }}
    >
      <div
        className={`relative overflow-hidden ${className}`}
        style={{ perspective: 800 }}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {slides[activeIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </SliderContext.Provider>
  )
}
