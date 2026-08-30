"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { Cpu, ShieldCheck, TrendingUp, Users, Wrench, Award } from "lucide-react";

const reasons = [
  { n: "01", title: "Modern Technology", desc: "We build with proven, enterprise-grade stacks that are secure, scalable and future-ready.", Icon: Cpu },
  { n: "02", title: "Quality Engineering", desc: "Clean code, modern patterns and rigorous reviews — engineered for maintainability.", Icon: ShieldCheck },
  { n: "03", title: "Scalable Solutions", desc: "Architecture that grows with your business, not against it.", Icon: TrendingUp },
  { n: "04", title: "Client-Focused Development", desc: "Collaborative delivery with transparency, predictable timelines and shared ownership.", Icon: Users },
  { n: "05", title: "Reliable Support", desc: "Proactive monitoring, security updates and dedicated engineering support.", Icon: Wrench },
  { n: "06", title: "Professional Delivery", desc: "On-time, on-budget and enterprise-ready — from discovery to deployment.", Icon: Award },
];

export function WhyCorexSection() {
  const { ref, isInView } = useInView();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#040E1F] border-y border-white/[0.06]">
      {/* Deep navy base + subtle blue gradients */}
      <div className="absolute inset-0 bg-[#040E1F]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#071A33] via-[#0A2450] to-[#040E1F]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_600px_at_75%_18%,rgba(0,87,184,0.13),transparent_62%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_500px_at_12%_82%,rgba(59,130,246,0.08),transparent_65%)]" />

      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* soft ambient glows */}
      <div className="absolute -top-32 -right-32 w-[720px] h-[720px] rounded-full bg-[#0057B8]/10 blur-[80px] pointer-events-none" />
      <div className="absolute top-[38%] -left-32 w-[560px] h-[560px] rounded-full bg-[#0F5BDB]/[0.06] blur-[70px] pointer-events-none" />

      {/* transition smoothing — blend into surrounding white sections */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-white/[0.04] via-white/[0.015] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white/[0.025] to-transparent pointer-events-none" />

      {/* blurred geometric accents */}
      <div className="absolute top-20 right-[18%] w-32 h-32 rounded-[20px] bg-white/[0.02] border border-white/[0.04] backdrop-blur pointer-events-none hidden lg:block" style={{ transform: "rotate(12deg)" }} />
      <div className="absolute bottom-24 right-[28%] w-20 h-20 rounded-2xl bg-[#0057B8]/10 border border-[#3B82F6]/15 pointer-events-none hidden lg:block" style={{ transform: "rotate(-8deg)" }} />

      {/* floating light particles */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-24 right-[32%] w-1.5 h-1.5 rounded-full bg-[#8AB6FF]/40 blur-[0.5px] pointer-events-none"
            animate={{ y: [0, -10, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-32 left-[28%] w-1 h-1 rounded-full bg-white/30 pointer-events-none"
            animate={{ y: [0, 8, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 right-[12%] w-2 h-2 rounded-full bg-[#3B82F6]/20 pointer-events-none hidden lg:block"
            animate={{ y: [0, -14, 0], x: [0, 4, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </>
      )}

      <div ref={ref} className="relative max-w-[1440px] mx-auto px-6 lg:px-10 py-16 md:py-20 lg:py-24">
        {/* Header — intentional two-column: text left, abstract visual right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] backdrop-blur border border-white/10 text-[11px] font-semibold tracking-[0.08em] uppercase text-[#8AB6FF] mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse" />
              Why Corex IT
            </motion.div>

            <motion.h2
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(1.9rem,3.6vw,2.85rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white"
            >
              A partner you can
              <br />
              <span className="font-light bg-gradient-to-r from-[#8AB6FF] via-[#B8D4FF] to-white bg-clip-text text-transparent">
                build with confidence.
              </span>
            </motion.h2>

            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-[14px] leading-[1.7] text-white/60 max-w-[560px] mt-4"
            >
              Trusted by growing enterprises for secure architecture, transparent delivery and reliable long-term partnership.
            </motion.p>
          </div>

          {/* Abstract 3D-inspired visual — right side */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative h-[220px] sm:h-[240px] lg:h-[260px] overflow-hidden rounded-[20px] bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
              {/* inner glow */}
              <div className="absolute -top-10 -right-10 w-[220px] h-[220px] rounded-full bg-[#0057B8]/15 blur-[30px] pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-[260px] h-[260px] rounded-full bg-[#8AB6FF]/10 blur-[32px] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_400px_220px_at_50%_45%,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />

              {/* central abstract core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* orbit rings */}
                  <div className="absolute inset-0 -m-10 rounded-full border border-white/[0.05]" style={{ width: 160, height: 160, left: -40, top: -40 }} />
                  <div className="absolute inset-0 -m-6 rounded-full border border-[#3B82F6]/15" style={{ width: 132, height: 132, left: -26, top: -26 }} />
                  <motion.div
                    className="absolute -m-10 rounded-full border border-[#0057B8]/20"
                    style={{ width: 160, height: 160, left: -40, top: -40 }}
                    animate={prefersReducedMotion ? {} : { rotate: 360 }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                  />
                  {/* core */}
                  <motion.div
                    className="relative w-20 h-20 rounded-[18px] bg-gradient-to-br from-[#0057B8] via-[#0F5BDB] to-[#003B7A] shadow-[0_12px_32px_rgba(0,87,184,0.35)] border border-white/15 flex items-center justify-center overflow-hidden"
                    animate={prefersReducedMotion ? {} : { y: [0, -6, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/12 via-transparent to-transparent" />
                    <Award className="w-8 h-8 text-white/90" strokeWidth={1.6} />
                  </motion.div>

                  {/* floating nodes */}
                  <motion.div
                    className="absolute -top-3 -right-4 w-3 h-3 rounded-full bg-[#8AB6FF] shadow-[0_0_12px_rgba(138,182,255,0.6)] border border-white/20"
                    animate={prefersReducedMotion ? {} : { y: [0, -8, 0], x: [0, 3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-5 w-2 h-2 rounded-full bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    animate={prefersReducedMotion ? {} : { y: [0, 7, 0] }}
                    transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  />
                  <motion.div
                    className="absolute top-1/2 -right-8 w-1.5 h-1.5 rounded-full bg-emerald-400/80"
                    animate={prefersReducedMotion ? {} : { y: [0, -6, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </div>
              </div>

              {/* bottom glass stat */}
              <div className="absolute bottom-0 inset-x-0 p-4">
                <div className="rounded-[12px] bg-white/[0.06] backdrop-blur-md border border-white/[0.08] px-4 py-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-white/80">Trusted delivery</p>
                    <p className="text-[11px] text-white/45 mt-0.5">On-time · Secure · Scalable</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5">
                    <span className="w-6 h-px bg-emerald-400/60" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-semibold tracking-[0.06em] uppercase text-emerald-300">Live</span>
                  </div>
                </div>
              </div>
            </div>

            {/* subtle caption */}
            <p className="text-center lg:text-right text-[11px] tracking-[0.06em] uppercase text-white/30 mt-3">Enterprise-grade · Since 2012</p>
          </motion.div>
        </div>

        {/* Cards — dark translucent, hover glow */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.n}
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[16px] bg-white/[0.04] backdrop-blur-xl border border-white/[0.07] p-6 hover:bg-white/[0.06] hover:border-[#3B82F6]/20 hover:shadow-[0_12px_32px_rgba(0,87,184,0.12)] transition-all duration-300 overflow-hidden"
            >
              {/* hover glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#0057B8]/10 blur-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative flex items-start justify-between">
                <span className="text-[11px] font-bold tracking-[0.14em] text-[#8AB6FF]/70 group-hover:text-[#8AB6FF] transition-colors">{r.n}</span>
                <span className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:bg-[#0057B8] group-hover:border-[#0057B8] group-hover:shadow-[0_8px_20px_rgba(0,87,184,0.25)] transition-all duration-300">
                  <r.Icon className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
                </span>
              </div>
              <h3 className="relative text-[15px] font-semibold tracking-[-0.01em] text-white mt-4 group-hover:text-white transition-colors">{r.title}</h3>
              <p className="relative text-[13px] leading-[1.6] text-white/55 group-hover:text-white/65 transition-colors mt-2">{r.desc}</p>
              <span className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </motion.div>
          ))}
        </div>

        {/* bottom trust bar — subtle social proof */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/10 max-w-[720px] mx-auto"
        >
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.08em] uppercase text-white/45 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            Trusted by growing enterprises
          </span>
          <span className="hidden sm:inline text-white/15">—</span>
          <span className="text-[11px] tracking-[0.08em] uppercase text-white/30">99% retention · 50+ products shipped</span>
        </motion.div>
      </div>
    </section>
  );
}
