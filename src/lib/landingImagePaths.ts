/** Статические пути к PNG из Figma (кладутся в public через scripts/fetch-landing-figma-images.mjs) */
export const landingImages = {
  heroDevices: "/images/landing/hero-devices.png",
  how01: "/images/landing/how-01.png",
  how02: "/images/landing/how-02.png",
  how03: "/images/landing/how-03.png",
  how04: "/images/landing/how-04.png",
  how05: "/images/landing/how-05.png",
  how06: "/images/landing/how-06.png",
  onboardingPhone: "/images/landing/onboarding-phone.png",
  ctaPhoneLeft: "/images/landing/cta-phone-left.png",
  ctaPhoneCenter: "/images/landing/cta-phone-center.png",
  ctaPhoneRight: "/images/landing/cta-phone-right.png",
} as const;

export const howScreenImages = [
  landingImages.how01,
  landingImages.how02,
  landingImages.how03,
  landingImages.how04,
  landingImages.how05,
  landingImages.how06,
] as const;
