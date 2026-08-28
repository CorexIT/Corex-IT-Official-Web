"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Cloud, ShieldCheck } from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    label: "01 — Capability",
    title: "Software Engineering",
    desc: "Scalable architectures",
  },
  {
    icon: Smartphone,
    label: "02 — Capability",
    title: "Web & Mobile",
    desc: "Product-grade experiences",
  },
  {
    icon: Cloud,
    label: "03 — Capability",
    title: "Cloud & Backend",
    desc: "Secure & auto-scaling",
  },
  {
    icon: ShieldCheck,
    label: "04 — Capability",
    title: "Secure Systems",
    desc: "Enterprise reliability",
  },
];

export function HeroCapabilitiesBar() {
  return (
    <section className="relative bg-white">
      {/* visual connection to hero - subtle top gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* floating connected card */}
        <div className="relative -mt-6 md:-mt-8 bg-white rounded-2xl border border-slate-200 shadow-[0_8px_32px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.05)] overflow-hidden">
          {/* subtle top blue accent */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />
          {/* thin grid inside card */}
          <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,slate-900_1px,transparent_1px),linear-gradient(to_bottom,slate-900_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-100 divide-y lg:divide-y-0">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 md:p-7 lg:p-8 hover:bg-slate-50/60 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300">
                    <cap.icon className="w-3.5 h-3.5 text-blue-600 group-hover:text-white transition-colors" strokeWidth={1.7} />
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-slate-400">
                    {cap.label}
                  </span>
                </div>
                <h3 className="text-[14px] md:text-[15px] font-semibold tracking-[-0.01em] text-slate-900">
                  {cap.title}
                </h3>
                <p className="text-[12px] leading-relaxed text-slate-500 mt-1">{cap.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* bottom meta */}
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-3 px-6 md:px-8 py-4 bg-slate-50/70 border-t border-slate-100">
            <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-slate-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Trusted by growing businesses · Modern stack · Secure by design
            </span>
            <a href="#services" className="text-[12px] font-semibold tracking-[0.02em] text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 group">
              Explore capabilities
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* breathing space before About */}
        <div className="h-10 md:h-12" />
      </div>
    </section>
  );
}
