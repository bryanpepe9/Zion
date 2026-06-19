import Image from "next/image";
import { t, type Locale } from "@/lib/i18n";
import type { Ministry } from "@/content/ministries";

export default function MinistryCard({
  ministry,
  locale,
  index,
}: {
  ministry: Ministry;
  locale: Locale;
  index: number;
}) {
  const flip = index % 2 === 1;
  return (
    <article className="group overflow-hidden rounded-2xl bg-zion-panel ring-1 ring-line transition-transform duration-500 ease-[var(--ease-soft)] hover:-translate-y-1">
      <div className="grid md:grid-cols-2">
        <div
          className={`relative min-h-[220px] md:min-h-[280px] ${
            flip ? "md:order-2" : ""
          }`}
        >
          <Image
            src={ministry.image}
            alt={ministry.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-left transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
          {ministry.ages && (
            <span className="w-fit rounded-full border border-teal/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-teal">
              {t(ministry.ages, locale)}
            </span>
          )}
          <h3 className="font-display text-3xl text-cream">{ministry.name}</h3>
          <p className="text-sm leading-relaxed text-cream/70">
            {t(ministry.desc, locale)}
          </p>
          {ministry.meets && (
            <p className="mt-1 text-xs leading-relaxed text-teal/90">
              {t(ministry.meets, locale)}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
