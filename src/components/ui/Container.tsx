import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
};

export function Container({ children, className = "", as: Tag = "div" }: Props) {
  return (
    <Tag className={`mx-auto w-full max-w-shell px-5 sm:px-8 lg:px-16 xl:px-20 ${className}`}>
      {children}
    </Tag>
  );
}

export function ContentNarrow({ children, className = "", as: Tag = "div" }: Props) {
  return (
    <Tag className={`mx-auto w-full max-w-content ${className}`}>{children}</Tag>
  );
}
