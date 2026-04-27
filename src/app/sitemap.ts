import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tuskers.sg";
  const now = new Date();

  return [
    { url: base,                  lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/roster`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/history`,     lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/news`,        lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/join`,        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
