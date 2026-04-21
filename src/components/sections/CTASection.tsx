"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { PhoneMock } from "@/components/ui/PhoneMock";
import { AppleLogoWhite, GooglePlayLogo } from "@/components/ui/StoreLogos";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const noiseDataUrl =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")";

export function CTASection() {
  const { fade, stagger: st, viewport } = useSectionReveal();

  return (
    <section id="cta" className="pb-20 pt-6 sm:pb-24 md:pb-28" aria-labelledby="cta-heading">
      <Container>
        <motion.div
          variants={st}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative overflow-hidden rounded-[40px] shadow-[0_24px_60px_rgba(43,35,29,0.14)]"
        >
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#2f241c] via-[#4a2f22] to-[#c45c18]">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-overlay"
              style={{ backgroundImage: noiseDataUrl }}
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-amber-400/15" aria-hidden />

            <div className="relative grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-center lg:gap-10 lg:py-12">
              <div className="mx-auto w-full max-w-[420px] text-center lg:mx-0 lg:text-left">
                <motion.h2
                  id="cta-heading"
                  variants={fade}
                  className="text-balance text-[26px] font-bold leading-[1.2] tracking-[-0.02em] text-white sm:text-[28px] md:text-[30px]"
                >
                  Начни сегодня.
                  <br />
                  Это бесплатно
                </motion.h2>
                <motion.p variants={fade} className="mt-4 text-[15px] font-normal leading-[1.55] text-white/85">
                  Скачай ILM Hub и начни уже сегодня,
                  <br />
                  в своём темпе и со своей целью
                </motion.p>

                <motion.div variants={fade} className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                  <CtaStoreChip href="#" label="Скачать в App Store" store="apple" />
                  <CtaStoreChip href="#" label="Скачать в Google Play" store="google" />
                </motion.div>
              </div>

              <motion.div variants={fade} className="flex justify-center lg:justify-end">
                <div className="relative flex min-h-[200px] w-full max-w-[min(100%,400px)] items-end justify-center pb-1 sm:min-h-[240px] sm:max-w-[440px]">
                  <div className="relative z-[1] w-[32%] max-w-[142px] origin-bottom translate-y-3 -rotate-[11deg] scale-[0.96] sm:max-w-[156px]">
                    <PhoneMock className="w-full" label="Скрин приложения" />
                  </div>
                  <div className="relative z-[3] -mx-[12%] w-[40%] max-w-[186px] sm:max-w-[200px]">
                    <PhoneMock className="w-full" label="Главный экран приложения" />
                  </div>
                  <div className="relative z-[2] w-[32%] max-w-[142px] origin-bottom translate-y-3 rotate-[11deg] scale-[0.96] sm:max-w-[156px]">
                    <PhoneMock className="w-full" label="Скрин приложения" />
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
  const title = store === "apple" ? "App Store" : "Google Play";
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex h-12 min-h-[48px] min-w-0 flex-1 items-center gap-3 rounded-[10px] border border-white/22 bg-black px-4 text-white transition hover:bg-black/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40 sm:min-w-[178px] sm:flex-none"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center" aria-hidden>
        {store === "apple" ? <AppleLogoWhite className="h-[22px] w-[22px]" /> : <GooglePlayLogo className="h-[22px] w-[22px]" />}
      </span>
      <span className="truncate text-[15px] font-semibold leading-none tracking-[-0.01em]">{title}</span>
    </Link>
  );
}
