"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import {
  GraduationCap,
  Rocket,
  Users,
  Layers,
  Briefcase,
  Sparkles,
  Globe,
  ArrowRight,
} from "lucide-react";

const benefits = [
  {
    Icon: GraduationCap,
    title: "Learn & Grow",
    desc: "Mentorship, code reviews and continuous learning to accelerate your growth.",
  },
  {
    Icon: Rocket,
    title: "Work on Real Products",
    desc: "Ship meaningful products used by real businesses — from idea to scale.",
  },
  {
    Icon: Users,
    title: "Collaborative Team",
    desc: "Supportive culture with clear communication and shared ownership.",
  },
  {
    Icon: Layers,
    title: "Modern Engineering Culture",
    desc: "Clean architecture, modern stack and engineering discipline every day.",
  },
];

const infoRow = [
  {
    Icon: Briefcase,
    label: "Open Positions",
    title: "Join our team",
    desc: "Engineering, design and product roles.",
    href: "/contact",
    cta: "View roles",
  },
  {
    Icon: Sparkles,
    label: "Internships",
    title: "Kickstart your career",
    desc: "Hands-on experience with real projects.",
    href: "/contact",
    cta: "Explore",
  },
  {
    Icon: Globe,
    label: "Remote Opportunities",
    title: "Work flexibly",
    desc: "Collaborate from anywhere in Sri Lanka.",
    href: "/contact",
    cta: "Learn more",
  },
];

export function CareerSection() {
  const { ref, isInView } = useInView({ threshold: 0.12 });
  const { ref: bottomRef, isInView: bottomInView } = useInView({ threshold: 0.12 });

  return (
    <section
      id="career"
      className="relative bg-white overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 md:py-20 lg:py-24">
        {/* Two-column layout */}
        <div
          ref={ref}
          className="grid lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start"
        >
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >


            <h2 className="text-[clamp(1.85rem,3.4vw,2.6rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#071A33]">
              Build your career
              <br />
              <span className="font-light">with Corex IT.</span>
            </h2>

            <p className="text-[14.5px] leading-[1.7] text-slate-600 max-w-[480px] mt-5">
              Join a team that builds meaningful digital products, solves
              real-world problems, and grows together. Work alongside a modern
              technology team that values clean code, continuous learning and
              real ownership.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-none bg-[#0057B8] text-white text-[14px] font-semibold hover:bg-[#003B7A] transition-colors shadow-[0_10px_28px_rgba(0,87,184,0.18)]"
              >
                View Open Positions
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.08em] uppercase text-slate-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                We&apos;re hiring
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-slate-100">
              <span className="text-[12px] leading-[1.6] text-slate-500">
                Be part of a team engineering reliable, scalable products for
                growing businesses — from Colombo to the world.
              </span>
            </div>
          </motion.div>

          {/* RIGHT SIDE - premium visual/card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="rounded-[18px] bg-white border border-slate-200 p-6 md:p-7 shadow-[0_8px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(0,87,184,0.06)] transition-shadow duration-300">
              {/* card header */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <h3 className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#071A33]">
                  Why Corex IT?
                </h3>
                <span className="hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.08em] uppercase text-slate-400 font-medium">
                  <span className="w-6 h-px bg-slate-200" />
                  Growth · Impact · Culture
                </span>
                <span className="sm:hidden w-6 h-px bg-slate-200" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((b, idx) => (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.55,
                      delay: 0.18 + idx * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="rounded-[14px] bg-[#F8F8F8] border border-[#E5E7EB] p-5 hover:bg-white hover:border-[#0057B8]/15 hover:shadow-[0_6px_18px_rgba(0,87,184,0.06)] transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-[#0057B8] group-hover:border-[#0057B8] transition-colors">
                      <b.Icon
                        className="w-4 h-4 text-[#0057B8] group-hover:text-white transition-colors"
                        strokeWidth={1.7}
                      />
                    </div>
                    <h4 className="text-[14px] font-semibold tracking-[-0.01em] text-[#071A33] mt-4">
                      {b.title}
                    </h4>
                    <p className="text-[12.5px] leading-[1.6] text-slate-500 mt-1.5">
                      {b.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 rounded-xl bg-[#071A33] text-white p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-[#8AB6FF]" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold leading-none">
                      Grow with a team that invests in you
                    </p>
                    <p className="text-[11px] tracking-[0.06em] uppercase text-white/50 mt-1">
                      Mentorship · Real projects · Engineering excellence
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex w-8 h-8 rounded-full bg-white text-[#071A33] items-center justify-center shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom compact horizontal career info row */}
        <motion.div
          ref={bottomRef}
          initial={{ opacity: 0, y: 14 }}
          animate={bottomInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 lg:mt-12 pt-8 border-t border-slate-100"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-slate-400">
              Explore opportunities
            </p>
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.08em] uppercase text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0057B8]" />
              Colombo · Hybrid · Remote
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {infoRow.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={bottomInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={item.href}
                  className="group flex flex-col h-full rounded-none bg-[#F8F8F8] border border-[#E5E7EB] p-5 hover:bg-white hover:border-[#0057B8]/20 hover:shadow-[0_8px_24px_rgba(0,87,184,0.06)] transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0057B8]">
                      <span className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center group-hover:bg-[#0057B8] group-hover:border-[#0057B8] transition-colors">
                        <item.Icon
                          className="w-3.5 h-3.5 text-[#0057B8] group-hover:text-white transition-colors"
                          strokeWidth={1.7}
                        />
                      </span>
                      {item.label}
                    </span>
                    <span className="w-7 h-7 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 group-hover:bg-[#071A33] group-hover:text-white group-hover:border-[#071A33] transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.8} />
                    </span>
                  </div>
                  <h4 className="text-[14px] font-semibold tracking-[-0.01em] text-[#071A33] mt-4">
                    {item.title}
                  </h4>
                  <p className="text-[12.5px] leading-[1.6] text-slate-500 mt-1 flex-1">
                    {item.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#071A33] group-hover:text-[#0057B8] transition-colors">
                    {item.cta}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
