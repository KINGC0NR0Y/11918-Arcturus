import type { NewsArticle, NewsCategory } from "@/lib/types";

export const newsCategories: NewsCategory[] = [
  "Build Log",
  "Engineering",
  "Competition",
  "Outreach",
  "Team",
  "Announcements",
];

/**
 * Published articles. Empty at launch — add real posts here as they're
 * written. Never fabricate a placeholder article; the UI renders an
 * elegant "Coming Soon" state per category when this array is empty.
 */
export const newsArticles: NewsArticle[] = [];
