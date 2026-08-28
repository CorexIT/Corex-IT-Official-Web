"use client";

import { Hero3D } from "./hero3d";

export const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative bg-black overflow-hidden"
    >
      <Hero3D />

      <div className="max-w-7xl mx-auto px-6 text-center py-20 relative z-10">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6">
          Engineering the Future,
          <br />
          One Digital Experience
          <br />
          at a Time.
        </h1>

        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
          Corex IT delivers premium software development solutions for the modern era.
          We combine clean code, elegant design, and robust architecture to build
          digital experiences that drive business growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="px-8 py-4 rounded-full bg-white text-black font-medium tracking-[0.1em] transition-colors hover:bg-zinc-200"
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-white/20 text-white font-medium transition-colors hover:bg-white/5"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
};
