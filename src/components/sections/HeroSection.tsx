import Image from "next/image";
import Link from "next/link";
import { StoreOutlineButtons } from "@/components/ui/StoreButtons";
import { landingImages } from "@/lib/landingImagePaths";

const chips = ["Общение", "Путешествия", "Бизнес", "Культура", "Понимать молитвы", "Читать Коран"] as const;

/**
 * Первый экран. Mobile: заголовок → телефоны → чипы → кнопка → сторы → «Сделано в Казахстане» (gap 36).
 * Desktop: левая колонка 420 (текст, кнопки) и правая 440 (телефоны, чипы), выровнены по центру.
 * Обёртки с `contents` на мобильном отдают детей в общий flex, чтобы порядок совпал с макетом.
 */
export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex flex-col gap-9 py-10 desk:flex-row desk:items-center desk:justify-between desk:gap-[60px] desk:pb-0 desk:pt-[60px]"
    >
      <div className="contents desk:flex desk:w-[420px] desk:shrink-0 desk:flex-col desk:gap-9">
        <div className="order-1 flex flex-col gap-4 desk:order-none">
          <h1
            id="hero-heading"
            className="text-[36px] font-semibold leading-[40px] tracking-[-0.03em] text-ink desk:text-[44px] desk:leading-[48px]"
          >
            Арабский –<br />
            <span className="font-alt font-medium italic text-accent">проще, чем</span>
            <br />
            ты думаешь.
          </h1>
          <p className="text-[14px] leading-5 text-muted desk:text-[16px] desk:leading-6">
            5-10 минут в день. Никакого сложного старта. Приложение ведет тебя шаг за шагом с нуля
          </p>
        </div>

        <div className="contents desk:flex desk:flex-col desk:gap-4">
          <Link
            href="#cta"
            className="order-4 flex h-12 items-center justify-center rounded-2xl bg-brand px-5 text-[16px] font-medium leading-5 text-white transition hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/40"
          >
            Начать бесплатно
          </Link>
          <StoreOutlineButtons className="order-5" />
        </div>

        <p className="order-6 text-center text-[14px] leading-5 text-muted desk:order-none desk:text-left">
          🇰🇿 Сделано в Казахстане
        </p>
      </div>

      <div className="contents desk:flex desk:w-[440px] desk:shrink-0 desk:flex-col desk:items-center desk:gap-9">
        <div className="order-2 shrink-0">
          <Image
            src={landingImages.heroDevicesMobile}
            alt="Экраны приложения ILM Hub: главная с уровнями и упражнение"
            width={351}
            height={357}
            priority
            className="desk:hidden"
          />
          <Image
            src={landingImages.heroDevices}
            alt="Экраны приложения ILM Hub: главная с уровнями и упражнение"
            width={350}
            height={357}
            priority
            className="hidden desk:block"
          />
        </div>
        {/* В Figma ряд 397px, 4 чипа = 399px → перенос 3+3. Браузер меряет текст чуть уже, поэтому 385px:
            ряды центрируются, их положение не меняется, а перенос остаётся 3+3. */}
        <ul className="order-3 flex flex-wrap gap-2 desk:w-[385px] desk:justify-center">
          {chips.map((label) => (
            <li
              key={label}
              className="flex items-center gap-1 rounded-xl bg-chip px-2 py-1 text-[12px] leading-4 text-muted"
            >
              <span aria-hidden className="w-3 text-center">
                ・
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
