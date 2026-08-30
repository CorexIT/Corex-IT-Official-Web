"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import Link from "next/link";

export function FinalCta() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative overflow-hidden bg-[#071A33]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -top-20 right-[-8%] w-[640px] h-[640px] rounded-none bg-[#0057B8]/20 blur-[50px]" />
        <div className="absolute -bottom-20 left-[-6%] w-[520px] h-[520px] rounded-none bg-white/[0.04] blur-[40px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div ref={ref} className="relative max-w-[1440px] mx-auto px-6 lg:px-10 py-16 md:py-20 lg:py-24 text-center">


        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white max-w-[720px] mx-auto"
        >
          Ready to build your
          <br />
          next digital solution?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="text-[14.5px] leading-[1.7] text-white/70 max-w-[600px] mx-auto mt-5"
        >
          Let&apos;s discuss your idea and explore how Corex IT can turn it into a reliable digital solution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-none bg-white text-[#071A33] text-[14px] font-semibold hover:bg-white/95 transition-colors shadow-sm"
          >
            Contact Us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-none border border-white/20 text-white text-[14px] font-medium hover:bg-white/10 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-none border border-white/20 text-white text-[14px] font-medium hover:bg-white/10 transition-colors"
          >
            Read Our Insights
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.34 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/10 max-w-[640px] mx-auto"
        >
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.08em] uppercase text-white/50 font-medium">
            <span className="w-1.5 h-1.5 rounded-none bg-emerald-400" />
            Available for new projects
          </span>
          <span className="hidden sm:inline text-white/20">—</span>
          <span className="text-[11px] tracking-[0.08em] uppercase text-white/40">Colombo · Sri Lanka</span>
        </motion.div>
      </div>
    </section>
  );
}
