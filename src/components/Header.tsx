import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-charcoal text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="leading-tight">
          <span className="block font-heading text-lg md:text-xl text-gold">
            Clothing Alterations
          </span>
          <span className="block text-xs tracking-[0.3em] uppercase text-neutral-300">
            Los Angeles
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/services" className="hover:text-gold transition-colors">
            Services
          </Link>
          <Link href="/about" className="hover:text-gold transition-colors">
            About
          </Link>
          <Link href="/blog" className="hover:text-gold transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-gold transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:+13109612888"
            className="hidden sm:inline-block text-sm font-semibold hover:text-gold transition-colors"
          >
            (310) 961-2888
          </a>
          <Link
            href="/book"
            className="bg-gold hover:bg-gold-dark text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          >
            Book Fitting
          </Link>
        </div>
      </div>
      <nav className="md:hidden border-t border-neutral-700 px-4 py-2 flex items-center justify-between text-sm">
        <Link href="/services" className="py-1 hover:text-gold">
          Services
        </Link>
        <Link href="/about" className="py-1 hover:text-gold">
          About
        </Link>
        <Link href="/blog" className="py-1 hover:text-gold">
          Blog
        </Link>
        <Link href="/contact" className="py-1 hover:text-gold">
          Contact
        </Link>
        <a href="tel:+13109612888" className="py-1 text-gold font-semibold">
          Call
        </a>
      </nav>
    </header>
  );
}
