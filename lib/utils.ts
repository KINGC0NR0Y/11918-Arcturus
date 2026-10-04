export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

const subteamStyles: Record<string, string> = {
  Software: "border-blue-300/50 bg-blue-500/20 text-blue-200",
  Hardware: "border-line-strong bg-white/5 text-ink-100",
  CAD: "border-blue-300/50 bg-blue-500/20 text-blue-200",
  Business: "border-orange-500/60 bg-orange-500/15 text-orange-300",
  Strategy: "border-line-strong bg-white/5 text-ink-100",
  Outreach: "border-orange-500/60 bg-orange-500/15 text-orange-300",
  Media: "border-blue-300/50 bg-blue-500/20 text-blue-200",
};

export function subteamClass(subteam: string): string {
  return subteamStyles[subteam] ?? "border-line-strong bg-white/5 text-ink-100";
}
