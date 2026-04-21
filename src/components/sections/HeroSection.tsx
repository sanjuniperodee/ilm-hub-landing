"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { HeroDevicePlaceholders } from "@/components/ui/HeroDevicePlaceholders";
import { AppleLogoMono, GooglePlayLogo } from "@/components/ui/StoreLogos";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const chips = ["Общение", "Путешествия", "Бизнес", "Культура", "Понимать молитвы", "Читать Коран"] as const;

export function HeroSection() {
  const { fade, stagger: st, viewport } = useSectionReveal();

  return (
    <section className="relative overflow-hidden pb-16 pt-8 sm:pb-[72px] sm:pt-10 md:pt-12" aria-labelledby="hero-heading">
      <Container>
        <div className="grid gap-10 md:gap-12 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-start lg:gap-x-24 lg:gap-y-0 xl:gap-x-28">
          <motion.h1
            id="hero-heading"
            variants={st}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="max-w-[420px] text-balance lg:col-start-1 lg:row-start-1"
          >
            <motion.span
              variants={fade}
              className="block text-[40px] font-bold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[44px] md:text-[48px]"
            >
              Арабский —
            </motion.span>
            <motion.span
              variants={fade}
              className="mt-2 block font-display text-[40px] font-normal italic leading-[1.06] tracking-[-0.02em] text-hero-accent sm:text-[44px] md:text-[48px]"
            >
              проще, чем
            </motion.span>
            <motion.span
              variants={fade}
              className="mt-2 block text-[40px] font-bold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[44px] md:text-[48px]"
            >
              ты думаешь.
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="max-w-[420px] text-[16px] font-normal leading-[1.5] text-hero-subtle lg:col-start-1 lg:row-start-2 lg:pt-6"
          >
            5-10 минут в день. Никакого сложного старта. Приложение ведет тебя шаг за шагом с нуля
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="lg:col-start-2 lg:row-start-1 lg:row-span-3 lg:flex lg:flex-col lg:items-end lg:pb-1"
          >
            <HeroDevicePlaceholders />
            <ul className="mt-8 flex w-full max-w-[440px] flex-wrap justify-center gap-2 sm:gap-2.5 lg:ml-auto lg:mr-0 lg:justify-end">
              {chips.map((label) => (
                <li key={label}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-3 py-[7px] text-[12px] font-normal leading-none tracking-tight text-ink/90">
                    <span className="text-[10px] text-muted" aria-hidden>
                      •
                    </span>
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={st}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex max-w-[420px] flex-col gap-5 lg:col-start-1 lg:row-start-3 lg:pt-2"
          >
            <motion.div variants={fade}>
              <Link
                href="#cta"
                className="flex h-14 w-full items-center justify-center rounded-full bg-brand text-[16px] font-semibold leading-none text-white shadow-[0_14px_34px_rgba(26,26,26,0.2)] transition hover:brightness-[1.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/35 sm:w-auto sm:min-w-[260px] sm:px-10"
              >
                Начать бесплатно
              </Link>
            </motion.div>
            <motion.div variants={fade} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <HeroStorePill href="#" label="Скачать в App Store" store="apple" />
              <HeroStorePill href="#" label="Скачать в Google Play" store="google" />
            </motion.div>
            <motion.p variants={fade} className="text-[13px] font-normal leading-normal text-muted">
              <span aria-hidden className="mr-1.5">
                🇰🇿
              </span>
              Сделано в Казахстане
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function HeroStorePill({ href, label, store }: { href: string; label: string; store: "apple" | "google" }) {
  const title = store === "apple" ? "App Store" : "Google Play";
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex h-12 min-h-[48px] w-full flex-1 items-center gap-3 rounded-full border border-[#d4cdc4] bg-white px-4 text-ink transition hover:border-[#c4bbb0] hover:bg-[#faf8f5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/25 sm:w-auto sm:min-w-[168px]"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center text-ink" aria-hidden>
        {store === "apple" ? <AppleLogoMono className="h-[26px] w-[26px]" /> : <GooglePlayLogo className="h-[26px] w-[26px]" />}
      </span>
      <span className="truncate text-[15px] font-semibold leading-none tracking-[-0.01em]">{title}</span>
    </Link>
  );
}
