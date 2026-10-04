import { allPages } from "@/lib/data/nav";
import type { MetadataRoute } from "next";

const siteUrl = "https://arcturus11918.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return allPages.map((page) => ({
    url: `${siteUrl}${page.href === "/" ? "" : page.href}`,
    lastModified: new Date(),
    changeFrequency: page.href === "/" ? "weekly" : "monthly",
    priority: page.href === "/" ? 1 : 0.7,
  }));
}
