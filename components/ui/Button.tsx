import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-orange-500 text-ink-950 hover:bg-orange-600 shadow-[0_1px_0_0_rgba(0,0,0,0.08)]",
  secondary:
    "bg-white/10 text-white ring-1 ring-inset ring-white/20 hover:bg-white/20",
  ghost:
    "bg-transparent text-white ring-1 ring-inset ring-white/25 hover:bg-white/5",
  "outline-light":
    "bg-transparent text-white ring-1 ring-inset ring-white/30 hover:bg-white/10 hover:ring-white/50",
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
    "group inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-colors duration-200",
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
