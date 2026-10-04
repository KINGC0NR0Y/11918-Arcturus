import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";

const variantClasses: Record<Variant, string> = {
  primary:
    "border border-orange-500 bg-orange-500 text-ink-950 shadow-[4px_4px_0_0_rgb(0_0_0/0.55)] hover:bg-orange-400",
  secondary:
    "border border-line-strong bg-panel text-white shadow-[4px_4px_0_0_rgb(0_0_0/0.55)] hover:border-orange-500 hover:text-orange-400",
  ghost:
    "border border-line-strong bg-panel text-white shadow-[4px_4px_0_0_rgb(0_0_0/0.55)] hover:border-orange-500 hover:text-orange-400",
  "outline-light":
    "border border-line-strong bg-panel text-white shadow-[4px_4px_0_0_rgb(0_0_0/0.55)] hover:border-orange-500 hover:text-orange-400",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 px-6 py-3 font-mono-tech text-xs font-medium uppercase tracking-[0.2em] transition-[transform,box-shadow,background-color,border-color,color] duration-150 ease-steps hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgb(0_0_0/0.55)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
