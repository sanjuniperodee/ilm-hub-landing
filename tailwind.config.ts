import type { Config } from "tailwindcss";

/** Токены из Figma «ILM Hub Landing» (страница Home, Desktop 1440 / Mobile 375). */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        /** Desktop-брейкпоинт макета: ниже — мобильная раскладка (375). */
        desk: "1024px",
      },
      colors: {
        /** Фон страницы и шапки */
        canvas: "#fff9f1",
        /** Основной текст, обводка кнопок */
        ink: "#0e0b08",
        /** Вторичный текст, иконки */
        muted: "#6e6252",
        /** Акцент: «проще, чем», активный шаг, бейдж «Чтение» */
        accent: "#a85f1e",
        /** Тёмная кнопка «Начать бесплатно» */
        brand: "#2a231c",
        /** Разделители, обводки карточек, неактивные шаги, подложка CTA */
        line: "#efe6da",
        /** Чипы и плитки «Также в приложении» */
        chip: "#f6f0e6",
        /** Левая полоска карточек «Как проходит обучение» */
        "card-edge": "#c97a2a",
        /** Арабские подписи и заголовок «Также в приложении» */
        stone: "#b2a697",
        sage: "#e6f4ec",
        "sage-ink": "#1f8a5b",
        honey: "#fdf3c7",
        "honey-ink": "#b57806",
        peach: "#f6e2c8",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "ui-sans-serif", "system-ui", "sans-serif"],
        alt: ["var(--font-montserrat-alternates)", "var(--font-montserrat)", "sans-serif"],
      },
      maxWidth: {
        content: "1080px",
        shell: "1440px",
      },
      boxShadow: {
        card: "0 2px 6px rgba(132, 113, 98, 0.05)",
      },
    },
  },
  plugins: [],
} satisfies Config;
