import { MetadataRoute } from "next";

const WEBSITE_HOST_URL = process.env.SITE_URL || "https://docs.sofiane-rahmani.com";

export default function sitemap(): MetadataRoute.Sitemap {
  type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

  const changeFrequency = "daily" as ChangeFrequency;

  const routes = ["", "/docs"].map((route) => ({
    url: `${WEBSITE_HOST_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
  }));

  return [...routes];
}
