"use client";

type Logo = { name: string; src: string };

const logos: Logo[] = [
  { name: "React", src: "https://cdn.simpleicons.org/react/0B2A5B" },
  { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs/0B2A5B" },
  { name: ".NET", src: "https://cdn.simpleicons.org/dotnet/0B2A5B" },
  { name: "C#", src: "https://cdn.simpleicons.org/csharp/0B2A5B" },
  { name: "Java", src: "https://cdn.simpleicons.org/openjdk/0B2A5B" },
  { name: "Spring Boot", src: "https://cdn.simpleicons.org/springboot/0B2A5B" },
  { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs/0B2A5B" },
  { name: "Python", src: "https://cdn.simpleicons.org/python/0B2A5B" },
  { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql/0B2A5B" },
  { name: "MySQL", src: "https://cdn.simpleicons.org/mysql/0B2A5B" },
  { name: "MongoDB", src: "https://cdn.simpleicons.org/mongodb/0B2A5B" },
  { name: "Docker", src: "https://cdn.simpleicons.org/docker/0B2A5B" },
  { name: "Git", src: "https://cdn.simpleicons.org/git/0B2A5B" },
];

export function HeroCapabilitiesBar() {
  const doubled = [...logos, ...logos, ...logos];

  return (
    <section className="relative w-full bg-white overflow-hidden" aria-label="Technologies marquee">
      {/* thin light blue-gray separators */}
      <div className="h-px w-full bg-[#E5E7EB]" />
      <div className="h-px w-full bg-[#EAF4FF]" />

      <div className="relative w-full overflow-hidden group py-3.5 md:py-4">
        {/* edge fades keep white premium */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white via-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white via-white to-transparent z-10" />

        <div className="flex w-max will-change-transform tech-marquee-white">
          <div className="flex items-center gap-8 md:gap-10 pr-8 md:pr-10 shrink-0">
            {doubled.map((l, i) => (
              <span key={`${l.name}-${i}-a`} className="flex items-center gap-2 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.src} alt={l.name} width={22} height={22} className="w-[22px] h-[22px] object-contain opacity-80" loading="eager" decoding="async" draggable={false} />
                <span className="text-[13px] font-semibold tracking-[-0.01em] text-[#071A33]/80 whitespace-nowrap">{l.name}</span>
                <span className="ml-2 w-1 h-1 rounded-full bg-[#CBD5E1] hidden sm:inline-block" aria-hidden />
              </span>
            ))}
          </div>
          <div className="flex items-center gap-8 md:gap-10 pr-8 md:pr-10 shrink-0" aria-hidden>
            {doubled.map((l, i) => (
              <span key={`${l.name}-${i}-b`} className="flex items-center gap-2 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.src} alt={l.name} width={22} height={22} className="w-[22px] h-[22px] object-contain opacity-80" loading="eager" decoding="async" draggable={false} />
                <span className="text-[13px] font-semibold tracking-[-0.01em] text-[#071A33]/80 whitespace-nowrap">{l.name}</span>
                <span className="ml-2 w-1 h-1 rounded-full bg-[#CBD5E1] hidden sm:inline-block" aria-hidden />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-[#E5E7EB]" />

      <style>{`
        @keyframes tech-marquee-white {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .tech-marquee-white { animation: tech-marquee-white 32s linear infinite; }
        .group:hover .tech-marquee-white { animation-play-state: paused; }
        @media (max-width:768px){ .tech-marquee-white{ animation-duration: 24s; } }
        @media (prefers-reduced-motion: reduce){ .tech-marquee-white{ animation:none; } }
      `}</style>
    </section>
  );
}
