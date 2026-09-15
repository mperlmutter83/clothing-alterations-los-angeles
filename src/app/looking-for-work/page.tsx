import type { Metadata } from "next";
import WorkForm from "@/components/WorkForm";

export const metadata: Metadata = {
  title: "Looking for Work",
  description:
    "Looking for alterations and tailoring work in Los Angeles? Local tailoring shops are hiring. Fill out the quick form and we'll connect you — or call (310) 961-2888.",
  alternates: {
    canonical: "https://clothingalterationslosangeles.com/looking-for-work",
  },
};

const STEPS = [
  {
    n: "1",
    title: "Tell us about yourself",
    body: "A quick 60-second form — no resume, no cover letter, no endless applications.",
  },
  {
    n: "2",
    title: "We connect you",
    body: "We share your details with local alterations and tailoring businesses that are actively hiring.",
  },
  {
    n: "3",
    title: "You hear back directly",
    body: "Interested businesses contact you by phone, usually within a few days.",
  },
];

const WORK_TYPES = [
  "Tailors",
  "Seamstresses",
  "Fitting Specialists",
  "Bridal Alterations",
  "Pattern Makers",
  "Pressing & Finishing",
];

export default function LookingForWorkPage() {
  return (
    <>
      <section className="bg-charcoal text-white py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            Looking for Work?
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl text-white">
            Alterations &amp; Tailoring Work in Los Angeles
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-neutral-300">
            Local tailoring and alterations shops are growing and looking for
            skilled, dependable people. Tell us about yourself and we&apos;ll
            connect you with businesses that are hiring — free, fast, and no
            obligation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work-form"
              className="inline-block rounded-full bg-gold px-7 py-3 font-semibold text-white hover:bg-gold-dark transition-colors"
            >
              Fill Out the Quick Form
            </a>
            <a
              href="tel:+13109612888"
              className="inline-block rounded-full border-2 border-gold px-7 py-3 font-semibold text-gold hover:bg-gold/10 transition-colors"
            >
              Or Call (310) 961-2888
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl text-charcoal text-center">How It Works</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-3xl bg-gold/10 p-8 text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gold text-lg font-bold text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 text-xl text-charcoal">{s.title}</h3>
                <p className="mt-2 text-neutral-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl text-charcoal text-center">
            The Kind of Work Available
          </h2>
          <p className="mt-4 text-center text-neutral-600 max-w-2xl mx-auto">
            Alterations and tailoring businesses across Los Angeles hire for a
            range of roles, including:
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {WORK_TYPES.map((w) => (
              <li
                key={w}
                className="rounded-xl border border-neutral-200 bg-ivory px-5 py-4 text-charcoal font-medium shadow-sm"
              >
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work-form" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-2xl rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl text-charcoal text-center">
            Apply in 60 Seconds
          </h2>
          <p className="mt-2 text-center text-neutral-600">
            Free and confidential — we&apos;ll only share your details with
            businesses that are hiring.
          </p>
          <div className="mt-8">
            <WorkForm />
          </div>
        </div>
        <p className="mt-8 text-center text-neutral-600">
          Own an alterations or tailoring business and need reliable people?{" "}
          <a
            href="tel:+13109612888"
            className="font-bold text-gold underline"
          >
            Call (310) 961-2888
          </a>
        </p>
      </section>
    </>
  );
}
