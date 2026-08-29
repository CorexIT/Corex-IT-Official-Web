import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Corex IT",
  description:
    "Learn about Corex IT — Sri Lankan software engineering partner helping businesses build reliable, scalable digital products.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* hero intro */}
      <section className="relative overflow-hidden bg-[#F8F8F8] border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#071A33_1px,transparent_1px),linear-gradient(to_bottom,#071A33_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-14 md:py-20">
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0057B8] mb-4">
            <span className="w-8 h-px bg-[#0057B8]" />
            Who We Are
          </span>
          <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#071A33] max-w-[720px]">
            Technology
            <br />
            <span className="font-light">that moves</span> businesses forward.
          </h1>
          <p className="text-[15px] leading-[1.7] text-slate-600 max-w-[640px] mt-6">
            Corex IT is a Sri Lankan software engineering company. We partner
            with ambitious businesses to transform ideas into reliable, scalable
            digital products — from strategy and design to engineering,
            deployment and long-term support.
          </p>
        </div>
      </section>

      {/* vision / mission / what we do */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-10 py-12 md:py-16">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <h2 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0057B8] mb-3">Our Vision</h2>
            <p className="text-[14.5px] leading-[1.7] text-slate-600">
              To be a trusted technology partner that helps businesses operate
              smarter, launch faster and grow sustainably through well-engineered
              software.
            </p>
          </div>
          <div className="lg:col-span-4">
            <h2 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0057B8] mb-3">Our Mission</h2>
            <p className="text-[14.5px] leading-[1.7] text-slate-600">
              To deliver secure, scalable and maintainable digital solutions
              with engineering discipline, modern architecture and clear
              communication at every stage.
            </p>
          </div>
          <div className="lg:col-span-4">
            <h2 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0057B8] mb-3">What We Do</h2>
            <p className="text-[14.5px] leading-[1.7] text-slate-600">
              Web and mobile application development, custom software,
              UI/UX design, backend and API development, cloud and DevOps,
              and IT consulting for growing teams and enterprises.
            </p>
          </div>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-8 pt-10 border-t border-slate-100">
          <div className="lg:col-span-6">
            <h3 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#071A33] mb-3">Development Philosophy</h3>
            <p className="text-[14.5px] leading-[1.7] text-slate-600">
              We architect solutions, not just write code. Every project is
              approached with clean code, proven patterns and a focus on
              long-term maintainability. Decisions are validated against business
              outcomes, performance, security and usability.
            </p>
          </div>
          <div className="lg:col-span-6">
            <h3 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#071A33] mb-3">Technology Approach</h3>
            <p className="text-[14.5px] leading-[1.7] text-slate-600">
              We choose technology based on what best serves the product.
              Our stack is modern and proven — React, Next.js, .NET, Java,
              Spring Boot, Node.js, Python, PostgreSQL, MySQL, MongoDB, Docker
              and cloud platforms — applied with consistency and enterprise-grade
              engineering practices.
            </p>
          </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6">
            <h3 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#071A33] mb-3">Quality-Focused Delivery</h3>
            <p className="text-[14.5px] leading-[1.7] text-slate-600">
              Quality is embedded throughout our process — from discovery and
              design to development, testing, deployment and support. We work in
              iterative cycles with regular checkpoints, thorough QA and
              observable, well-documented systems.
            </p>
          </div>
          <div className="lg:col-span-6">
            <h3 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#071A33] mb-3">Professional Values</h3>
            <ul className="space-y-2 text-[14.5px] leading-[1.7] text-slate-600">
              <li className="flex gap-2"><span className="text-[#0057B8]">—</span> Clarity and transparency in communication</li>
              <li className="flex gap-2"><span className="text-[#0057B8]">—</span> Ownership and accountability</li>
              <li className="flex gap-2"><span className="text-[#0057B8]">—</span> Respect for maintainability and security</li>
              <li className="flex gap-2"><span className="text-[#0057B8]">—</span> Continuous improvement and learning</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-[18px] bg-[#071A33] text-white p-7 md:p-8 overflow-hidden relative">
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#0057B8]/20 blur-[1px] pointer-events-none" />
          <h3 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#8AB6FF] mb-3">Why Work With Corex IT</h3>
          <p className="text-[14.5px] leading-[1.7] text-white/80 max-w-[760px]">
            Clients work with Corex IT for reliable engineering, consistent
            communication and a collaborative approach that keeps delivery
            predictable. Whether modernising an existing product or building
            something new, we focus on creating software that is secure,
            scalable and ready to support business growth.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#071A33] text-[13px] font-semibold hover:bg-white/95 transition-colors">
              Let&apos;s talk
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
