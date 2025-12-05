// src/three/CanvasScene.jsx
import { Canvas } from '@react-three/fiber'
import HeroScene from './HeroScene'

export default function CanvasScene({ children }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
      shadows
    >
      {children || <HeroScene />}
    </Canvas>
  )
}