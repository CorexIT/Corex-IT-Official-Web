"use client";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const ServicesSection = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Custom Software Development",
      description:
        "Bespoke software solutions tailored to your unique business requirements, built with clean architecture and scalable design patterns.",
      icon: (
        <svg className="h-6 w-6 text-zinc-400 mb-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3v2h2V3H3zm18 4H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 6c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-2V11h2zM7 3v2h2V3H7zm5 16H9v-2h2v2zm4-14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-2V7h2v2zm5.5 7.5l-1.4 1.3 1.7 1.6 1.3-1.4-1.6-1.7zM21 3v2H3V3h18zm0 18v2H3v-2H21z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Web Application Development",
      description:
        "Robust, responsive web applications that deliver seamless user experiences across all devices, from progressive web apps to complex enterprise portals.",
      icon: (
        <svg className="h-6 w-6 text-zinc-400 mb-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 7l10 5 10-5" />
          <path d="M7 10l5 10 5-10" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that engage users and drive growth, with pixel-perfect designs and smooth performance.",
      icon: (
        <svg className="h-6 w-6 text-zinc-400 mb-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 1H8C6.9 1 6 1.9 6 3v18c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-4 20c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5-4H7V4h10v14z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces crafted with the user in mind. We combine aesthetic appeal with seamless usability to create memorable digital experiences.",
      icon: (
        <svg className="h-6 w-6 text-zinc-400 mb-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 0 0-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 0 1 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z" />
          <circle cx="6.5" cy="11.5" r="1.5" />
          <circle cx="9.5" cy="7.5" r="1.5" />
          <circle cx="14.5" cy="7.5" r="1.5" />
          <circle cx="17.5" cy="11.5" r="1.5" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Cloud Solutions",
      description:
        "Scalable, secure cloud infrastructure on AWS, Azure, and GCP. We help you migrate, optimize, and manage your cloud resources for maximum efficiency.",
      icon: (
        <svg className="h-6 w-6 text-zinc-400 mb-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Digital Transformation",
      description:
        "End-to-end digital transformation strategies that modernize legacy systems, optimize processes, and accelerate growth in the digital economy.",
      icon: (
        <svg className="h-6 w-6 text-zinc-400 mb-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="services"
      className="py-24 md:py-32 relative bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-12 relative">
          Our Services
          <span className="absolute left-0 top-1/2 -translate-y-1/2 h-1 w-6 bg-white content-['']"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="group overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.02] backdrop-blur-md transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.04]"
            >
              <div className="h-24 w-24 m-6 rounded-xl flex items-center justify-center bg-white/5 transition-colors group-hover:bg-white/10">
                {service.icon}
              </div>

              <div className="px-6 pb-6">
                <h3 className="text-xl font-medium tracking-[0.1em] mb-3 text-white transition-colors group-hover:text-white">
                  {service.title}
                </h3>

                <p className="text-zinc-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
