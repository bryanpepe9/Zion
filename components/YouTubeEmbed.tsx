"use client";

import { useState } from "react";

export default function YouTubeEmbed({
  id,
  start = 0,
  title,
}: {
  id: string;
  start?: number;
  title: string;
}) {
  const [active, setActive] = useState(false);
  const src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0${
    start ? `&start=${start}` : ""
  }`;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-3xl ring-1 ring-line">
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={src}
          title={title}
          allow="accelerated-vp9; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={title}
          className="group absolute inset-0 h-full w-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-ink/40 transition-colors group-hover:bg-ink/25" />
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cream/70 bg-ink/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <span className="ml-1 h-0 w-0 border-y-[12px] border-l-[20px] border-y-transparent border-l-cream" />
          </span>
          <span className="absolute bottom-6 left-6 right-6 text-left font-display text-xl text-cream md:text-2xl">
            {title}
          </span>
        </button>
      )}
    </div>
  );
}
