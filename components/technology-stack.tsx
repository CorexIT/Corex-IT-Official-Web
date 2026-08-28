"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Hero3D } from "./hero3d";

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: ".NET", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
];

const capabilities = [
  "Custom Software Development",
  "Cloud-Native Architecture",
  "Microservices & APIs",
  "DevOps & CI/CD",
  "Performance Engineering",
  "Security & Compliance",
];

export function TechnologyStackSection() {
  const { ref: sectionRef, isInView } = useInView();
  const { ref: gridRef, isInView: gridInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-24 md:py-36 bg-white relative overflow-hidden">
      <Hero3D />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div ref={sectionRef}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-blue-600 mb-8"
            >
              <span className="w-8 h-px bg-blue-600" />
              Technology
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-slate-900 mb-8"
            >
              Built with modern
              <br />
              technology.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[15px] leading-[1.75] text-slate-500 max-w-md mb-12"
            >
              We choose technologies based on what best serves the project.
              Our stack is modern, proven, and battle-tested across industries.
            </motion.p>

            <div className="space-y-3">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-600" />
                  <span className="text-[13px] text-slate-600">{cap}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={gridInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative p-5 rounded-xl bg-slate-50 border border-slate-200 transition-all duration-300 hover:bg-white hover:border-blue-200 hover:shadow-sm"
              >
                <p className="text-[15px] font-medium text-slate-700 group-hover:text-slate-900 transition-colors duration-300 mb-1">
                  {tech.name}
                </p>
                <p className="text-[11px] tracking-[0.1em] uppercase text-slate-400">
                  {tech.category}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
