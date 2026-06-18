"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, t, ui, localizedHref, type Locale } from "@/lib/i18n";
import LangToggle from "./LangToggle";

export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function isActive(href: string) {
    const full = localizedHref(href, locale);
    if (href === "/") return pathname === full;
    return pathname.startsWith(full);
  }

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-line bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-zion flex h-20 items-center justify-between">
        <Link
          href={localizedHref("/", locale)}
          className="font-display text-xl tracking-[0.18em] text-cream"
        >
          ZION <span className="text-teal">MIAMI</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={localizedHref(item.href, locale)}
              className={`text-sm tracking-wide transition-colors ${
                isActive(item.href)
                  ? "text-cream"
                  : "text-cream/65 hover:text-cream"
              }`}
            >
              {t(item.label, locale)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <LangToggle locale={locale} />
          <a
            href="#give"
            className="rounded-full border border-teal/60 bg-teal/10 px-5 py-2 text-sm tracking-wide text-cream transition-colors hover:bg-teal hover:text-ink"
          >
            {t(ui.give, locale)}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t(ui.close, locale) : t(ui.menu, locale)}
          aria-expanded={open}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-cream transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-cream transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-cream transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>
      </header>

      {/* Mobile overlay menu (sibling of header so `fixed` covers the viewport;
          a backdrop-filtered ancestor would otherwise clip it) */}
      <div
        className={`fixed inset-0 z-40 bg-ink/97 backdrop-blur-md transition-all duration-500 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="container-zion flex h-full flex-col justify-center gap-7">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={localizedHref(item.href, locale)}
              onClick={() => setOpen(false)}
              className={`font-display text-3xl tracking-wide transition-colors ${
                isActive(item.href) ? "text-teal" : "text-cream"
              }`}
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {t(item.label, locale)}
            </Link>
          ))}
          <div className="mt-6 flex items-center gap-6">
            <LangToggle locale={locale} />
            <a
              href="#give"
              className="rounded-full border border-teal/60 bg-teal/10 px-6 py-2 text-sm tracking-wide text-cream"
            >
              {t(ui.give, locale)}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
