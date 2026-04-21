"use client";

import { motion } from "motion/react";
import { Container, ContentNarrow } from "@/components/ui/Container";
import { StepRosetteBadge } from "@/components/ui/ScallopedRosette";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const steps = [
  {
    n: "1",
    title: "Выбери цель",
    body: "Общение, путешествия, бизнес или понимание текстов — приложение подстроит программу под тебя. Займёт 2 минуты.",
    active: true,
  },
  {
    n: "2",
    title: "Учись в своём темпе",
    body: "Короткие уроки по 5, 10 или 30 минут. Можно дома, в дороге, офлайн. Система сама ведёт тебя шаг за шагом.",
    active: false,
  },
  {
    n: "3",
    title: "Закрепляй и повторяй",
    body: "Каждый урок завершается практикой. Слова и темы закрепляются через интервальное повторение — ничего не забывается.",
    active: false,
  },
] as const;

export function StepsSection() {
  const { fade, stagger: st, viewport } = useSectionReveal();

  return (
    <section className="py-16 sm:py-20 md:py-[88px]" aria-labelledby="steps-heading">
      <Container>
        <ContentNarrow>
          <h2
            id="steps-heading"
            className="text-left text-[28px] font-bold leading-tight tracking-[-0.025em] text-ink md:text-[30px]"
          >
            Три шага до первых слов
          </h2>
          <motion.ul
            variants={st}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-10"
          >
            {steps.map((s) => (
              <motion.li key={s.n} variants={fade} className="flex items-start gap-4">
                <StepRosetteBadge variant={s.active ? "active" : "muted"}>{s.n}</StepRosetteBadge>
                <div className="min-w-0 pt-0.5">
                  <h3 className="text-lg font-bold leading-snug tracking-[-0.015em] text-ink">{s.title}</h3>
                  <p className="mt-2 text-[15px] font-normal leading-[1.5] text-muted">{s.body}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </ContentNarrow>
      </Container>
    </section>
  );
}
