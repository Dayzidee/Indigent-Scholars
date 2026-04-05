'use client'

import { useEffect, useRef, useState, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface UseCountUpOptions {
  /** The final number to count up to */
  endValue: number
  /** Duration in seconds (default: 2) */
  duration?: number
  /** Suffix appended to the displayed value, e.g. "+" or "%" */
  suffix?: string
  /** Prefix prepended to the displayed value, e.g. "$" */
  prefix?: string
  /** Whether to format with thousands separators (default: true) */
  formatThousands?: boolean
  /** ScrollTrigger start position (default: "top 80%") */
  start?: string
}

/**
 * useCountUp — Animates a number from 0 to `endValue` when
 * the attached element scrolls into the viewport.
 *
 * Returns:
 *   - ref: attach to the DOM element
 *   - displayValue: the formatted string to render
 *
 * Usage:
 *   const { ref, displayValue } = useCountUp({ endValue: 50000, suffix: '+' })
 *   return <span ref={ref}>{displayValue}</span>
 */
export function useCountUp({
  endValue,
  duration = 2,
  suffix = '',
  prefix = '',
  formatThousands = true,
  start = 'top 80%',
}: UseCountUpOptions): {
  ref: RefObject<HTMLElement | null>
  displayValue: string
} {
  const ref = useRef<HTMLElement | null>(null)
  const [displayValue, setDisplayValue] = useState(
    `${prefix}0${suffix}`
  )

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const proxy = { value: 0 }

    const tween = gsap.to(proxy, {
      value: endValue,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: 'play none none none',
        once: true,
      },
      onUpdate: () => {
        const rounded = Math.round(proxy.value)
        const formatted = formatThousands
          ? rounded.toLocaleString('en-US')
          : String(rounded)
        setDisplayValue(`${prefix}${formatted}${suffix}`)
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [endValue, duration, suffix, prefix, formatThousands, start])

  return { ref, displayValue }
}
