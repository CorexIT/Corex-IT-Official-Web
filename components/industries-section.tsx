"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Industry = {
  num: string;
  title: string;
  upper: string;
  desc: string;
};

const industries: Industry[] = [
  {
    num: "01",
    title: "Education",
    upper: "EDUCATION",
    desc: "Digital platforms, learning systems and management solutions.",
  },
  {
    num: "02",
    title: "Travel & Hospitality",
    upper: "TRAVEL & HOSPITALITY",
    desc: "Digital experiences, booking systems and operational solutions.",
  },
  {
    num: "03",
    title: "Retail & E-Commerce",
    upper: "RETAIL & E-COMMERCE",
    desc: "Customer-facing platforms, business systems and digital commerce solutions.",
  },
  {
    num: "04",
    title: "Business & Enterprise",
    upper: "BUSINESS & ENTERPRISE",
    desc: "Custom software, workflow systems and process digitization.",
  },
  {
    num: "05",
    title: "Services",
    upper: "SERVICES",
    desc: "Digital platforms and applications designed around service-based businesses.",
  },
  {
    num: "06",
    title: "Startups",
    upper: "STARTUPS",
    desc: "Scalable digital products that help transform ideas into working solutions.",
  },
];

export function IndustriesSection() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 md:py-20 lg:py-24">
        {/* header */}
        <div className="max-w-[720px] mb-10">

          <h2 className="text-[clamp(1.9rem,3.6vw,2.7rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#071A33]">
            Digital Solutions for
            <br />
            <span className="font-light">Real-World Business.</span>
          </h2>
          <p className="text-[14.5px] leading-[1.7] text-slate-600 max-w-[560px] mt-4">
            We build practical digital solutions designed around the unique needs of modern businesses and organizations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[104px]">
              <h3 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#071A33]">
                Industries
                <br />
                <span className="font-light">We Serve</span>
              </h3>
              <p className="text-[13.5px] leading-[1.7] text-slate-500 mt-4 max-w-[380px]">
                Capability areas shaped around real business needs — not client claims. Each solution is engineered to fit how your industry actually works.
              </p>
              <span className="mt-6 flex items-center gap-3 text-[11px] tracking-[0.08em] uppercase text-slate-400 font-medium">
                <span className="w-6 h-px bg-[#0057B8]" />
                Capability — not client list
              </span>

              {/* visual */}
              <div className="relative mt-8 overflow-hidden rounded-[18px] bg-[#071A33] p-0.5">
                <div className="relative overflow-hidden rounded-[16px] bg-gradient-to-br from-[#071A33] via-[#0A2F5B] to-[#0057B8] p-6 md:p-7 min-h-[280px] flex flex-col">
                  <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:48px_48px]" />
                  <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10 blur-[20px]" />
                  <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-[#8AB6FF]/15 blur-[18px]" />
                  <div className="relative">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/15 text-[11px] font-semibold tracking-[0.06em] uppercase text-white/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8AB6FF] animate-pulse" />
                      {industries[active].upper}
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-6"
                      >
                        <p className="text-[11px] tracking-[0.1em] uppercase text-white/50 font-semibold">{industries[active].num} — Capability</p>
                        <h4 className="text-[20px] font-semibold tracking-[-0.02em] text-white mt-2">{industries[active].title}</h4>
                        <p className="text-[13.5px] leading-[1.6] text-white/70 mt-2 max-w-[320px]">{industries[active].desc}</p>
                      </motion.div>
                    </AnimatePresence>
                    <div className="mt-6 flex gap-2">
                      {industries.map((_, i) => (
                        <span
                          key={i}
                          className={`h-1 rounded-full transition-all duration-400 ${i === active ? "w-8 bg-white" : "w-6 bg-white/20"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="relative mt-auto pt-6 flex items-center gap-2 text-[11px] tracking-[0.06em] uppercase text-white/40">
                    <span className="w-6 h-px bg-white/20" />
                    Business + Technology
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-[14px] bg-[#EAF4FF] border border-[#D4E8FF] p-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[13px] font-semibold text-[#071A33]">Have a business challenge?</p>
                  <p className="text-[12px] leading-[1.6] text-slate-600 mt-1">Let&apos;s explore how Corex IT can help.</p>
                </div>
                <Link href="/contact" className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-none bg-[#0057B8] text-white text-[13px] font-semibold hover:bg-[#003B7A] transition-colors">
                  Let&apos;s Talk <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT - interactive list */}
          <div className="lg:col-span-7">
            {/* Desktop */}
            <div className="hidden lg:block rounded-[18px] border border-slate-200 bg-white overflow-hidden">
              {industries.map((it, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={it.num}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`w-full text-left flex items-stretch gap-5 px-7 py-6 border-b last:border-b-0 transition-colors duration-300 ${isActive ? "bg-[#F8F8F8]" : "bg-white hover:bg-[#F8F8F8]/60"} border-slate-100`}
                  >
                    <span className={`shrink-0 text-[11px] font-bold tracking-[0.12em] mt-1 transition-colors ${isActive ? "text-[#0057B8]" : "text-slate-300"}`}>{it.num}</span>
                    <span className={`w-px self-stretch shrink-0 transition-colors ${isActive ? "bg-[#0057B8]" : "bg-slate-200"}`} />
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-center justify-between gap-4">
                        <h4 className={`text-[15px] font-semibold tracking-[-0.01em] transition-colors ${isActive ? "text-[#0057B8]" : "text-[#071A33]"}`}>{it.title}</h4>
                        <span className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all ${isActive ? "bg-[#0057B8] border-[#0057B8] text-white translate-x-0" : "border-slate-200 text-slate-300 -translate-x-1 opacity-0"}`}>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                      <span className={`block text-[11px] tracking-[0.08em] uppercase mt-1 transition-colors ${isActive ? "text-[#0057B8]/70" : "text-slate-400"}`}>{it.upper}</span>
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[13px] leading-[1.6] text-slate-600 overflow-hidden"
                          >
                            {it.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Mobile accordion */}
            <div className="lg:hidden rounded-[16px] border border-slate-200 bg-white overflow-hidden">
              {industries.map((it, i) => {
                const open = mobileOpen === i;
                return (
                  <div key={it.num} className="border-b last:border-b-0 border-slate-100">
                    <button
                      onClick={() => setMobileOpen(open ? null : i)}
                      className="w-full flex items-center gap-4 px-5 py-5 text-left"
                    >
                      <span className={`text-[11px] font-bold tracking-[0.12em] ${open ? "text-[#0057B8]" : "text-slate-300"}`}>{it.num}</span>
                      <span className={`w-px h-6 ${open ? "bg-[#0057B8]" : "bg-slate-200"}`} />
                      <div className="flex-1 min-w-0">
                        <h4 className={`text-[15px] font-semibold tracking-[-0.01em] ${open ? "text-[#0057B8]" : "text-[#071A33]"}`}>{it.title}</h4>
                        <p className="text-[11px] tracking-[0.06em] uppercase text-slate-400">{it.upper}</p>
                      </div>
                      <span className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform ${open ? "bg-[#0057B8] border-[#0057B8] text-white rotate-45" : "border-slate-200 text-slate-400"}`}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pl-[58px]">
                            <p className="text-[13px] leading-[1.6] text-slate-600">{it.desc}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="lg:hidden mt-6 rounded-[14px] bg-[#071A33] text-white p-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-[13px] font-semibold">Have a business challenge?</p>
                <p className="text-[11px] text-white/60">We&apos;d love to help.</p>
              </div>
              <Link href="/contact" className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-none bg-white text-[#071A33] text-[13px] font-semibold">
                Let&apos;s Talk <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
