import Image from "next/image";
import { t, ui, type Locale } from "@/lib/i18n";
import type { NewsPost } from "@/content/news";

function formatDate(iso: string, locale: Locale) {
  const tag = locale === "pt" ? "pt-BR" : locale === "es" ? "es-ES" : "en-US";
  // Parse as local noon so the date never shifts a day across timezones.
  return new Date(`${iso}T12:00:00`).toLocaleDateString(tag, {
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
  const Wrapper = post.link ? "a" : "article";
  const linkProps = post.link
    ? { href: post.link, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-zion-panel ring-1 ring-line transition-transform duration-500 ease-[var(--ease-soft)] hover:-translate-y-1"
    >
      <div className="relative flex aspect-[16/10] items-end overflow-hidden bg-gradient-to-br from-teal-deep/45 via-panel to-ink p-6">
        {post.image ? (
          <Image
            src={post.image}
            alt={t(post.title, locale)}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute right-5 top-5 h-16 w-16 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(20,184,166,0.6),transparent_65%)]" />
        )}
        <span
          className={`relative text-xs uppercase tracking-[0.25em] ${
            post.image
              ? "rounded-full bg-ink/70 px-3 py-1 text-cream backdrop-blur-sm"
              : "text-cream/70"
          }`}
        >
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
    </Wrapper>
  );
}
