import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { site } from "@/lib/site";

const tools = [
  "trendyol-komisyon-hesaplama",
  "hepsiburada-komisyon-hesaplama",
  "tiktok-shop-komisyon-hesaplama",
  "kdv-hesaplama",
  "desi-hesaplama",
  "kargo-ucreti-hesaplama",
  "kar-marji-hesaplama",
  "instagram-hashtag-olusturucu",
  "instagram-bio-olusturucu",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...tools.map((slug) => ({
      url: `${site.url}/araclar/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${site.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogPosts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
