import React from 'react'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import { Group } from 'three'

export function Hero() {
  const sphereRef = useRef<Group>(null)

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += delta * 0.2
      sphereRef.current.rotation.y += delta * 0.1
    }
  })

  return (
    <group ref={sphereRef}>
      <Sphere args={[1, 100, 200]} scale={3.5}>
        <meshStandardMaterial
          color="#915EFF"
          wireframe
          transparent
          opacity={0.2}
        />
      </Sphere>
      <Sphere args={[1, 100, 200]} scale={3.2}>
        <meshStandardMaterial
          color="#915EFF"
          wireframe
          transparent
          opacity={0.1}
        />
      </Sphere>
    </group>
  )
} 