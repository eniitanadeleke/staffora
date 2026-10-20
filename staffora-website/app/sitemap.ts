import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "services/", "about/", "case-studies/", "masterclass/", "contact/"];
  return pages.map((p) => ({
    url: `${site.url}/${p}`,
    lastModified: new Date(),
    changeFrequency: p === "masterclass/" ? "weekly" : "monthly",
    priority: p === "" ? 1 : 0.8,
  }));
}
