import type { Metadata, Viewport } from "next";
import "@fontsource/merriweather/400-italic.css";
import "@fontsource/merriweather/700.css";
import "@fontsource/merriweather/900.css";
import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/500.css";
import "@fontsource/noto-sans/600.css";
import "@fontsource/noto-sans/700.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { MotionProvider, ScrollProgress } from "@/components/motion";
import { site } from "@/lib/site";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Staffora Global | HR Consulting, Recruitment & Succession Planning in Nigeria",
    template: "%s | Staffora Global",
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_NG",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Staffora Global – Building Sustainable Performance" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#002d62" };

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: site.shortName,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  logo: `${site.url}/brand/staffora-logo-boxed.png`,
  image: `${site.url}/og.png`,
  email: site.email,
  telephone: site.phone,
  areaServed: { "@type": "Country", name: "Nigeria" },
  address: {
    "@type": "PostalAddress",
    ...(site.address.street ? { streetAddress: site.address.street } : {}),
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  founder: { "@type": "Person", name: "Adesewa Herbert", jobTitle: "Founder" },
  sameAs: [site.linkedin, site.instagram].filter(Boolean),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, description: s.text, url: `${site.url}/services/#${s.id}` },
    })),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG">
      <body>
        <MotionProvider>
          <a href="#main" className="skip-link">Skip to content</a>
          <ScrollProgress />
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
        <JsonLd data={orgSchema} />
      </body>
    </html>
  );
}
