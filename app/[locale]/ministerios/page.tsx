import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import MinistryCard from "@/components/MinistryCard";
import { isLocale, t, type Locale } from "@/lib/i18n";
import { pages } from "@/content/site";
import { ministries } from "@/content/ministries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "en";
  return { title: t(pages.ministerios.title, l) };
}

export default async function MinisteriosPage({
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
        title={t(pages.ministerios.title, l)}
        subtitle={t(pages.ministerios.intro, l)}
        size="page"
        align="center"
      />

      <section className="bg-zion-radial">
        <div className="container-zion flex flex-col gap-8 py-20 md:py-28">
          {ministries.map((m, i) => (
            <Reveal key={m.slug}>
              <MinistryCard ministry={m} locale={l} index={i} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
