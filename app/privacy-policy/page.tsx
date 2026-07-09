import type { Metadata } from "next";
import LegalPageShell from "@/components/ui/LegalPageShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AEIRA collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell title="Privacy Policy" updated="July 2026">
      <h2>1. Introduction</h2>
      <p>
        AEIRA (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your privacy and is
        committed to protecting the personal information you share with us
        when you visit our website, place an order, or contact our team. This
        Privacy Policy explains what information we collect, how we use it,
        and the choices you have.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We may collect the following categories of information:</p>
      <ul>
        <li>Contact details such as your name, email address, phone number, and shipping address.</li>
        <li>Order information, including products purchased, payment method, and order history.</li>
        <li>Technical data such as IP address, browser type, device information, and pages visited, collected automatically through cookies and similar technologies.</li>
        <li>Communications you send us via our contact form, email, or WhatsApp.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Process and fulfil your orders, including shipping and payment processing.</li>
        <li>Respond to your enquiries and provide customer support.</li>
        <li>Send order updates, shipping confirmations, and — with your consent — marketing communications.</li>
        <li>Improve our website, products, and overall customer experience.</li>
        <li>Comply with legal obligations and prevent fraud.</li>
      </ul>

      <h2>4. Cookies</h2>
      <p>
        Our website uses cookies to remember your preferences, keep items in
        your cart and wishlist, and understand how visitors use our site. You
        can disable cookies through your browser settings, though some
        features of the site may not function correctly as a result.
      </p>

      <h2>5. Sharing Your Information</h2>
      <p>
        We do not sell your personal information. We may share information
        with trusted third parties who help us operate our business, such as
        payment processors, shipping carriers, and analytics providers, all
        of whom are obligated to keep your data secure and confidential.
      </p>

      <h2>6. Data Security</h2>
      <p>
        We implement reasonable technical and organisational measures to
        protect your personal data against unauthorised access, alteration,
        or disclosure. However, no method of transmission over the internet
        is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        You may request access to, correction of, or deletion of your
        personal data at any time by contacting us at{" "}
        <a href="mailto:aeiraofficial1959@gmail.com">aeiraofficial1959@gmail.com</a>.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will
        be posted on this page with an updated revision date.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please reach out to
        us at <a href="mailto:aeiraofficial1959@gmail.com">aeiraofficial1959@gmail.com</a> or via
        WhatsApp at +91 94415 90033.
      </p>
    </LegalPageShell>
  );
}
