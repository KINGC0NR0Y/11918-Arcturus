import type { Sponsor } from "@/lib/types";

/**
 * Official ARCTURUS #11918 sponsors.
 * Add a `logo` path (e.g. "/sponsors/subaru.svg") once logo assets are provided
 * — until then each renders as a clean text-based mark.
 */
export const sponsors: Sponsor[] = [
  { id: "gene-haas-foundation", name: "Gene Haas Foundation" },
  { id: "subaru", name: "Subaru" },
  { id: "qualcomm", name: "Qualcomm" },
  { id: "polymaker", name: "Polymaker" },
  { id: "frctees", name: "FRCtees" },
  { id: "firefly-aerospace", name: "Firefly Aerospace" },
  { id: "fabworks", name: "Fabworks" },
  { id: "onlinemetals", name: "OnlineMetals.com" },
];
