import { HeroSection } from "@/components/hero-section";
import { HeroCapabilitiesBar } from "@/components/hero-capabilities-bar";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ProcessSection } from "@/components/process-section";
import { ProjectsSection } from "@/components/projects-section";
import { TechnologyStackSection } from "@/components/technology-stack";
import { ContactSection } from "@/components/contact-section";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroCapabilitiesBar />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <TechnologyStackSection />
      <FinalCta />
      <ContactSection />
      <Footer />
    </>
  );
}
