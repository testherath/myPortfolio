// src/components/HeroScene.jsx
import React, { useRef, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D, Center, Float, Environment, Html } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Particles from "../three/Particles";

export default function HeroScene() {
  const torus = useRef();
  const glowBall = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Torus spin
    if (torus.current) {
      torus.current.rotation.x = t * 0.4;
      torus.current.rotation.y = t * 0.6;
    }

    // Floating glowing ball
    if (glowBall.current) {
      glowBall.current.position.y = Math.sin(t * 1.5) * 0.3;
    }
  });

  return (
    <>
      {/* Particles Background */}
      <Particles />
      
      {/* 3D Name Text - Simplified without font file */}
      <Center position={[0, 0.8, 0]}>
        <Text3D
          font={"/fonts/helvetiker_bold.typeface.json"} // Use simpler font
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.03}
          height={0.04}
          size={0.45}
        >
          Buddhila
          <meshStandardMaterial color="#7dd3fc" metalness={0.8} roughness={0.2} />
        </Text3D>
      </Center>

      {/* Main Torus Shape */}
      <Float floatIntensity={1.3} rotationIntensity={0.8}>
        <mesh ref={torus} position={[0, -0.4, 0]}>
          <torusKnotGeometry args={[0.6, 0.18, 180, 32]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={1}
            roughness={0.1}
            envMapIntensity={1}
          />
        </mesh>
      </Float>

      {/* Glowing Sphere */}
      <mesh ref={glowBall} position={[1.1, 0.3, 0]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial emissive="#90d5fd" emissiveIntensity={2} />
      </mesh>

      {/* Ground - Simplified */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#0d1224" roughness={1} />
      </mesh>

      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 3, 2]} intensity={1.4} />

      {/* Postprocessing */}
      <EffectComposer>
        <Bloom intensity={1.5} luminanceThreshold={0.2} />
      </EffectComposer>

      <Environment preset="city" />
    </>
  );
}