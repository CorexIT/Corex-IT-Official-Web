"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

export function FinalCta() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 md:py-36 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(37,99,235,0.03),transparent)]" />

          <div ref={ref} className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-slate-900 mb-5"
            >
              Have an idea worth building?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[15px] text-slate-500 mb-10 max-w-lg mx-auto"
            >
              Let&apos;s turn your idea into a digital product.
              We&apos;re ready when you are.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-[13px] font-medium tracking-[0.05em] bg-blue-600 text-white rounded-full transition-all duration-300 hover:bg-blue-700"
              >
                Start a Conversation
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
