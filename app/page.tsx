import { HeroSection } from "@/components/hero-section";
import { HeroCapabilitiesBar } from "@/components/hero-capabilities-bar";
import { ServicesSection } from "@/components/services-section";
import { BlueFeatureSection } from "@/components/blue-feature-section";
import { IndustriesSection } from "@/components/industries-section";
import { WhyCorexSection } from "@/components/why-corex-section";
import { ProcessSection } from "@/components/process-section";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer-section";
import Link from "next/link";

function HomeIntro() {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-10 md:py-12">
        <div className="max-w-[720px]">
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0057B8] mb-3">
            <span className="w-8 h-px bg-[#0057B8]" />
            Who We Are
          </span>
          <p className="text-[15px] leading-[1.7] text-slate-600">
            Corex IT is a Sri Lankan software engineering partner helping
            businesses design, build and scale reliable digital products — with
            engineering discipline and a quality-first approach.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#071A33] hover:text-[#0057B8] transition-colors mt-4"
          >
            Learn more about Corex IT
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroCapabilitiesBar />
      <HomeIntro />
      <ServicesSection />
      <BlueFeatureSection />
      <IndustriesSection />
      <WhyCorexSection />
      <ProcessSection />
      <FinalCta />
      <Footer />
    </>
  );
}
