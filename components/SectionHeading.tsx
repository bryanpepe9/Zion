import type { ReactNode } from "react";

export default function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
}: {
  kicker?: string;
  title: string;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {kicker && (
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-teal">{kicker}</p>
      )}
      <h2 className="font-display text-4xl text-cream md:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}
