import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { bookingHref, site } from "@/lib/site";
import { services, servicesPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "HR Consulting, Recruitment & Succession Planning Services",
  description:
    "HR consulting and organisational structure, performance-focused recruitment, and succession planning for growing and family-owned businesses in Nigeria.",
  alternates: { canonical: "/services/" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": services.map((s) => ({
    "@type": "Service",
    "@id": `${site.url}/services/#${s.id}`,
    name: s.name,
    description: s.text,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "Country", name: "Nigeria" },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title={servicesPage.title} crumb="Services">
        <p>{servicesPage.intro} <strong>{servicesPage.introBold}</strong></p>
        <nav className="chips" aria-label="Jump to a service">
          {services.map((s) => <a key={s.id} href={`#${s.id}`}><s.icon />{s.name}</a>)}
        </nav>
      </PageHero>

      <section className="section section--tint">
        <div className="wrap stack">
          {services.map((s, k) => (
            <Reveal key={s.id}>
              <article className="service-row" id={s.id}>
                <div>
                  <div className="service-row__meta">
                    <span className="icon-tile icon-tile--navy"><s.icon /></span>
                    <div>
                      <div className="service-row__num">0{k + 1}</div>
                      <div className="service-row__name">{s.name}</div>
                    </div>
                  </div>
                  <h2>{s.headline}</h2>
                  <p className="lead">{s.text}</p>
                  <div className="btn-row" style={{ marginTop: "1.75rem" }}>
                    <a href={bookingHref} className="btn btn--navy">Book a Strategy Session <ArrowRight /></a>
                  </div>
                </div>
                <div className="service-row__panel">
                  <h3>{servicesPage.includes}</h3>
                  <Stagger as="ul" className="icon-list">
                    {s.items.map((it) => (
                      <StaggerItem as="li" key={it.label}><span className="icon-tile"><it.icon /></span>{it.label}</StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <div style={{ paddingTop: "var(--section)" }}><CtaBand /></div>
      <JsonLd data={schema} />
    </>
  );
}
