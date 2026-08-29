"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

const groups: { title: string; items: string[] }[] = [
  { title: "Frontend", items: ["React", "Next.js"] },
  { title: "Backend", items: [".NET", "Java", "Spring Boot", "Node.js", "Python"] },
  { title: "Mobile", items: ["React Native", "Flutter"] },
  { title: "Database", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { title: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes"] },
  { title: "Tools", items: ["Git", "GitHub", "Figma"] },
];

export function TechnologyStackSection() {
  const { ref, isInView } = useInView();
  const { ref: gridRef, isInView: gridInView } = useInView({ threshold: 0.12 });

  return (
    <section id="technologies" className="relative bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div ref={ref} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0057B8] mb-4">
              <span className="w-8 h-px bg-[#0057B8]" />
              Technologies We Use
            </span>
            <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#071A33]">
              Modern stack,
              <br />
              <span className="font-light">proven at scale.</span>
            </h2>
          </div>
          <p className="max-w-[480px] text-[14.5px] leading-[1.7] text-slate-600 lg:text-right">
            We choose technology based on what best serves the product — consistent,
            maintainable and enterprise-ready.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {groups.map((g, idx) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 14 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[14px] bg-[#F8F8F8] border border-[#E5E7EB] p-5 hover:bg-white hover:border-[#0057B8]/20 hover:shadow-[0_8px_24px_rgba(0, 87, 184, 0.06)] transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0057B8]" />
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#071A33]">{g.title}</p>
              </div>
              <div className="space-y-2.5">
                {g.items.map((it) => (
                  <div key={it} className="flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://cdn.simpleicons.org/${slugFor(it)}/0B2A5B`}
                      alt={it}
                      width={16}
                      height={16}
                      className="w-4 h-4 object-contain opacity-70"
                      loading="lazy"
                    />
                    <span className="text-[13.5px] font-medium tracking-[-0.01em] text-slate-700">{it}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-slate-100"
        >
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.08em] uppercase text-slate-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Clean architecture · Secure · Observable
          </span>
          <span className="hidden sm:inline text-slate-200">—</span>
          <span className="text-[11px] tracking-[0.08em] uppercase text-slate-400">Battle-tested across industries</span>
        </motion.div>
      </div>
    </section>
  );
}

function slugFor(name: string): string {
  const map: Record<string, string> = {
    "React": "react",
    "Next.js": "nextdotjs",
    ".NET": "dotnet",
    "Java": "openjdk",
    "Spring Boot": "springboot",
    "Node.js": "nodedotjs",
    "Python": "python",
    "PostgreSQL": "postgresql",
    "MySQL": "mysql",
    "MongoDB": "mongodb",
    "AWS": "amazonaws",
    "Docker": "docker",
    "Kubernetes": "kubernetes",
    "React Native": "react",
    "Flutter": "flutter",
    "Git": "git",
    "GitHub": "github",
    "Figma": "figma",
  };
  return map[name] ?? name.toLowerCase().replace(/[^a-z0-9]/g, "");
}
