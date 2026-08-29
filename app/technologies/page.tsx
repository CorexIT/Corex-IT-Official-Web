import type { Metadata } from "next";
import { TechnologyStackSection } from "@/components/technology-stack";

export const metadata: Metadata = {
  title: "Technologies — Corex IT",
  description:
    "Modern, proven technology stack at Corex IT — Frontend, Backend, Mobile, Database, Cloud & DevOps and Tools.",
};

export default function TechnologiesPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#F8F8F8] border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-12 md:py-16">
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0057B8] mb-4">
            <span className="w-8 h-px bg-[#0057B8]" />
            Technologies
          </span>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#071A33] max-w-[720px]">
            Modern stack,
            <br />
            <span className="font-light">proven at scale.</span>
          </h1>
          <p className="text-[15px] leading-[1.7] text-slate-600 max-w-[560px] mt-4">
            We choose technology based on what best serves the product — consistent,
            maintainable and enterprise-ready.
          </p>
        </div>
      </section>
      <TechnologyStackSection />
    </div>
  );
}
