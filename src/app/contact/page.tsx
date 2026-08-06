import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Clothing Alterations Los Angeles in Valley Village for a free alteration quote. Call (310) 961-2888 or visit us at 11885 Tiara St, Valley Village, CA 91607.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-charcoal text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl mb-4">Contact Us</h1>
        <p className="text-neutral-300 max-w-2xl mx-auto">
          Questions about a garment? Send us a message for a free quote, or
          call — we&apos;re happy to help.
        </p>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl mb-6">Get in Touch</h2>
            <ul className="space-y-5 text-neutral-700">
              <li>
                <p className="text-sm text-neutral-500 mb-1">Phone</p>
                <a
                  href="tel:+13109612888"
                  className="text-lg font-semibold text-gold hover:underline"
                >
                  (310) 961-2888
                </a>
              </li>
              <li>
                <p className="text-sm text-neutral-500 mb-1">Email</p>
                <a
                  href="mailto:info@clothingalterationslosangeles.com"
                  className="text-lg font-semibold text-gold hover:underline break-all"
                >
                  info@clothingalterationslosangeles.com
                </a>
              </li>
              <li>
                <p className="text-sm text-neutral-500 mb-1">Studio</p>
                <p className="text-lg">
                  11885 Tiara St
                  <br />
                  Valley Village, CA 91607
                </p>
              </li>
              <li>
                <p className="text-sm text-neutral-500 mb-1">Hours</p>
                <p className="text-lg">
                  Monday – Saturday: 9:00 AM – 6:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </li>
            </ul>
          </div>
          <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm">
            <LeadForm heading="Request a Free Quote" />
          </div>
        </div>
      </section>
    </>
  );
}
