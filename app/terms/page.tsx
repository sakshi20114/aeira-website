import type { Metadata } from "next";
import LegalPageShell from "@/components/ui/LegalPageShell";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions governing your use of the AEIRA website and purchase of our products.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPageShell title="Terms &amp; Conditions" updated="July 2026">
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using the AEIRA website, you agree to be bound by
        these Terms &amp; Conditions. If you do not agree with any part of
        these terms, please do not use our website or services.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 18 years old, or the age of majority in your
        jurisdiction, to place an order with AEIRA. By placing an order, you
        confirm that you meet this requirement.
      </p>

      <h2>3. Products &amp; Pricing</h2>
      <p>
        All product descriptions, images, and prices are as accurate as
        possible at the time of publishing. We reserve the right to correct
        pricing errors, modify product availability, and update our
        collection without prior notice.
      </p>

      <h2>4. Orders &amp; Payment</h2>
      <p>
        Orders are confirmed once payment is successfully processed. We
        accept major payment methods including UPI, credit/debit cards, and
        cash on delivery where available. AEIRA reserves the right to refuse
        or cancel any order at its discretion, including in cases of
        suspected fraud.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        All content on this website, including text, graphics, logos,
        product formulations, and imagery, is the property of AEIRA and is
        protected by applicable intellectual property laws. Reproduction
        without written consent is prohibited.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        AEIRA shall not be liable for any indirect, incidental, or
        consequential damages arising from the use of our products or
        website, except where such liability cannot be excluded by law.
      </p>

      <h2>7. Governing Law</h2>
      <p>
        These Terms &amp; Conditions are governed by the laws of India. Any
        disputes arising from these terms shall be subject to the exclusive
        jurisdiction of the courts of Telangana, India.
      </p>

      <h2>8. Changes to These Terms</h2>
      <p>
        We may revise these Terms &amp; Conditions at any time. Continued use
        of the website after changes are posted constitutes your acceptance
        of the revised terms.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions about these Terms can be directed to{" "}
        <a href="mailto:aeiraofficial1959@gmail.com">aeiraofficial1959@gmail.com</a>.
      </p>
    </LegalPageShell>
  );
}
