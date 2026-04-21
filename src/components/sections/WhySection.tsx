"use client";

import { motion } from "motion/react";
import { Container, ContentNarrow } from "@/components/ui/Container";
import { WhyRosetteIconFrame } from "@/components/ui/ScallopedRosette";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const cards = [
  {
    title: "Правильное произношение с первого дня",
    body: "Курс Махрадж — точки артикуляции каждого звука. Учишься говорить правильно сразу, без плохих привычек.",
    icon: "🗣️",
  },
  {
    title: "Подходит новичкам",
    body: "Не нужно знать ничего заранее. Приложение ведёт с нуля — понятно, без перегруза.",
    icon: "🌱",
  },
  {
    title: "Офлайн-режим",
    body: "Учись без интернета — дома, в дороге, в самолёте.",
    icon: "📱",
  },
  {
    title: "Интервальное повторение",
    body: "Слова закрепляются в долгосрочной памяти — приложение напомнит в нужный момент.",
    icon: "🔁",
  },
  {
    title: "Встроенный словарь",
    body: "Поиск, перевод, карточки для повторения. Слова из уроков сразу попадают в твой личный словарь.",
    icon: "📚",
  },
  {
    title: "Чистое арабское аудио",
    body: "Тренируй восприятие на слух с первого урока — классический литературный арабский в каждом уроке.",
    icon: "🎧",
  },
] as const;

export function WhySection() {
  const { fade, stagger: st, viewport } = useSectionReveal();

  return (
    <section className="py-16 sm:py-20 md:py-[88px]" aria-labelledby="why-heading">
      <Container>
        <ContentNarrow>
          <h2
            id="why-heading"
            className="text-left text-[28px] font-bold leading-tight tracking-[-0.025em] text-ink md:text-[30px]"
          >
            Почему ILM Hub
          </h2>
          <p className="mt-3 max-w-[720px] text-[15px] font-normal leading-[1.5] text-muted">
            Всё для обучения в одном приложении — без переключений и лишних сервисов.
          </p>

          <motion.div
            variants={st}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {cards.map((c) => (
              <motion.article
                key={c.title}
                variants={fade}
                className="flex min-h-[280px] flex-col items-center rounded-[28px] border border-line bg-white px-5 pb-6 pt-7 text-center shadow-[0_1px_0_rgba(26,26,26,0.04)]"
              >
                <h3 className="text-[15px] font-bold leading-snug tracking-[-0.01em] text-ink sm:text-base">{c.title}</h3>
                <div className="my-5 flex justify-center">
                  <WhyRosetteIconFrame>{c.icon}</WhyRosetteIconFrame>
                </div>
                <p className="mt-auto text-[13px] font-normal leading-[1.45] text-muted sm:text-sm">{c.body}</p>
              </motion.article>
            ))}
          </motion.div>
        </ContentNarrow>
      </Container>
    </section>
  );
}
