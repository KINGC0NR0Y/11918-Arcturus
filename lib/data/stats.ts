import { teamLeads, teamMembers } from "@/lib/data/team";
import type { Stat } from "@/lib/types";

/**
 * Homepage / About statistics.
 * Member and lead counts are derived from the roster data so they never drift
 * out of sync. Do not hardcode numbers that aren't backed by real data —
 * use `isTbd: true` instead of inventing a figure.
 */
export const homeStats: Stat[] = [
  { label: "Team Members", value: teamMembers.length },
  { label: "Team Leads", value: teamLeads.length },
  { label: "Core Areas", value: 4 },
  { label: "Competitions Entered", value: "TBD", isTbd: true },
];
