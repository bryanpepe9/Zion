import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "outline" | "solid" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm tracking-wide transition-all duration-300 ease-[var(--ease-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const variants: Record<Variant, string> = {
  outline:
    "border border-cream/40 text-cream hover:border-cream hover:bg-cream hover:text-ink",
  solid:
    "bg-teal text-ink font-medium hover:bg-emerald hover:shadow-[0_10px_40px_-12px_rgba(20,184,166,0.7)]",
  ghost: "text-cream/80 hover:text-cream",
};

interface PillButtonProps extends Omit<ComponentProps<typeof Link>, "href"> {
  href: string;
  variant?: Variant;
  external?: boolean;
}

export default function PillButton({
  href,
  variant = "outline",
  external,
  className = "",
  children,
  ...rest
}: PillButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
