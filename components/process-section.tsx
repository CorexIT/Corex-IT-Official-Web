"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn your business, your users, and your goals. Research and strategy define the foundation.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "Technical architecture, project planning, and roadmap creation. Every decision is intentional.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Wireframes, prototypes, and design systems. We craft interfaces that are both beautiful and functional.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "Clean, maintainable code built with modern tools and best practices. Iterative development with regular checkpoints.",
  },
  {
    number: "05",
    title: "Test",
    description:
      "Thorough QA across devices, browsers, and scenarios. Performance, security, and accessibility validated.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "Deployed with care, monitored closely, and optimized continuously. Your product is just getting started.",
  },
];

export function ProcessSection() {
  const { ref: sectionRef, isInView } = useInView();

  return (
    <section id="process" className="py-24 md:py-36 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
          <div ref={sectionRef}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-blue-600 mb-8"
            >
              <span className="w-8 h-px bg-blue-600" />
              Process
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-slate-900 mb-8"
            >
              A proven path
              <br />
              from idea to launch.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[15px] leading-[1.75] text-slate-500 max-w-md"
            >
              We follow a structured, iterative process that ensures quality at every
              stage. No shortcuts, no surprises — just reliable delivery.
            </motion.p>
          </div>

          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-slate-200" />

            <div className="space-y-0">
              {steps.map((step, i) => (
                <ProcessStep key={step.number} step={step} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex gap-8 py-6 md:py-8"
    >
      <div className="relative z-10 w-[40px] shrink-0 flex items-start justify-center pt-1">
        <div className="w-[9px] h-[9px] rounded-full bg-blue-600 border-2 border-white shadow-sm" />
      </div>

      <div className="flex-1 pb-2">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-[11px] font-medium tracking-[0.1em] text-blue-600">
            {step.number}
          </span>
          <h3 className="text-[17px] font-medium text-slate-900 tracking-[-0.01em]">
            {step.title}
          </h3>
        </div>
        <p className="text-[13px] leading-relaxed text-slate-500 max-w-md">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
