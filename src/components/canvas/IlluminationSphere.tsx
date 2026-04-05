'use client'

import { useRef, useMemo, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// ─── Design tokens ───────────────────────────────────────────
const TRUST_BLUE = new THREE.Color('#0052CC')
const EDAFRICA_GOLD = new THREE.Color('#D4AF37')
const DIM_PARTICLE = new THREE.Color('#3a3a4a')
const BRIGHT_PARTICLE = new THREE.Color('#FFD700')

/**
 * IlluminationSphere — The 3D scrollytelling centerpiece.
 *
 * A wireframe icosahedron with particles at each vertex and
 * connection lines between them. Driven by 4 GSAP ScrollTrigger
 * stages mapped to page section `id` selectors.
 *
 * ┌────────────────────────────────────────────────────────────┐
 * │ Stage 1 (0%  — #hero)     Slow Y rotation, dark env       │
 * │ Stage 2 (25% — #problem)  X tilt, dim particles appear    │
 * │ Stage 3 (50% — #solution) Lines appear, dots brighten     │
 * │ Stage 4 (100%— #footer)   Camera pulls back               │
 * └────────────────────────────────────────────────────────────┘
 *
 * To swap the placeholder geometry for a .gltf model later,
 * replace the <icosahedronGeometry> with a <primitive> of
 * the loaded model and recompute particle positions from
 * the model's geometry vertex buffer.
 */
export function IlluminationSphere() {
  // ─── Refs ────────────────────────────────────────────────
  const meshRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  const groupRef = useRef<THREE.Group>(null)

  // ─── Animation state proxies (GSAP animates these) ───────
  const state = useRef({
    rotationSpeed: 0.002,
    tiltX: 0,
    particleOpacity: 0,
    lineOpacity: 0,
    particleBrightness: 0, // 0 = dim, 1 = bright
    cameraZ: 5,
  })

  const { camera } = useThree()

  // ─── Geometry data ───────────────────────────────────────
  const geometry = useMemo(
    () => new THREE.IcosahedronGeometry(1.5, 2),
    []
  )

  // Extract vertex positions for particles
  const particlePositions = useMemo(() => {
    const positions = geometry.getAttribute('position')
    // Deduplicate vertices (icosahedron shares verts across faces)
    const unique = new Map<string, THREE.Vector3>()
    for (let i = 0; i < positions.count; i++) {
      const v = new THREE.Vector3(
        positions.getX(i),
        positions.getY(i),
        positions.getZ(i)
      )
      const key = `${v.x.toFixed(4)},${v.y.toFixed(4)},${v.z.toFixed(4)}`
      if (!unique.has(key)) {
        unique.set(key, v)
      }
    }
    const verts = Array.from(unique.values())
    const arr = new Float32Array(verts.length * 3)
    verts.forEach((v, i) => {
      arr[i * 3] = v.x
      arr[i * 3 + 1] = v.y
      arr[i * 3 + 2] = v.z
    })
    return { array: arr, count: verts.length, vectors: verts }
  }, [geometry])

  // Build connection line pairs between nearby vertices
  const linePositions = useMemo(() => {
    const verts = particlePositions.vectors
    const pairs: number[] = []
    const threshold = 1.2 // max distance to connect
    for (let i = 0; i < verts.length; i++) {
      for (let j = i + 1; j < verts.length; j++) {
        if (verts[i].distanceTo(verts[j]) < threshold) {
          pairs.push(
            verts[i].x, verts[i].y, verts[i].z,
            verts[j].x, verts[j].y, verts[j].z
          )
        }
      }
    }
    return new Float32Array(pairs)
  }, [particlePositions])

  // Line color gradient: Trust Blue → EdAfrica Gold
  const lineColors = useMemo(() => {
    const count = linePositions.length / 3
    const colors = new Float32Array(count * 3)
    for (let i = 0; i < count; i += 2) {
      // Vertex A → Trust Blue
      colors[i * 3] = TRUST_BLUE.r
      colors[i * 3 + 1] = TRUST_BLUE.g
      colors[i * 3 + 2] = TRUST_BLUE.b
      // Vertex B → EdAfrica Gold
      if (i + 1 < count) {
        colors[(i + 1) * 3] = EDAFRICA_GOLD.r
        colors[(i + 1) * 3 + 1] = EDAFRICA_GOLD.g
        colors[(i + 1) * 3 + 2] = EDAFRICA_GOLD.b
      }
    }
    return colors
  }, [linePositions])

  // ─── GSAP ScrollTrigger stages ───────────────────────────
  useEffect(() => {
    if (typeof window === 'undefined') return

    const s = state.current
    const triggers: ScrollTrigger[] = []

    // Stage 2 — #problem: tilt X, particles fade in
    const t1 = gsap.to(s, {
      tiltX: 0.5,
      particleOpacity: 0.6,
      scrollTrigger: {
        trigger: '#problem',
        start: 'top bottom',
        end: 'top center',
        scrub: true,
      },
    })
    if (t1.scrollTrigger) triggers.push(t1.scrollTrigger)

    // Stage 3 — #solution: lines appear, particles brighten
    const t2 = gsap.to(s, {
      lineOpacity: 1,
      particleBrightness: 1,
      particleOpacity: 1,
      scrollTrigger: {
        trigger: '#solution',
        start: 'top bottom',
        end: 'top center',
        scrub: true,
      },
    })
    if (t2.scrollTrigger) triggers.push(t2.scrollTrigger)

    // Stage 4 — #footer: camera pulls back
    const t3 = gsap.to(s, {
      cameraZ: 12,
      scrollTrigger: {
        trigger: '#footer',
        start: 'top bottom',
        end: 'top center',
        scrub: true,
      },
    })
    if (t3.scrollTrigger) triggers.push(t3.scrollTrigger)

    // Cleanup all triggers on unmount
    return () => {
      triggers.forEach((st) => st.kill())
      t1.kill()
      t2.kill()
      t3.kill()
    }
  }, [])

  // ─── Per-frame render loop ───────────────────────────────
  useFrame(() => {
    const s = state.current
    const group = groupRef.current
    const particles = particlesRef.current
    const lines = linesRef.current

    if (group) {
      // Stage 1: continuous slow Y rotation
      group.rotation.y += s.rotationSpeed
      // Stage 2: GSAP-driven X tilt
      group.rotation.x = s.tiltX
    }

    // Update particle material
    if (particles) {
      const mat = particles.material as THREE.PointsMaterial
      mat.opacity = s.particleOpacity
      // Lerp colour between dim and bright
      const c = DIM_PARTICLE.clone().lerp(BRIGHT_PARTICLE, s.particleBrightness)
      mat.color = c
    }

    // Update line material
    if (lines) {
      const mat = lines.material as THREE.LineBasicMaterial
      mat.opacity = s.lineOpacity
    }

    // Stage 4: camera Z
    // eslint-disable-next-line react-hooks/immutability
    camera.position.z = s.cameraZ
  })

  return (
    <group ref={groupRef}>
      {/* ── Wireframe mesh (placeholder for .gltf) ── */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshBasicMaterial
          wireframe
          color="#2a2a3a"
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* ── Vertex particles ── */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions.array, 3]}
            count={particlePositions.count}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color={DIM_PARTICLE}
          transparent
          opacity={0}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* ── Connection lines ── */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
            count={linePositions.length / 3}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[lineColors, 3]}
            count={lineColors.length / 3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  )
}
