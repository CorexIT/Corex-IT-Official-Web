import type { Metadata } from "next";
import { AboutHero } from "@/components/about-hero";

export const metadata: Metadata = {
  title: "About Us | Corex IT",
  description:
    "Learn about Corex IT — Sri Lankan software engineering partner helping businesses build reliable, scalable digital products.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <AboutHero />

      {/* vision / mission / what we do */}
      <section id="about-content" className="max-w-[1440px] mx-auto px-6 lg:px-10 py-12 md:py-16">
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
      </section>
    </div>
  );
}