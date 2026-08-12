import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alteration & Tailoring Services",
  description:
    "Hemming, resizing, bridal & wedding dress alterations, suit tailoring, formal wear fittings and garment repairs in Valley Village, Los Angeles. Call (310) 961-2888.",
};

const services = [
  {
    title: "Hemming & Length Adjustments",
    description:
      "Pants, jeans, skirts, dresses, curtains and sleeves hemmed to your exact length. We preserve original finishes — including euro hems on jeans and blind hems on dress pants — so the alteration is invisible.",
    items: ["Pants & jeans (original hem available)", "Dresses & skirts", "Sleeves & cuffs", "Blind & hand-rolled hems"],
  },
  {
    title: "Resizing & Tailoring",
    description:
      "Weight change, new silhouette, or a thrifted find that almost fits — we reshape garments to your body. Waistlines taken in or let out, legs tapered, shoulders adjusted, and darts added for shape.",
    items: ["Take in / let out waist & seat", "Taper legs & sleeves", "Shoulder & back adjustments", "Add or reshape darts"],
  },
  {
    title: "Bridal & Wedding Dress Alterations",
    description:
      "Your wedding dress deserves specialist hands. We handle multi-layer gowns, delicate lace, beading and trains — from the first pinning to the final press — with fittings scheduled around your timeline.",
    items: ["Bodice & side-seam fitting", "Bustles (French, American, ballroom)", "Lace, bead & sequin rework", "Hem, train & veil adjustments", "New accessories to bridal gowns to create multiple looks: Lace/Organza/Chiffon jackets, boleros, shrugs, capes and toppers"],
  },
  {
    title: "Formal & Evening Wear",
    description:
      "Prom gowns, bridesmaid dresses and evening wear fitted for the big night. We work with chiffon, tulle, satin and sequins without damaging delicate fabrics.",
    items: ["Gown & prom dress fittings", "Bridesmaid alterations", "Strap, neckline & slit adjustments"],
  },
  {
    title: "Repairs & Restyling",
    description:
      "Don't retire a favorite garment over a broken zipper or torn seam. We repair, replace and restyle — and can update vintage pieces into something you'll wear again.",
    items: ["Zipper replacement", "Seam & lining repair", "Buttons, hooks & snaps", "Vintage restyling & patching"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-charcoal text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl mb-4">
          Alteration &amp; Tailoring Services
        </h1>
        <p className="text-neutral-300 max-w-2xl mx-auto">
          From a simple hem to a full bridal fitting — every garment is
          measured to your body and finished to look untouched.
        </p>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm grid md:grid-cols-2 gap-6"
            >
              <div>
                <h2 className="text-2xl mb-4">{s.title}</h2>
                <p className="text-neutral-600 leading-relaxed">
                  {s.description}
                </p>
              </div>
              <ul className="space-y-2 self-center">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-gold mt-0.5">✓</span>
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">
              Not Sure What Your Garment Needs?
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Bring it in or send us a photo. We&apos;ll tell you exactly
              what&apos;s possible, what it costs, and how long it takes — no
              obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-3 rounded-full transition-colors text-center"
              >
                Book a Fitting
              </Link>
              <a
                href="tel:+13109612888"
                className="border border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-semibold px-8 py-3 rounded-full transition-colors text-center"
              >
                Call (310) 961-2888
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/images/sewing-machine.jpg"
              alt="Tailor sewing a white dotted fabric on a professional sewing machine at a Los Angeles alterations studio"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
