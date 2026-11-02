import Image from "next/image";
import { landingIcons } from "@/lib/landingImagePaths";
import { storeLinks } from "@/lib/storeLinks";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/40";

type Store = "apple" | "google";

const storeMeta: Record<Store, { href: string | null; soonLabel: string; logo: string; logoSize: [number, number] }> = {
  apple: {
    href: storeLinks.appStore,
    soonLabel: "Скоро в App Store",
    logo: landingIcons.appleLogo,
    logoSize: [20, 24],
  },
  google: {
    href: storeLinks.googlePlay,
    soonLabel: "Скоро в Google Play",
    logo: landingIcons.googlePlayLogo,
    logoSize: [21, 24],
  },
};

/** Неактивная кнопка стора: не ссылка, а подпись «Скоро в …» — пока URL карточки не задан. */
function SoonButton({ store, className }: { store: Store; className: string }) {
  const { soonLabel, logo, logoSize } = storeMeta[store];
  return (
    <span aria-disabled="true" className={`${className} cursor-default select-none opacity-60`}>
      <Image src={logo} alt="" width={logoSize[0]} height={logoSize[1]} className="h-5 w-auto" />
      <span className="text-[13px] font-medium leading-4">{soonLabel}</span>
    </span>
  );
}

/** Светлые кнопки сторов из первого экрана: белые, обводка 1px #000, r=6, высота 44. */
export function StoreOutlineButtons({ className = "" }: { className?: string }) {
  const button = `flex h-11 flex-1 items-center justify-center rounded-[6px] border border-black bg-white transition hover:bg-chip ${focusRing}`;
  const soon = "flex h-11 flex-1 items-center justify-center gap-2 rounded-[6px] border border-dashed border-black bg-white px-2 text-ink";
  return (
    <div className={`flex gap-3 ${className}`}>
      {storeLinks.appStore ? (
        <a href={storeLinks.appStore} aria-label="Скачать в App Store" className={`${button} gap-2`}>
          <Image src={landingIcons.appleLogo} alt="" width={20} height={24} />
          <Image src={landingIcons.appStoreWordmark} alt="" width={74} height={16} />
        </a>
      ) : (
        <SoonButton store="apple" className={soon} />
      )}
      {storeLinks.googlePlay ? (
        <a href={storeLinks.googlePlay} aria-label="Скачать в Google Play" className={`${button} gap-[6.5px]`}>
          <Image src={landingIcons.googlePlayLogo} alt="" width={21} height={24} />
          <Image src={landingIcons.googlePlayWordmark} alt="" width={88} height={17} />
        </a>
      ) : (
        <SoonButton store="google" className={soon} />
      )}
    </div>
  );
}

/** Чёрные бейджи сторов из CTA (145×48), экспортированы из Figma целиком. */
export function StoreBadge({ store }: { store: Store }) {
  const isApple = store === "apple";
  const href = storeMeta[store].href;

  if (!href) {
    // Без ссылки — полупрозрачная плашка того же размера; логотип Apple инвертирован в белый.
    return (
      <SoonButton
        store={store}
        className={`flex h-12 w-[145px] shrink-0 items-center justify-center gap-2 rounded-[7px] border border-white/60 bg-black/40 px-2 text-white ${
          isApple ? "[&>img]:invert" : ""
        }`}
      />
    );
  }

  return (
    <a
      href={href}
      aria-label={isApple ? "Загрузить в App Store" : "Скачать из Google Play"}
      // Фрейм в Figma 145×48, SVG экспортирован 145×49 (округление) — нижний пиксель прозрачный.
      className={`block h-12 shrink-0 rounded-[7px] transition hover:opacity-90 ${focusRing}`}
    >
      <Image
        src={isApple ? landingIcons.badgeAppStore : landingIcons.badgeGooglePlay}
        alt=""
        width={145}
        height={49}
      />
    </a>
  );
}
