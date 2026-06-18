"use client";

import Image from "next/image";
import { useState } from "react";
import { t, ui, type Locale } from "@/lib/i18n";
import type { Missionary } from "@/content/missionaries";

export default function MissionaryCard({
  missionary,
  locale,
}: {
  missionary: Missionary;
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);
  const bio = t(missionary.bio, locale);
  const isLong = bio.length > 180;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-zion-panel ring-1 ring-line">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={missionary.image}
          alt={missionary.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-panel/70 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl text-cream">{missionary.name}</h3>
        <p
          className={`text-sm leading-relaxed text-cream/70 ${
            !open && isLong ? "line-clamp-4" : ""
          }`}
        >
          {bio}
        </p>
        {isLong && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="mt-auto w-fit text-sm tracking-wide text-teal transition-colors hover:text-emerald"
          >
            {open ? t(ui.readLess, locale) : t(ui.readMore, locale)}
          </button>
        )}
      </div>
    </article>
  );
}
