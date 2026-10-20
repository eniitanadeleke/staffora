import type { Metadata } from "next";
import { Building2, TriangleAlert, Wrench, TrendingUp } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { site } from "@/lib/site";
import { caseStudies, stories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Client Success Stories",
  description:
    "How Staffora Global has helped growing Nigerian businesses strengthen their people practices, make better hiring decisions and build stronger organisations.",
  alternates: { canonical: "/case-studies/" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": caseStudies.map((c) => ({
    "@type": "Review",
    itemReviewed: { "@id": `${site.url}/#organization` },
    author: { "@type": "Person", name: c.person },
    reviewBody: c.quote.join(" "),
  })),
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero title={stories.title} crumb="Case Studies">
        <p>{stories.intro}</p>
      </PageHero>

      <section className="section section--tint">
        <div className="wrap stack">
          {caseStudies.map((c, k) => (
            <Reveal key={c.id}>
              <article className="case" id={c.id}>
                <div className="case__side">
                  <p className="case__client"><Building2 />{c.client}</p>
                  <h2>{k + 1}. {c.title}</h2>
                  <blockquote>
                    {c.quote.map((q, i) => <p key={i}>{i === 0 ? "“" : ""}{q}{i === c.quote.length - 1 ? "”" : ""}</p>)}
                    <footer>— {c.person}</footer>
                  </blockquote>
                </div>
                <Stagger className="case__body">
                  <StaggerItem className="case__stage">
                    <span className="icon-tile"><TriangleAlert /></span>
                    <div><h3>The Challenge</h3><p>{c.challenge}</p></div>
                  </StaggerItem>
                  <StaggerItem className="case__stage">
                    <span className="icon-tile"><Wrench /></span>
                    <div><h3>What We Did</h3><p>{c.action}</p></div>
                  </StaggerItem>
                  <StaggerItem className="case__stage case__stage--result">
                    <span className="icon-tile"><TrendingUp /></span>
                    <div><h3>The Result</h3><p>{c.result}</p></div>
                  </StaggerItem>
                </Stagger>
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
