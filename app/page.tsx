import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ProcessSection } from "@/components/process-section";
import { ProjectsSection } from "@/components/projects-section";
import { TechnologyStackSection } from "@/components/technology-stack";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <TechnologyStackSection />
      <ContactSection />

      <footer className="py-12 border-t border-white/[0.06] bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-2xl font-bold tracking-wider text-white">Corex IT</span>
              <p className="text-zinc-500 text-sm mt-1">Engineering the future, one digital experience at a time.</p>
            </div>
            <p className="text-zinc-600 text-sm">
              &copy; {new Date().getFullYear()} Corex IT. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
