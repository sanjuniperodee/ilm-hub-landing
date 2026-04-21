"use client";

import { motion } from "motion/react";
import { Container, ContentNarrow } from "@/components/ui/Container";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const items = [
  {
    icon: "🌱",
    title: "Начинаешь с нуля",
    body: "Не нужно знать ни одной буквы — начнём с самого начала",
    well: "bg-[#e8f4ec]",
  },
  {
    icon: "✈️",
    title: "Хочешь говорить в путешествии",
    body: "Арабский для общения, навигации, повседневных ситуаций",
    well: "bg-[#e3eef9]",
  },
  {
    icon: "💼",
    title: "Работаешь с арабским миром",
    body: "Бизнес, переговоры, деловая переписка на арабском",
    well: "bg-[#efe8df]",
  },
  {
    icon: "🎭",
    title: "Интересуешься культурой",
    body: "Кино, музыка, литература, история арабского мира",
    well: "bg-[#fce8e4]",
  },
  {
    icon: "📖",
    title: "Хочешь понимать тексты",
    body: "Религиозные, литературные или любые другие — по твоему выбору",
    well: "bg-[#e8eefc]",
  },
] as const;

export function AudienceSection() {
  const { fade, stagger: st, viewport } = useSectionReveal();

  return (
    <section className="py-16 sm:py-20 md:py-[88px]" aria-labelledby="audience-heading">
      <Container>
        <ContentNarrow>
          <h2
            id="audience-heading"
            className="text-center text-[30px] font-bold leading-[1.15] tracking-[-0.025em] text-ink md:text-[34px]"
          >
            ILM Hub подойдет тебе, если...
          </h2>
          <motion.ul
            variants={st}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mx-auto mt-12 flex max-w-[640px] flex-col gap-10 md:gap-11"
          >
            {items.map((it) => (
              <motion.li key={it.title} variants={fade} className="flex items-center gap-4">
                <div
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-full text-xl leading-none ${it.well}`}
                  aria-hidden
                >
                  {it.icon}
                </div>
                <div className="min-w-0 text-left">
                  <h3 className="text-lg font-bold leading-snug tracking-[-0.015em] text-ink">{it.title}</h3>
                  <p className="mt-1.5 text-[15px] font-normal leading-[1.5] text-muted">{it.body}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </ContentNarrow>
      </Container>
    </section>
  );
}
