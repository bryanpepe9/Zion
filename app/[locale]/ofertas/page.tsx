import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import PillButton from "@/components/PillButton";
import { isLocale, t, type Locale } from "@/lib/i18n";
import { pages } from "@/content/site";
import { offerings } from "@/content/offerings";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "en";
  return { title: t(pages.ofertas.title, l) };
}

export default async function OfertasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  return (
    <>
      {/* Add a B&W giving photo later: image="/uploads/ofertas-hero.jpg" */}
      <Hero
        title={t(pages.ofertas.title, l)}
        subtitle={t(pages.ofertas.intro, l)}
        size="page"
        align="center"
      />

      {/* Teaching */}
      <section className="bg-zion-radial">
        <div className="container-zion grid gap-12 py-24 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:py-32">
          <Reveal>
            <h2 className="font-display text-4xl font-light leading-tight text-cream md:text-6xl">
              {t(offerings.teachingHeading, l)}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-6 sm:grid-cols-2">
              {offerings.teaching.map((p, i) => (
                <p
                  key={i}
                  className="text-sm leading-relaxed text-cream/70 md:text-base"
                >
                  {t(p, l)}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Scripture banner */}
      <section className="border-y border-line bg-zion-panel">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.35),transparent_62%)]" />
          <div className="container-zion relative py-24 text-center md:py-32">
            <Reveal>
              <p className="mx-auto max-w-3xl font-display text-2xl font-light leading-snug text-cream md:text-4xl">
                {t(offerings.scripture.quote, l)}
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.3em] text-teal">
                {t(offerings.scripture.ref, l)}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ways to give */}
      <section className="bg-zion-radial">
        <div className="container-zion py-24 md:py-32">
          <Reveal className="mb-12 max-w-2xl">
            <h2 className="font-display text-4xl text-cream md:text-5xl">
              {t(offerings.waysTitle, l)}
            </h2>
            <p className="mt-4 text-cream/65">{t(offerings.waysIntro, l)}</p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {offerings.methods.map((m, i) => (
              <Reveal key={m.key} delay={(i % 2) * 80}>
                <div className="flex h-full flex-col gap-4 rounded-2xl bg-zion-panel p-7 ring-1 ring-line">
                  <h3 className="font-display text-2xl text-cream">
                    {t(m.name, l)}
                  </h3>
                  <p className="text-sm leading-relaxed text-cream/65">
                    {t(m.desc, l)}
                  </p>
                  {"cta" in m && m.cta && (
                    <div className="mt-auto pt-2">
                      <PillButton href={m.cta.href} external className="w-fit">
                        {t(m.cta.label, l)}
                      </PillButton>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
