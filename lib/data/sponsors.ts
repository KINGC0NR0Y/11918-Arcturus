import type { Sponsor } from "@/lib/types";

/**
 * Official ARCTURUS #11918 sponsors.
 * `logo` paths point to transparent, pre-cropped PNGs in /public/sponsors.
 * A sponsor without a `logo` falls back to a text mark.
 */
export const sponsors: Sponsor[] = [
  { id: "gene-haas-foundation", name: "Gene Haas Foundation", logo: "/sponsors/gene-haas-foundation.png", url: "https://www.ghaasfoundation.org/" },
  { id: "subaru", name: "Subaru", logo: "/sponsors/subaru.png", url: "https://www.subaru.com/index.html" },
  { id: "qualcomm", name: "Qualcomm", logo: "/sponsors/qualcomm.png", url: "https://www.qualcomm.com/" },
  { id: "polymaker", name: "Polymaker", logo: "/sponsors/polymaker.png", url: "https://polymaker.com/" },
  { id: "frctees", name: "FRCtees", logo: "/sponsors/frctees.png", url: "https://frctees.com/" },
  { id: "firefly-aerospace", name: "Firefly Aerospace", logo: "/sponsors/firefly-aerospace.png", url: "https://fireflyspace.com/" },
  { id: "fabworks", name: "Fabworks", logo: "/sponsors/fabworks.png", url: "https://www.fabworks.com/" },
  { id: "onlinemetals", name: "OnlineMetals.com", logo: "/sponsors/onlinemetals.png", url: "https://www.onlinemetals.com/" },
];
