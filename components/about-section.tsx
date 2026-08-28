"use client";

import { useEffect, useRef, useState } from "react";

function useInView(ref: React.RefObject<HTMLElement | null>): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return isInView;
}

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  const mission = {
    title: "Our Mission",
    description:
      "To deliver exceptional digital experiences through innovative software development, clean code, and collaborative partnerships that empower businesses to thrive in the digital age.",
  };

  const vision = {
    title: "Our Vision",
    description:
      "To become a globally recognized technology partner that transforms industries through cutting-edge solutions, ethical practices, and continuous innovation.",
  };

  const values = [
    {
      title: "Excellence",
      description:
        "We push the boundaries of quality, delivering robust, scalable, and maintainable software solutions.",
    },
    {
      title: "Innovation",
      description:
        "We constantly explore emerging technologies and creative approaches to solve complex challenges.",
    },
    {
      title: "Integrity",
      description:
        "We build trust through transparency, honesty, and delivering on our promises.",
    },
    {
      title: "Collaboration",
      description:
        "We work closely with our clients as an extension of their team, fostering partnership and shared success.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 relative bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-8 relative pt-2">
              About Corex IT
              <span className="absolute left-0 top-0 h-1 w-6 bg-white content-['']"></span>
            </h2>

            <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-xl">
              Corex IT is a premium software development company dedicated to engineering
              exceptional digital experiences. We combine technical expertise with artistic
              design to create products that not only function perfectly but also inspire.
            </p>

            <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
              From startups to enterprises, we partner with organizations across industries
              to turn their vision into reality through custom software, web applications,
              and digital transformation initiatives.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { label: "Mission", content: mission.description },
              { label: "Vision", content: vision.description },
              {
                label: "Values",
                content: values.map((v) => v.description).join(" | "),
              },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`px-6 py-8 rounded-2xl bg-white/[0.02] border border-white/[0.02] backdrop-blur-md transition-all duration-500 hover:bg-white/[0.04] ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className={`text-xl font-medium tracking-[0.1em] mb-3 ${
                  item.label === "Mission"
                    ? "text-white"
                    : item.label === "Vision"
                    ? "text-zinc-300"
                    : "text-zinc-400"
                }`}>
                  {item.label}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-white/[0.02]">
          <h3 className="text-2xl font-bold tracking-tighter mb-6 relative pt-2">
            Why Choose Corex IT?
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="px-6 py-8 rounded-2xl bg-white/[0.02] border border-white/[0.02] transition-all duration-300 hover:bg-white/[0.04]">
              <div className="h-12 w-12 rounded bg-white/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 7l10 5 10-5" />
                  <path d="M7 10l5 10 5-10" />
                </svg>
              </div>
              <h4 className="text-xl font-medium mb-3">Expert Team</h4>
              <p className="text-zinc-400 text-sm">
                Senior developers with 5+ years of experience across modern stacks.
              </p>
            </div>

            <div className="px-6 py-8 rounded-2xl bg-white/[0.02] border border-white/[0.02] transition-all duration-300 hover:bg-white/[0.04]">
              <div className="h-12 w-12 rounded bg-white/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 7l10 5 10-5" />
                  <path d="M7 10l5 10 5-10" />
                </svg>
              </div>
              <h4 className="text-xl font-medium mb-3">Timely Delivery</h4>
              <p className="text-zinc-400 text-sm">
                Agile methodologies ensuring on-time project completion.
              </p>
            </div>

            <div className="px-6 py-8 rounded-2xl bg-white/[0.02] border border-white/[0.02] transition-all duration-300 hover:bg-white/[0.04]">
              <div className="h-12 w-12 rounded bg-white/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 7l10 5 10-5" />
                  <path d="M7 10l5 10 5-10" />
                </svg>
              </div>
              <h4 className="text-xl font-medium mb-3">Client Success</h4>
              <p className="text-zinc-400 text-sm">
                Proven track record of satisfied clients and successful projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
