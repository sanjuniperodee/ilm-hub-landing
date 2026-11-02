import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { InsideSection } from "@/components/sections/InsideSection";
import { OnboardingSection } from "@/components/sections/OnboardingSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { WhySection } from "@/components/sections/WhySection";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-ink focus:shadow-card"
      >
        К основному содержимому
      </a>
      <SiteHeader />
      {/* Отступ под фиксированную шапку (52 / 60), контент 1080 по центру, между секциями 120 — как в макете. */}
      <main id="main" className="px-3 pb-[120px] pt-[52px] desk:px-8 desk:pt-[60px]">
        <div className="mx-auto flex w-full max-w-content flex-col gap-[120px]">
          <HeroSection />
          <StepsSection />
          <AudienceSection />
          <HowItWorksSection />
          <WhySection />
          <InsideSection />
          <OnboardingSection />
          <FAQSection />
          <CTASection />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
