/**
 * Общие константы сайта ilmhub.kz.
 * NEXT_PUBLIC_SITE_URL подставляется при сборке (next build) — задайте его, если сайт живёт не на ilmhub.kz.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://ilmhub.kz").replace(/\/+$/, "");

/** Контактный адрес — единый для поддержки, вопросов о данных и юридических запросов. */
export const CONTACT_EMAIL = "info@ilmhub.kz";

/** Реквизиты оператора персональных данных и стороны пользовательского соглашения. */
export const COMPANY = {
  name: "ТОО «ILM HUB»",
  bin: "251040030956",
  address: "Республика Казахстан, г. Астана, р-н Есиль, ул. Сыганак, д. 39/1",
  country: "KZ",
} as const;

/** Дата текущей редакции юридических документов (показывается на /privacy, /terms, /delete-account). */
export const LEGAL_UPDATED_AT = "2 ноября 2026 г.";
