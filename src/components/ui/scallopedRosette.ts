/**
 * «Розетка» как в Figma: r_eff(θ) = r * (1 + amp * cos(lobes * θ)).
 * 12 лопастей — как цветок на бейджах шагов и рамке иконок «Почему».
 */
export function scallopedRosettePath(
  cx: number,
  cy: number,
  r: number,
  options?: { lobes?: number; amp?: number; segments?: number },
): string {
  const lobes = options?.lobes ?? 12;
  const amp = options?.amp ?? 0.12;
  const segments = options?.segments ?? 192;
  const parts: string[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = (i / segments) * Math.PI * 2;
    const radius = r * (1 + amp * Math.cos(lobes * t));
    const x = cx + radius * Math.cos(t);
    const y = cy + radius * Math.sin(t);
    parts.push(`${i === 0 ? "M" : "L"}${x.toFixed(3)} ${y.toFixed(3)}`);
  }
  return `${parts.join(" ")} Z`;
}

/** viewBox 0 0 100 100 */
export const ROSETTE_PATH_VB100 = scallopedRosettePath(50, 50, 35, { lobes: 12, amp: 0.118, segments: 192 });
