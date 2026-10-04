import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Consistent "this content isn't published yet" state used across Robot,
 * Engineering, Competitions, Outreach, News, and Gallery whenever the
 * underlying data array/field is empty or "TBD" — never a fabricated stand-in.
 */
export function TbdCard({
  title,
  description,
  icon,
  className,
  tone = "light",
}: {
  title: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "panel flex flex-col items-start gap-3 border-dashed p-6",
        tone === "dark" ? "text-ink-200" : "text-ink-300",
        className
      )}
    >
      <span
        className={cn(
          "font-mono-tech text-[10px] uppercase tracking-[0.2em]",
          tone === "dark" ? "text-orange-400" : "text-orange-400"
        )}
      >
        TBD
      </span>
      {icon}
      <p
        className={cn(
          "font-display text-lg font-semibold",
          tone === "dark" ? "text-white" : "text-ink-50"
        )}
      >
        {title}
      </p>
      {description && <p className="text-sm leading-relaxed">{description}</p>}
    </div>
  );
}
