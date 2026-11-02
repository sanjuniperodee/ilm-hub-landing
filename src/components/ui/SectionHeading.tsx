import type { ReactNode } from "react";

/** Заголовок секции: 22/28 на мобильном, 28/36 на десктопе (Montserrat SemiBold). */
export function SectionHeading({
  id,
  children,
  className = "",
  as: Tag = "h2",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3";
}) {
  return (
    <Tag
      id={id}
      className={`text-[22px] font-semibold leading-[28px] text-ink desk:text-[28px] desk:leading-[36px] ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Подзаголовок секции 14/20, muted. */
export function SectionLead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-[14px] leading-5 text-muted ${className}`}>{children}</p>;
}
