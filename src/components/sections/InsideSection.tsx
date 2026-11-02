import Image from "next/image";
import { SectionHeading, SectionLead } from "@/components/ui/SectionHeading";
import { landingIcons } from "@/lib/landingImagePaths";

const courses = [
  {
    badge: "Произношение",
    badgeClass: "bg-sage text-sage-ink",
    ar: "مخرج",
    title: "Махрадж",
    body: "Точки артикуляции каждого арабского звука. Правильное произношение с самого начала, без плохих привычек.",
    meta: "5-10 мин/урок",
  },
  {
    badge: "Начальный курс",
    badgeClass: "bg-honey text-honey-ink",
    ar: "المستوى الأول",
    title: "Курс A1–A2",
    body: "Алфавит, базовые слова и конструкции, первые диалоги. Структурное понимание языка с нуля.",
    meta: "10-15 мин/урок",
  },
  {
    badge: "Чтение",
    badgeClass: "bg-peach text-accent",
    ar: "تجويد",
    title: "Таджвид",
    body: "Правила красивого и правильного чтения арабского текста. Для тех, кто хочет читать грамотно и мелодично.",
    meta: "10-20 мин/урок",
  },
] as const;

const extras = [
  { emoji: "📖", title: "Коран", subtitle: "Текст и аудио" },
  { emoji: "✨", title: "99 имён Аллаха", subtitle: "Полный список" },
  { emoji: "🕌", title: "Хадж и Умра", subtitle: "Шаги и чек-листы" },
] as const;

/** Белая карточка: обводка 1px #efe6da (inside в Figma → padding 16 − 1), r16, мягкая тень. */
const card = "flex flex-col gap-3 rounded-2xl border border-line bg-white p-[15px] shadow-card";

export function InsideSection() {
  return (
    <section aria-labelledby="inside-heading" className="flex flex-col gap-6 desk:gap-10">
      <div className="flex flex-col gap-3">
        <SectionHeading id="inside-heading">Что внутри ILM Hub</SectionHeading>
        <SectionLead>
          Структурированные курсы от нуля до уверенного чтения — каждый уровень открывает следующий.
        </SectionLead>
      </div>

      <div className="flex flex-col gap-3 desk:gap-5">
        <ul className="flex flex-col gap-3 desk:flex-row">
          {courses.map((c) => (
            <li key={c.title} className={`${card} flex-1`}>
              <span
                className={`self-start rounded-3xl px-1.5 pb-[3px] pt-0.5 text-[11px] font-medium leading-[14px] ${c.badgeClass}`}
              >
                {c.badge}
              </span>
              <p lang="ar" dir="rtl" className="text-right text-[22px] font-semibold leading-7 text-stone">
                {c.ar}
              </p>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-[16px] font-semibold leading-5 text-ink">{c.title}</h3>
                <p className="text-[12px] leading-4 text-muted desk:line-clamp-3 desk:h-12">{c.body}</p>
              </div>
              {/* Линия в Figma не занимает высоты: 12 + линия + 12, поэтому −1px компенсирует border. */}
              <hr className="-mb-px border-line" />
              <div className="flex items-center gap-1 text-[12px] leading-4 text-muted">
                <Image src={landingIcons.alarm} alt="" width={16} height={16} />
                {c.meta}
              </div>
            </li>
          ))}
        </ul>

        <div className={card}>
          <h3 className="text-[14px] font-semibold leading-[18px] text-stone">Также в приложении</h3>
          <ul className="flex flex-col gap-2 desk:flex-row">
            {extras.map((e) => (
              <li key={e.title} className="flex flex-1 items-center gap-4 rounded-xl bg-chip px-4 py-3">
                <span aria-hidden className="text-[22px] font-semibold leading-7">
                  {e.emoji}
                </span>
                <div className="flex flex-col gap-1.5">
                  <p className="text-[14px] font-semibold leading-[18px] text-ink">{e.title}</p>
                  <p className="text-[12px] leading-4 text-muted">{e.subtitle}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
