import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/checkout", "/cart", "/wishlist"],
      },
    ],
    sitemap: "https://aeira.example.com/sitemap.xml",
  };
}
