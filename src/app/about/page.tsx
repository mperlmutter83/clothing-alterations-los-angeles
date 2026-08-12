import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Clothing Alterations Los Angeles is a tailoring studio in Valley Village specializing in expert alterations, bridal fittings and garment repairs. Call (310) 961-2888.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-charcoal text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl mb-4">
          About Clothing Alterations Los Angeles
        </h1>
        <p className="text-neutral-300 max-w-2xl mx-auto">
          A Valley Village tailoring studio where every garment gets
          crafts-level attention.
        </p>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/images/supplies.jpg"
              alt="Tailoring supplies — thread spools, scissors, and a dressmaker's mannequin — at a Los Angeles alterations studio"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">Our Studio</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Clothing Alterations Los Angeles is a professional tailoring and
              alterations studio located in Valley Village.
              We serve clients across the San Fernando Valley and greater Los
              Angeles — from Studio City and Sherman Oaks to Burbank and
              Encino.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              We believe a garment that fits properly changes how you feel in
              it. That&apos;s why every alteration starts with a fitting on
              your body, not a measurement chart — and why bridal gowns,
              delicate lace and beaded fabrics are always reworked by hand.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Whether you need a hem before Friday or a wedding dress fitted
              over several appointments, you&apos;ll get honest pricing, a
              clear timeline, and a finished garment that looks like it was
              made for you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-10">Why Clients Choose Us</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl mb-3 text-gold">Fitted on You</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Every adjustment is pinned and marked while you wear the
                garment — no guesswork, no generic sizing.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 text-gold">Invisible Work</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Seams matched, patterns aligned, original finishes preserved —
                alterations no one can detect.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 text-gold">On-Time Delivery</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Clear turnaround times quoted up front, with rush options when
                your event can&apos;t wait.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl mb-4">Come See Us</h2>
        <p className="text-neutral-600 mb-2">
          Valley Village, CA — by appointment only, no walk-ins
        </p>
        <p className="text-neutral-600 mb-8">
          Mon–Sat: 9:00 AM – 6:00 PM · Sunday: Closed
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Book a Fitting
          </Link>
          <a
            href="tel:+13109612888"
            className="border border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Call (310) 961-2888
          </a>
        </div>
      </section>
    </>
  );
}
