"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function RotatingKnot() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.003;
      const t = state.clock.getElapsedTime();
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[2, 0.3, 128, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.15}
          metalness={0.4}
          emissive="#ffffff"
          emissiveIntensity={0.1}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const points = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[points, 3]}
          />
        </bufferGeometry>
      <pointsMaterial size={0.015} color="#ffffff" transparent opacity={0.4} />
    </points>
  );
}

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        style={{ width: "100%", height: "100%" }}
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight color="#ffffff" intensity={0.3} />
        <directionalLight color="#ffffff" intensity={0.8} position={[5, 5, 5]} />
        <RotatingKnot />
        <Particles />
      </Canvas>
    </div>
  );
};
