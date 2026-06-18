import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import MissionaryCard from "@/components/MissionaryCard";
import PillButton from "@/components/PillButton";
import { isLocale, t, localizedHref, type Locale } from "@/lib/i18n";
import { pages } from "@/content/site";
import { missionaries } from "@/content/missionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "en";
  return { title: t(pages.missoes.title, l) };
}

export default async function MissoesPage({
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
        title={t(pages.missoes.title, l)}
        subtitle={t(pages.missoes.intro, l)}
        size="page"
        align="center"
      />

      <section className="bg-zion-radial">
        <div className="container-zion py-20 md:py-28">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {missionaries.map((m, i) => (
              <Reveal key={m.slug} delay={(i % 3) * 80}>
                <MissionaryCard missionary={m} locale={l} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20">
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-zion-panel p-12 text-center md:p-16">
              <h2 className="font-display text-3xl text-cream md:text-4xl">
                {t(
                  {
                    en: "Mission trips",
                    pt: "Viagens missionárias",
                    es: "Viajes misioneros",
                  },
                  l
                )}
              </h2>
              <p className="max-w-xl text-cream/70">
                {t(
                  {
                    pt: "Faça parte de uma equipe que leva o Reino às nações. Conheça as próximas viagens.",
                    en: "Be part of a team carrying the Kingdom to the nations. Discover the upcoming trips.",
                    es: "Sé parte de un equipo que lleva el Reino a las naciones. Conoce los próximos viajes.",
                  },
                  l
                )}
              </p>
              <PillButton href={localizedHref("/eventos", l)} variant="solid">
                {t({ en: "See events", pt: "Ver eventos", es: "Ver eventos" }, l)}
              </PillButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
