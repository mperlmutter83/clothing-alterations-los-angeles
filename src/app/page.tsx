import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const services = [
  {
    title: "Hemming & Length Adjustments",
    description:
      "Pants, jeans, skirts, dresses and sleeves hemmed to the perfect length — with original finishes preserved.",
  },
  {
    title: "Resizing & Tailoring",
    description:
      "Take in or let out waistlines, taper legs, shape shoulders and darts so off-the-rack fits like custom.",
  },
  {
    title: "Bridal & Wedding Dress Alterations",
    description:
      "Precision fittings for wedding gowns — bodice, bustle, lace, beading and train work handled with care.",
  },
  {
    title: "Formal & Evening Wear",
    description:
      "Gowns, prom dresses and tuxedos fitted for your big night, including delicate fabrics and sequins.",
  },
  {
    title: "Suit & Jacket Tailoring",
    description:
      "Jacket tapering, sleeve shortening, trouser breaks and full suit reshaping for a sharp silhouette.",
  },
  {
    title: "Repairs & Restyling",
    description:
      "Zipper replacement, seam repair, button and lining fixes, patches — and restyling vintage pieces.",
  },
];

const steps = [
  {
    step: "1",
    title: "Book or Walk In",
    description:
      "Book a fitting online or call us. Bring your garment and the shoes you'll wear with it.",
  },
  {
    step: "2",
    title: "Expert Fitting",
    description:
      "We pin and mark every adjustment on you, so the fit is measured to your body — not a guess.",
  },
  {
    step: "3",
    title: "Perfect Fit Pickup",
    description:
      "Your garment is expertly sewn, pressed and ready on time. Try it on before you leave.",
  },
];

const serviceAreas = [
  "Valley Village",
  "Studio City",
  "North Hollywood",
  "Sherman Oaks",
  "Toluca Lake",
  "Burbank",
  "Encino",
  "Los Angeles",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative text-white">
        <Image
          src="/images/hero.jpg"
          alt="Seamstress measuring the waist of a wedding dress during a bridal alteration fitting in Los Angeles"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative max-w-4xl mx-auto px-6 py-28 md:py-36 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Valley Village · Los Angeles
          </p>
          <h1 className="text-4xl md:text-6xl mb-6">
            Expert Clothing Alterations in Los Angeles
          </h1>
          <p className="text-lg text-neutral-200 max-w-2xl mx-auto mb-8">
            From everyday hemming to couture-level bridal work — every garment
            fitted precisely to you by an experienced tailor.
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
              className="border border-white hover:bg-white hover:text-charcoal font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Call (310) 961-2888
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.2em] uppercase text-gold mb-2">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl">
              Alteration &amp; Tailoring Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-xl mb-3">{s.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block border border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE / CRAFT */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/images/lace-work.jpg"
              alt="Hand-sewing delicate lace on a wedding dress during bridal alterations in Valley Village"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-gold mb-2">
              The Craft
            </p>
            <h2 className="text-3xl md:text-4xl mb-6">
              Detail-Level Work on Every Garment
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Great alterations are invisible. Seams match, patterns align, and
              lace and beading are reworked by hand so no one can tell the
              garment was ever touched — only that it fits you perfectly.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Whether it&apos;s a wedding gown that needs a bustle, a suit that
              needs shaping, or a favorite pair of jeans that needs hemming, we
              treat every piece with the same level of care.
            </p>
            <Link
              href="/about"
              className="text-gold font-semibold hover:underline"
            >
              Learn more about our studio →
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-gold mb-2">
            Simple Process
          </p>
          <h2 className="text-3xl md:text-4xl mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div
                key={s.step}
                className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-gold text-white font-heading text-xl flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="text-xl mb-3">{s.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-charcoal text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Serving the San Fernando Valley &amp; Los Angeles
          </h2>
          <p className="text-neutral-300 mb-8">
            Our studio is located at 11885 Tiara St in Valley Village — easy to
            reach from anywhere in the Valley.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="border border-neutral-600 rounded-full px-4 py-2 text-sm text-neutral-200"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm tracking-[0.2em] uppercase text-gold mb-2">
              Free Quote
            </p>
            <h2 className="text-3xl md:text-4xl mb-4">
              Tell Us What You Need Altered
            </h2>
            <p className="text-neutral-600">
              Send us the details and we&apos;ll get back to you with pricing
              and timing — or book a fitting directly.
            </p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
