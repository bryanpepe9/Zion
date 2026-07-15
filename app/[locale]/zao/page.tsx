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
  return { title: t(pages.zao.title, l) };
}

export default async function ZaoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  return <ComingSoon title={pages.zao.title} intro={pages.zao.intro} locale={l} />;
}
