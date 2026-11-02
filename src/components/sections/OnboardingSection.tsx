import Image from "next/image";
import Link from "next/link";
import { SectionHeading, SectionLead } from "@/components/ui/SectionHeading";
import { landingImages } from "@/lib/landingImagePaths";

export function OnboardingSection() {
  return (
    <section
      aria-labelledby="onboarding-heading"
      className="flex flex-col gap-8 desk:flex-row desk:items-center desk:justify-between"
    >
      <div className="contents desk:flex desk:w-[420px] desk:shrink-0 desk:flex-col desk:gap-10">
        <div className="flex flex-col gap-3">
          <SectionHeading id="onboarding-heading">
            Начни за 3 минуты —<br />
            приложение подстроится под тебя
          </SectionHeading>
          <SectionLead>
            Определи свой уровень, цель и темп — и получи готовый план. Без сложного старта и лишних настроек.
          </SectionLead>
        </div>
        <Link
          href="#cta"
          className="order-last flex h-[52px] items-center justify-center rounded-2xl border border-ink px-5 text-[16px] font-medium leading-5 text-ink transition hover:bg-chip focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/40 desk:order-none"
        >
          Начать обучение
        </Link>
      </div>
      <div className="flex justify-center desk:w-[432px] desk:shrink-0">
        <Image
          src={landingImages.onboardingPhone}
          alt="Экран «Учебный план готов» в приложении ILM Hub"
          width={273}
          height={458}
          sizes="273px"
        />
      </div>
    </section>
  );
}
