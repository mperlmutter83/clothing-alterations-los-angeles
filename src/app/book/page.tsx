import type { Metadata } from "next";
import BookingEmbed from "@/components/BookingEmbed";

export const metadata: Metadata = {
  title: "Book a Fitting",
  description:
    "Book your alteration fitting appointment online with Clothing Alterations Los Angeles in Valley Village. Choose a time that works for you.",
};

export default function BookPage() {
  const bookingKey = process.env.BOOKING_KEY;
  return (
    <>
      <section className="bg-charcoal text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl mb-4">Book Your Fitting</h1>
        <p className="text-neutral-300 max-w-2xl mx-auto">
          Choose a time that works for you. Bring your garment — and the shoes
          and undergarments you&apos;ll wear with it — and we&apos;ll pin the
          perfect fit.
        </p>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <BookingEmbed bookingKey={bookingKey} />
          <p className="text-center text-sm text-neutral-500 mt-6">
            Prefer to talk? Call us at{" "}
            <a href="tel:+13109612888" className="text-gold font-semibold">
              (310) 961-2888
            </a>{" "}
            — Mon–Sat, 9 AM to 6 PM.
          </p>
        </div>
      </section>
    </>
  );
}
