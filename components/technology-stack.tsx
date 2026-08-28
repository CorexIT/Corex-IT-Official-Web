"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface TechNode {
  id: string;
  label: string;
  x: number;
  y: number;
  z: number;
}

const techNodes: TechNode[] = [
  { id: "react", label: "React", x: -4, y: 2, z: 0 },
  { id: "next", label: "Next.js", x: 4, y: 2, z: 0 },
  { id: "node", label: "Node.js", x: -3, y: -2, z: 0 },
  { id: "net", label: ".NET", x: 3, y: -2, z: 0 },
  { id: "pg", label: "PostgreSQL", x: 0, y: 4, z: 0 },
  { id: "cloud", label: "Cloud", x: 0, y: -4, z: 0 },
];

function TechSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      const t = state.clock.getElapsedTime();
      meshRef.current.position.y = position[1] + Math.sin(t + position[0]) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.2}
          metalness={0.3}
          emissive="#ffffff"
          emissiveIntensity={0.05}
        />
      </mesh>
    </Float>
  );
}

function TechLines() {
  const linesRef = useRef<THREE.Group>(null);

  const lineGeometry = useMemo(() => {
    const points: THREE.Vector3[][] = [];
    for (let i = 0; i < techNodes.length; i++) {
      for (let j = i + 1; j < techNodes.length; j++) {
        points.push([
          new THREE.Vector3(techNodes[i].x, techNodes[i].y, techNodes[i].z),
          new THREE.Vector3(techNodes[j].x, techNodes[j].y, techNodes[j].z),
        ]);
      }
    }
    return points;
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
    }
  });

  return (
    <group ref={linesRef}>
      {lineGeometry.map((points, index) => (
        <line key={index}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[new Float32Array(points.flatMap((p) => [p.x, p.y, p.z])), 3]}
              />
            </bufferGeometry>
          <lineBasicMaterial color="#ffffff" transparent opacity={0.1} />
        </line>
      ))}
    </group>
  );
}

function TechEcosystem() {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 12], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight color="#ffffff" intensity={0.3} />
      <directionalLight color="#ffffff" intensity={0.6} position={[5, 5, 5]} />

      <TechLines />

      {techNodes.map((node) => (
        <TechSphere key={node.id} position={[node.x, node.y, node.z]} />
      ))}
    </Canvas>
  );
}

function useInView(ref: React.RefObject<HTMLElement | null>): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return isInView;
}

export const TechnologyStackSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  const techCapabilities = [
    "Custom Software Development",
    "Cloud-Native Architecture",
    "Microservices",
    "API Development",
    "DevOps & CI/CD",
    "Security & Compliance",
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-12 relative">
          Technology Stack
          <span className="absolute left-0 top-1/2 -translate-y-1/2 h-1 w-6 bg-white content-['']"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-zinc-400 text-sm mb-8">
              We work with a diverse range of technologies to build robust, scalable,
              and innovative software solutions tailored to your needs.
            </p>

            <div className="space-y-3">
              {techCapabilities.map((tech, index) => (
                <div
                  key={tech}
                  className={`px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.02] backdrop-blur-md transition-all duration-500 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <span className="text-sm text-zinc-400">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[400px] md:h-[500px] rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.02]">
            <TechEcosystem />
          </div>
        </div>
      </div>
    </section>
  );
};
