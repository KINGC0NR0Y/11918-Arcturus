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
        "inline-flex items-center border px-2 py-1 font-mono-tech text-[10px] font-medium uppercase tracking-[0.15em]",
        subteamClass(children),
        className
      )}
    >
      {children}
    </span>
  );
}
