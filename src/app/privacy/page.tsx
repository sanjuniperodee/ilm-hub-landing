import type { Metadata } from "next";
import Link from "next/link";
import { Container, ContentNarrow } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <main className="py-16">
      <Container>
        <ContentNarrow className="max-w-[720px]">
          <Link href="/" className="text-sm font-medium text-muted hover:text-ink">
            ← На главную
          </Link>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight">Политика конфиденциальности</h1>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Полный юридический текст будет опубликован перед публичным релизом. Если тебе нужна информация уже сейчас,
            напиши в поддержку.
          </p>
          <Link className="mt-8 inline-flex text-sm font-medium text-ink underline underline-offset-4" href="mailto:support@ilmhub.app">
            Написать в поддержку
          </Link>
        </ContentNarrow>
      </Container>
    </main>
  );
}
