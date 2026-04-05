'use client'

import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { ReactNode, Suspense } from 'react'

interface SceneProps {
  children?: ReactNode
}

/**
 * Scene — The global R3F Canvas wrapper.
 *
 * Fixed behind all page content (`fixed inset-0 -z-10`).
 * Transparent background so the page content layers on top.
 * Uses alpha blending so the dark 3D environment bleeds through
 * without blocking Stitch's UI.
 */
export function Scene({ children }: SceneProps) {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    >
      <Canvas
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 1000,
          position: [0, 0, 5],
        }}
        dpr={[1, 1.5]} // Cap pixel ratio for performance
        style={{ background: 'transparent' }}
      >
        {/* Deep Charcoal ambient environment */}
        <color attach="background" args={['#1C1B1B']} />
        <fog attach="fog" args={['#1C1B1B', 5, 25]} />

        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.4} />

        <Suspense fallback={null}>
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}
