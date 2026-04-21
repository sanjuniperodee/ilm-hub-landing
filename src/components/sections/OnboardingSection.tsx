"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { PhoneMock } from "@/components/ui/PhoneMock";
import { useSectionReveal } from "@/hooks/useSectionReveal";

export function OnboardingSection() {
  const { fade, stagger: st, viewport } = useSectionReveal();

  return (
    <section className="py-16 sm:py-20 md:py-[96px]" aria-labelledby="onboarding-heading">
      <Container>
        <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(280px,400px)] lg:gap-x-12 lg:gap-y-0 xl:gap-x-16">
          <motion.div
            variants={st}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="min-w-0 max-w-[480px] lg:max-w-[520px]"
          >
            <motion.h2
              id="onboarding-heading"
              variants={fade}
              className="text-balance text-left text-[28px] font-bold leading-[1.12] tracking-[-0.03em] text-ink md:text-[32px] lg:text-[34px]"
            >
              Начни за 3 минуты — приложение подстроится под тебя
            </motion.h2>
            <motion.p
              variants={fade}
              className="mt-5 max-w-[440px] text-left text-[15px] font-normal leading-[1.55] text-muted md:text-[16px]"
            >
              Определи свой уровень, цель и темп — и получи готовый план. Без сложного старта и лишних настроек.
            </motion.p>
            <motion.div variants={fade} className="mt-9">
              <Link
                href="#cta"
                className="inline-flex h-[52px] min-w-[200px] items-center justify-center rounded-full border border-ink bg-white px-9 text-[15px] font-medium text-ink shadow-none transition hover:bg-[#fafafa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/25"
              >
                Начать обучение
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex justify-center lg:justify-end"
          >
            {/* Один телефон, лёгкий наклон к центру страницы — без «облака» тени за устройством */}
            <div className="origin-center rotate-[9deg] lg:origin-bottom-right lg:rotate-[11deg]">
              <PhoneMock
                variant="hero"
                className="w-[min(288px,78vw)] max-w-[300px] sm:w-[300px] sm:max-w-[300px]"
                label="Учебный план в приложении"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
