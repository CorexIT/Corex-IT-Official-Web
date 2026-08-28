"use client";

const items = [
  "Corex IT",
  "Software Engineering",
  "Web Development",
  "Mobile Applications",
  "Digital Solutions",
  "Innovation",
];

function TickerRow({ direction }: { direction: "left" | "right" }) {
  const repeated = [...items, ...items, ...items, ...items];
  const animClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="overflow-hidden whitespace-nowrap py-[13px]">
      <div className={`inline-flex items-center will-change-transform ${animClass}`}>
        {repeated.map((item, i) => (
          <span key={`${item}-${i}-${direction}`} className="inline-flex items-center shrink-0">
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-500 mx-7">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-blue-600 mx-1 shrink-0" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <section aria-label="Brand ticker" className="relative bg-white border-y border-slate-100 overflow-hidden">
      {/* subtle technical accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-100/60 to-transparent pointer-events-none hidden md:block" />
      <div className="relative">
        <TickerRow direction="left" />
      </div>
      <div className="border-t border-slate-50 relative">
        <TickerRow direction="right" />
      </div>
    </section>
  );
}
