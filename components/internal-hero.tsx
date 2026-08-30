"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

type Props = {
  title: React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
  priority?: boolean;
};

export function InternalHero({ title, description, imageSrc, imageAlt, priority = false }: Props) {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section className="relative overflow-hidden bg-[#F8F8F8] border-b border-slate-100">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#071A33_1px,transparent_1px),linear-gradient(to_bottom,#071A33_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div ref={ref} className="relative max-w-[1440px] mx-auto px-6 lg:px-10 py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#071A33] max-w-[720px]">
              {title}
            </h1>
            <p className="text-[15px] leading-[1.7] text-slate-600 max-w-[560px] mt-4">{description}</p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-[16px] bg-white border border-slate-200 shadow-[0_8px_30px_rgba(7,26,51,0.08)]">
              <div className="relative h-[280px] sm:h-[340px] lg:h-[380px] w-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority={priority}
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/10 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
