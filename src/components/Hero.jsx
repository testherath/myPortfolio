// src/components/Hero.jsx
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react'
import HeroScene from './HeroScene'

export default function Hero() {
  const canvasRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true)
  const [isInViewport, setIsInViewport] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (canvasRef.current) {
      observer.observe(canvasRef.current)
    }

    return () => {
      if (canvasRef.current) {
        observer.unobserve(canvasRef.current)
      }
    }
  }, [])

  useEffect(() => {
    // Only render when in viewport and tab is active
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden)
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  const shouldRender = isVisible && isInViewport

  return (
    <div 
      ref={canvasRef}
      style={{ 
        width: '100%', 
        height: '100%',
        position: 'relative',
        background: '#0d1224'
      }}
    >
      {shouldRender && (
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
          dpr={[1, 1.5]} // Reduced for performance
          gl={{
            antialias: true,
            alpha: false,
            powerPreference: 'high-performance',
            // Add these for better performance
            preserveDrawingBuffer: false,
            stencil: false,
            depth: true
          }}
          // Performance optimizations
          frameloop={shouldRender ? "always" : "never"}
          performance={{ min: 0.5 }}
        >
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </Canvas>
      )}
    </div>
  )
}