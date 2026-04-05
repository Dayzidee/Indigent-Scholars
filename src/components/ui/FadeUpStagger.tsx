'use client'

import React, { ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'

// ─── Animation variants ─────────────────────────────────────
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1], // custom ease-out
    },
  },
}

// ─── Component ───────────────────────────────────────────────
interface FadeUpStaggerProps {
  children: ReactNode
  /** Optional CSS class for the container */
  className?: string
  /** Viewport margin for triggering (default: "-100px") */
  viewportMargin?: string
  /** Whether items should only animate once (default: true) */
  once?: boolean
  /** Custom stagger delay in seconds (default: 0.08) */
  staggerDelay?: number
}

/**
 * FadeUpStagger — Viewport-triggered staggered reveal container.
 *
 * Wraps its children so they cascade upward into view one by one
 * when the container enters the viewport.
 *
 * IMPORTANT: Each direct child must be a valid React element.
 * The component wraps each child in its own motion.div with
 * the item animation variants.
 *
 * Usage:
 *   <FadeUpStagger>
 *     <StudentCard />
 *     <StudentCard />
 *     <StudentCard />
 *   </FadeUpStagger>
 */
export function FadeUpStagger({
  children,
  className = '',
  viewportMargin = '-100px',
  once = true,
  staggerDelay = 0.08,
}: FadeUpStaggerProps) {
  const dynamicContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      className={className}
      variants={dynamicContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

/**
 * FadeUpItem — Standalone item wrapper if you need manual control
 * over which children animate (instead of auto-wrapping).
 */
export function FadeUpItem({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}
