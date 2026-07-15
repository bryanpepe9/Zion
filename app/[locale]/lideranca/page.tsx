import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { isLocale, t, type Locale } from "@/lib/i18n";
import { leadershipPage, pastors } from "@/content/leadership";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "en";
  return { title: t(leadershipPage.title, l) };
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export default async function LeadershipPage({
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
        title={t(leadershipPage.title, l)}
        subtitle={t(leadershipPage.intro, l)}
        size="page"
        align="center"
      />

      <section className="bg-zion-radial">
        <div className="container-zion flex flex-col gap-16 py-20 md:gap-24 md:py-28">
          {pastors.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={p.slug}>
                <article className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                  <div
                    className={`relative aspect-[4/5] overflow-hidden rounded-3xl bg-zion-panel ring-1 ring-line ${
                      flip ? "md:order-2" : ""
                    }`}
                  >
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.35),transparent_65%)]" />
                        <span className="font-display text-7xl text-cream/25">
                          {initials(p.name)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-teal">
                      {t(p.role, l)}
                    </p>
                    <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
                      {p.name}
                    </h2>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75">
                      {t(p.bio, l)}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
