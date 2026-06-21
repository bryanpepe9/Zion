import Image from "next/image";
import type { ReactNode } from "react";

interface HeroProps {
  title: string;
  /** Optional rich title (e.g. with a colored accent word). Falls back to `title`. */
  titleNode?: ReactNode;
  /** Override the (light) display weight for the title. */
  titleWeight?: number;
  kicker?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  /** "full" = near full viewport (home); "page" = compact page header. */
  size?: "full" | "page";
  align?: "center" | "left";
  children?: ReactNode; // CTAs
  priority?: boolean;
}

export default function Hero({
  title,
  titleNode,
  titleWeight,
  kicker,
  subtitle,
  image,
  imageAlt = "",
  size = "page",
  align = "center",
  children,
  priority,
}: HeroProps) {
  const minH =
    size === "full"
      ? "min-h-[100svh] md:min-h-screen"
      : "min-h-[52vh] md:min-h-[60vh]";
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <section
      className={`relative flex ${minH} ${alignment} overflow-hidden bg-zion-radial`}
    >
      {/* Photographic layer (B&W) */}
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority={priority}
            sizes="100vw"
            className="object-cover grayscale [filter:grayscale(1)_brightness(0.7)]"
          />
        </div>
      )}

      {/* Teal duotone wash */}
      <div className="absolute inset-0 bg-teal-deep/35 mix-blend-multiply" />

      {/* Interlocking-curve motif */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[18%] top-[-30%] h-[120%] w-[55%] rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(20,184,166,0.45),transparent_62%)]" />
        <div className="absolute -right-[12%] bottom-[-35%] h-[130%] w-[55%] rounded-full bg-[radial-gradient(circle_at_40%_60%,rgba(14,59,54,0.85),transparent_60%)]" />
      </div>

      {/* Legibility gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/55" />

      {/* Content */}
      <div className="container-zion relative z-10 w-full py-28">
        <div className={align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"}>
          {kicker && (
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-teal">
              {kicker}
            </p>
          )}
          <h1
            className="font-display text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl"
            style={titleWeight ? { fontWeight: titleWeight } : undefined}
          >
            {titleNode ?? title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg leading-relaxed text-cream/80 md:text-xl">
              {subtitle}
            </p>
          )}
          {children && (
            <div
              className={`mt-10 flex flex-wrap gap-4 ${
                align === "center" ? "justify-center" : ""
              }`}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
