"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { db } from "@/lib/firebase";
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
  Timestamp,
} from "firebase/firestore";

interface CompanyHighlight {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  sortOrder: number;
  isActive: boolean;
  createdAt: Timestamp | Date | string;
  updatedAt: Timestamp | Date | string;
}

export function CompanyHighlightsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { isInView } = useInView();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [animated, setAnimated] = useState(false);
  const [highlightStats, setHighlightStats] = useState<CompanyHighlight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const unsubscribeRef = useRef<(error?: Error) => void>(() => {});
  const rafRef = useRef<number | null>(null);
  const canceledRef = useRef<boolean>(false);

  // Fetch active company highlights from Firestore, ordered by sortOrder
  useEffect(() => {
    const q = query(collection(db, "company_highlights"), where("isActive", "==", true), orderBy("sortOrder", "asc"));
    const unsub = onSnapshot(
      q,
      (snapshot) => {
        const stats = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        } as CompanyHighlight)).sort((a, b) => a.sortOrder - b.sortOrder);
        setHighlightStats(stats);
        setLoading(false);
        // Ensure countValues state matches the new data
        setCountValues(
          stats.map(() => ({ current: 0, finished: false }))
        );
        // Trigger animation after data loads and section is visible
        if (!animated) {
          setAnimated(true);
        }
      },
      (err) => {
        setError(err instanceof Error ? err.message : "Failed to load company highlights");
        setLoading(false);
      }
    );

    unsubscribeRef.current = () => {};
    return () => {
      unsub();
      unsubscribeRef.current = () => {};
    };
  }, []);

  // Initialize countValues with matching length to highlightStats
  const [countValues, setCountValues] = useState(() =>
    highlightStats.map(() => ({ current: 0, finished: false }))
  );

  // Start count animation
  const startCountAnimations = () => {
    canceledRef.current = false;

    highlightStats.forEach((_stat, i) => {
      const startTime = Date.now();
      const duration = 1500;
      const from = 0;
      const to = highlightStats[i].value;

      const animate = () => {
        if (canceledRef.current) return;

        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out cubic
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setCountValues((prev) => {
          const newPrev = [...prev];
          newPrev[i].current = Math.round(from + (to - from) * easedProgress);
          newPrev[i].finished = progress >= 1;
          return newPrev;
        });

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          // Ensure final value is set precisely
          setCountValues((prev) => {
            const newPrev = [...prev];
            newPrev[i].current = to;
            newPrev[i].finished = true;
            return newPrev;
          });
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    });

    setAnimated(true);
  };

  // Start animation when section enters viewport and not yet animated
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const startIfVisible = () => {
      const isVisible =
        element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().bottom > 0;

      if (isVisible && !animated && !prefersReducedMotion) {
        setAnimated(true);
        startCountAnimations();
      } else if (isVisible && prefersReducedMotion) {
        // Immediately set final values when reduced motion is preferred
        const finalValues = highlightStats.map((_, i) => ({
          current: highlightStats[i].value,
          finished: true,
        }));
        setCountValues(finalValues);
      }
    };

    startIfVisible();

    // Observe visibility changes via useInView
    if (isInView && !animated) {
      const handleObserve = () => {
        if (!animated && !prefersReducedMotion) {
          setAnimated(true);
          startCountAnimations();
        } else if (animated && prefersReducedMotion) {
          const finalValues = highlightStats.map((_, i) => ({
            current: highlightStats[i].value,
            finished: true,
          }));
          setCountValues(finalValues);
        }
      };

      // Initial check
      handleObserve();
    }
  }, [isInView, animated, prefersReducedMotion, highlightStats]);

  // Ensure values are set if section already visible on load
  useEffect(() => {
    const element = ref.current;
    if (!element || animated || prefersReducedMotion) return;

    const isVisible = element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().bottom > 0;

    if (!animated && isVisible) {
      setAnimated(true);
      startCountAnimations();
    }
  }, [animated, prefersReducedMotion, isInView]);

  // Cleanup animation frames on unmount
  useEffect(() => {
    return () => {
      canceledRef.current = true;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // Error message
  if (error) {
    return (
      <section
        ref={ref}
        className="relative overflow-hidden bg-[#040E1F]"
      >
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 py-20 md:py-24">
          <p className="text-center text-[15px] text-white/60 mb-8">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#040E1F]"
    >
      {/* Deep navy base gradient */}
      <div className="absolute inset-0 bg-[#040E1F]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#071A33] via-[#0A2450] to-[#040E1F]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_600px_at_75%_18%,rgba(0,87,184,0.12),transparent_62%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_500px_at_12%_82%,rgba(59,130,246,0.08),transparent_65%)]" />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Light blue radial accent */}
      <div className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-[0.03] blur-[60px] bg-[#3B82F6] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 py-20 md:py-24">
        {/* Two-column layout */}
        <div className="lg:block lg:flex gap-12 md:gap-8 items-start">
          {/* Left side: text content */}
          <div className="lg:w-1/2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] backdrop-blur border border-white/10 text-[10px] font-semibold tracking-[0.12em] uppercase text-[#8AB6FF] mb-4">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              COMPANY HIGHLIGHTS
            </span>

            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white mb-6">
              We Build Lasting Partnerships With Our Clients
            </h2>

            <p className="text-[15px] leading-[1.7] text-white/60 mb-8 max-w-lg">
              We create reliable digital solutions that help businesses grow, streamline operations and build stronger connections with their customers.
            </p>
          </div>

          {/* Right side: statistics grid */}
          <div className="lg:w-1/2 md:w-full">
            {/* Blue divider above stats */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-100/20 to-transparent my-12"></div>

            {loading ? (
              <div className="grid grid-cols-2 gap-4">
                {/* Skeleton states while loading */}
                {Array.from({ length: 4 }, (_, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 py-4 border-y border-white/10"
                  >
                    <span className="text-[3rem] font-bold text-white tracking-[-0.02em] skeleton" />
                    <p className="text-[12px] font-medium text-slate-400 uppercase tracking-[0.1em] skeleton" />
                    <p className="text-[11px] text-slate-500 text-center skeleton" />
                  </div>
                ))}
              </div>
            ) : highlightStats.length === 0 ? null : (
              <div className="grid grid-cols-2 gap-4">
                {highlightStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center gap-2 py-4 border-y border-white/10"
                  >
                    <span
                      className="text-[3rem] font-bold text-white tracking-[-0.02em]"
                    >
                      {countValues[i].current}{stat.suffix}
                    </span>

                    <p className="text-[12px] font-medium text-slate-400 uppercase tracking-[0.1em]">
                      {stat.label}
                    </p>

                    <p className="text-[11px] text-slate-500 text-center">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}