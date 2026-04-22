"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { FigmaExportImage } from "@/components/ui/FigmaExportImage";
import { PhoneMock } from "@/components/ui/PhoneMock";
import { landingImages } from "@/lib/landingImagePaths";
import { AppleLogoWhite, GooglePlayLogo } from "@/components/ui/StoreLogos";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const noiseDataUrl =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")";

export function CTASection() {
  const { fade, stagger: st, viewport } = useSectionReveal();

  return (
    <section id="cta" className="pb-16 pt-4 sm:pb-20 md:pb-24" aria-labelledby="cta-heading">
      <Container>
        <motion.div
          variants={st}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative overflow-hidden rounded-[40px] shadow-[0_20px_50px_rgba(74,52,41,0.18)]"
        >
          {/* Figma: тёплый коричнево‑янтарный градиент без тяжёлого «затемнения» слева */}
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#3d2b22] via-[#5c3826] to-[#c76b2e]">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
              style={{ backgroundImage: noiseDataUrl }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-amber-300/20"
              aria-hidden
            />

            {/* Две колонки; по верху — компактнее по высоте, чем items-center */}
            <div className="relative grid gap-7 px-5 py-7 sm:gap-8 sm:px-7 sm:py-8 lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-0 lg:px-9 lg:py-8 xl:gap-x-11 xl:px-11">
              <div className="mx-auto flex w-full max-w-[480px] flex-col text-center lg:mx-0 lg:max-w-[min(100%,400px)] lg:text-left xl:max-w-[430px]">
                <motion.h2
                  id="cta-heading"
                  variants={fade}
                  className="text-balance text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-white sm:text-[28px] lg:text-[30px]"
                >
                  Начни сегодня.
                  <br />
                  Это бесплатно
                </motion.h2>
                <motion.p
                  variants={fade}
                  className="mt-4 text-[15px] font-normal leading-[1.55] text-white/90 sm:text-base"
                >
                  Скачай ILM Hub и начни уже сегодня, в своём темпе и со своей целью
                </motion.p>

                <motion.div
                  variants={fade}
                  className="mt-6 grid grid-cols-1 gap-2.5 sm:mx-auto sm:max-w-md sm:grid-cols-2 sm:gap-2.5 lg:mx-0 lg:max-w-md"
                >
                  <CtaStoreChip href="#" label="Скачать из Google Play" store="google" />
                  <CtaStoreChip href="#" label="Загрузить в App Store" store="apple" />
                </motion.div>
              </div>

              <motion.div variants={fade} className="flex w-full justify-center lg:justify-end lg:self-start">
                {/*
                  Центральный — вертикально впереди; боковые — сзади, наружу; без min-height — высота от контента.
                */}
                <div className="relative flex w-full max-w-[min(100%,320px)] items-end justify-center sm:max-w-[360px] lg:max-w-[min(100%,400px)] xl:max-w-[420px]">
                  <div className="relative z-[10] w-[28%] max-w-[108px] shrink-0 origin-bottom translate-y-0.5 -rotate-[8deg] scale-[0.9] sm:max-w-[118px] lg:max-w-[126px]">
                    <FigmaExportImage
                      src={landingImages.ctaPhoneLeft}
                      alt="Скрин приложения"
                      className="aspect-[100/210] w-full"
                      sizes="(max-width: 1024px) 28vw, 140px"
                      fallback={<PhoneMock className="w-full" label="Скрин приложения" />}
                    />
                  </div>
                  <div className="relative z-[30] -mx-[10%] w-[44%] max-w-[168px] shrink-0 origin-center rotate-0 translate-y-0 sm:max-w-[188px] lg:-mx-[11%] lg:max-w-[200px]">
                    <FigmaExportImage
                      src={landingImages.ctaPhoneCenter}
                      alt="Главный экран приложения"
                      className="aspect-[125/261] w-full"
                      imageClassName="object-contain object-center"
                      sizes="(max-width: 1024px) 44vw, 200px"
                      fallback={<PhoneMock className="w-full" label="Главный экран приложения" />}
                    />
                  </div>
                  <div className="relative z-[10] w-[28%] max-w-[108px] shrink-0 origin-bottom translate-y-0.5 rotate-[8deg] scale-[0.9] sm:max-w-[118px] lg:max-w-[126px]">
                    <FigmaExportImage
                      src={landingImages.ctaPhoneRight}
                      alt="Скрин приложения"
                      className="aspect-[100/210] w-full"
                      sizes="(max-width: 1024px) 28vw, 170px"
                      fallback={<PhoneMock className="w-full" label="Скрин приложения" />}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function CtaStoreChip({ href, label, store }: { href: string; label: string; store: "apple" | "google" }) {
  return (
    <Link
      href={href}
      aria-label={label}
      title={label}
      className="inline-flex min-h-[48px] w-full min-w-0 items-center gap-3 rounded-[10px] border border-white/25 bg-black px-3 py-2.5 text-white transition hover:bg-black/88 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40 sm:px-4"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center" aria-hidden>
        {store === "apple" ? <AppleLogoWhite className="h-[22px] w-[22px]" /> : <GooglePlayLogo className="h-[22px] w-[22px]" />}
      </span>
      <span className="min-w-0 text-left text-[13px] font-semibold leading-snug tracking-[-0.01em] sm:text-[14px]">{label}</span>
    </Link>
  );
}
