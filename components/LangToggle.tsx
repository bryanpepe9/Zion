"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

export default function LangToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;

  function swap(target: Locale) {
    const segments = pathname.split("/");
    // segments[0] === "" , segments[1] === current locale
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = target;
    } else {
      segments.splice(1, 0, target);
    }
    return segments.join("/") || `/${target}`;
  }

  return (
    <div className="flex items-center gap-1 text-sm tracking-wide">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="px-1 text-cream/30">/</span>}
          <Link
            href={swap(l)}
            aria-current={l === locale ? "true" : undefined}
            className={
              l === locale
                ? "text-cream"
                : "text-cream/45 transition-colors hover:text-cream"
            }
          >
            {l.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
