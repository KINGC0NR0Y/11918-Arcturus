import { cn } from "@/lib/utils";
import { subteamClass } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ring-1 ring-inset",
        subteamClass(children),
        className
      )}
    >
      {children}
    </span>
  );
}
