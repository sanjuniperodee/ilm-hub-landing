import type { Variants } from "motion/react";

/** Easing close to Figma / iOS marketing curves */
const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: easeOut },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};

/** Shared whileInView config — triggers when ~22% of section is visible */
export const viewportOnce = { once: true, amount: 0.22 } as const;
