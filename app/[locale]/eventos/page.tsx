import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import EventCard from "@/components/EventCard";
import { isLocale, t, ui, type Locale } from "@/lib/i18n";
import { pages } from "@/content/site";
import { events } from "@/content/events";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "en";
  return { title: t(pages.eventos.title, l) };
}

export default async function EventosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <>
      <Hero
        title={t(pages.eventos.title, l)}
        subtitle={t(pages.eventos.intro, l)}
        image="/images/eventos/hero.png"
        imageAlt=""
        size="page"
        align="center"
        priority
      />

      <section className="bg-zion-radial">
        <div className="container-zion flex flex-col gap-20 py-20 md:py-28">
          {upcoming.length > 0 && (
            <div>
              <Reveal className="mb-10">
                <h2 className="font-display text-3xl text-cream md:text-4xl">
                  {t(ui.upcoming, l)}
                </h2>
              </Reveal>
              <div className="flex flex-col gap-8">
                {upcoming.map((e) => (
                  <Reveal key={e.slug}>
                    <EventCard event={e} locale={l} />
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {past.length > 0 && (
            <div>
              <Reveal className="mb-10">
                <h2 className="font-display text-3xl text-muted md:text-4xl">
                  {t(ui.past, l)}
                </h2>
              </Reveal>
              <div className="flex flex-col gap-8">
                {past.map((e) => (
                  <Reveal key={e.slug}>
                    <EventCard event={e} locale={l} />
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
