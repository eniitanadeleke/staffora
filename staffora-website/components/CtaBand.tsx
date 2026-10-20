import { ArrowRight } from "lucide-react";
import { site, bookingHref } from "@/lib/site";
import { mainCta } from "@/lib/content";
import { Reveal } from "./motion";

export default function CtaBand({ title = mainCta.title, body = mainCta.body }: { title?: string; body?: string }) {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="wrap">
        <Reveal>
          <div className="cta__panel">
            <img className="cta__mark" src="/brand/staffora-icon.svg" alt="" aria-hidden="true" />
            <div>
              <h2 id="cta-title">{title}</h2>
              <p>{body}</p>
            </div>
            <div className="cta__aside">
              <a href={bookingHref} className="btn btn--yellow">Book a Strategy Session <ArrowRight /></a>
              <span><em>Or reach out to us directly at</em> <a href={`mailto:${site.email}`}><strong style={{ color: "#fff" }}>{site.email}</strong></a></span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
