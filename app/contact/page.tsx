import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Contact — Corex IT",
  description:
    "Get in touch with Corex IT — tell us about your project and let's explore how we can help you build a reliable digital solution.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#F8F8F8] border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-12 md:py-16">
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0057B8] mb-4">
            <span className="w-8 h-px bg-[#0057B8]" />
            Contact
          </span>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#071A33] max-w-[640px]">
            Tell us about
            <br />
            <span className="font-light">your project.</span>
          </h1>
          <p className="text-[15px] leading-[1.7] text-slate-600 max-w-[560px] mt-4">
            Have an idea worth building? Share a few details and we&apos;ll get
            back to you to discuss how Corex IT can help you design, build and
            scale it.
          </p>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
