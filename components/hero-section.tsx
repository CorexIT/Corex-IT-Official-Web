"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// floating glass card - desktop layered composition, distinct from reference split-right-image
function FloatingPanel({
  delay,
  children,
  className,
  float = true,
}: {
  delay: number;
  children: React.ReactNode;
  className: string;
  float?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <motion.div
        animate={float ? { y: [0, -6, 0] } : undefined}
        transition={float ? { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: delay } : undefined}
        className="h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[86vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-slate-950">
      {/* ===== Full-width sophisticated background - NOT a right-side image ===== */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Modern software engineering environment - Corex IT"
          fill
          priority
          className="object-cover object-[center_30%] scale-[1.03]"
          sizes="100vw"
          quality={90}
        />
        {/* Cinematic layered overlays - ensure text readability without flat dark box */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-transparent lg:hidden" />
        {/* Blue technical glow */}
        <div className="absolute -top-32 -right-32 w-[720px] h-[720px] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[640px] h-[640px] rounded-full bg-indigo-600/12 blur-[110px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-blue-500/[0.07] blur-[90px] pointer-events-none hidden lg:block" />
      </div>

      {/* Technical grid / network - subtle */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>
      {/* vertical architectural lines */}
      <div className="absolute inset-y-0 left-[6%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden xl:block pointer-events-none" />
      <div className="absolute inset-y-0 left-[48%] w-px bg-white/[0.06] hidden lg:block pointer-events-none" />

      {/* soft bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />

      {/* ===== Content - layered, spacious, asymmetric ===== */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-28 pb-14 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* LEFT: main headline block - spans 7 cols */}
          <div className="lg:col-span-7 xl:col-span-6">
            {/* eyebrow + status */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3 mb-7"
            >
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-blue-300">
                <span className="w-7 h-px bg-blue-400/70" />
                Corex IT — Software Engineering
              </span>
              <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-medium tracking-[0.06em] text-white/90">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                Trusted by Businesses
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.2rem,4.8vw,3.75rem)] font-semibold leading-[0.95] tracking-[-0.032em] text-white"
            >
              Engineering Digital
              <br />
              Solutions That Move
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                Businesses Forward
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-[15px] md:text-[16px] leading-[1.7] text-white/70 max-w-[560px] mt-6 font-light"
            >
              We design and build scalable software, web and mobile solutions that help
              businesses innovate, grow, and operate smarter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-3 mt-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[13.5px] font-semibold tracking-[0.01em] bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all duration-200 hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)] hover:-translate-y-px"
              >
                Start a Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-90">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[13.5px] font-medium tracking-[0.01em] text-white bg-white/10 backdrop-blur-md border border-white/15 rounded-full hover:bg-white hover:text-slate-900 transition-all duration-200"
              >
                Explore Our Services
              </a>
            </motion.div>

            {/* Creative supporting info - not a plain capabilities list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <div className="inline-flex items-center rounded-full bg-white/8 backdrop-blur-md border border-white/10 p-1 pr-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[11px] font-semibold tracking-[0.02em] text-slate-900">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Modern Technology
                </span>
                <span className="hidden sm:inline-flex items-center gap-2 pl-3 pr-2 text-[11px] font-medium tracking-[0.04em] text-white/80">
                  Secure & Scalable
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                  Cloud Native
                </span>
                <span className="sm:hidden pl-3 pr-2 text-[11px] font-medium text-white/80">Secure & Scalable</span>
              </div>
              <span className="hidden md:inline-flex items-center gap-2 text-[11px] tracking-[0.08em] uppercase text-white/50">
                <span className="w-6 h-px bg-white/20" />
                Enterprise-grade delivery
              </span>
            </motion.div>
          </div>

          {/* RIGHT: floating glassmorphism layered visuals - distinct from simple right image */}
          <div className="lg:col-span-5 xl:col-span-6 relative lg:h-[520px] flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
            {/* subtle stage glow behind cards */}
            <div className="absolute inset-0 lg:left-12 bg-white/[0.02] backdrop-blur-[1px] rounded-[32px] border border-white/[0.06] hidden lg:block" />

            <div className="relative w-full max-w-[440px] lg:max-w-[420px] mx-auto lg:mx-0">
              {/* Card 1 - System status - top */}
              <FloatingPanel
                delay={0.6}
                className="relative z-20 w-full"
              >
                <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-white/20 shadow-[0_16px_48px_rgba(0,0,0,0.25),0_1px_3px_rgba(0,0,0,0.1)] overflow-hidden">
                  <div className="px-5 pt-4 pb-3 flex items-center justify-between border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                      <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-slate-700">System Health</span>
                    </div>
                    <span className="text-[11px] font-mono tracking-[0.04em] text-slate-400">corexit.cloud</span>
                  </div>
                  <div className="px-5 py-4 grid grid-cols-3 gap-4">
                    {[
                      { label: "Uptime", value: "99.9%", sub: "+0.2%" },
                      { label: "Latency", value: "42ms", sub: "optimal" },
                      { label: "Deploys", value: "1.2k", sub: "this month" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-[10px] tracking-[0.08em] uppercase text-slate-400">{stat.label}</p>
                        <p className="text-[16px] font-semibold tracking-[-0.02em] text-slate-900 mt-1">{stat.value}</p>
                        <p className="text-[10px] text-emerald-600 font-medium mt-0.5">{stat.sub}</p>
                      </div>
                    ))}
                  </div>
                  <div className="px-5 pb-4">
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden flex gap-px">
                      <div className="flex-1 bg-blue-600 rounded-full" />
                      <div className="flex-[0.6] bg-blue-400 rounded-full" />
                      <div className="flex-[0.3] bg-slate-200 rounded-full" />
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-[10px] font-medium tracking-[0.06em] uppercase text-slate-400">Capacity</span>
                      <span className="text-[10px] font-semibold text-blue-600">78% utilized</span>
                    </div>
                  </div>
                </div>
              </FloatingPanel>

              {/* Card 2 - Code / Data viz - overlapping bottom left */}
              <FloatingPanel
                delay={0.8}
                className="relative z-10 -mt-3 ml-6 mr-10 sm:ml-8 sm:mr-12 lg:ml-6 lg:mr-10"
                float={true}
              >
                <div className="rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.35)] overflow-hidden">
                  <div className="px-4 py-3 flex items-center gap-2 border-b border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15 border border-white/20 flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-[11px] font-mono font-medium tracking-[0.02em] text-white/90">api.deploy.ts</span>
                    <span className="ml-auto text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/20 text-emerald-300">verified</span>
                  </div>
                  <div className="px-4 py-3 font-mono text-[11px] leading-[1.6]">
                    <div className="flex gap-3">
                      <span className="text-white/25 select-none">01</span>
                      <span className="text-blue-300">await</span>
                      <span className="text-white/90">corexit.</span>
                      <span className="text-violet-300">scale</span>
                      <span className="text-white/60">(</span>
                      <span className="text-emerald-300">&apos;global&apos;</span>
                      <span className="text-white/60">)</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-white/25 select-none">02</span>
                      <span className="text-white/40">{"// secure · scalable · fast"}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-white/25 select-none">03</span>
                      <span className="text-white/60">→</span>
                      <span className="text-white/80">deployed in</span>
                      <span className="text-amber-300">42ms</span>
                    </div>
                  </div>
                </div>
              </FloatingPanel>

              {/* Card 3 - Abstract metric / geometric - small floating */}
              <FloatingPanel
                delay={1.0}
                className="absolute -right-2 sm:-right-4 -bottom-4 sm:-bottom-2 z-30 hidden lg:block"
                float={true}
              >
                <div className="rounded-xl bg-blue-600 text-white px-4 py-3 shadow-[0_12px_32px_rgba(37,99,235,0.4)] flex items-center gap-3 min-w-[170px]">
                  <span className="w-9 h-9 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[12px] font-semibold leading-none">Scale on demand</p>
                    <p className="text-[11px] text-blue-100 leading-none mt-1">Auto-scaling active</p>
                  </div>
                </div>
              </FloatingPanel>

              {/* Mobile-only: show scale badge inline below cards */}
              <div className="lg:hidden flex justify-center mt-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-medium tracking-[0.04em] text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  Scale on demand · Auto-scaling active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom technical detail - thin line + status */}
      <div className="absolute bottom-0 inset-x-0 z-20 pointer-events-none">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="hidden md:flex items-center justify-between py-3">
            <span className="text-[10px] tracking-[0.14em] uppercase text-white/40">© 2026 Corex IT — Engineering excellence</span>
            <span className="text-[10px] tracking-[0.14em] uppercase text-white/40 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-emerald-400" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
