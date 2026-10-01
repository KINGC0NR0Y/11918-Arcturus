import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-3 flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.25em]",
            tone === "dark" ? "text-orange-400" : "text-orange-400",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-6 bg-current" aria-hidden="true" />
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "text-balance text-3xl font-bold sm:text-4xl",
          tone === "dark" ? "text-white" : "text-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-ink-200" : "text-ink-300"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
