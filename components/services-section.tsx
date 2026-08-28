"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import {
  Code2,
  Globe,
  Smartphone,
  Palette,
  Cloud,
  ArrowRightLeft,
} from "lucide-react";

interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: "custom-software",
    number: "01",
    title: "Custom Software Development",
    description:
      "Bespoke software solutions engineered from the ground up. We build systems that fit your business, not the other way around.",
    icon: <Code2 className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    id: "web-apps",
    number: "02",
    title: "Web Application Development",
    description:
      "High-performance web applications built with modern frameworks. Responsive, accessible, and built to scale.",
    icon: <Globe className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    id: "mobile-apps",
    number: "03",
    title: "Mobile Application Development",
    description:
      "Native and cross-platform mobile applications. Smooth performance, polished interfaces, and reliable user experiences.",
    icon: <Smartphone className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    id: "ui-ux",
    number: "04",
    title: "UI/UX Design",
    description:
      "Research-driven design that balances aesthetics with usability. We create interfaces that users understand instinctively.",
    icon: <Palette className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    id: "cloud",
    number: "05",
    title: "Cloud & Backend Solutions",
    description:
      "Scalable cloud infrastructure and backend systems. AWS, Azure, GCP — architected for performance and cost efficiency.",
    icon: <Cloud className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    id: "transformation",
    number: "06",
    title: "Digital Transformation",
    description:
      "Modernize legacy systems, automate workflows, and digitize operations. Strategic technology consulting for lasting change.",
    icon: <ArrowRightLeft className="w-5 h-5" strokeWidth={1.5} />,
  },
];

export function ServicesSection() {
  const { ref: sectionRef, isInView } = useInView();

  return (
    <section id="services" className="py-24 md:py-36 bg-slate-50">
      <div ref={sectionRef} className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-blue-600 mb-8"
          >
            <span className="w-8 h-px bg-blue-600" />
            Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-slate-900 max-w-xl"
          >
            Engineering solutions
            <br />
            for every stage of
            <br />
            your business.
          </motion.h2>
        </div>

        <div className="space-y-0">
          {services.map((service, i) => (
            <ServiceItem key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ service, index }: { service: Service; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group border-t border-slate-200 last:border-b"
    >
      <div className="py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 cursor-default">
        <span className="text-[12px] font-medium tracking-[0.1em] text-blue-600 w-8 shrink-0">
          {service.number}
        </span>

        <div className="text-slate-400 group-hover:text-blue-600 transition-colors duration-500 shrink-0">
          {service.icon}
        </div>

        <h3 className="text-[18px] md:text-[20px] font-medium tracking-[-0.01em] text-slate-900 md:w-[320px] shrink-0">
          {service.title}
        </h3>

        <p className="text-[14px] leading-relaxed text-slate-500 group-hover:text-slate-600 transition-colors duration-500 flex-1">
          {service.description}
        </p>

        <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50 transition-all duration-500 shrink-0">
          <svg
            className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition-all duration-500 group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
