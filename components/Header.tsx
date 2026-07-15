"use client";

import Link from "next/link";
import Image from "next/image";
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

  function isActive(href?: string) {
    if (!href) return false;
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
          aria-label="Zion Miami"
          className="flex items-center"
        >
          <Image
            src="/images/home/zion-logo.png"
            alt="Zion Miami"
            width={60}
            height={64}
            priority
            className="h-12 w-auto md:h-14"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const itemActive = item.children
              ? item.children.some((c) => isActive(c.href))
              : isActive(item.href);
            if (!item.children) {
              return (
                <Link
                  key={item.href}
                  href={localizedHref(item.href, locale)}
                  className={`text-sm tracking-wide transition-colors ${
                    itemActive ? "text-cream" : "text-cream/65 hover:text-cream"
                  }`}
                >
                  {t(item.label, locale)}
                </Link>
              );
            }
            const triggerClass = `inline-flex cursor-pointer items-center gap-1 text-sm tracking-wide transition-colors ${
              itemActive ? "text-cream" : "text-cream/65 hover:text-cream"
            }`;
            const chevron = (
              <svg
                viewBox="0 0 12 12"
                fill="none"
                className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180"
                aria-hidden="true"
              >
                <path
                  d="M2.5 4.5 6 8l3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            );
            return (
              <div key={item.label.en} className="group relative">
                {item.href ? (
                  <Link href={localizedHref(item.href, locale)} className={triggerClass}>
                    {t(item.label, locale)}
                    {chevron}
                  </Link>
                ) : (
                  <span
                    className={triggerClass}
                    tabIndex={0}
                    role="button"
                    aria-haspopup="true"
                  >
                    {t(item.label, locale)}
                    {chevron}
                  </span>
                )}
                {/* pt-3 forms a hover bridge to the panel */}
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="min-w-44 rounded-xl border border-line bg-ink/95 p-2 shadow-xl backdrop-blur-md">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={localizedHref(child.href, locale)}
                        className={`block rounded-lg px-4 py-2.5 text-sm tracking-wide transition-colors ${
                          isActive(child.href)
                            ? "text-teal"
                            : "text-cream/75 hover:bg-white/5 hover:text-cream"
                        }`}
                      >
                        {t(child.label, locale)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <LangToggle locale={locale} />
          <Link
            href={localizedHref("/ofertas", locale)}
            className="rounded-full border border-teal/60 bg-teal/10 px-5 py-2 text-sm tracking-wide text-cream transition-colors hover:bg-teal hover:text-ink"
          >
            {t(ui.give, locale)}
          </Link>
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
        <nav className="container-zion flex h-full flex-col justify-center gap-6">
          {nav.map((item, i) => (
            <div key={item.label.en} style={{ transitionDelay: `${i * 30}ms` }}>
              {item.href ? (
                <Link
                  href={localizedHref(item.href, locale)}
                  onClick={() => setOpen(false)}
                  className={`font-display text-3xl tracking-wide transition-colors ${
                    isActive(item.href) ? "text-teal" : "text-cream"
                  }`}
                >
                  {t(item.label, locale)}
                </Link>
              ) : (
                <span className="font-display text-3xl tracking-wide text-cream/60">
                  {t(item.label, locale)}
                </span>
              )}
              {item.children && (
                <div className="mt-3 flex flex-col gap-3 border-l border-line pl-5">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={localizedHref(child.href, locale)}
                      onClick={() => setOpen(false)}
                      className={`text-lg tracking-wide transition-colors ${
                        isActive(child.href) ? "text-teal" : "text-cream/70"
                      }`}
                    >
                      {t(child.label, locale)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-6 flex items-center gap-6">
            <LangToggle locale={locale} />
            <Link
              href={localizedHref("/ofertas", locale)}
              onClick={() => setOpen(false)}
              className="rounded-full border border-teal/60 bg-teal/10 px-6 py-2 text-sm tracking-wide text-cream"
            >
              {t(ui.give, locale)}
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
