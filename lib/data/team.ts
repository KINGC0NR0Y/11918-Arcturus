import type { TeamMember } from "@/lib/types";

/**
 * Official ARCTURUS #11918 roster.
 * Names, roles, and subteams only — no invented bios, quotes, or photos.
 * Add an `image` path (e.g. "/team/advik.jpg") once headshots are available.
 */
export const teamMembers: TeamMember[] = [
  {
    id: "advik-venkatesh",
    name: "Advik Venkatesh",
    role: "Co-Captain",
    subteams: ["Leadership", "Software", "CAD"],
    isLead: true,
  },
  {
    id: "pratyush-kulkarni",
    name: "Pratyush Kulkarni",
    role: "Co-Captain",
    subteams: ["Leadership", "Business", "Software", "Hardware"],
    isLead: true,
  },
  {
    id: "aadithri-woddi",
    name: "Aadithri Woddi",
    role: "Strategy Lead",
    subteams: ["Leadership", "Business"],
    isLead: true,
  },
  {
    id: "jay-rohan-surappagari",
    name: "Jay Rohan Surappagari",
    role: "Secretary",
    subteams: ["Leadership", "Business", "Software"],
    isLead: true,
  },
  {
    id: "akshit-algubelli",
    name: "Akshit Algubelli",
    role: "Team Member",
    subteams: ["Business", "Software"],
    isLead: false,
  },
  {
    id: "bhoumik-vamalur",
    name: "Bhoumik Vamalur",
    role: "Team Member",
    subteams: ["Hardware"],
    isLead: false,
  },
  {
    id: "srikar-yella",
    name: "Srikar Yella",
    role: "Team Member",
    subteams: ["Business", "Software", "Hardware", "CAD"],
    isLead: false,
  },
  {
    id: "gurutej-bandla",
    name: "Gurutej Bandla",
    role: "Team Member",
    subteams: ["Software"],
    isLead: false,
  },
  {
    id: "jaideep-krothapalli",
    name: "Jaideep Krothapalli",
    role: "Team Member",
    subteams: ["Hardware"],
    isLead: false,
  },
  {
    id: "jaiden-luke-jenson",
    name: "Jaiden Luke Jenson",
    role: "Team Member",
    subteams: ["Hardware"],
    isLead: false,
  },
  {
    id: "landon-gordon",
    name: "Landon Gordon",
    role: "Team Member",
    subteams: ["CAD"],
    isLead: false,
  },
  {
    id: "natalie-wu",
    name: "Natalie Wu",
    role: "Team Member",
    subteams: ["Software"],
    isLead: false,
  },
  {
    id: "raghuram-jandhyam",
    name: "Raghuram Jandhyam",
    role: "Team Member",
    subteams: ["Business", "Software", "Hardware"],
    isLead: false,
  },
  {
    id: "syed-nashwan",
    name: "Syed Nashwan",
    role: "Team Member",
    subteams: ["Business", "Hardware"],
    isLead: false,
  },
  {
    id: "tejasvi-kashidi",
    name: "Tejasvi Kashidi",
    role: "Team Member",
    subteams: ["Business", "Software", "Hardware", "CAD"],
    isLead: false,
  },
];

export const teamLeads = teamMembers.filter((m) => m.isLead);
export const teamRoster = teamMembers.filter((m) => !m.isLead);

export const subteamFilters = [
  "All",
  "Leadership",
  "Software",
  "Hardware",
  "CAD",
  "Business",
  "Strategy",
] as const;
