import type { EngineeringPillar } from "@/lib/types";

export const engineeringPillars: EngineeringPillar[] = [
  {
    key: "cad",
    title: "CAD",
    description: "Modeling every mechanism before it's built, iterating in software first.",
  },
  {
    key: "software",
    title: "Software",
    description: "Writing and testing the code that drives, senses, and scores.",
  },
  {
    key: "hardware",
    title: "Hardware",
    description: "Fabricating, assembling, and wrenching on the physical robot.",
  },
  {
    key: "strategy",
    title: "Strategy",
    description: "Reading the game manual, scouting, and planning how matches are won.",
  },
  {
    key: "business",
    title: "Business",
    description: "Sponsorship, outreach, documentation, and keeping the team running.",
  },
];

export const engineeringProcess = [
  { step: "01", label: "Problem" },
  { step: "02", label: "Research" },
  { step: "03", label: "Design" },
  { step: "04", label: "CAD" },
  { step: "05", label: "Prototype" },
  { step: "06", label: "Test" },
  { step: "07", label: "Iterate" },
  { step: "08", label: "Compete" },
];

/**
 * Detailed engineering portfolio sections shown on /engineering.
 * Populate `content` with real documentation as it becomes available.
 */
export const engineeringSections: { key: string; title: string; content: string }[] = [
  { key: "cad", title: "CAD", content: "TBD" },
  { key: "hardware", title: "Hardware", content: "TBD" },
  { key: "software", title: "Software", content: "TBD" },
  { key: "electrical", title: "Electrical", content: "TBD" },
  { key: "programming", title: "Programming", content: "TBD" },
  { key: "testing", title: "Testing", content: "TBD" },
  { key: "prototyping", title: "Prototyping", content: "TBD" },
  { key: "iteration", title: "Iteration", content: "TBD" },
  { key: "documentation", title: "Documentation", content: "TBD" },
];

/**
 * Build-log post structure. Empty until the team publishes entries.
 * Each post is meant to walk through: Problem -> Initial idea -> Prototype
 * -> Testing -> Failure -> Iteration -> Final solution -> What we learned.
 */
export interface BuildLogPost {
  slug: string;
  title: string;
  date: string;
  problem: string;
  initialIdea: string;
  prototype: string;
  testing: string;
  failure: string;
  iteration: string;
  finalSolution: string;
  whatWeLearned: string;
}

export const buildLogPosts: BuildLogPost[] = [];
