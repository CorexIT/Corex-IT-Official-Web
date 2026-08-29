"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const leftLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Technologies", href: "/technologies" },
];

const rightLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const mobileLinks = [...leftLinks, ...rightLinks];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          isScrolled
            ? "h-[68px] border-b border-slate-200 shadow-sm"
            : "h-[84px] border-b border-slate-100 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
        }`}
      >
        <div className="max-w-[1440px] mx-auto h-full flex items-center px-6 lg:px-10 relative">
          {/* Mobile logo - left */}
          <Link href="/" className="flex lg:hidden items-center shrink-0">
            <Image
              src="/images/corex-navbar-logo.png"
              alt="Corex IT"
              width={300}
              height={184}
              priority
              className="w-[112px] sm:w-[122px] h-auto object-contain"
            />
          </Link>

          {/* Desktop centered navigation - About | Services | Technologies | LOGO | Projects | Blogs | Contact */}
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1">
              {leftLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="relative px-3.5 xl:px-4 py-2 text-[13.5px] font-medium tracking-[-0.01em] text-slate-600 hover:text-[#0057B8] transition-colors duration-200 group whitespace-nowrap"
                >
                  {l.label}
                  <span className="absolute left-3.5 xl:left-4 right-3.5 xl:right-4 bottom-1 h-px bg-[#0057B8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </Link>
              ))}
            </div>

            <Link href="/" className="flex items-center shrink-0 mx-5 xl:mx-7">
              <Image
                src="/images/corex-navbar-logo.png"
                alt="Corex IT"
                width={300}
                height={184}
                priority
                className="w-[138px] xl:w-[152px] h-auto object-contain"
              />
            </Link>

            <div className="flex items-center gap-1">
              {rightLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="relative px-3.5 xl:px-4 py-2 text-[13.5px] font-medium tracking-[-0.01em] text-slate-600 hover:text-[#0057B8] transition-colors duration-200 group whitespace-nowrap"
                >
                  {l.label}
                  <span className="absolute left-3.5 xl:left-4 right-3.5 xl:right-4 bottom-1 h-px bg-[#0057B8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right side CTA - does not push centered group */}
          <div className="flex items-center gap-3 ml-auto">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0057B8] text-white text-[13.5px] font-semibold tracking-[-0.01em] hover:bg-[#003B7A] transition-colors duration-200 shadow-sm whitespace-nowrap"
            >
              Let&apos;s Talk
            </Link>
            <button
              className="lg:hidden w-10 h-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors shrink-0"
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
            <div className="h-[84px] shrink-0 border-b border-slate-100" />
            <nav className="flex-1 flex flex-col px-6 py-6 overflow-y-auto">
              <div className="flex flex-col">
                {mobileLinks.map((l, i) => (
                  <motion.div
                    key={l.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ delay: i * 0.04, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="flex items-center justify-between py-[18px] border-b border-slate-50 group"
                    >
                      <span className="flex items-center gap-4">
                        <span className="text-[11px] font-semibold tracking-[0.12em] text-[#0057B8] w-7">0{i + 1}</span>
                        <span className="text-[17px] font-medium tracking-[-0.01em] text-[#071A33]">{l.label}</span>
                      </span>
                      <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-active:bg-[#071A33] group-active:text-white group-active:border-[#071A33] transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ delay: 0.28, duration: 0.4 }}
                className="mt-auto pt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center w-full py-4 rounded-full bg-[#0057B8] text-white text-[14px] font-semibold"
                >
                  Let&apos;s Talk — Start a Project
                </Link>
                <p className="text-center text-[12px] text-slate-400 mt-4">hello@corexit.com · Colombo, Sri Lanka</p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      {/* spacer to prevent content under fixed nav */}
      <div className="h-[84px]" aria-hidden />
    </>
  );
}
