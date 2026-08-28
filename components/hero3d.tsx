"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingRing({
  radius,
  tube,
  position,
  rotationAxis,
  speed,
}: {
  radius: number;
  tube: number;
  position: [number, number, number];
  rotationAxis: "x" | "y" | "z";
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation[rotationAxis] += speed * 0.01;
    meshRef.current.position.y = position[1] + Math.sin(t * 0.3 + position[0]) * 0.08;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[radius, tube, 32, 64]} />
      <meshStandardMaterial
        color="#2563eb"
        roughness={0.8}
        metalness={0.1}
        transparent
        opacity={0.06}
        wireframe
      />
    </mesh>
  );
}

function CentralCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.15;
    meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[0.8, 1]} />
      <meshStandardMaterial
        color="#2563eb"
        roughness={0.4}
        metalness={0.2}
        transparent
        opacity={0.05}
        wireframe
      />
    </mesh>
  );
}

function generateParticles() {
  const count = 100;
  const positions = new Float32Array(count * 3);
  const seed = 42;
  let s = seed;
  for (let i = 0; i < count * 3; i++) {
    s = (s * 16807 + 0) % 2147483647;
    positions[i] = (s / 2147483647 - 0.5) * 8;
  }
  return positions;
}

const particlePositions = generateParticles();

function Particles() {
  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.015;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlePositions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.01}
        color="#2563eb"
        transparent
        opacity={0.18}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <CentralCore />
      <FloatingRing radius={2.0} tube={0.008} position={[0, 0, 0]} rotationAxis="x" speed={0.8} />
      <FloatingRing radius={2.6} tube={0.006} position={[0, 0.3, 0]} rotationAxis="y" speed={0.5} />
      <FloatingRing radius={1.5} tube={0.005} position={[0, -0.2, 0]} rotationAxis="z" speed={1.0} />
      <Particles />
    </group>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-20 md:opacity-25 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.3} />
        <directionalLight intensity={0.4} position={[5, 5, 5]} />
        <Scene />
      </Canvas>
    </div>
  );
}
