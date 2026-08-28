"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/[0.02] ${
        isScrolled
          ? "bg-black/80 backdrop-blur-[80px] border-white/[0.04]"
          : "bg-transparent backdrop-blur-[80px]"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
        <Link
          className="text-2xl font-bold tracking-wider capitalize text-white transition-colors"
          href="/"
        >
          Corex IT
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              className="text-sm font-medium tracking-[0.1em] text-white/70 transition-colors hover:text-white"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            className="text-sm font-medium tracking-[0.1em] text-white/70 transition-colors hover:text-white"
            href="#contact"
          >
            Let&apos;s Talk
          </Link>

          <button
            className="md:hidden p-2 rounded hover:bg-white/[0.02]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 flex items-center justify-center md:hidden">
          <button
            className="absolute top-6 right-6 p-2 text-white"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
          <div className="flex flex-col gap-6 w-full max-w-md text-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                className="text-xl font-medium text-white hover:text-gray-200"
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              className="mt-6 p-4 rounded bg-white text-black font-medium hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Close Menu
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
