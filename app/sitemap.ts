import { MetadataRoute } from "next";
import products from "@/data/products.json";
import type { Product } from "@/lib/types";

const siteUrl = "https://aeira.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/shop",
    "/about",
    "/contact",
    "/cart",
    "/wishlist",
    "/privacy-policy",
    "/terms",
    "/shipping-policy",
    "/refund-policy",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const productRoutes = (products as Product[]).map((p) => ({
    url: `${siteUrl}/shop/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}
