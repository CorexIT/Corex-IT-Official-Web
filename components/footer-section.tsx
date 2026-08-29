import Link from "next/link";
import Image from "next/image";

const links = {
  quick: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Technologies", href: "/technologies" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Web Development", href: "/#services" },
    { label: "Mobile Apps", href: "/#services" },
    { label: "Custom Software", href: "/#services" },
    { label: "UI/UX Design", href: "/#services" },
    { label: "Cloud & DevOps", href: "/#services" },
  ],
  tech: [
    { label: "React / Next.js", href: "/#technologies" },
    { label: ".NET / Java", href: "/#technologies" },
    { label: "Node.js / Python", href: "/#technologies" },
    { label: "PostgreSQL / MongoDB", href: "/#technologies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#071A33] border-t border-white/[0.06]">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-12 md:py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/corex-logo-white.png"
                alt="Corex IT"
                width={160}
                height={88}
                className="w-[135px] md:w-[155px] h-auto object-contain"
              />
            </Link>
            <p className="text-[13px] leading-[1.7] text-white/60 mt-4 max-w-sm">
              Professional Software & Digital Solutions. Building scalable products for businesses ready to grow — from Colombo to the world.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { label: "LinkedIn", href: "#" },
                { label: "GitHub", href: "#" },
                { label: "X", href: "#" },
              ].map((s) => (
                <a key={s.label} href={s.href} className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/60 hover:bg-white hover:text-[#071A33] transition-colors text-[11px] font-semibold">
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/40 mb-4">Quick Links</p>
            <nav className="space-y-2.5">
              {links.quick.map((l) => (
                <Link key={l.label} href={l.href} className="block text-[13px] text-white/60 hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/40 mb-4">Services</p>
            <nav className="space-y-2.5">
              {links.services.map((l) => (
                <Link key={l.label} href={l.href} className="block text-[13px] text-white/60 hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/40 mb-4">Contact</p>
            <div className="space-y-3 text-[13px] leading-[1.6] text-white/60">
              <p>hello@corexit.com</p>
              <p>Colombo, Sri Lanka</p>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-white font-semibold hover:text-[#8AB6FF] transition-colors">
                Get in touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/35">© {new Date().getFullYear()} Corex IT. All rights reserved.</p>
          <p className="text-[11px] tracking-[0.08em] uppercase text-white/25 font-medium">Engineered with precision · Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
