import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://portfolio-yekzan-kus.vercel.app";
  const date = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: date,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/cv-yekzan-kus.pdf`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
