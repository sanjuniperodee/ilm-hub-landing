import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { landingIcons } from "@/lib/landingImagePaths";

const steps = [
  {
    title: "Выбери цель",
    body: "Общение, путешествия, бизнес или понимание текстов — приложение подстроит программу под тебя. Займёт 2 минуты.",
  },
  {
    title: "Учись в своём темпе",
    body: "Короткие уроки по 5, 10 или 30 минут. Можно дома или в дороге. Система сама ведёт тебя шаг за шагом.",
  },
  {
    title: "Закрепляй и повторяй",
    body: "Каждый урок завершается практикой. Слова закрепляются карточками и квизами, а напоминания помогают не терять темп.",
  },
] as const;

export function StepsSection() {
  return (
    <section aria-labelledby="steps-heading" className="flex flex-col gap-6 desk:gap-7 desk:py-10">
      <SectionHeading id="steps-heading">Три шага до первых слов</SectionHeading>
      <ol className="flex flex-col gap-2 desk:flex-row desk:gap-9">
        {steps.map((step, i) => {
          const active = i === 0;
          return (
            <li key={step.title} className="flex flex-1 gap-4 py-4">
              <span className="relative flex size-14 shrink-0 items-center justify-center">
                <Image
                  src={active ? landingIcons.stepBadgeActive : landingIcons.stepBadge}
                  alt=""
                  width={56}
                  height={56}
                  className="absolute inset-0"
                />
                <span
                  className={`relative text-[16px] font-semibold leading-5 ${active ? "text-white" : "text-muted"}`}
                >
                  {i + 1}
                </span>
              </span>
              <div className="flex flex-1 flex-col gap-2">
                <h3 className="text-[16px] font-semibold leading-5 text-ink desk:text-[18px] desk:leading-[22px]">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-5 text-ink">{step.body}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
