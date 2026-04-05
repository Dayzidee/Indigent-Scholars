'use client'

import { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register once at module level
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * useScrollTrigger — manages GSAP ScrollTrigger instances with automatic
 * cleanup on unmount to prevent memory leaks during Next.js route transitions.
 *
 * Usage:
 *   const { create } = useScrollTrigger()
 *   useEffect(() => {
 *     create({ trigger: '#hero', start: 'top top', ... })
 *   }, [create])
 */
export function useScrollTrigger() {
  const triggersRef = useRef<ScrollTrigger[]>([])

  const create = useCallback(
    (
      vars: ScrollTrigger.Vars & { id?: string }
    ): ScrollTrigger => {
      const trigger = ScrollTrigger.create(vars)
      triggersRef.current.push(trigger)
      return trigger
    },
    []
  )

  /**
   * Helper to create a gsap.to() timeline with an embedded ScrollTrigger,
   * auto-tracked for cleanup.
   */
  const animateTo = useCallback(
    (
      targets: gsap.TweenTarget,
      vars: gsap.TweenVars & { scrollTrigger?: ScrollTrigger.Vars }
    ): gsap.core.Tween => {
      const tween = gsap.to(targets, vars)
      // If a scrollTrigger was embedded, track it
      const st = tween.scrollTrigger
      if (st) {
        triggersRef.current.push(st)
      }
      return tween
    },
    []
  )

  // Aggressive cleanup on unmount
  useEffect(() => {
    return () => {
      triggersRef.current.forEach((st) => {
        st.kill()
      })
      triggersRef.current = []
    }
  }, [])

  return { create, animateTo, ScrollTrigger }
}
