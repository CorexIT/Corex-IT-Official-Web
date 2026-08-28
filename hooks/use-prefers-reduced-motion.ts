"use client";

import { useEffect, useRef, useState } from "react";

export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const mqlRef = useRef<MediaQueryList | null>(null);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    mqlRef.current = mql;

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // Read initial value from ref after mount
  useEffect(() => {
    if (mqlRef.current) {
      setPrefersReducedMotion(mqlRef.current.matches);
    }
  }, []);

  return prefersReducedMotion;
}
