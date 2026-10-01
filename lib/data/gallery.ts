import type { GalleryCategory, GalleryImage } from "@/lib/types";

export const galleryCategories: GalleryCategory[] = [
  "Team",
  "Robot",
  "Build",
  "Competition",
  "Outreach",
];

/**
 * Gallery images. Empty until real, verified ARCTURUS photos are added —
 * never substitute stock or unrelated robot/student photos. Add entries as
 * { src: "/gallery/....jpg", alt: "...", category: "Robot", caption: "..." }.
 */
export const galleryImages: GalleryImage[] = [];
