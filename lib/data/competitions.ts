import type { CompetitionEvent, UpcomingEvent } from "@/lib/types";

/**
 * Competition history table. Empty until ARCTURUS competes — add a row
 * after every event instead of pre-filling results.
 */
export const competitionHistory: CompetitionEvent[] = [];

/**
 * Upcoming events on the schedule. Add entries as they're confirmed.
 */
export const upcomingEvents: UpcomingEvent[] = [];
