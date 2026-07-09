import { Star } from "lucide-react";

export default function StarRating({
  rating,
  size = 13,
}: {
  rating: number;
  size?: number;
}) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < Math.round(rating)
              ? "fill-gold text-gold"
              : "fill-transparent text-smoke/40"
          }
        />
      ))}
    </div>
  );
}
