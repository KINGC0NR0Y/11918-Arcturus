export type Subteam =
  | "Software"
  | "Hardware"
  | "CAD"
  | "Business"
  | "Strategy"
  | "Outreach"
  | "Media"
  | "Web Developer";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  subteams: Subteam[];
  isLead: boolean;
  image?: string; // path in /public, optional — falls back to monogram
}

export interface Sponsor {
  id: string;
  name: string;
  url?: string;
  logo?: string; // path in /public, optional — falls back to text mark
}

export interface Stat {
  label: string;
  value: string | number;
  isTbd?: boolean;
  suffix?: string;
}

export interface CompetitionEvent {
  event: string;
  date: string;
  location: string;
  result: string;
  awards: string;
}

export interface UpcomingEvent {
  event: string;
  date: string;
  location: string;
}

export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: NewsCategory;
  excerpt: string;
  comingSoon?: boolean;
}

export type NewsCategory =
  | "Build Log"
  | "Engineering"
  | "Competition"
  | "Outreach"
  | "Team"
  | "Announcements";

export type GalleryCategory =
  | "Team"
  | "Robot"
  | "Build"
  | "Competition"
  | "Outreach";

export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
  caption?: string;
}

export interface OutreachEventItem {
  name: string;
  date: string;
  location: string;
  description: string;
  studentsReached: string;
  volunteerHours: string;
}

export interface EngineeringPillar {
  key: string;
  title: string;
  description: string;
}
