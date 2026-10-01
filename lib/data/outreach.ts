import type { OutreachEventItem, Stat } from "@/lib/types";

/**
 * Outreach summary statistics. Replace "TBD" with real totals as they're
 * tallied — do not estimate or round up.
 */
export const outreachStats: Stat[] = [
  { label: "Volunteer Hours", value: "TBD", isTbd: true },
  { label: "Students Reached", value: "TBD", isTbd: true },
  { label: "Events", value: "TBD", isTbd: true },
  { label: "Schools / Organizations", value: "TBD", isTbd: true },
];

/**
 * Individual outreach events. Empty until the team logs its first event.
 */
export const outreachEvents: OutreachEventItem[] = [];
