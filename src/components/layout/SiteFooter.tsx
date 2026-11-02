import Link from "next/link";
import { COMPANY, CONTACT_EMAIL } from "@/lib/site";

const links = [
  { href: "/privacy", label: "Политика конфиденциальности" },
  { href: "/terms", label: "Условия использования" },
  { href: "/delete-account", label: "Удаление аккаунта" },
  { href: `mailto:${CONTACT_EMAIL}`, label: "Поддержка" },
] as const;

export function SiteFooter() {
  return (
    <footer className="px-3 pb-10 desk:px-8">
      <div className="mx-auto flex w-full max-w-content flex-col gap-8 text-[12px] leading-4 text-muted desk:flex-row desk:justify-between">
        <div className="flex flex-col gap-2 desk:max-w-[340px]">
          <p>© {new Date().getFullYear()} ILM Hub. Все права защищены.</p>
          <p>
            {COMPANY.name}, БИН {COMPANY.bin}
            <br />
            {COMPANY.address}
          </p>
        </div>
        <nav aria-label="Юридическая информация" className="flex flex-col gap-4 desk:flex-row desk:gap-10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="whitespace-nowrap transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/40"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
