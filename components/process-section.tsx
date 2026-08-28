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

interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  const steps: ProcessStep[] = [
    {
      id: 1,
      title: "Discover",
      description:
        "We begin by understanding your vision, goals, and challenges through in-depth consultations and research.",
    },
    {
      id: 2,
      title: "Design",
      description:
        "Our team creates wireframes, prototypes, and design systems that balance aesthetics with functionality.",
    },
    {
      id: 3,
      title: "Develop",
      description:
        "We build your product using clean, maintainable code following best practices and modern architecture.",
    },
    {
      id: 4,
      title: "Test",
      description:
        "Rigorous testing across devices and platforms ensures quality, performance, and security at every stage.",
    },
    {
      id: 5,
      title: "Launch",
      description:
        "We deploy your solution to production with seamless deployment strategies and monitor the initial rollout.",
    },
    {
      id: 6,
      title: "Scale",
      description:
        "We help you grow by optimizing performance, adding features, and expanding to new markets and users.",
    },
  ];

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 md:py-32 relative bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-12 relative">
          Our Process
          <span className="absolute left-0 top-1/2 -translate-y-1/2 h-1 w-6 bg-white content-['']"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-zinc-400 text-sm mb-8">
              We follow a proven, iterative process that ensures your project&apos;s success
              from concept to launch and beyond.
            </p>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`px-6 py-8 rounded-2xl bg-white/[0.02] border border-white/[0.02] backdrop-blur-md transition-all duration-500 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white/10 bg-white/5"
                    >
                      <span className="text-xl font-bold text-white">{step.id}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-white">{step.title}</h3>
                      <p className="text-zinc-500 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-opacity duration-700 ${isInView ? "opacity-100" : "opacity-0"}`}>
            <div className="h-64 w-full md:h-[500px] rounded-3xl bg-white/[0.02] border border-white/[0.02] backdrop-blur-md flex items-center justify-center sticky top-24">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-white/10 flex items-center justify-center">
                  <svg className="w-10 h-10 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 7l10 5 10-5M2 12l10 5 10-5M2 17l10 5 10-5" />
                  </svg>
                </div>
                <p className="text-zinc-400 text-sm tracking-[0.1em]">Iterative Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
