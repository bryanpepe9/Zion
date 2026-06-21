import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { isLocale, t, type Locale } from "@/lib/i18n";
import { scheduleDays, schedulePage, type ScheduleItem } from "@/content/schedule";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "en";
  return {
    title: t(schedulePage.title, l),
    description: t(schedulePage.intro, l),
  };
}

function ScheduleCard({ item, locale }: { item: ScheduleItem; locale: Locale }) {
  const ctaLabel = item.hrefLabel
    ? t(item.hrefLabel, locale)
    : t(schedulePage.directions, locale);

  return (
    <article className="group relative overflow-hidden rounded-3xl bg-[linear-gradient(112deg,rgba(3,13,13,0.98)_0%,rgba(7,27,26,0.96)_54%,rgba(30,140,126,0.38)_100%)] ring-1 ring-line transition-transform duration-500 ease-[var(--ease-soft)] hover:-translate-y-1 hover:ring-teal/40">
      <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.16),transparent_68%)] transition-transform duration-700 group-hover:scale-110" />
      <div
        className={`relative grid min-h-72 ${
          item.image
            ? "lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.72fr)]"
            : "lg:grid-cols-[minmax(0,1fr)_auto]"
        }`}
      >
        <div className="flex flex-col p-7 sm:p-9 lg:p-12">
          <p className="text-xs uppercase tracking-[0.3em] text-teal">
            {t(item.eyebrow, locale)}
          </p>
          <div className="mt-5 flex flex-wrap items-end gap-x-4 gap-y-2">
            <h3 className="font-display text-4xl leading-none text-cream md:text-5xl">
              {t(item.name, locale)}
            </h3>
            {item.ages && (
              <span className="pb-1 text-sm text-cream/50">
                {t(item.ages, locale)}
              </span>
            )}
          </div>

          <div className="mt-9 flex flex-col gap-7 border-t border-line pt-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm text-cream/50">{t(item.frequency, locale)}</p>
              <p className="mt-2 font-display text-4xl leading-none text-cream md:text-5xl">
                {t(item.time, locale)}
              </p>
            </div>
            <div className="sm:max-w-56 sm:text-right">
              <p className="text-sm font-medium text-cream">
                {t(item.location, locale)}
              </p>
              {item.address && (
                <p className="mt-1 text-sm leading-relaxed text-cream/55">
                  {item.address}
                </p>
              )}
              {item.href && (
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="mt-4 inline-flex items-center gap-2 text-sm tracking-wide text-teal transition-colors hover:text-emerald"
                >
                  {ctaLabel} <span aria-hidden="true">↗</span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {item.image && (
          <div
            className="relative aspect-square min-h-0 overflow-hidden border-t border-line lg:aspect-auto lg:min-h-full lg:border-l lg:border-t-0"
            style={
              {
                "--image-position-mobile": item.imagePositionMobile ?? "50% 42%",
                "--image-position-desktop": item.imagePosition ?? "50% 50%",
              } as CSSProperties
            }
          >
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 34vw"
              className="object-cover grayscale transition-transform duration-700 ease-[var(--ease-soft)] [filter:grayscale(1)_contrast(1.08)_brightness(0.78)] [object-position:var(--image-position-mobile)] group-hover:scale-[1.035] lg:[object-position:var(--image-position-desktop)]"
            />
            <div className="pointer-events-none absolute inset-0 bg-teal-deep/20 mix-blend-color" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-ink/10 lg:bg-gradient-to-r" />
          </div>
        )}
      </div>
    </article>
  );
}

export default async function ProgramacaoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  return (
    <>
      <Hero
        title={t(schedulePage.title, l)}
        subtitle={t(schedulePage.intro, l)}
        size="page"
        align="center"
      />

      <section className="overflow-hidden bg-zion-radial py-24 md:py-32">
        <div className="container-zion space-y-28 md:space-y-36">
          {scheduleDays.map((group) => (
            <div
              key={group.key}
              className="grid gap-10 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16"
            >
              <Reveal>
                <div className="md:sticky md:top-28">
                  <h2 className="font-display text-5xl leading-none text-cream md:text-6xl lg:text-7xl">
                    {t(group.day, l)}
                  </h2>
                  <div className="mt-8 h-px w-20 bg-gradient-to-r from-teal to-transparent md:h-36 md:w-px md:bg-gradient-to-b" />
                </div>
              </Reveal>

              <div className="space-y-6">
                {group.items.map((item, index) => (
                  <Reveal key={item.key} delay={index * 90}>
                    <ScheduleCard item={item} locale={l} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
