"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function BlueFeatureSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative overflow-hidden bg-[#071A33]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -top-24 right-[-6%] w-[640px] h-[640px] rounded-full bg-[#0057B8]/25 blur-[50px]" />
        <div className="absolute -bottom-24 left-[-6%] w-[520px] h-[520px] rounded-full bg-white/[0.04] blur-[40px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div ref={ref} className="relative max-w-[1440px] mx-auto px-6 lg:px-10 py-14 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#8AB6FF] mb-5"
            >
              <span className="w-8 h-px bg-[#0057B8]" />
              Enterprise Impact
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="text-[clamp(1.8rem,3.4vw,2.7rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white"
            >
              Building digital solutions
              <br />
              <span className="font-light text-white/90">that make an impact.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="text-[14.5px] leading-[1.7] text-white/70 max-w-[560px] mt-5"
            >
              We partner with ambitious organisations to modernise operations, launch new products and create
              exceptional digital experiences — securely and at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#071A33] text-[14px] font-semibold hover:bg-white/95 transition-colors shadow-sm">
                Talk to an expert <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="/#services" className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/20 text-white text-[14px] font-medium hover:bg-white/10 transition-colors">
                Explore services
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-white/[0.06] backdrop-blur border border-white/10 p-6">
              <p className="text-[11px] tracking-[0.08em] uppercase text-white/50 font-semibold">How We Work</p>
              <ul className="mt-4 space-y-3 text-[13.5px] leading-[1.6] text-white/80">
                <li className="flex gap-2.5"><span className="text-[#8AB6FF] mt-1">—</span> Clear scope, transparent communication and predictable delivery.</li>
                <li className="flex gap-2.5"><span className="text-[#8AB6FF] mt-1">—</span> Clean, maintainable code and observable systems.</li>
                <li className="flex gap-2.5"><span className="text-[#8AB6FF] mt-1">—</span> Strategy through support — one accountable partner.</li>
              </ul>
            </div>
            <div className="mt-4 rounded-2xl bg-white p-5 border border-white/20 shadow-sm">
              <p className="text-[11px] tracking-[0.08em] uppercase text-slate-400 font-semibold">Trusted stack</p>
              <p className="text-[13px] text-slate-600 mt-2">React · Next.js · .NET · Java · Spring Boot · PostgreSQL · AWS</p>
              <div className="mt-3 h-1.5 rounded-full bg-slate-100 overflow-hidden flex gap-px">
                <div className="flex-1 bg-[#071A33]" />
                <div className="flex-[0.7] bg-[#0057B8]" />
                <div className="flex-[0.4] bg-slate-200" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
