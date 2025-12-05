// src/components/HeroScene.jsx
import React, { useRef, useMemo, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D, Center, Float, Environment, Html } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Particles from "../three/Particles";

export default function HeroScene() {
  const torus = useRef();
  const glowBall = useRef();
  const group = useRef();
  
  // Use useMemo for expensive calculations
  const geometryArgs = useMemo(() => [0.6, 0.18, 100, 32], []); // Reduced segments

  useFrame((state) => {
    if (!group.current) return;
    
    const t = state.clock.getElapsedTime();

    // Torus spin - slower for performance
    if (torus.current) {
      torus.current.rotation.x = t * 0.2; // Reduced speed
      torus.current.rotation.y = t * 0.3; // Reduced speed
    }

    // Floating glowing ball
    if (glowBall.current) {
      glowBall.current.position.y = Math.sin(t * 1.0) * 0.2; // Reduced movement
    }
  });

  return (
    <group ref={group}>
      {/* Particles Background - simplified */}
      <Suspense fallback={null}>
        <Particles />
      </Suspense>
      
      {/* 3D Name Text with simpler geometry */}
      <Center position={[0, 0.8, 0]}>
        <Text3D
          font="/fonts/helvetiker_bold.typeface.json"
          bevelEnabled={false} // Disabled for performance
          height={0.02} // Reduced
          size={0.35} // Reduced size
          curveSegments={12} // Reduced segments
        >
          Buddhila
          <meshStandardMaterial 
            color="#7dd3fc" 
            metalness={0.6} // Reduced
            roughness={0.4} // Increased for performance
            emissive="#7dd3fc"
            emissiveIntensity={0.3}
          />
        </Text3D>
      </Center>

      {/* Main Torus Shape with simpler geometry */}
      <Float floatIntensity={0.8} rotationIntensity={0.5}>
        <mesh ref={torus} position={[0, -0.4, 0]}>
          <torusKnotGeometry args={geometryArgs} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.8} // Reduced
            roughness={0.3} // Increased
            envMapIntensity={0.8}
          />
        </mesh>
      </Float>

      {/* Glowing Sphere */}
      <mesh ref={glowBall} position={[1.1, 0.3, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} /> {/* Reduced segments */}
        <meshBasicMaterial 
          color="#90d5fd" 
          transparent 
          opacity={0.8} 
        />
      </mesh>

      {/* Ground - simplified */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
        <planeGeometry args={[8, 8]} /> {/* Reduced size */}
        <meshBasicMaterial color="#0d1224" />
      </mesh>

      {/* Lights - optimized */}
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[4, 3, 2]} 
        intensity={1.0} 
        castShadow={false} // Disable shadows for performance
      />
      <directionalLight 
        position={[-4, -3, -2]} 
        intensity={0.3} 
        color="#7dd3fc"
      />

      {/* Postprocessing - simplified */}
      <EffectComposer enabled={true} multisampling={0}>
        <Bloom 
          intensity={1.0} // Reduced
          luminanceThreshold={0.3} // Increased
          luminanceSmoothing={0.9}
        />
      </EffectComposer>

      <Environment preset="city" />
    </group>
  );
}