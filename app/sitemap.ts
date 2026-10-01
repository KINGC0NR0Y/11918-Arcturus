import { navItems } from "@/lib/data/nav";
import type { MetadataRoute } from "next";

const siteUrl = "https://arcturus11918.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return navItems.map((item) => ({
    url: `${siteUrl}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date(),
    changeFrequency: item.href === "/" || item.href === "/news" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
