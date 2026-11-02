import Image from "next/image";
import Link from "next/link";
import { landingIcons } from "@/lib/landingImagePaths";

/** Фиксированная шапка: 52px (mobile, отступы 12) / 60px (desktop, отступы 60), нижняя граница #efe6da. */
export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas">
      <div className="flex h-[52px] items-center justify-between px-3 desk:h-[60px] desk:px-[60px]">
        <Link
          href="/"
          aria-label="ILM Hub — на главную"
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/40"
        >
          <Image src={landingIcons.logo} alt="ilm" width={42} height={22} priority />
        </Link>
        {/* "/#cta", а не "#cta": шапка используется и на юридических страницах. */}
        <Link
          href="/#cta"
          className="text-[14px] leading-5 text-ink underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/40"
        >
          Скачать бесплатно
        </Link>
      </div>
    </header>
  );
}
