import type { Metadata } from "next";
import { ServicesSection } from "@/components/services-section";
import { BlueFeatureSection } from "@/components/blue-feature-section";

export const metadata: Metadata = {
  title: "Services — Corex IT",
  description:
    "Enterprise-grade services from Corex IT — Web, Mobile, Custom Software, UI/UX, Backend & API, Cloud & DevOps and IT Consulting.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#F8F8F8] border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-12 md:py-16">
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0057B8] mb-4">
            <span className="w-8 h-px bg-[#0057B8]" />
            Services
          </span>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#071A33] max-w-[720px]">
            Enterprise-grade
            <br />
            <span className="font-light">services for growth.</span>
          </h1>
          <p className="text-[15px] leading-[1.7] text-slate-600 max-w-[560px] mt-4">
            From idea to launch and beyond — product-led engineering that is
            secure, scalable and built to deliver business outcomes.
          </p>
        </div>
      </section>
      <ServicesSection />
      <BlueFeatureSection />
    </div>
  );
}
