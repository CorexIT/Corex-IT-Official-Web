"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
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

  return (
    <section className="relative bg-[#F8F8F8] overflow-hidden border-t border-slate-100">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#071A33_1px,transparent_1px),linear-gradient(to_bottom,#071A33_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div ref={ref} className="relative max-w-[1440px] mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="max-w-[720px]">
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0057B8] mb-4">
            <span className="w-8 h-px bg-[#0057B8]" />
            Why Corex IT
          </span>
          <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#071A33]">
            A partner you can
            <br />
            <span className="font-light">build with confidence.</span>
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.n}
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[14px] bg-white border border-slate-200 p-6 hover:border-[#0057B8]/25 hover:shadow-[0_8px_24px_rgba(0, 87, 184, 0.06)] transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <span className="text-[11px] font-bold tracking-[0.14em] text-[#0057B8]">{r.n}</span>
                <span className="w-8 h-8 rounded-lg bg-[#EAF4FF] border border-[#D4E8FF] flex items-center justify-center group-hover:bg-[#0057B8] group-hover:border-[#0057B8] transition-colors">
                  <r.Icon className="w-4 h-4 text-[#0057B8] group-hover:text-white transition-colors" />
                </span>
              </div>
              <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-[#071A33] mt-3">{r.title}</h3>
              <p className="text-[13px] leading-[1.6] text-slate-500 mt-2">{r.desc}</p>
              <span className="absolute bottom-0 left-6 right-6 h-px bg-[#0057B8] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
