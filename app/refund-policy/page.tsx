import type { Metadata } from "next";
import LegalPageShell from "@/components/ui/LegalPageShell";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "AEIRA's returns, exchanges, and refund policy for perfume orders.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <LegalPageShell title="Refund Policy" updated="July 2026">
      <h2>1. Due to the Nature of Fragrance Products</h2>
      <p>
        Because perfumes are personal care items, we are unable to accept
        returns on opened or used products for hygiene reasons. We
        encourage you to review fragrance notes and, where possible, order a
        discovery sample before committing to a full bottle.
      </p>

      <h2>2. Damaged or Incorrect Items</h2>
      <p>
        If you receive a damaged, defective, or incorrect item, please
        contact us within 48 hours of delivery with photos of the product
        and packaging. We will arrange a replacement or full refund at no
        additional cost to you.
      </p>

      <h2>3. Unopened Products</h2>
      <p>
        Unopened, unused products in their original packaging may be
        returned within 7 days of delivery for a refund or exchange, minus
        original shipping charges. The item must be in fully resalable
        condition.
      </p>

      <h2>4. How to Request a Refund</h2>
      <p>
        Email us at{" "}
        <a href="mailto:aeiraofficial1959@gmail.com">aeiraofficial1959@gmail.com</a> or
        message us on WhatsApp with your order number and reason for the
        request. Our team will guide you through the next steps.
      </p>

      <h2>5. Refund Processing</h2>
      <p>
        Approved refunds are processed within 5-7 business days to your
        original payment method. Cash on delivery orders will be refunded
        via bank transfer or store credit.
      </p>

      <h2>6. Order Cancellations</h2>
      <p>
        Orders can be cancelled free of charge within 2 hours of placement.
        Once an order has been dispatched, it can no longer be cancelled but
        may be eligible for return under the terms above.
      </p>

      <h2>7. Contact</h2>
      <p>
        For any refund or return queries, reach out to{" "}
        <a href="mailto:aeiraofficial1959@gmail.com">aeiraofficial1959@gmail.com</a>.
      </p>
    </LegalPageShell>
  );
}
