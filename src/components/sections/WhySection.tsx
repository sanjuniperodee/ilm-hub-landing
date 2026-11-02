import Image from "next/image";
import { SectionHeading, SectionLead } from "@/components/ui/SectionHeading";
import { landingIcons } from "@/lib/landingImagePaths";

const benefits = [
  {
    emoji: "🗣️",
    title: (
      <>
        Правильное произношение <br />с первого дня
      </>
    ),
    body: "Курс Махрадж — точки артикуляции каждого звука. Учишься говорить правильно сразу, без плохих привычек.",
  },
  {
    emoji: "🌱",
    title: "Подходит новичкам",
    body: "Не нужно знать ничего заранее. Приложение ведёт с нуля — понятно, без перегруза.",
  },
  { emoji: "⏰", title: "Напоминания о занятиях", body: "Выбери ежедневную цель — приложение напомнит о занятии, чтобы не терять темп." },
  {
    emoji: "🔁",
    title: "Повторение карточками",
    body: "Карточки и квизы помогают закрепить слова: повторяй их в коротких сессиях, пока не запомнишь.",
  },
  {
    emoji: "📚",
    title: "Встроенный словарь",
    body: "Поиск, перевод и избранное. Собирай свою колоду «Мои слова» и повторяй её карточками.",
  },
  {
    emoji: "🎧",
    title: "Чистое арабское аудио",
    body: "Тренируй восприятие на слух с первого урока — классический литературный арабский в каждом уроке.",
  },
];

export function WhySection() {
  return (
    <section aria-labelledby="why-heading" className="flex flex-col gap-6 desk:gap-10">
      <div className="flex flex-col gap-3">
        <SectionHeading id="why-heading">Почему ILM Hub</SectionHeading>
        <SectionLead>Всё для обучения в одном приложении — без переключений и лишних сервисов.</SectionLead>
      </div>

      <ul className="no-scrollbar flex gap-3 overflow-x-auto desk:gap-5">
        {benefits.map((b, i) => (
          <li
            key={i}
            // Обводка 1px в Figma inside — padding 32 считается от внешнего края.
            className="flex h-[400px] w-[280px] shrink-0 flex-col items-center justify-center gap-6 rounded-2xl border border-muted bg-canvas p-[31px] text-center shadow-card"
          >
            <h3 className="w-full text-[16px] font-semibold leading-5 text-ink">{b.title}</h3>
            <span className="relative flex size-10 items-center justify-center">
              <Image
                src={landingIcons.whyBadge}
                alt=""
                width={44}
                height={44}
                className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
              />
              <span aria-hidden className="relative text-[16px] leading-4">
                {b.emoji}
              </span>
            </span>
            <p className="w-full text-[12px] leading-4 text-ink">{b.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
