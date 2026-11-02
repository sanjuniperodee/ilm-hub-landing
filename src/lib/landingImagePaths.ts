/** Ассеты из Figma «ILM Hub Landing» (экспорт узлов @2x / SVG), лежат в public/images/landing */
const base = "/images/landing";

export const landingImages = {
  heroDevices: `${base}/hero-devices.png`,
  heroDevicesMobile: `${base}/hero-devices-mobile.png`,
  onboardingPhone: `${base}/onboarding-phone.png`,
  ctaBackground: `${base}/cta-bg.png`,
  ctaPhonesDesktop: `${base}/cta-phones-desktop.png`,
  ctaPhonesMobile: `${base}/cta-phones-mobile.png`,
} as const;

export const howScreenImages = [1, 2, 3, 4, 5, 6].map((n) => `${base}/how-0${n}.png`);

export const landingIcons = {
  logo: `${base}/icons/logo-ilm.svg`,
  stepBadgeActive: `${base}/icons/step-badge-active.svg`,
  stepBadge: `${base}/icons/step-badge.svg`,
  whyBadge: `${base}/icons/why-badge.svg`,
  alarm: `${base}/icons/icon-alarm.svg`,
  chevronUp: `${base}/icons/icon-chevron-up.svg`,
  chevronDown: `${base}/icons/icon-chevron-down.svg`,
  appleLogo: `${base}/icons/apple-logo-black.svg`,
  appStoreWordmark: `${base}/icons/app-store-wordmark-black.svg`,
  googlePlayLogo: `${base}/icons/google-play-logo.svg`,
  googlePlayWordmark: `${base}/icons/google-play-wordmark-black.svg`,
  badgeAppStore: `${base}/icons/badge-app-store.svg`,
  badgeGooglePlay: `${base}/icons/badge-google-play.svg`,
} as const;
