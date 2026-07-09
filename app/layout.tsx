import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";

import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";
import CursorFollower from "@/components/layout/CursorFollower";
import ScrollProgress from "@/components/layout/ScrollProgress";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://aeira.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AEIRA | Luxury Inspired Fragrances",
    template: "%s | AEIRA",
  },
  description:
    "AEIRA is a luxury fragrance house crafting hand-composed eau de parfums inspired by the world's most celebrated perfume houses. Discover long-lasting, premium scents for him and her.",
  keywords: [
    "luxury perfume",
    "AEIRA",
    "eau de parfum",
    "designer inspired fragrance",
    "premium perfume India",
    "long lasting perfume",
  ],
  authors: [{ name: "AEIRA" }],
  creator: "AEIRA",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "AEIRA",
    title: "AEIRA | Luxury Inspired Fragrances",
    description:
      "Hand-composed eau de parfums inspired by the world's most celebrated houses — reimagined with our own signature accords.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "AEIRA Luxury Fragrances",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AEIRA | Luxury Inspired Fragrances",
    description:
      "Hand-composed eau de parfums inspired by the world's most celebrated houses.",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AEIRA",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: ["https://www.instagram.com/the_perfumechemistry/"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "aeiraofficial1959@gmail.com",
      contactType: "customer service",
    },
  };

  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable}`}>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Loader />
        <CursorFollower />
        <ScrollProgress />
        <SmoothScrollProvider>
          <CartProvider>
            <WishlistProvider>
              <Navbar />
              <main>{children}</main>
              <Footer />
              <FloatingButtons />
            </WishlistProvider>
          </CartProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
