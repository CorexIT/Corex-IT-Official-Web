"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

const capabilities = [
  {
    title: "Product Engineering",
    description:
      "End-to-end product development from concept to launch. We build software that solves real problems.",
  },
  {
    title: "Digital Experiences",
    description:
      "Interfaces that feel intuitive, look exceptional, and keep users engaged from the first interaction.",
  },
  {
    title: "Scalable Systems",
    description:
      "Architecture designed to grow with your business. Clean code, robust infrastructure, lasting solutions.",
  },
];

export function AboutSection() {
  const { ref: sectionRef, isInView } = useInView();
  const { ref: capRef, isInView: capInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* subtle architectural top divider */}
      <div className="absolute top-0 left-6 lg:left-12 right-6 lg:right-12 h-px bg-slate-100" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-blue-600 hidden md:block" />

      <div ref={sectionRef} className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-600 mb-8"
            >
              <span className="w-8 h-px bg-blue-600" />
              About
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(1.8rem,3.8vw,2.8rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-slate-900"
            >
              We turn complex ideas
              <br />
              into simple digital
              <br />
              products.
            </motion.h2>
          </div>

          <div className="lg:pt-2">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-[15px] leading-[1.7] text-slate-600 mb-6"
            >
              Corex IT is a software engineering studio focused on building
              high-quality digital products. We partner with startups, scale-ups,
              and enterprises to design, develop, and deploy software that drives
              real business outcomes.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-[15px] leading-[1.7] text-slate-500"
            >
              Our engineering-first approach means we don&apos;t just write code.
              We architect solutions. Every project is built with clean code,
              modern patterns, and a commitment to long-term maintainability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 flex items-center gap-8 pt-6 border-t border-slate-100"
            >
              <div>
                <p className="text-[22px] font-semibold tracking-[-0.02em] text-slate-900 leading-none">50+</p>
                <p className="text-[11px] tracking-[0.08em] uppercase text-slate-400 mt-1">Projects shipped</p>
              </div>
              <span className="w-px h-10 bg-slate-200" />
              <div>
                <p className="text-[22px] font-semibold tracking-[-0.02em] text-slate-900 leading-none">12+</p>
                <p className="text-[11px] tracking-[0.08em] uppercase text-slate-400 mt-1">Years engineering</p>
              </div>
              <span className="w-px h-10 bg-slate-200 hidden sm:block" />
              <div className="hidden sm:block">
                <p className="text-[22px] font-semibold tracking-[-0.02em] text-slate-900 leading-none">99%</p>
                <p className="text-[11px] tracking-[0.08em] uppercase text-slate-400 mt-1">Client retention</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div ref={capRef} className="mt-16 md:mt-20 grid md:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              animate={capInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative p-7 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-300"
            >
              <div className="absolute top-0 left-7 right-7 h-px bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-blue-600 mb-4">
                0{i + 1}
              </div>
              <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-slate-900 mb-2.5">
                {cap.title}
              </h3>
              <p className="text-[13px] leading-[1.6] text-slate-500">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
