import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://www.bejjankitax.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sugunakar Bejjanki – Income Tax Consultant in Karimnagar | Bejjanki Tax Consultancy",
    template: "%s | Bejjanki Tax Consultancy",
  },
  description:
    "Looking for an Income Tax Consultant in Karimnagar? Sugunakar Bejjanki offers expert ITR filing, GST registration, tax planning & financial advisory in Karimnagar, Telangana. 20+ years experience. Call +91 8341704756.",
  keywords: [
    "income tax consultant Karimnagar",
    "best tax practitioner Karimnagar",
    "ITR filing Karimnagar",
    "GST registration Karimnagar",
    "tax consultant near me Karimnagar",
    "income tax filing Telangana",
    "tax planning Karimnagar",
    "GST return filing Karimnagar",
    "business registration Karimnagar",
    "Sugunakar Bejjanki tax consultant",
    "income tax practitioner Karimnagar",
    "tax consultant Telangana",
  ],
  authors: [{ name: "Sugunakar Bejjanki" }],
  creator: "Bejjanki Tax Consultancy",
  publisher: "Bejjanki Tax Consultancy",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Bejjanki Tax Consultancy",
    title: "Income Tax Consultant in Karimnagar – Sugunakar Bejjanki",
    description:
      "Expert ITR filing, GST services & financial advisory in Karimnagar, Telangana. 20+ years experience. Book a free consultation: +91 8341704756.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Bejjanki Tax Consultancy – Income Tax Consultant in Karimnagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Income Tax Consultant in Karimnagar – Sugunakar Bejjanki",
    description:
      "Expert ITR filing, GST services & financial advisory in Karimnagar, Telangana. 20+ years experience. Call +91 8341704756.",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// JSON-LD LocalBusiness structured data — injected globally on every page
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Bejjanki Tax Consultancy",
  alternateName: "Sugunakar Bejjanki Tax Services",
  description:
    "Professional Income Tax Practitioner and Tax Consultant in Karimnagar, Telangana. Expert ITR filing, GST registration, GST return filing, tax planning, business registration, and financial advisory services.",
  url: SITE_URL,
  telephone: "+918341704756",
  email: "sugunakar@bejjankitax.com",
  foundingDate: "2004",
  priceRange: "₹₹",
  image: `${SITE_URL}/og-image.png`,
  logo: `${SITE_URL}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "H.No: 2-5-65, Near Collector Office",
    addressLocality: "Karimnagar",
    addressRegion: "Telangana",
    postalCode: "505001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "18.4386",
    longitude: "79.1288",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  sameAs: [
    `https://wa.me/918341704756`,
    SITE_URL,
  ],
  areaServed: [
    { "@type": "City", name: "Karimnagar" },
    { "@type": "State", name: "Telangana" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tax & Financial Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Income Tax Return Filing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "GST Registration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "GST Return Filing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tax Planning & Advisory" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Registration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Financial Advisory" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        {/* JSON-LD LocalBusiness Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {/* Google Translate Script */}
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `function googleTranslateElementInit() { new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false}, 'google_translate_element'); }` }} />
        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" />
      </body>
    </html>
  );
}
