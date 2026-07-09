import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, HeartHandshake } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/about/Timeline";
import AnimatedStat from "@/components/about/AnimatedStat";
import Accordion from "@/components/ui/Accordion";
import Marquee from "@/components/ui/Marquee";
import SplitText from "@/components/ui/SplitText";
import faqs from "@/data/faqs.json";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Learn the story behind AEIRA — a luxury inspired fragrance house built on ethically sourced ingredients, rare accords, and a family recipe from 1959.",
  alternates: { canonical: "/about" },
};

const ingredients = [
  {
    name: "Mysore Sandalwood",
    origin: "Karnataka, India",
    img: "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Bulgarian Rose",
    origin: "Kazanlak Valley, Bulgaria",
    img: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Grasse Jasmine",
    origin: "Grasse, France",
    img: "https://images.unsplash.com/photo-1587304955907-be9296b7cf01?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Madagascar Vanilla",
    origin: "Sava Region, Madagascar",
    img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=900&auto=format&fit=crop",
  },
];

const process = [
  { step: "01", title: "Sourcing", text: "Raw aromatics are sourced directly from growers and certified ethical suppliers across India, France, and Madagascar." },
  { step: "02", title: "Composing", text: "Our perfumers blend top, middle, and base notes across weeks, testing on skin at every stage." },
  { step: "03", title: "Macerating", text: "Each formula rests for 3-4 weeks, allowing the oils to fully marry before bottling." },
  { step: "04", title: "Hand-Filling", text: "Every bottle is filled, sealed, and quality-checked individually by our small team." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[520px] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1615397587950-e0b02f7e5b23?q=80&w=2000&auto=format&fit=crop"
          alt="AEIRA fragrance ingredients"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative z-10 container-luxury">
          <span className="eyebrow block mb-4">Since 1959</span>
          <SplitText
            text="Our Story"
            el="h1"
            className="font-display text-6xl md:text-8xl text-ivory"
          />
          <p className="text-ivory/70 max-w-lg mx-auto mt-6">
            A family recipe, a small lab, and a devotion to fragrance that
            refused to stay a secret.
          </p>
        </div>
      </section>

      <Marquee text="Est. 1959" />

      {/* Story */}
      <section className="bg-ink py-24 md:py-32">
        <div className="container-luxury grid md:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1615634376658-c80301e9a007?q=80&w=1200&auto=format&fit=crop"
              alt="AEIRA perfumer at work"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="How It Started"
              title="A Kitchen-Table Formula"
              description="In 1959, our founder's grandmother began mixing amber, honey, and warm musk in her kitchen — not for sale, but simply because she loved the way it made a room feel."
            />
            <p className="text-ivory/60 text-sm md:text-base leading-relaxed mt-6 max-w-lg">
              Decades later, her grandchildren rediscovered the handwritten
              formula tucked inside an old recipe book. What started as a
              tribute project — recreating her signature amber blend —
              grew into The Perfume Chemistry, and eventually, AEIRA: a
              fragrance house dedicated to composing luxury-inspired scents
              with the same patience and care she once had.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-parchment text-ink py-24 md:py-32">
        <div className="container-luxury">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/60 p-10 border border-ink/5">
              <Target className="text-gold mb-5" size={28} />
              <h3 className="font-display text-2xl mb-3">Our Mission</h3>
              <p className="text-sm text-ink/60 leading-relaxed">
                To make world-class perfumery accessible — composing
                fragrances inspired by the greats, without the markup of a
                designer name on the box.
              </p>
            </div>
            <div className="bg-white/60 p-10 border border-ink/5">
              <Eye className="text-gold mb-5" size={28} />
              <h3 className="font-display text-2xl mb-3">Our Vision</h3>
              <p className="text-sm text-ink/60 leading-relaxed">
                To become India&apos;s most trusted independent fragrance
                house, known for honesty in ingredients and consistency in
                quality.
              </p>
            </div>
            <div className="bg-white/60 p-10 border border-ink/5">
              <HeartHandshake className="text-gold mb-5" size={28} />
              <h3 className="font-display text-2xl mb-3">Our Values</h3>
              <p className="text-sm text-ink/60 leading-relaxed">
                Craftsmanship over shortcuts, transparency over hype, and
                respect for both the customer and the ingredients we use.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 bg-ink py-14 px-6 md:px-14">
            <AnimatedStat value={65} suffix="+" label="Years of Heritage" />
            <AnimatedStat value={8} label="Signature Fragrances" />
            <AnimatedStat value={12000} suffix="+" label="Bottles Shipped" />
            <AnimatedStat value={4} suffix=".9★" label="Average Rating" />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ink py-24 md:py-32">
        <div className="container-luxury">
          <SectionHeading eyebrow="Our Journey" title="From 1959 to Now" />
          <div className="mt-20">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Manufacturing process */}
      <section className="bg-parchment text-ink py-24 md:py-32">
        <div className="container-luxury">
          <SectionHeading
            light
            eyebrow="Craftsmanship"
            title="How Each Bottle Is Made"
            description="From raw material to final seal, every AEIRA fragrance passes through four deliberate stages."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {process.map((p) => (
              <div key={p.step} className="border-t-2 border-gold pt-6">
                <span className="font-display text-4xl text-gold/40">{p.step}</span>
                <h3 className="font-display text-xl mt-3 mb-2">{p.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium ingredients */}
      <section className="bg-ink py-24 md:py-32">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Sourced With Care"
            title="Premium Ingredients"
            description="We travel to the source for the materials that matter most."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {ingredients.map((ing) => (
              <div key={ing.name} className="group relative aspect-[3/4] overflow-hidden">
                <Image
                  src={ing.img}
                  alt={ing.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-display text-lg text-ivory">{ing.name}</p>
                  <p className="text-[11px] text-gold uppercase tracking-widest mt-1">{ing.origin}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink py-24 md:py-32">
        <div className="container-luxury max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Frequently Asked" />
          <div className="mt-14">
            <Accordion items={faqs.general} />
          </div>
        </div>
      </section>
    </>
  );
}
