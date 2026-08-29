"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Code2, Smartphone, Layers, Palette, Server, Cloud, Users, ArrowUpRight } from "lucide-react";

type Service = {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    id: "web",
    icon: Code2,
    title: "Web Development",
    desc: "High-performance, SEO-ready web applications built with Next.js and modern architecture for scale and speed.",
    featured: true,
  },
  { id: "mobile", icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform apps with polished UX and store-ready performance." },
  { id: "custom", icon: Layers, title: "Custom Software Development", desc: "Bespoke systems engineered around your workflows and business logic." },
  { id: "uiux", icon: Palette, title: "UI/UX Design", desc: "Research-led design systems that are beautiful, accessible and conversion-focused." },
  { id: "backend", icon: Server, title: "Backend & API Development", desc: "Secure, well-documented APIs and microservices that power your products." },
  { id: "cloud", icon: Cloud, title: "Cloud & DevOps", desc: "AWS/Azure infrastructure, CI/CD, auto-scaling and cost-optimized delivery." },
  { id: "consult", icon: Users, title: "IT Consulting", desc: "Strategy, architecture reviews and roadmaps from senior engineering leaders." },
];

export function ServicesSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="relative bg-[#F8F8F8] overflow-hidden border-y border-slate-100">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#071A33_1px,transparent_1px),linear-gradient(to_bottom,#071A33_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div ref={ref} className="relative max-w-[1440px] mx-auto px-6 lg:px-10 py-16 md:py-20">
        {/* header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0057B8] mb-4">
              <span className="w-8 h-px bg-[#0057B8]" />
              Services
            </span>
            <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#071A33]">
              Enterprise-grade
              <br />
              <span className="font-light">services for growth.</span>
            </h2>
          </div>
          <p className="max-w-[520px] text-[14.5px] leading-[1.7] text-slate-600 lg:text-right">
            From idea to launch and beyond — product-led engineering that is
            secure, scalable and built to deliver business outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-5">
          {/* featured */}
          {services
            .filter((s) => s.featured)
            .map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="lg:col-span-5 group relative overflow-hidden rounded-[18px] bg-[#071A33] text-white p-7 md:p-8 flex flex-col min-h-[380px]"
              >
                <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#0057B8]/20 blur-[1px] pointer-events-none" />
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[20px] font-semibold tracking-[-0.02em] mt-6">{s.title}</h3>
                <p className="text-[13.5px] leading-[1.6] text-white/70 mt-3 flex-1">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-[13px] font-semibold text-white">
                  Explore service <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="absolute bottom-0 left-7 right-7 h-px bg-white/10 group-hover:bg-white/20 transition-colors" />
              </motion.div>
            ))}

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {services
              .filter((s) => !s.featured)
              .map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.08 + i * 0.06 }}
                  className="group relative rounded-[16px] bg-white border border-slate-200 p-6 hover:border-[#0057B8]/25 hover:bg-[#F8F8F8] hover:shadow-[0_8px_24px_rgba(0, 87, 184, 0.06)] transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#EAF4FF] border border-[#D4E8FF] flex items-center justify-center group-hover:bg-[#0057B8] group-hover:border-[#0057B8] transition-colors">
                    <s.icon className="w-4 h-4 text-[#0057B8] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-[#071A33] mt-4">{s.title}</h3>
                  <p className="text-[13px] leading-[1.6] text-slate-500 mt-2">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#071A33] opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="absolute bottom-0 left-6 right-6 h-px bg-[#0057B8] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
