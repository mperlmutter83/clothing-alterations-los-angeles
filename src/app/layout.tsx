import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clothingalterationslosangeles.com"),
  title: {
    default:
      "Clothing Alterations Los Angeles | Expert Tailoring in Valley Village",
    template: "%s | Clothing Alterations Los Angeles",
  },
  description:
    "Expert clothing alterations and tailoring in Los Angeles. Hemming, resizing, bridal & wedding dress alterations, suit tailoring and repairs in Valley Village. Call (310) 961-2888.",
  openGraph: {
    title: "Clothing Alterations Los Angeles",
    description:
      "Expert clothing alterations and tailoring in Los Angeles — bridal, formal wear, suits, hemming and repairs.",
    url: "https://clothingalterationslosangeles.com",
    siteName: "Clothing Alterations Los Angeles",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://clothingalterationslosangeles.com",
  name: "Clothing Alterations Los Angeles",
  description:
    "Expert clothing alterations and tailoring in Los Angeles — hemming, resizing, bridal and wedding dress alterations, suit tailoring and garment repairs.",
  url: "https://clothingalterationslosangeles.com",
  telephone: "+1-310-961-2888",
  email: "info@clothingalterationslosangeles.com",
  image: "https://clothingalterationslosangeles.com/images/og-image.jpg",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Valley Village",
    addressRegion: "CA",
    postalCode: "91607",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TVQSM4KD');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TVQSM4KD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
