import type { ReactNode } from "react";
import { ROSETTE_PATH_VB100 } from "./scallopedRosette";

type StepBadgeProps = {
  children: ReactNode;
  variant: "active" | "muted";
  className?: string;
  size?: number;
};

function RosetteSvgPaths({
  fill = "none",
  outerStroke,
  innerStroke,
  outerW,
  innerW,
}: {
  fill?: string;
  outerStroke: string;
  innerStroke: string;
  outerW: number;
  innerW: number;
}) {
  return (
    <>
      <path d={ROSETTE_PATH_VB100} fill={fill} stroke={outerStroke} strokeWidth={outerW} strokeLinejoin="round" />
      <path d={ROSETTE_PATH_VB100} fill="none" stroke={innerStroke} strokeWidth={innerW} strokeLinejoin="round" />
    </>
  );
}

/**
 * Нумерованный бейдж шагов — двойной контур, чтобы линия читалась на кремовом фоне.
 */
export function StepRosetteBadge({ children, variant, className = "", size = 56 }: StepBadgeProps) {
  const fill = variant === "active" ? "#c2844b" : "#f2ebe1";

  return (
    <div className={`relative grid shrink-0 place-items-center ${className}`} style={{ width: size, height: size }}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none" aria-hidden>
        {variant === "active" ? (
          <RosetteSvgPaths
            fill={fill}
            outerStroke="#fff8f0"
            innerStroke="#8a4e22"
            outerW={5}
            innerW={2.4}
          />
        ) : (
          <RosetteSvgPaths
            fill={fill}
            outerStroke="#ffffff"
            innerStroke="rgba(26, 26, 26, 0.42)"
            outerW={5}
            innerW={2.35}
          />
        )}
      </svg>
      <span
        className={`relative z-[1] text-[17px] font-bold leading-none tracking-tight ${
          variant === "active" ? "text-white" : "text-ink"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

type IconFrameProps = {
  children: ReactNode;
  className?: string;
  size?: number;
};

/**
 * Рамка иконки «Почему ILM Hub»: 12 лопастей, светлый «ореол» + заметный оливковый контур.
 */
export function WhyRosetteIconFrame({ children, className = "", size = 64 }: IconFrameProps) {
  return (
    <div className={`relative grid shrink-0 place-items-center ${className}`} style={{ width: size, height: size }}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none" aria-hidden>
        <RosetteSvgPaths fill="none" outerStroke="#f3f0eb" innerStroke="#5f7560" outerW={6} innerW={2.65} />
      </svg>
      <span className="relative z-[1] text-[24px] leading-none">{children}</span>
    </div>
  );
}
