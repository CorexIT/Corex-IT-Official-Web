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

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Nexus Analytics",
    category: "Web Application",
    description:
      "A real-time data analytics dashboard helping enterprises visualize complex data streams with interactive charts and drill-down capabilities.",
    image: "/project-analytics.svg",
    techStack: ["React", "Next.js", "D3.js", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    id: 2,
    title: "MarketPlace Pro",
    category: "E-commerce",
    description:
      "A full-featured marketplace platform with vendor dashboards, payment integration, and real-time inventory management.",
    image: "/project-marketplace.svg",
    techStack: ["React", "Next.js", "Stripe", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 3,
    title: "TaskFlow",
    category: "Mobile App",
    description:
      "A productivity mobile application for task management with seamless synchronization, drag-and-drop functionality, and smart notifications.",
    image: "/project-taskflow.svg",
    techStack: ["React Native", "Node.js", "Firebase", "TypeScript"],
    link: "#",
  },
  {
    id: 4,
    title: "HealthCare Portal",
    category: "Web Application",
    description:
      "A patient management system for healthcare providers with appointment scheduling, medical records, and HIPAA-compliant data handling.",
    image: "/project-healthcare.svg",
    techStack: ["Next.js", ".NET", "SQL Server", "Azure"],
    link: "#",
  },
];

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 relative bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-12 relative">
          Portfolio
          <span className="absolute left-0 top-1/2 -translate-y-1/2 h-1 w-6 bg-white content-['']"></span>
        </h2>

        <p className="text-zinc-400 text-sm mb-16 max-w-xl">
          Selected case studies and projects demonstrating our capability to deliver
          exceptional digital solutions across various industries.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`group overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.02] backdrop-blur-md transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.04] ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square w-full rounded-t-2xl overflow-hidden bg-white/[0.03]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>

              <div className="p-6">
                <span className="text-xs text-zinc-500 tracking-[0.1em] uppercase">
                  {project.category}
                </span>
                <h3 className="text-xl font-medium tracking-[0.1em] mt-2 mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-[0.7em] bg-white/[0.05] text-white/60 text-sm transition-colors hover:bg-white/[0.1] hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 border-t border-white/[0.02]">
                <div className="pt-4 flex items-center justify-between">
                  <a
                    href={project.link}
                    className="text-zinc-500 text-sm font-medium hover:text-white transition-colors"
                  >
                    View Project
                  </a>
                  <svg
                    className="w-4 h-4 text-zinc-500 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
