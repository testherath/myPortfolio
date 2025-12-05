// src/components/Hero.jsx
import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useEffect } from 'react'
import HeroScene from './HeroScene'

export default function Hero() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div style={{ width: '100%', height: '100%', background: '#0d1224' }} />
  }

  return (
    <div style={{ 
      width: '100%', 
      height: '100%',
      position: 'relative',
      background: '#0d1224'
    }}>
      <Canvas
        camera={{ 
          position: [0, 0, 5], 
          fov: 50,
          near: 0.1,
          far: 1000 
        }}
        style={{ 
          width: '100%', 
          height: '100%',
          background: 'transparent'
        }}
        dpr={[1, 2]} // Better performance handling
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance'
        }}
      >
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </Canvas>
    </div>
  )
}