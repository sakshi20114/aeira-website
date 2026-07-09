import type { Metadata } from "next";
import { notFound } from "next/navigation";
import productsData from "@/data/products.json";
import type { Product } from "@/lib/types";
import Gallery from "@/components/product/Gallery";
import ProductInfo from "@/components/product/ProductInfo";
import FragranceNotes from "@/components/product/FragranceNotes";
import RelatedProducts from "@/components/product/RelatedProducts";
import ReviewsSection from "@/components/product/ReviewsSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { formatPrice } from "@/lib/utils";

const products = productsData as Product[];

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Fragrance Not Found" };

  return {
    title: `${product.name} — ${product.family}`,
    description: product.shortDescription,
    alternates: { canonical: `/shop/${product.slug}` },
    openGraph: {
      title: `${product.name} | AEIRA`,
      description: product.shortDescription,
      images: [{ url: product.images[0] }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: product.images,
    brand: { "@type": "Brand", name: "AEIRA" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.price,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="pt-28 md:pt-36 bg-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-luxury pb-24 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <Gallery images={product.images} name={product.name} />
          <ProductInfo product={product} />
        </div>

        <div className="mt-24 md:mt-32 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Composition"
              title="Fragrance Notes"
              description="A structured pyramid of notes that unfolds over time, from first spray to final dry-down."
            />
            <div className="mt-10">
              <FragranceNotes notes={product.notes} />
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="The Inspiration"
              title="Inspired By"
              description={product.inspiredBy}
            />
            <div className="mt-8 p-8 border border-gold/15 bg-white/[0.02]">
              <p className="text-ivory/70 text-sm leading-relaxed italic">
                &ldquo;{product.story}&rdquo;
              </p>
              <p className="mt-5 text-xs text-smoke uppercase tracking-widest">
                Price · {formatPrice(product.price)} for {product.size}
              </p>
            </div>
          </div>
        </div>
      </div>

      <ReviewsSection product={product} />
      <RelatedProducts current={product} />
    </div>
  );
}
