import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import navigation from "@/data/navigation.json";

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/10 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-vignette pointer-events-none" />
      <div className="container-luxury relative py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          <div className="col-span-2">
            <span className="font-display text-3xl tracking-widest2 text-ivory">
              AEIRA
            </span>
            <p className="mt-4 text-sm text-smoke max-w-xs leading-relaxed">
              Luxury inspired fragrances, composed in small batches for those
              who wear scent as a signature, not an afterthought.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={navigation.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-gold/25 flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition-colors duration-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href={navigation.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full border border-gold/25 flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition-colors duration-300"
              >
                <FaWhatsapp size={16} /> 
              </a>
              <a
                href={`mailto:${navigation.social.email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-full border border-gold/25 flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition-colors duration-300"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <FooterCol title="Shop" links={navigation.footerShop} />
          <FooterCol title="Company" links={navigation.footerCompany} />
          <FooterCol title="Legal" links={navigation.footerLegal} />
        </div>

        <div className="divider-gold mt-14 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-smoke tracking-wide">
          <p>© {new Date().getFullYear()} AEIRA. All rights reserved.</p>
          <p>
            Email:{" "}
            <a
              href={`mailto:${navigation.social.email}`}
              className="hover:text-gold transition-colors"
            >
              {navigation.social.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="eyebrow mb-5">{title}</h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-ivory/70 hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
