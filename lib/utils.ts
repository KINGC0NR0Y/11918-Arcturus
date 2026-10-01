export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

const subteamStyles: Record<string, string> = {
  Leadership: "bg-orange-500/15 text-orange-400 ring-orange-200",
  Software: "bg-blue-500/15 text-blue-300 ring-blue-200",
  Hardware: "bg-white/10 text-ink-100 ring-white/25",
  CAD: "bg-blue-500/15 text-blue-300 ring-blue-200",
  Business: "bg-orange-500/15 text-orange-400 ring-orange-200",
  Strategy: "bg-white/10 text-ink-100 ring-white/25",
  Outreach: "bg-orange-500/15 text-orange-400 ring-orange-200",
  Media: "bg-blue-500/15 text-blue-300 ring-blue-200",
};

export function subteamClass(subteam: string): string {
  return subteamStyles[subteam] ?? "bg-white/10 text-ink-100 ring-white/25";
}
