import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { howScreenImages } from "@/lib/landingImagePaths";

const screenAlts = [
  "Экран уровня A1 со списком уроков",
  "Карточка слова для повторения",
  "Упражнение «Исправь предложение»",
  "Карточка буквы Ба с формами написания",
  "Экран уровня A2",
  "Экран урока в приложении",
] as const;

const cards = [
  { title: "Короткие уроки", body: "Легко вписать в любой день — 5, 10 или 30 минут на выбор." },
  {
    title: "Слушай и повторяй",
    body: "Аудио на классическом арабском в каждом уроке - тренируй произношение и восприятие на слух с самого начала",
  },
  { title: "Персональный план", body: "Приложение строит план под твою цель, уровень и время." },
] as const;

export function HowItWorksSection() {
  return (
    <section aria-labelledby="how-heading" className="flex flex-col gap-6 desk:gap-10">
      <SectionHeading id="how-heading">
        Как проходит обучение <br className="desk:hidden" />в ILM Hub
      </SectionHeading>

      <div className="no-scrollbar flex gap-4 overflow-x-auto">
        {howScreenImages.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={screenAlts[i]}
            width={202}
            height={420}
            sizes="202px"
            className="h-[420px] w-[202px] shrink-0"
          />
        ))}
      </div>

      <ul className="flex flex-col gap-3 desk:flex-row desk:gap-5">
        {cards.map((card) => (
          <li
            key={card.title}
            // В Figma полоса 4px — inside-обводка и не сдвигает padding (20/24), поэтому слева padding − 4px.
            className="flex flex-1 flex-col gap-1.5 rounded-2xl border-l-4 border-card-edge bg-line py-4 pl-4 pr-5 shadow-card desk:h-36 desk:gap-2 desk:pl-5 desk:pr-6 desk:shadow-none"
          >
            <h3 className="text-[14px] font-semibold leading-[18px] text-ink desk:text-[16px] desk:leading-5">
              {card.title}
            </h3>
            <p className="text-[14px] leading-5 text-ink">{card.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
