import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-canvas/85 backdrop-blur-md">
      <Container as="div" className="flex h-[60px] items-center justify-between">
        <Link
          href="/"
          className="text-[22px] font-bold lowercase leading-none tracking-tight text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/25"
          aria-label="ILM Hub — на главную"
        >
          ilm
        </Link>
        <Link
          href="#cta"
          className="text-sm font-normal text-ink underline decoration-ink/35 underline-offset-[5px] transition hover:decoration-ink/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/25"
        >
          Скачать бесплатно
        </Link>
      </Container>
    </header>
  );
}
