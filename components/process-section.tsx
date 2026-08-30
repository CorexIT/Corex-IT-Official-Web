"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

const steps = [
  { n: "01", title: "Discover", desc: "We learn your business, users and goals. Research and strategy define the foundation." },
  { n: "02", title: "Plan", desc: "Architecture, scope and roadmap — every decision intentional and validated." },
  { n: "03", title: "Design", desc: "Wireframes, prototypes and design systems — beautiful and functional." },
  { n: "04", title: "Develop", desc: "Clean, maintainable code with modern tools and iterative checkpoints." },
  { n: "05", title: "Test", desc: "QA across devices, browsers and scenarios. Performance and security validated." },
  { n: "06", title: "Deploy", desc: "Deployed with care, monitored closely and optimized continuously." },
  { n: "07", title: "Support", desc: "Long-term partnership — updates, scaling and dedicated support." },
];

export function ProcessSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="process" className="relative bg-white overflow-hidden border-t border-slate-100">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="max-w-[720px] mb-10">

          <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#071A33]">
            A proven path
            <br />
            <span className="font-light">from idea to launch.</span>
          </h2>
          <p className="text-[14.5px] leading-[1.6] text-slate-600 mt-4 max-w-[560px]">
            Structured, iterative delivery that ensures quality at every stage — no shortcuts, no surprises.
          </p>
        </div>

        {/* desktop horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative pt-8">
            <div className="absolute top-[34px] left-6 right-6 h-px bg-slate-200" />
            <div className="absolute top-[34px] left-6 h-px bg-[#0057B8] w-[88%] hidden xl:block" />
            <div className="grid grid-cols-7 gap-4">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  className="relative"
                >
                  <div className="w-[18px] h-[18px] rounded-full bg-white border-[3px] border-[#0057B8] shadow-sm flex items-center justify-center relative z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0057B8]" />
                  </div>
                  <p className="text-[11px] font-bold tracking-[0.12em] text-[#0057B8] mt-4">{s.n}</p>
                  <h3 className="text-[14px] font-semibold tracking-[-0.01em] text-[#071A33] mt-1">{s.title}</h3>
                  <p className="text-[12.5px] leading-[1.6] text-slate-500 mt-2">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* mobile vertical */}
        <div className="lg:hidden relative">
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-slate-200" />
          <div className="space-y-0">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: -8 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="relative flex gap-6 py-5"
              >
                <div className="relative z-10 w-[18px] h-[18px] rounded-full bg-white border-[3px] border-[#0057B8] flex items-center justify-center shrink-0 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0057B8]" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[11px] font-bold tracking-[0.12em] text-[#0057B8]">{s.n}</span>
                    <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-[#071A33]">{s.title}</h3>
                  </div>
                  <p className="text-[13px] leading-[1.6] text-slate-500 mt-1 max-w-[520px]">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
