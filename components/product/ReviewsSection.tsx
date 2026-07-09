import testimonialsData from "@/data/testimonials.json";
import type { Testimonial, Product } from "@/lib/types";
import StarRating from "@/components/ui/StarRating";
import GoldButton from "@/components/ui/GoldButton";
import SectionHeading from "@/components/ui/SectionHeading";
import navigation from "@/data/navigation.json";
import { Quote } from "lucide-react";

export default function ReviewsSection({ product }: { product: Product }) {
  const testimonials = testimonialsData as Testimonial[];
  const productReviews = testimonials.filter((t) => t.product === product.name);
  const list = productReviews.length > 0 ? productReviews : testimonials.slice(0, 3);

  return (
    <section className="bg-parchment text-ink py-24 md:py-32">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading
            align="left"
            light
            eyebrow="Verified Buyers"
            title={`Reviews for ${product.name}`}
            description={`Rated ${product.rating} out of 5 from ${product.reviewCount} reviews.`}
          />
          <GoldButton href={navigation.social.googleReview} target="_blank" variant="outline">
            Write a Review
          </GoldButton>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {list.map((t) => (
            <div key={t.id} className="bg-white/70 border border-ink/5 p-7">
              <Quote className="text-gold/50 mb-3" size={22} />
              <StarRating rating={t.rating} />
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <p className="font-display text-base mt-4">{t.name}</p>
              <p className="text-xs text-ink/40">{t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
