import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import PillButton from "@/components/PillButton";
import WorldMap from "@/components/WorldMap";
import { isLocale, t, ui, localizedHref, type Locale } from "@/lib/i18n";
import { home, site } from "@/content/site";
import { networkSection } from "@/content/locations";

export default async function HomePage({
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
        title={t(home.heroTitle, l)}
        titleNode={
          <>
            Zion <span className="text-teal">Miami</span>
          </>
        }
        titleWeight={500}
        kicker={t(home.heroKicker, l)}
        subtitle={t(home.heroSubtitle, l)}
        image="/images/eventos/hero.png"
        imageAlt=""
        size="full"
        align="center"
        priority
      >
        <PillButton href="#visit">
          {t(home.ctaServiceTimes, l)}
        </PillButton>
        <PillButton href="#visit" variant="solid">
          {t(home.ctaVisit, l)}
        </PillButton>
      </Hero>

      {/* Welcome / vision */}
      <section className="bg-zion-radial">
        <div className="container-zion py-24 md:py-32">
          <Reveal className="max-w-4xl">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-teal">
              {t(home.welcomeTitle, l)}
            </p>
            <blockquote className="font-display text-3xl leading-snug text-cream sm:text-4xl lg:text-5xl lg:leading-[1.2]">
              {t(site.vision, l)}
            </blockquote>
            <p className="mt-8 text-sm uppercase tracking-[0.2em] text-cream/45">
              {t(home.visionSource, l)}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service times + location */}
      <section id="visit" className="border-y border-line bg-zion-panel">
        <div className="container-zion grid gap-10 py-20 md:grid-cols-2 md:py-28">
          <Reveal>
            <h3 className="font-display text-sm uppercase tracking-[0.3em] text-teal">
              {t(home.servicesTitle, l)}
            </h3>
            <p className="mt-3 text-cream/60">{t(home.servicesNote, l)}</p>
            <ul className="mt-8 border-y border-line">
              {home.services.map((s, idx) => (
                <li key={idx} className="py-5">
                  <div className="flex items-baseline justify-between gap-6">
                    <span className="font-display text-2xl text-cream md:text-3xl">
                      {t(s.day, l)}
                    </span>
                    <span className="shrink-0 text-lg tracking-wide text-cream/70">
                      {t(s.time, l)}
                    </span>
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-4 border-t border-line pt-4 sm:items-center">
                    <div className="flex min-w-0 items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal shadow-[0_0_12px_rgba(20,184,166,0.65)]"
                      />
                      <div>
                        <p className="text-sm font-medium text-cream">
                          {t(home.livestreamTitle, l)}
                        </p>
                      </div>
                    </div>
                    <a
                      href={site.social.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 text-sm tracking-wide text-teal transition-colors hover:text-emerald"
                    >
                      {t(home.livestreamCta, l)} ↗
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href={localizedHref("/programacao", l)}
              className="group mt-6 inline-flex items-center gap-3 text-sm tracking-wide text-cream/70 transition-colors hover:text-cream"
            >
              {t(home.scheduleCta, l)}
              <span
                aria-hidden="true"
                className="text-teal transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </Reveal>
          <Reveal delay={120} className="flex flex-col justify-center gap-5">
            <h3 className="font-display text-sm uppercase tracking-[0.3em] text-teal">
              {t(home.locationTitle, l)}
            </h3>
            <p className="font-display text-2xl text-cream md:text-3xl">
              {t(site.address, l)}
            </p>
            <PillButton
              href={`https://maps.google.com/?q=${encodeURIComponent(
                site.mapsQuery
              )}`}
              external
              className="w-fit"
            >
              {t(home.directions, l)}
            </PillButton>
          </Reveal>
        </div>
      </section>

      {/* Global network */}
      <section className="overflow-hidden border-t border-line bg-zion-radial py-24 md:py-32">
        <div className="container-zion">
          <Reveal className="max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-teal">
              {t(networkSection.kicker, l)}
            </p>
            <h2 className="font-display text-4xl text-cream md:text-6xl">
              {t(networkSection.title, l)}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream/70 md:text-lg">
              {t(networkSection.lede, l)}
            </p>
          </Reveal>
        </div>
        <Reveal delay={120} className="mt-12 md:mt-16">
          <WorldMap locale={l} />
        </Reveal>
      </section>

      {/* Bible reading plan */}
      <section className="relative overflow-hidden border-t border-line bg-zion-radial">
        <div className="container-zion grid items-center gap-12 py-24 md:grid-cols-2 md:gap-16 md:py-32">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight text-cream md:text-6xl">
              {t(home.readingPlanTitle, l)}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/75 md:text-lg">
              {t(home.readingPlanBody, l)}
            </p>
            <div className="mt-10">
              <PillButton href={home.readingPlanHref} external>
                {t(home.readingPlanCta, l)}
              </PillButton>
            </div>
          </Reveal>
          <Reveal delay={120} className="relative">
            <div className="relative mx-auto flex aspect-[4/5] w-full max-w-md items-center justify-center overflow-hidden rounded-3xl bg-[radial-gradient(120%_120%_at_70%_20%,rgba(20,184,166,0.28),transparent_60%)]">
              <Image
                src="/images/home/reading-plan.png"
                alt={t(home.readingPlanTitle, l)}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-contain p-3"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Giving CTA */}
      <section className="relative overflow-hidden border-t border-line bg-zion-panel">
        <div className="pointer-events-none absolute -right-32 top-[-30%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.35),transparent_60%)]" />
        <div className="container-zion relative flex flex-col items-start gap-7 py-24 md:py-32">
          <h2 className="max-w-2xl font-display text-4xl leading-tight text-cream md:text-6xl">
            {t(home.giveTitle, l)}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
            {t(home.giveBody, l)}
          </p>
          <PillButton href={localizedHref("/ofertas", l)} variant="solid">
            {t(ui.give, l)}
          </PillButton>
        </div>
      </section>
    </>
  );
}
