import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import WhyChoose from "@/components/home/WhyChoose";
import InstagramReels from "@/components/home/InstagramReels";
import BestSellers from "@/components/home/BestSellers";
import Reviews from "@/components/home/Reviews";
import Newsletter from "@/components/home/Newsletter";
import CTA from "@/components/home/CTA";
import Marquee from "@/components/ui/Marquee";

export const metadata: Metadata = {
  title: "AEIRA | Luxury Inspired Fragrances",
  description:
    "Discover AEIRA's collection of luxury inspired eau de parfums — long-lasting, premium fragrances for him and her, hand-composed in small batches.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee text="Luxury Inspired Fragrances" />
      <FeaturedCollection />
      <WhyChoose />
      <InstagramReels />
      <BestSellers />
      <Reviews />
      <Newsletter />
      <CTA />
    </>
  );
}
