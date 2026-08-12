import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-neutral-300 mt-0">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-heading text-xl text-gold mb-1">
            Clothing Alterations
          </p>
          <p className="text-xs tracking-[0.3em] uppercase mb-4">Los Angeles</p>
          <p className="text-sm leading-relaxed">
            Expert tailoring and alterations for everyday wear, suits, formal
            gowns and wedding dresses — every garment fitted to you.
          </p>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="tel:+13109612888"
                className="hover:text-gold transition-colors"
              >
                (310) 961-2888
              </a>
            </li>
            <li>
              <a
                href="mailto:info@clothingalterationslosangeles.com"
                className="hover:text-gold transition-colors"
              >
                info@clothingalterationslosangeles.com
              </a>
            </li>
            <li>Valley Village, CA 91607</li>
            <li>Mon–Sat: 9:00 AM – 6:00 PM · Sun: Closed</li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">Quick Links</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services" className="hover:text-gold">
                Alteration Services
              </Link>
            </li>
            <li>
              <Link href="/book" className="hover:text-gold">
                Book a Fitting
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gold">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gold">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-700 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Clothing Alterations Los Angeles. All
        rights reserved.
      </div>
    </footer>
  );
}
