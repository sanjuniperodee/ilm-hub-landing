import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  { emoji: "🌱", title: "Начинаешь с нуля", body: "Не нужно знать ни одной буквы — начнём с самого начала" },
  { emoji: "✈️", title: "Хочешь говорить в путешествии", body: "Арабский для общения, навигации, повседневных ситуаций" },
  { emoji: "💼", title: "Работаешь с арабским миром", body: "Бизнес, переговоры, деловая переписка на арабском" },
  { emoji: "🎭", title: "Интересуешься культурой", body: "Кино, музыка, литература, история арабского мира" },
  { emoji: "📖", title: "Хочешь понимать тексты", body: "Религиозные, литературные или любые другие — по твоему выбору" },
] as const;

export function AudienceSection() {
  return (
    <section aria-labelledby="audience-heading" className="flex flex-col gap-6 desk:items-center desk:gap-7">
      <SectionHeading id="audience-heading" className="desk:w-[560px]">
        ILM Hub подойдет тебе, если...
      </SectionHeading>
      <ul className="flex flex-col gap-2 desk:w-[560px]">
        {items.map((item) => (
          <li key={item.title} className="flex gap-4 py-4">
            <span
              aria-hidden
              className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-line text-[18px] leading-[22px]"
            >
              {item.emoji}
            </span>
            <div className="flex flex-1 flex-col gap-2">
              <h3 className="text-[16px] font-semibold leading-5 text-ink">{item.title}</h3>
              <p className="text-[14px] leading-5 text-ink">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
