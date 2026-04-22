"use client";

import { motion } from "motion/react";
import { Container, ContentNarrow } from "@/components/ui/Container";
import { FigmaExportImage } from "@/components/ui/FigmaExportImage";
import { PhoneMock } from "@/components/ui/PhoneMock";
import { howScreenImages } from "@/lib/landingImagePaths";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const cards = [
  {
    title: "Короткие уроки",
    body: "Легко вписать в любой день — 5, 10 или 30 минут на выбор.",
    accent: "#a67c52",
  },
  {
    title: "Слушай и повторяй",
    body: "Аудио на классическом арабском в каждом уроке — тренируй произношение и восприятие на слух с самого начала",
    accent: "#c96f2e",
  },
  {
    title: "Персональный план",
    body: "Приложение строит план под твою цель, уровень и время.",
    accent: "#c4b89a",
  },
] as const;

export function HowItWorksSection() {
  const { fade, stagger: st, viewport } = useSectionReveal();

  return (
    <section className="py-16 sm:py-20 md:py-[88px]" aria-labelledby="how-heading">
      <Container>
        <ContentNarrow>
          <h2
            id="how-heading"
            className="text-center text-[28px] font-bold leading-tight tracking-[-0.025em] text-ink md:text-[30px]"
          >
            Как проходит обучение в ILM Hub
          </h2>

          {/* Figma: 6 телефонов вплотную, без лишней подложки за корпусом */}
          <div className="mt-10 flex justify-center gap-1 overflow-x-auto px-1 pb-2 sm:gap-1.5 md:gap-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {howScreenImages.map((src, i) => (
              <div key={src} className="w-[118px] shrink-0 sm:w-[136px] md:w-[152px] lg:w-[158px]">
                <FigmaExportImage
                  src={src}
                  alt={`Экран приложения ${i + 1}`}
                  className="aspect-[202/420] w-full"
                  sizes="(max-width: 768px) 24vw, 160px"
                  fallback={<PhoneMock variant="how" className="w-full" label={`Экран приложения ${i + 1}`} />}
                />
              </div>
            ))}
          </div>

          <motion.div
            variants={st}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-12 flex flex-col gap-5 md:flex-row md:gap-5"
          >
            {cards.map((c) => (
              <motion.article
                key={c.title}
                variants={fade}
                className="flex-1 rounded-2xl border-0 bg-[#f5eee3] py-7 pl-6 pr-5 sm:py-8 sm:pl-7 sm:pr-6"
                style={{ borderLeftWidth: 8, borderLeftStyle: "solid", borderLeftColor: c.accent }}
              >
                <h3 className="text-left text-lg font-bold leading-snug tracking-[-0.015em] text-ink">{c.title}</h3>
                <p className="mt-3 text-left text-[15px] font-normal leading-[1.5] text-ink">{c.body}</p>
              </motion.article>
            ))}
          </motion.div>
        </ContentNarrow>
      </Container>
    </section>
  );
}
