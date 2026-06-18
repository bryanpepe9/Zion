import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ValuesCarousel from "@/components/ValuesCarousel";
import PillButton from "@/components/PillButton";
import { isLocale, t, ui, localizedHref, type Locale } from "@/lib/i18n";
import { pages, site } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "en";
  return { title: t(pages.quemSomos.title, l) };
}

export default async function QuemSomosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  return (
    <>
      <Hero title={t(pages.quemSomos.title, l)} size="page" align="center" />

      {/* Welcome */}
      <section className="bg-zion-radial">
        <div className="container-zion grid gap-12 py-24 md:grid-cols-2 md:gap-20 md:py-32">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight text-cream md:text-6xl">
              {t(
                { en: "Welcome to Zion", pt: "Seja bem-vindo à Zion", es: "Bienvenido a Zion" },
                l
              )}
            </h2>
            <p className="mt-8 text-lg italic leading-relaxed text-teal">
              {t(site.lema, l)}
            </p>
            <p className="mt-2 text-sm tracking-wide text-cream/50">
              {t(site.verseRef, l)}
            </p>
          </Reveal>
          <Reveal delay={120} className="flex items-center">
            <p className="text-base leading-relaxed text-cream/75 md:text-lg">
              {t(
                {
                  pt: "Aqui na Zion vivemos o sobrenatural, acreditamos no poder da Palavra e buscamos viver uma vida de intimidade com Deus. Temos como visão formar discípulos e líderes que manifestam o Reino de Deus para transformar a Terra. Nós desejamos que a Zion seja um lugar onde você vai ser instigado a buscar mais. Seja bem-vindo a Zion!",
                  en: "Here at Zion we live the supernatural, we believe in the power of the Word, and we pursue a life of intimacy with God. Our vision is to form disciples and leaders who manifest the Kingdom of God to transform the Earth. We long for Zion to be a place where you are stirred to seek more. Welcome to Zion!",
                  es: "Aquí en Zion vivimos lo sobrenatural, creemos en el poder de la Palabra y buscamos vivir una vida de intimidad con Dios. Nuestra visión es formar discípulos y líderes que manifiesten el Reino de Dios para transformar la Tierra. Anhelamos que Zion sea un lugar donde seas impulsado a buscar más. ¡Bienvenido a Zion!",
                },
                l
              )}
            </p>
          </Reveal>
        </div>
      </section>

      {/* What we believe */}
      <section className="border-y border-line">
        <div className="container-zion py-24 md:py-32">
          <Reveal className="relative overflow-hidden rounded-3xl bg-zion-panel p-10 md:p-20">
            <div className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.4),transparent_62%)]" />
            <div className="relative max-w-xl">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-teal">
                Zion
              </p>
              <h2 className="font-display text-4xl text-cream md:text-6xl">
                {t(pages.quemSomos.beliefsTitle, l)}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-cream/75">
                {t(pages.quemSomos.beliefsBody, l)}
              </p>
              <div className="mt-10">
                <PillButton href={localizedHref("/ministerios", l)}>
                  {t(ui.readMore, l)}
                </PillButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-zion-radial">
        <div className="container-zion py-24 md:py-32">
          <Reveal className="mb-12">
            <h2 className="font-display text-4xl text-cream md:text-5xl">
              {t(pages.quemSomos.valuesTitle, l)}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ValuesCarousel locale={l} />
          </Reveal>
        </div>
      </section>

      {/* Vision */}
      <section className="relative overflow-hidden border-t border-line bg-zion-panel">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 bottom-[-30%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(20,184,166,0.35),transparent_60%)]" />
        </div>
        <div className="container-zion relative grid gap-10 py-24 md:grid-cols-[0.5fr_1fr] md:py-36">
          <Reveal>
            <h2 className="font-display text-5xl text-cream md:text-7xl">
              {t(pages.quemSomos.visionTitle, l)}
            </h2>
          </Reveal>
          <Reveal delay={120} className="flex items-center">
            <p className="font-display text-2xl font-light leading-snug text-cream md:text-4xl">
              {t(site.vision, l)}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
