import Image from "next/image";
import { StoreBadge } from "@/components/ui/StoreButtons";
import { landingImages } from "@/lib/landingImagePaths";

/**
 * Финальный CTA. Фон: #efe6da + картинка в режиме Stretch, в Figma показана верхняя часть
 * изображения (imageTransform по Y = 0.8578) — поэтому слой картинки выше блока на 1/0.8578.
 */
export function CTASection() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative isolate flex flex-col items-center justify-end gap-10 overflow-hidden rounded-[20px] bg-line px-5 py-[50px] desk:flex-row desk:justify-center desk:gap-[60px] desk:px-[120px]"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[116.578%]">
        <Image
          src={landingImages.ctaBackground}
          alt=""
          fill
          sizes="(min-width: 1024px) 1080px, 100vw"
          className="object-fill"
        />
      </div>

      <div className="flex w-full flex-col items-center gap-7 desk:w-auto desk:flex-1">
        <div className="flex w-full flex-col gap-3 text-center text-white">
          <h2
            id="cta-heading"
            className="text-[22px] font-semibold leading-[28px] desk:text-[28px] desk:leading-[36px]"
          >
            Начни сегодня.
            <br />
            Это бесплатно
          </h2>
          <p className="text-[14px] leading-5 text-white/80">
            Скачай ILM Hub и начни уже сегодня. <br />в своем темпе и со своей целью
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 desk:flex-row">
          <StoreBadge store="google" />
          <StoreBadge store="apple" />
        </div>
      </div>

      <Image
        src={landingImages.ctaPhonesMobile}
        alt="Экраны приложения ILM Hub"
        width={305}
        height={261}
        sizes="305px"
        className="desk:hidden"
      />
      <Image
        src={landingImages.ctaPhonesDesktop}
        alt="Экраны приложения ILM Hub"
        width={425}
        height={261}
        sizes="425px"
        className="hidden shrink-0 desk:block"
      />
    </section>
  );
}
