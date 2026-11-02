import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { LEGAL_UPDATED_AT } from "@/lib/site";

/** Каркас юридической страницы: шапка, заголовок, дата редакции, текст в колонке 720px, подвал. */
export function LegalPage({ title, lead, children }: { title: string; lead?: ReactNode; children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main" className="px-5 pb-20 pt-[52px] desk:px-8 desk:pt-[60px]">
        <article className="mx-auto w-full max-w-[720px] py-10 desk:py-16">
          <Link href="/" className="text-sm font-medium text-muted hover:text-ink">
            ← На главную
          </Link>
          <h1 className="mt-6 text-[28px] font-semibold leading-9 tracking-tight text-ink desk:text-[36px] desk:leading-[44px]">
            {title}
          </h1>
          <p className="mt-3 text-[13px] text-muted">Редакция от {LEGAL_UPDATED_AT}</p>
          {lead ? <div className="mt-6 text-[15px] leading-6 text-ink">{lead}</div> : null}
          <div className="mt-8 flex flex-col gap-4 text-[15px] leading-6 text-ink">{children}</div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

export function H2({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2 id={id} className="mt-6 scroll-mt-24 border-b border-line pb-2 text-[19px] font-semibold leading-7 text-ink">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-2 text-[16px] font-semibold leading-6 text-ink">{children}</h3>;
}

export function P({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="ml-5 flex list-disc flex-col gap-2 marker:text-muted">{children}</ul>;
}

export function OL({ children }: { children: ReactNode }) {
  return <ol className="ml-5 flex list-decimal flex-col gap-2 marker:text-muted">{children}</ol>;
}

export function Note({ children }: { children: ReactNode }) {
  return <div className="rounded-2xl border border-line bg-chip px-5 py-4 text-[14px] leading-6">{children}</div>;
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className="font-medium underline underline-offset-4 hover:text-accent"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
