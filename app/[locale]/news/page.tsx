import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import NewsCard from "@/components/NewsCard";
import { isLocale, t, type Locale } from "@/lib/i18n";
import { pages, newsPosts } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "en";
  return { title: t(pages.news.title, l) };
}

export default async function NewsPage({
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
        title={t(pages.news.title, l)}
        subtitle={t(pages.news.intro, l)}
        size="page"
        align="center"
      />

      <section className="bg-zion-radial">
        <div className="container-zion py-20 md:py-28">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {newsPosts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 80}>
                <NewsCard post={post} locale={l} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
