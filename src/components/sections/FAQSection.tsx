"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { landingIcons } from "@/lib/landingImagePaths";

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
    a: "Да. В приложении есть словарь с поиском и переводом, избранное, карточки и квизы для повторения слов и своя колода «Мои слова», которую ты собираешь из словаря.",
  },
  {
    q: "Сколько времени нужно в день?",
    a: "Достаточно 5–10 минут в день, чтобы прогрессировать. Хочешь заниматься больше — выбери 30-минутный формат. Темп настраивается при создании плана.",
  },
  {
    q: "На каких устройствах работает ILM Hub?",
    a: "iOS (iPhone) и Android. Прогресс сохраняется в аккаунте — можно продолжить с того же места на другом устройстве.",
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

export function FAQSection() {
  // В макете первый вопрос раскрыт; переключение — Smart Animate 300ms ease-out.
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section aria-labelledby="faq-heading" className="flex flex-col gap-6 desk:items-center desk:gap-7">
      <SectionHeading id="faq-heading" className="desk:w-[560px]">
        Частые вопросы
      </SectionHeading>
      <ul className="flex flex-col desk:w-[560px]">
        {faq.map((item, i) => {
          const isOpen = open === i;
          const panelId = `${baseId}-panel-${i}`;
          return (
            // Нижняя граница inside в Figma: padding 20/20 → снизу 19 + 1px border.
            <li key={item.q} className="border-b border-line pb-[19px] pt-5">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full gap-2 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink/40"
              >
                <span className="flex-1 text-[14px] font-semibold leading-5 text-ink desk:text-[16px] desk:leading-[22px]">
                  {item.q}
                </span>
                <Image
                  src={isOpen ? landingIcons.chevronUp : landingIcons.chevronDown}
                  alt=""
                  width={18}
                  height={18}
                  className="shrink-0 self-start"
                />
              </button>
              <div
                id={panelId}
                role="region"
                aria-hidden={!isOpen}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p className="pt-2 text-[14px] leading-5 text-ink">{item.a}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
