import Link from "next/link";
import { Container, ContentNarrow } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-canvas pb-10 pt-9">
      <Container>
        <ContentNarrow className="flex flex-col gap-4 text-xs leading-normal text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ILM Hub. Все права защищены.</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Юридическая информация">
            <Link
              className="underline decoration-ink/20 underline-offset-4 transition hover:text-ink hover:decoration-ink/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/25"
              href="/privacy"
            >
              Политика конфиденциальности
            </Link>
            <Link
              className="underline decoration-ink/20 underline-offset-4 transition hover:text-ink hover:decoration-ink/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/25"
              href="/terms"
            >
              Условия использования
            </Link>
            <Link
              className="underline decoration-ink/20 underline-offset-4 transition hover:text-ink hover:decoration-ink/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/25"
              href="mailto:support@ilmhub.app"
            >
              Поддержка
            </Link>
          </nav>
        </ContentNarrow>
      </Container>
    </footer>
  );
}
