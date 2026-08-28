import Link from "next/link";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 md:gap-8 items-start">
          <div>
            <span className="text-[15px] font-semibold tracking-[0.2em] uppercase text-slate-900">
              Corex IT
            </span>
            <p className="text-[13px] text-slate-400 mt-3 max-w-sm leading-relaxed">
              Software Development & Digital Engineering.
              Building scalable products for businesses ready to grow.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:justify-end gap-8">
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[13px] text-slate-400 hover:text-blue-600 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-slate-300">
            &copy; {new Date().getFullYear()} Corex IT. All rights reserved.
          </p>
          <p className="text-[12px] text-slate-300">
            Engineered with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
