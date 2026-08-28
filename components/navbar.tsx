"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/70 shadow-[0_1px_3px_rgba(15,23,42,0.06),0_8px_24px_rgba(15,23,42,0.06)]"
            : "bg-transparent border-b border-white/[0.08] backdrop-blur-[2px]"
        }`}
      >
        {/* subtle top highlight when scrolled */}
        <div
          className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent transition-opacity duration-300 ${isScrolled ? "opacity-0" : "opacity-100"}`}
        />

        <div className="max-w-[1400px] mx-auto h-[72px] flex items-center justify-between px-6 lg:px-12">
          <Link href="/" className="flex items-center gap-3">
            <span
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                isScrolled ? "bg-slate-900" : "bg-white/95 backdrop-blur-sm border border-white/20"
              }`}
            >
              <span className={`w-2.5 h-2.5 rounded-sm transition-colors ${isScrolled ? "bg-blue-500" : "bg-blue-600"}`} />
            </span>
            <span
              className={`text-[14px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
            >
              Corex IT
            </span>
            <span
              className={`hidden sm:inline-flex ml-2 pl-3 border-l text-[11px] tracking-[0.08em] font-medium transition-colors duration-300 ${
                isScrolled ? "border-slate-200 text-slate-400" : "border-white/15 text-white/60"
              }`}
            >
              Software Engineering
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-4 py-2 text-[13px] font-medium tracking-[0.01em] transition-colors duration-200 group ${
                  isScrolled ? "text-slate-600 hover:text-slate-900" : "text-white/75 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className={`hidden md:inline-flex items-center justify-center px-6 py-2.5 text-[13px] font-semibold tracking-[0.01em] rounded-full transition-all duration-200 ${
                isScrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/15"
                  : "bg-white text-slate-900 hover:bg-white/95 hover:shadow-lg hover:shadow-black/10"
              }`}
            >
              Let&apos;s Talk
            </Link>
            <button
              className={`lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${
                isScrolled
                  ? "text-slate-700 hover:bg-slate-50"
                  : "text-white hover:bg-white/10 backdrop-blur-sm border border-white/10"
              }`}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white flex flex-col"
          >
            <div className="h-[72px] shrink-0 border-b border-slate-100" />
            <nav className="flex-1 flex flex-col px-6 py-8 overflow-y-auto">
              <div className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ delay: i * 0.04, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="flex items-center justify-between py-[18px] text-[17px] font-medium tracking-[-0.01em] text-slate-900 border-b border-slate-50 group"
                    >
                      <span className="flex items-center gap-4">
                        <span className="text-[11px] font-semibold tracking-[0.12em] text-blue-600 w-6">0{i + 1}</span>
                        {link.label}
                      </span>
                      <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-active:bg-slate-900 group-active:text-white group-active:border-slate-900 transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.28, duration: 0.4 }}
                className="mt-auto pt-8"
              >
                <Link
                  href="#contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center w-full py-4 text-[14px] font-semibold bg-blue-600 text-white rounded-full"
                >
                  Let&apos;s Talk — Start a Project
                </Link>
                <p className="text-center text-[12px] text-slate-400 mt-4">hello@corexit.com · San Francisco, CA</p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
