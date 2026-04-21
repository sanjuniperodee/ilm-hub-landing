"use client";

import { motion } from "motion/react";
import { Container, ContentNarrow } from "@/components/ui/Container";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const faq = [
  {
    q: "Нужны ли предварительные знания арабского?",
    a: "Нет. Первый курс «Махрадж» начинается с самых основ произношения — с нуля. Не нужно знать ни одной буквы, ни одного слова.",
  },
  {
    q: "Для кого подойдёт ILM Hub?",
    a: "Для всех, кто хочет учить арабский — вне зависимости от культуры, религии или цели. Путешественники, бизнесмены, студенты, люди, интересующиеся историей и культурой арабского мира. Ты сам выбираешь направление при старте.",
  },
  {
    q: "Какой арабский преподаётся — разговорный или классический?",
    a: "Мы обучаем классическому литературному арабскому (фусха) — он понятен во всех арабских странах, используется в СМИ, литературе, деловой среде и религиозных текстах.",
  },
  {
    q: "Есть ли словарь и карточки для повторения слов?",
    a: "Да. В приложении есть словарь с поиском и переводом, карточки слов с интервальным повторением и формирование личного словаря на основе твоего прогресса.",
  },
  {
    q: "Сколько времени нужно в день?",
    a: "Достаточно 5–10 минут в день, чтобы прогрессировать. Хочешь заниматься больше — выбери 30-минутный формат. Темп настраивается при создании плана.",
  },
  {
    q: "На каких устройствах работает ILM Hub?",
    a: "iOS (iPhone) и Android. Уроки можно загрузить заранее и проходить офлайн — без интернета, в дороге или самолёте.",
  },
  {
    q: "Будут ли уровни выше A1–A2?",
    a: "Да, скоро. Мы добавляем курсы уровней B1 и B2 — для тех, кто уже освоил базу и хочет двигаться дальше: сложные конструкции, расширенный словарный запас и уверенное чтение текстов.",
  },
  {
    q: "Можно ли будет заниматься с преподавателем?",
    a: "Да, скоро. В приложении появятся онлайн-уроки с преподавателями арабского — для тех, кто хочет практику с живым человеком в дополнение к самостоятельному обучению.",
  },
] as const;

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FAQSection() {
  const { fade, stagger: st, viewport } = useSectionReveal();

  return (
    <section className="py-16 sm:py-20 md:py-[88px]" aria-labelledby="faq-heading">
      <Container>
        <ContentNarrow>
          <h2
            id="faq-heading"
            className="text-left text-[28px] font-bold leading-tight tracking-[-0.025em] text-ink md:text-[30px]"
          >
            Частые вопросы
          </h2>

          <motion.div
            variants={st}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-10 border-y border-line"
          >
            {faq.map((item) => (
              <motion.div key={item.q} variants={fade} className="border-b border-line last:border-b-0">
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                    <span className="text-[15px] font-semibold leading-snug tracking-[-0.01em] text-ink sm:text-base">
                      {item.q}
                    </span>
                    <ChevronIcon className="shrink-0 text-ink/55 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 max-w-[720px] pr-10 text-[15px] font-normal leading-[1.55] text-muted">{item.a}</p>
                </details>
              </motion.div>
            ))}
          </motion.div>
        </ContentNarrow>
      </Container>
    </section>
  );
}
