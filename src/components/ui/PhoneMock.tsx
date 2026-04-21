type Props = {
  className?: string;
  label?: string;
  /**
   * `hero` — «Начни за 3 минуты»: без тени/ring за корпусом.
   * `how` — ряд в «Как проходит»: медный безель, без ring, без заметной подложки за телефоном.
   * `default` — CTA и др., лёгкая глубина.
   */
  variant?: "default" | "hero" | "how";
};

export function PhoneMock({ className = "", label = "Скриншот приложения", variant = "default" }: Props) {
  const size = className.trim().length > 0 ? className : "w-[220px] max-w-[min(280px,70vw)]";

  const outerPlain = "rounded-[2.25rem] bg-transparent p-[10px]";
  const outer =
    variant === "default"
      ? `${outerPlain} shadow-[0_20px_48px_rgba(43,35,29,0.12)] ring-1 ring-[#a8988a]/45`
      : outerPlain;

  const bezel =
    variant === "hero"
      ? "from-[#e8d0bc] via-[#d4b89a] to-[#c4a07e]"
      : variant === "how"
        ? "from-[#e4c4a0] via-[#cc935c] to-[#b0783f]"
        : "from-[#c9b8aa] via-[#b0a090] to-[#9e8f82]";

  const screen =
    variant === "hero" ? (
      <div className="mx-2 mb-2 mt-2 flex min-h-0 flex-1 flex-col rounded-xl bg-gradient-to-b from-[#faf7f4] to-[#ebe4dd] px-2.5 pb-2 pt-3 ring-1 ring-black/[0.05]">
        <p className="text-center text-[10px] font-semibold leading-tight tracking-tight text-ink/80">Учебный план готов!</p>
        <div className="mt-2.5 flex flex-1 flex-col justify-start gap-2 px-0.5">
          <div className="h-2 w-full rounded bg-black/[0.07]" />
          <div className="h-2 w-[88%] rounded bg-black/[0.06]" />
          <div className="h-2 w-[76%] rounded bg-black/[0.05]" />
        </div>
      </div>
    ) : (
      <div className="mx-2 mb-2 mt-2.5 min-h-0 flex-1 rounded-xl bg-gradient-to-b from-[#faf7f4] to-[#ebe4dd] ring-1 ring-black/[0.05]" />
    );

  return (
    <figure aria-label={label} className={`relative aspect-[390/844] shrink-0 ${size}`}>
      <div className={`flex h-full w-full flex-col ${outer}`}>
        <div
          className={`flex h-full min-h-0 w-full flex-col rounded-[1.7rem] bg-gradient-to-b ${bezel} p-[3px] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]`}
          aria-hidden
        >
          <div className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[1.55rem] bg-[#f4f0ec]">
            <div className="mx-auto mt-2.5 h-3.5 w-[26%] shrink-0 rounded-full bg-black/[0.12]" />
            {screen}
          </div>
        </div>
      </div>
    </figure>
  );
}
