// src/three/Particles.jsx
import { useRef, useMemo } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Particles() {
  const ref = useRef();
  const count = 300; // Further reduced count
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 4; // Reduced range
      positions[i + 1] = (Math.random() - 0.5) * 4;
      positions[i + 2] = (Math.random() - 0.5) * 4;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      // Slower rotation for better performance
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.015;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#7dd3fc"
        size={0.01} // Smaller particles
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4} // More transparent
      />
    </Points>
  );
}