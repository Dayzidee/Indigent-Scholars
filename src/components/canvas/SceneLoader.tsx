'use client'

import dynamic from 'next/dynamic'
import { ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'
import { IlluminationSphere } from './IlluminationSphere'

// Dynamically import the Scene (which wraps the R3F Canvas) with
// SSR disabled to prevent Three.js hydration mismatches.
// IlluminationSphere is imported directly because R3F components
// must live inside a Canvas context — they can't be independently
// wrapped with next/dynamic.
const Scene = dynamic(
  () => import('./Scene').then((mod) => mod.Scene),
  { ssr: false }
)

interface SceneLoaderProps {
  children?: ReactNode
}

/**
 * SceneLoader — The SSR-safe entry point for the 3D canvas.
 *
 * Import THIS component in layout.tsx, not Scene directly.
 * Respects `prefers-reduced-motion`: if the user has reduced
 * motion enabled, the entire 3D canvas is suppressed.
 */
export function SceneLoader({ children }: SceneLoaderProps) {
  const prefersReducedMotion = useReducedMotion()

  // Accessibility: skip the entire 3D layer for reduced-motion users
  if (prefersReducedMotion) {
    return null
  }

  return (
    <Scene>
      <IlluminationSphere />
      {children}
    </Scene>
  )
}
