"use client";

import { motion, useReducedMotion } from "motion/react";
import { FigmaExportImage } from "@/components/ui/FigmaExportImage";
import { landingImages } from "@/lib/landingImagePaths";

/**
 * Герой: один PNG из Figma (оба телефона в композиции). При отсутствии файла — CSS-мокапы.
 */
export function HeroDevicePlaceholders() {
  const reduce = useReducedMotion();

  const fallback = reduce ? (
    <div className="relative mx-auto flex h-[min(400px,56vw)] w-full max-w-[400px] items-end justify-center sm:h-[432px] sm:max-w-[432px] lg:mx-0 lg:justify-end">
      <div className="absolute left-[8%] top-[6%] z-0 w-[46%] max-w-[198px] rotate-[10deg] sm:left-[10%] sm:max-w-[204px]">
        <DeviceFrame />
      </div>
      <div className="relative z-[1] w-[52%] max-w-[228px] sm:max-w-[248px]">
        <DeviceFrame />
      </div>
    </div>
  ) : (
    <div className="relative mx-auto flex h-[min(400px,56vw)] w-full max-w-[400px] items-end justify-center sm:h-[432px] sm:max-w-[432px] lg:mx-0 lg:justify-end">
      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: 22, rotate: 0 }}
        whileInView={{ opacity: 1, x: 0, rotate: 10 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.74, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[8%] top-[6%] z-0 w-[46%] max-w-[198px] sm:left-[10%] sm:max-w-[204px]"
      >
        <DeviceFrame />
      </motion.div>
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.74, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className="relative z-[1] w-[52%] max-w-[228px] sm:max-w-[248px]"
      >
        <DeviceFrame />
      </motion.div>
    </div>
  );

  return (
    <div className="relative mx-auto w-full max-w-[440px] lg:ml-auto lg:mr-0">
      <FigmaExportImage
        src={landingImages.heroDevices}
        alt="Два экрана приложения ILM Hub"
        className="aspect-[350/357] w-full max-h-[min(420px,52vw)] min-h-[260px] sm:min-h-[320px]"
        sizes="(max-width: 1024px) 92vw, 440px"
        fallback={fallback}
        priority
      />
    </div>
  );
}

function DeviceFrame() {
  return (
    <div className="aspect-[390/844] w-full rounded-[2.25rem] bg-transparent p-[10px] shadow-[0_20px_48px_rgba(43,35,29,0.12)] ring-1 ring-[#a8988a]/45">
      <div className="flex h-full min-h-0 w-full flex-col rounded-[1.7rem] bg-gradient-to-b from-[#c9b8aa] via-[#b0a090] to-[#9e8f82] p-[3px] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
        <div className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[1.55rem] bg-[#f4f0ec]">
          <div className="mx-auto mt-2.5 h-3.5 w-[28%] shrink-0 rounded-full bg-black/[0.12]" />
          <div className="mx-2 mt-2.5 flex min-h-0 flex-1 flex-col rounded-xl bg-gradient-to-b from-[#faf7f4] to-[#e8e0da] ring-1 ring-black/[0.06]">
            <div className="min-h-0 flex-1" />
            <div className="mx-auto mb-3 h-9 w-[44%] shrink-0 rounded-full bg-black/[0.08]" />
          </div>
        </div>
      </div>
    </div>
  );
}
