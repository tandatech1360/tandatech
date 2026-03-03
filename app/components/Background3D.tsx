"use client"

import { Canvas } from "@react-three/fiber"
import { Float, Sphere } from "@react-three/drei"

export default function Background3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 2, 2]} />

        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1, 64, 64]} position={[-2, 1, -5]}>
            <meshStandardMaterial color="#3b82f6" />
          </Sphere>
        </Float>

        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[0.8, 64, 64]} position={[2, -1, -4]}>
            <meshStandardMaterial color="#f97316" />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  )
}