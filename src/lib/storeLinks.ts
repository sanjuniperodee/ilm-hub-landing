/**
 * Ссылки на карточки приложения в сторах. Значения подставляются при сборке (`next build`).
 *
 * - NEXT_PUBLIC_GOOGLE_PLAY_URL — по умолчанию ссылка строится из applicationId Android-приложения
 *   (`mobile/android/app/build.gradle.kts` → `kz.ilm.ilm_hub`). Значение `off` скрывает ссылку
 *   (кнопка «Скоро в Google Play»), например пока карточка в Play не опубликована.
 * - NEXT_PUBLIC_APP_STORE_URL — по умолчанию опубликованная карточка ILM Hub (Apple ID 6761413961,
 *   bundle id com.ilmhub.app). Значение `off` показывает неактивную кнопку «Скоро в App Store».
 */

/** Package id в Google Play (совпадает с applicationId и kGooglePlaySubscriptionPackage в mobile). */
export const GOOGLE_PLAY_PACKAGE = "kz.ilm.ilm_hub";

export const DEFAULT_GOOGLE_PLAY_URL = `https://play.google.com/store/apps/details?id=${GOOGLE_PLAY_PACKAGE}`;

/** Published App Store listing (looked up by bundle id com.ilmhub.app). */
export const DEFAULT_APP_STORE_URL = "https://apps.apple.com/kz/app/ilm-hub/id6761413961";

const DISABLED_VALUES = new Set(["off", "none", "disabled", "soon", "false", "0"]);

/** Пустое значение → fallback; `off`/`soon`/якорь `#…` → null (кнопка «Скоро»); иначе — URL как есть. */
function resolveStoreUrl(raw: string | undefined, fallback: string | null): string | null {
  const value = raw?.trim();
  if (!value) return fallback;
  if (DISABLED_VALUES.has(value.toLowerCase()) || value.startsWith("#")) return null;
  return value;
}

export const storeLinks: { appStore: string | null; googlePlay: string | null } = {
  // Обращение к process.env.NEXT_PUBLIC_* должно быть буквальным — иначе Next.js не встроит значение в бандл.
  appStore: resolveStoreUrl(process.env.NEXT_PUBLIC_APP_STORE_URL, DEFAULT_APP_STORE_URL),
  googlePlay: resolveStoreUrl(process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL, DEFAULT_GOOGLE_PLAY_URL),
};
