import type { Metadata, Viewport } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  style: ["italic"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3002"),
  title: {
    default: "ILM Hub — арабский проще, чем ты думаешь",
    template: "%s · ILM Hub",
  },
  description:
    "Короткие уроки, персональный план и обучение с нуля. ILM Hub — приложение для арабского языка и исламского контента.",
  applicationName: "ILM Hub",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "ILM Hub",
    description: "Короткие уроки, персональный план и обучение с нуля. Начни бесплатно.",
    siteName: "ILM Hub",
  },
  twitter: { card: "summary_large_image", title: "ILM Hub" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fdf8f3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="min-h-dvh bg-canvas font-sans text-ink">{children}</body>
    </html>
  );
}
