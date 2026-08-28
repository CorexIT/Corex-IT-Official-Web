"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Nexus Analytics",
    category: "Web Application",
    description:
      "Real-time analytics platform helping enterprises visualize complex data streams with interactive dashboards and drill-down capabilities.",
    techStack: ["React", "Next.js", "D3.js", "Node.js", "PostgreSQL"],
    year: "2024",
  },
  {
    id: 2,
    title: "MarketPlace Pro",
    category: "E-commerce Platform",
    description:
      "Full-featured marketplace with vendor management, payment processing, inventory tracking, and real-time order management.",
    techStack: ["React", "Next.js", "Stripe", "Node.js", "MongoDB"],
    year: "2024",
  },
  {
    id: 3,
    title: "TaskFlow",
    category: "Mobile Application",
    description:
      "Productivity app for task management with seamless sync, drag-and-drop workflows, and intelligent notifications across devices.",
    techStack: ["React Native", "Node.js", "Firebase", "TypeScript"],
    year: "2023",
  },
  {
    id: 4,
    title: "HealthCare Portal",
    category: "Healthcare Platform",
    description:
      "Patient management system with appointment scheduling, medical records, telehealth integration, and HIPAA-compliant data handling.",
    techStack: ["Next.js", ".NET", "SQL Server", "Azure"],
    year: "2023",
  },
];

export function ProjectsSection() {
  const { ref: sectionRef, isInView } = useInView();

  return (
    <section id="projects" className="py-24 md:py-36 bg-slate-50">
      <div ref={sectionRef} className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-blue-600 mb-8"
            >
              <span className="w-8 h-px bg-blue-600" />
              Projects
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-slate-900"
            >
              Selected work.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[14px] leading-relaxed text-slate-500 max-w-md md:text-right"
          >
            A selection of projects that showcase our ability to deliver across
            industries and technology stacks.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative p-8 md:p-10 rounded-xl bg-white border border-slate-200 transition-all duration-300 hover:border-slate-300 hover:shadow-[0_8px_32px_rgba(15,23,42,0.08)]"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-slate-400">
          {project.category}
        </span>
        <span className="text-[11px] font-medium tracking-[0.1em] text-slate-300">
          {project.year}
        </span>
      </div>

      <h3 className="text-[22px] md:text-[26px] font-semibold tracking-[-0.02em] text-slate-900 mb-4">
        {project.title}
      </h3>

      <p className="text-[14px] leading-relaxed text-slate-500 mb-8">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-[11px] font-medium tracking-[0.05em] text-slate-500 bg-slate-50 rounded-full border border-slate-100 transition-colors duration-300 group-hover:text-blue-700 group-hover:bg-blue-50 group-hover:border-blue-100"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-slate-100">
        <span className="text-[13px] font-medium text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
          View Case Study
        </span>
        <svg
          className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition-all duration-300 group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </motion.article>
  );
}
