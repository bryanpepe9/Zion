import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComingSoon from "@/components/ComingSoon";
import { isLocale, t, type Locale } from "@/lib/i18n";
import { pages } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "en";
  return { title: t(pages.planoLeitura.title, l) };
}

export default async function PlanoLeituraPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  return (
    <ComingSoon
      title={pages.planoLeitura.title}
      intro={pages.planoLeitura.intro}
      locale={l}
    />
  );
}
