import type { Metadata, Viewport } from "next";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import { COMPANY, CONTACT_EMAIL, SITE_URL } from "@/lib/site";
import { storeLinks } from "@/lib/storeLinks";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600"],
});

/** Акцент «проще, чем» в заголовке героя — Montserrat Alternates Medium Italic */
const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin", "cyrillic"],
  style: ["italic"],
  variable: "--font-montserrat-alternates",
  display: "swap",
  weight: ["500"],
});

const SEO_DESCRIPTION =
  "ILM Hub — приложение для изучения арабского языка с нуля. Короткие уроки по 5–10 минут, классический литературный арабский, курсы Махрадж, A1–A2, Таджвид, словарь с карточками, Коран, 99 имён Аллаха, Хадж и Умра. Скачай бесплатно для iPhone и Android.";

const SEO_KEYWORDS = [
  "арабский язык",
  "учить арабский",
  "арабский с нуля",
  "арабский онлайн",
  "приложение для изучения арабского",
  "ILM Hub",
  "ильм хаб",
  "Махрадж",
  "Таджвид",
  "арабский алфавит",
  "арабский для начинающих",
  "Коран на арабском",
  "учить Коран",
  "99 имён Аллаха",
  "Хадж и Умра",
  "арабский A1",
  "арабский A2",
  "классический арабский",
  "фусха",
  "арабский для путешествий",
  "арабский для бизнеса",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ILM Hub — арабский проще, чем ты думаешь | Учи арабский с нуля",
    template: "%s · ILM Hub",
  },
  description: SEO_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  applicationName: "ILM Hub",
  authors: [{ name: "ILM Hub" }],
  creator: "ILM Hub",
  publisher: "ILM Hub",
  category: "education",
  classification: "Education, Language Learning",
  alternates: {
    canonical: "/",
    languages: {
      "ru-RU": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    title: "ILM Hub — арабский проще, чем ты думаешь",
    description: SEO_DESCRIPTION,
    siteName: "ILM Hub",
    images: [
      {
        url: "/images/landing/hero-devices.png",
        width: 700,
        height: 714,
        alt: "ILM Hub — приложение для изучения арабского языка",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ILM Hub — арабский проще, чем ты думаешь",
    description: SEO_DESCRIPTION,
    images: ["/images/landing/hero-devices.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Иконки — файловая конвенция Next.js: src/app/favicon.ico, icon.png, apple-icon.png (из иконки мобильного приложения).
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  verification: {
    // Заглушки — заполните реальными значениями при необходимости
    // google: "GOOGLE_SITE_VERIFICATION",
    // yandex: "YANDEX_VERIFICATION",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff9f1" },
    { media: "(prefers-color-scheme: dark)", color: "#fff9f1" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ILM Hub",
  legalName: COMPANY.name,
  taxID: COMPANY.bin,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  email: CONTACT_EMAIL,
  description: SEO_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Сыганак, д. 39/1",
    addressLocality: "Астана",
    addressCountry: COMPANY.country,
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ILM Hub",
  url: SITE_URL,
  inLanguage: "ru-RU",
  description: SEO_DESCRIPTION,
  publisher: { "@type": "Organization", name: "ILM Hub" },
};

const mobileAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "ILM Hub",
  operatingSystem: "iOS, Android",
  applicationCategory: "EducationalApplication",
  description: SEO_DESCRIPTION,
  inLanguage: ["ru", "ar"],
  // Бесплатная загрузка; ILM Premium — подписка через App Store / Google Play. Рейтинг не указываем, пока нет реальных отзывов в сторах.
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "KZT",
  },
  ...(() => {
    const urls = [storeLinks.appStore, storeLinks.googlePlay].filter((u): u is string => Boolean(u));
    return urls.length ? { downloadUrl: urls, installUrl: urls } : {};
  })(),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Нужны ли предварительные знания арабского?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет. Первый курс «Махрадж» начинается с самых основ произношения — с нуля. Не нужно знать ни одной буквы, ни одного слова.",
      },
    },
    {
      "@type": "Question",
      name: "Для кого подойдёт ILM Hub?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Для всех, кто хочет учить арабский — вне зависимости от культуры, религии или цели. Путешественники, бизнесмены, студенты, люди, интересующиеся историей и культурой арабского мира.",
      },
    },
    {
      "@type": "Question",
      name: "Какой арабский преподаётся — разговорный или классический?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Мы обучаем классическому литературному арабскому (фусха) — он понятен во всех арабских странах, используется в СМИ, литературе, деловой среде и религиозных текстах.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько времени нужно в день?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Достаточно 5–10 минут в день, чтобы прогрессировать. Хочешь заниматься больше — выбери 30-минутный формат.",
      },
    },
    {
      "@type": "Question",
      name: "На каких устройствах работает ILM Hub?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "iOS (iPhone) и Android. Прогресс сохраняется в аккаунте — можно продолжить с того же места на другом устройстве.",
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${montserratAlternates.variable} bg-canvas`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="min-h-dvh bg-canvas font-sans text-ink">{children}</body>
    </html>
  );
}
