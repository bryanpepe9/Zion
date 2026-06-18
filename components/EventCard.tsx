import Image from "next/image";
import { t, type Locale } from "@/lib/i18n";
import type { ZionEvent } from "@/content/events";

export default function EventCard({
  event,
  locale,
}: {
  event: ZionEvent;
  locale: Locale;
}) {
  const past = event.status === "past";
  return (
    <article
      className={`grid overflow-hidden rounded-2xl bg-zion-panel ring-1 ring-line md:grid-cols-[1fr_1.1fr] ${
        past ? "opacity-80" : ""
      }`}
    >
      <div className="relative min-h-[220px] md:min-h-full">
        {event.image ? (
          <Image
            src={event.image}
            alt={t(event.title, locale)}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className={`object-cover ${past ? "grayscale" : ""}`}
          />
        ) : (
          <div className="flex h-full min-h-[220px] items-center justify-center bg-gradient-to-br from-teal-deep/40 to-panel p-8">
            <span className="font-display text-2xl text-cream/80">
              {t(event.title, locale)}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
        <h3 className="font-display text-3xl text-cream">
          {t(event.title, locale)}
        </h3>
        <p className="text-sm uppercase tracking-[0.18em] text-teal">
          {t(event.tagline, locale)}
        </p>
        <p className="text-sm leading-relaxed text-cream/70">
          {t(event.desc, locale)}
        </p>
        {event.cta && (
          <span
            className={`mt-2 inline-flex w-fit rounded-full px-6 py-3 text-sm tracking-wide ${
              past
                ? "border border-cream/20 text-cream/50"
                : "bg-teal text-ink transition-colors hover:bg-emerald"
            }`}
          >
            {past ? (
              t(event.cta.label, locale)
            ) : (
              <a href={event.cta.href}>{t(event.cta.label, locale)}</a>
            )}
          </span>
        )}
      </div>
    </article>
  );
}
