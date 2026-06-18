import { t, ui, type Locale } from "@/lib/i18n";
import type { NewsPost } from "@/content/site";

function formatDate(iso: string, locale: Locale) {
  const d = new Date(iso);
  return d.toLocaleDateString(locale === "pt" ? "pt-BR" : "en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function NewsCard({
  post,
  locale,
}: {
  post: NewsPost;
  locale: Locale;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-zion-panel ring-1 ring-line transition-transform duration-500 ease-[var(--ease-soft)] hover:-translate-y-1">
      <div className="relative flex aspect-[16/10] items-end bg-gradient-to-br from-teal-deep/45 via-panel to-ink p-6">
        <div className="absolute right-5 top-5 h-16 w-16 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(20,184,166,0.6),transparent_65%)]" />
        <span className="relative text-xs uppercase tracking-[0.25em] text-cream/70">
          {formatDate(post.date, locale)}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl leading-snug text-cream">
          {t(post.title, locale)}
        </h3>
        <p className="text-sm leading-relaxed text-cream/65">
          {t(post.excerpt, locale)}
        </p>
        <span className="mt-auto pt-2 text-sm tracking-wide text-teal transition-colors group-hover:text-emerald">
          {t(ui.readMore, locale)} →
        </span>
      </div>
    </article>
  );
}
