import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        /** Фон страницы (Figma ILM Hub Landing) */
        canvas: "#fdf8f3",
        ink: "#1a1a1a",
        muted: "#706b67",
        /** Подзаголовок героя / вторичный текст */
        "hero-subtle": "#706b67",
        stone: "#b2a697",
        /** Видимые разделители и обводки карточек */
        line: "#d2c6bb",
        /** Основная тёмная кнопка */
        brand: "#1a1a1a",
        /** Playfair italic в герое */
        "hero-accent": "#916a4d",
        placeholder: "#e0d7d0",
        /** Бейджи шагов 2–3, чипы */
        chip: "#f2ebe1",
        /** Карточки «как проходит» */
        "how-card": "#f3e8dd",
        "how-shadow": "#c2844b",
        sage: "#e6f4ec",
        "sage-ink": "#1f8a5b",
        honey: "#fdf3c7",
        "honey-ink": "#b57806",
        peach: "#f6e2c8",
        "peach-ink": "#a85f1e",
        accent: "#c97a2a",
        panel: "#efe6da",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "ui-serif", "serif"],
      },
      maxWidth: {
        content: "1080px",
        shell: "1440px",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(14, 11, 8, 0.08)",
        card: "0 1px 0 rgba(14, 11, 8, 0.04), 0 18px 40px rgba(14, 11, 8, 0.06)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
} satisfies Config;
