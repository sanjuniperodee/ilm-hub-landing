"use client";

import { motion } from "motion/react";
import { Container, ContentNarrow } from "@/components/ui/Container";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const courses = [
  {
    badge: { text: "Произношение", className: "bg-sage text-sage-ink" },
    ar: "مخرج",
    title: "Махрадж",
    body: "Точки артикуляции каждого арабского звука. Правильное произношение с самого начала, без плохих привычек.",
    meta: "5–10 мин/урок",
  },
  {
    badge: { text: "Начальный курс", className: "bg-honey text-honey-ink" },
    ar: "المستوى الأول",
    title: "Курс A1–A2",
    body: "Алфавит, базовые слова и конструкции, первые диалоги. Структурное понимание языка с нуля.",
    meta: "10–15 мин/урок",
  },
  {
    badge: { text: "Чтение", className: "bg-peach text-peach-ink" },
    ar: "تجويد",
    title: "Таджвид",
    body: "Правила красивого и правильного чтения арабского текста. Для тех, кто хочет читать грамотно и мелодично.",
    meta: "10–20 мин/урок",
  },
] as const;

const extras = [
  { icon: "📖", title: "Коран", subtitle: "Текст и аудио" },
  { icon: "✨", title: "99 имён Аллаха", subtitle: "Полный список" },
  { icon: "🕌", title: "Хадж и Умра", subtitle: "Шаги и чек-листы" },
] as const;

export function InsideSection() {
  const { fade, stagger: st, viewport } = useSectionReveal();

  return (
    <section className="py-16 sm:py-20 md:py-[88px]" aria-labelledby="inside-heading">
      <Container>
        <ContentNarrow>
          <h2
            id="inside-heading"
            className="text-left text-[28px] font-bold leading-tight tracking-[-0.025em] text-ink md:text-[30px]"
          >
            Что внутри ILM Hub
          </h2>
          <p className="mt-3 max-w-[820px] text-[15px] font-normal leading-[1.5] text-muted">
            Структурированные курсы от нуля до уверенного чтения — каждый уровень открывает следующий.
          </p>

          <motion.div
            variants={st}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-10 grid gap-5 md:grid-cols-3 md:gap-5"
          >
            {courses.map((c) => (
              <motion.article
                key={c.title}
                variants={fade}
                className="flex flex-col rounded-[28px] border-2 border-line bg-white p-5 shadow-[0_1px_0_rgba(26,26,26,0.04)] sm:p-6"
              >
                <span
                  className={`inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold leading-none ${c.badge.className}`}
                >
                  {c.badge.text}
                </span>
                <div className="mt-4 flex flex-1 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold leading-snug text-ink">{c.title}</h3>
                    <p className="mt-2 text-[13px] font-normal leading-[1.45] text-muted sm:text-sm">{c.body}</p>
                  </div>
                  <p className="shrink-0 text-right text-[24px] font-semibold leading-tight tracking-[-0.02em] text-stone sm:text-[26px]">
                    {c.ar}
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-[12px] font-normal text-muted">
                  <span aria-hidden>⏱</span>
                  {c.meta}
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            variants={st}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-6 rounded-[28px] border-2 border-line bg-white p-5 shadow-[0_1px_0_rgba(26,26,26,0.04)] sm:p-6"
          >
            <p className="text-[13px] font-semibold uppercase tracking-wide text-stone">Также в приложении</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3 sm:gap-4">
              {extras.map((e) => (
                <motion.div
                  key={e.title}
                  variants={fade}
                  className="flex gap-3 rounded-2xl border border-line bg-chip p-4"
                >
                  <div className="text-xl leading-none" aria-hidden>
                    {e.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold leading-snug text-ink">{e.title}</p>
                    <p className="mt-0.5 text-xs font-normal leading-normal text-muted">{e.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ContentNarrow>
      </Container>
    </section>
  );
}
