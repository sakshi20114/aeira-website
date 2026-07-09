"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Instagram, Play, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GoldButton from "@/components/ui/GoldButton";
import navigation from "@/data/navigation.json";

import "swiper/css";
import "swiper/css/navigation";

// Placeholder reel architecture. Replace `thumbnail` / `permalink` with data
// fetched from the Instagram Graph API (GET /{ig-user-id}/media) at build or
// request time once API credentials are configured.
const reels = [
  {
    id: "r1",
    thumbnail:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    caption: "Behind the blend — Noir de Velours",
  },
  {
    id: "r2",
    thumbnail:
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=800&auto=format&fit=crop",
    caption: "How we test sillage & longevity",
  },
  {
    id: "r3",
    thumbnail:
      "https://images.unsplash.com/photo-1587304955907-be9296b7cf01?q=80&w=800&auto=format&fit=crop",
    caption: "Unboxing Ambre 1959",
  },
  {
    id: "r4",
    thumbnail:
      "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?q=80&w=800&auto=format&fit=crop",
    caption: "Sandalwood sourcing, Mysore",
  },
  {
    id: "r5",
    thumbnail:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
    caption: "The AEIRA bottling process",
  },
];

export default function InstagramReels() {
  return (
    <section className="relative bg-ink py-24 md:py-32">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading
            align="left"
            eyebrow="@the_perfumechemistry"
            title="Experience AEIRA"
            description="A closer look at how each bottle comes together — straight from our Instagram."
          />
          <GoldButton
            href={navigation.social.instagram}
            target="_blank"
            variant="outline"
            className="shrink-0"
          >
            <Instagram size={14} /> Follow on Instagram
          </GoldButton>
        </div>

        <div className="relative mt-14 group/reels">
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={2}
            spaceBetween={16}
            loop
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            navigation={{ prevEl: ".reel-prev", nextEl: ".reel-next" }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 24 },
            }}
          >
            {reels.map((reel) => (
              <SwiperSlide key={reel.id}>
                <a
                  href={navigation.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-[9/16] overflow-hidden rounded-md border border-gold/10"
                >
                  <Image
                    src={reel.thumbnail}
                    alt={reel.caption}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center">
                    <Play size={13} className="text-gold fill-gold ml-0.5" />
                  </div>
                  <p className="absolute bottom-3 left-3 right-3 text-xs text-ivory/90 leading-snug">
                    {reel.caption}
                  </p>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            aria-label="Previous"
            className="reel-prev hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass items-center justify-center text-gold opacity-0 group-hover/reels:opacity-100 transition-opacity"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Next"
            className="reel-next hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass items-center justify-center text-gold opacity-0 group-hover/reels:opacity-100 transition-opacity"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
