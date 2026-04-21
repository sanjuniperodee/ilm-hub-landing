"use client";

import type { Variants } from "motion/react";
import { useReducedMotion } from "motion/react";
import { useMemo } from "react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const instantItem: Variants = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0, transition: { duration: 0 } },
};

const instantStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0, delayChildren: 0 },
  },
};

/** Figma-like scroll reveal; respects `prefers-reduced-motion`. */
export function useSectionReveal() {
  const reduce = useReducedMotion();

  return useMemo(
    () => ({
      fade: reduce ? instantItem : fadeUp,
      stagger: reduce ? instantStagger : stagger,
      viewport: viewportOnce,
    }),
    [reduce],
  );
}
