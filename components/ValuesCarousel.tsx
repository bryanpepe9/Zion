"use client";

import { useState } from "react";
import { t, type Locale } from "@/lib/i18n";
import { values } from "@/content/values";

export default function ValuesCarousel({ locale }: { locale: Locale }) {
  const [i, setI] = useState(0);
  const value = values[i];
  const go = (n: number) => setI((n + values.length) % values.length);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-zion-panel ring-1 ring-line">
      {/* Gradient sphere motif */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_55%_45%,rgba(20,184,166,0.55),rgba(14,59,54,0)_62%)]" />

      <div className="relative grid gap-8 p-8 md:grid-cols-2 md:gap-12 md:p-16">
        <div className="flex items-end">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-teal">
            {String(i + 1).padStart(2, "0")} / {String(values.length).padStart(2, "0")}
          </p>
        </div>

        <div className="min-h-[16rem]">
          <h3 className="font-display text-3xl text-cream md:text-4xl">
            {t(value.title, locale)}
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-cream/75 md:text-base">
            {t(value.desc, locale)}
          </p>
          {value.refs && (
            <p className="mt-6 text-sm tracking-wide text-cream/90">{value.refs}</p>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="relative flex items-center justify-between gap-4 border-t border-line px-8 py-5 md:px-16">
        <div className="flex flex-wrap gap-2.5">
          {values.map((v, idx) => (
            <button
              key={v.key}
              type="button"
              aria-label={t(v.title, locale)}
              aria-current={idx === i ? "true" : undefined}
              onClick={() => setI(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === i ? "w-7 bg-teal" : "w-2.5 bg-cream/25 hover:bg-cream/50"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(i - 1)}
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(i + 1)}
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
