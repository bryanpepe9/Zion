import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { t, ui, type Locale, type Localized } from "@/lib/i18n";

// Shared placeholder body for pages whose real content is not ready yet.
export default function ComingSoon({
  title,
  intro,
  locale,
}: {
  title: Localized;
  intro?: Localized;
  locale: Locale;
}) {
  return (
    <>
      <Hero
        title={t(title, locale)}
        subtitle={intro ? t(intro, locale) : undefined}
        size="page"
        align="center"
      />
      <section className="bg-zion-radial">
        <div className="container-zion flex flex-col items-center gap-6 py-28 text-center md:py-40">
          <Reveal>
            <span className="inline-block rounded-full border border-teal/40 px-4 py-1 text-xs uppercase tracking-[0.25em] text-teal">
              {t(ui.tbd, locale)}
            </span>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-md font-display text-2xl leading-snug text-cream/80 md:text-3xl">
              {t(ui.comingSoonNote, locale)}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
