import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Instagram, Clock, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SplitText from "@/components/ui/SplitText";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import Accordion from "@/components/ui/Accordion";
import faqs from "@/data/faqs.json";
import navigation from "@/data/navigation.json";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with AEIRA for orders, fragrance advice, or support — via WhatsApp, email, or our contact form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1616949755610-8f9c1ec9a3f7?q=80&w=2000&auto=format&fit=crop"
          alt="Contact AEIRA"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative z-10 container-luxury">
          <span className="eyebrow block mb-4">We&apos;d Love to Hear From You</span>
          <SplitText
            text="Get in Touch"
            el="h1"
            className="font-display text-5xl md:text-7xl text-ivory"
          />
        </div>
      </section>

      <section className="bg-ink py-24 md:py-32">
        <div className="container-luxury grid lg:grid-cols-5 gap-14">
          <div className="lg:col-span-3">
            <SectionHeading
              align="left"
              eyebrow="Send a Message"
              title="Let's Talk Fragrance"
              description="Have a question about a scent, an order, or a bulk gifting enquiry? Fill out the form and our team will respond within a few hours."
            />
            <div className="mt-10">
              <ContactForm /> 
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <InfoCard
              icon={Mail}
              title="Email Us"
              value={navigation.social.email}
              href={`mailto:${navigation.social.email}`}
            />
            <InfoCard
              icon={FaWhatsapp}
              title="WhatsApp"
              value="+91 94415 90033"
              href={navigation.social.whatsapp}
            />
            <InfoCard
              icon={Instagram}
              title="Instagram"
              value="@the_perfumechemistry"
              href={navigation.social.instagram}
            />
            <div className="flex items-start gap-4 p-6 border border-gold/15 bg-white/[0.02]">
              <Clock className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <p className="font-display text-lg text-ivory">Business Hours</p>
                <p className="text-sm text-ivory/60 mt-1">
                  Monday – Saturday: 10:00 AM – 7:00 PM IST
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 border border-gold/15 bg-white/[0.02]">
              <MapPin className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <p className="font-display text-lg text-ivory">Based In</p>
                <p className="text-sm text-ivory/60 mt-1">Hyderabad, Telangana, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-parchment">
        <div className="relative w-full h-[380px] grayscale hover:grayscale-0 transition-all duration-700">
          <iframe
            title="AEIRA location map"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Hyderabad,Telangana,India&output=embed"
          />
        </div>
      </section>

      <section className="bg-ink py-24 md:py-32">
        <div className="container-luxury max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Frequently Asked" />
          <div className="mt-14">
            <Accordion items={faqs.contact} />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: any;
  title: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 p-6 border border-gold/15 bg-white/[0.02] hover:border-gold/40 transition-colors"
    >
      <div className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ink transition-colors">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-widest text-smoke">{title}</p>
        <p className="text-ivory group-hover:text-gold transition-colors">{value}</p>
      </div>
    </a>
  );
}
