import type { Metadata } from "next";
import LegalPageShell from "@/components/ui/LegalPageShell";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Learn about AEIRA's shipping timelines, costs, and delivery process.",
  alternates: { canonical: "/shipping-policy" },
};

export default function ShippingPolicyPage() {
  return (
    <LegalPageShell title="Shipping Policy" updated="July 2026">
      <h2>1. Processing Time</h2>
      <p>
        All orders are processed and dispatched within 24-48 hours of
        confirmation, excluding weekends and public holidays. During sale
        periods, processing may take slightly longer.
      </p>

      <h2>2. Delivery Timelines</h2>
      <p>
        Orders within India typically arrive within 3-5 business days of
        dispatch, depending on your location. Remote areas may experience
        slightly longer delivery times.
      </p>

      <h2>3. Shipping Charges</h2>
      <p>
        We offer free shipping on all orders above ₹2,999. Orders below this
        amount incur a flat shipping fee of ₹150, calculated at checkout.
      </p>

      <h2>4. Order Tracking</h2>
      <p>
        Once your order has shipped, you will receive a tracking number via
        email and WhatsApp. You can use this to monitor your delivery status
        in real time.
      </p>

      <h2>5. Delayed or Lost Shipments</h2>
      <p>
        While we work with reliable courier partners, occasional delays can
        occur due to factors outside our control. If your order has not
        arrived within the expected timeframe, please contact our support
        team and we will investigate promptly.
      </p>

      <h2>6. International Shipping</h2>
      <p>
        We currently ship within India only. We are working to expand our
        shipping capabilities internationally — follow our Instagram for
        updates.
      </p>

      <h2>7. Contact</h2>
      <p>
        For shipping-related questions, reach us at{" "}
        <a href="mailto:aeiraofficial1959@gmail.com">aeiraofficial1959@gmail.com</a> or
        WhatsApp us at +91 94415 90033.
      </p>
    </LegalPageShell>
  );
}
