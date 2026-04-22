"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  /** Родитель с position relative + нужный aspect / размер */
  className?: string;
  /** Классы для next/image (object-*, и т.д.) */
  imageClassName?: string;
  sizes: string;
  fallback: ReactNode;
  priority?: boolean;
};

/**
 * PNG из /public; если файла ещё нет — onError и показываем fallback (CSS-мокап).
 */
export function FigmaExportImage({
  src,
  alt,
  className = "",
  imageClassName = "object-contain object-bottom",
  sizes,
  fallback,
  priority,
}: Props) {
  const [ok, setOk] = useState(true);

  if (!ok) {
    return <>{fallback}</>;
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={imageClassName}
        priority={priority}
        onError={() => setOk(false)}
      />
    </div>
  );
}
