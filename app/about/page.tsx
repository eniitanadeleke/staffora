import type { Metadata } from "next";
import { ArrowRight, Briefcase } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import ImageSlot from "@/components/ImageSlot";
import Marquee from "@/components/Marquee";
import { Reveal, Stagger, StaggerItem, Counter, Parallax } from "@/components/motion";
import { bookingHref } from "@/lib/site";
import { about, founder, beliefs, values, industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Staffora Global",
  description:
    "Staffora Global helps growing businesses in Nigeria build the structure, people and systems they need to perform, grow and scale sustainably. Founded by Adesewa Herbert.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={about.title}
        crumb="About"
        actions={<a href={bookingHref} className="btn btn--yellow">Book a Strategy Session <ArrowRight /></a>}
      >
        <p><strong>{about.lead}</strong></p>
        <p>{about.body}</p>
      </PageHero>

      {/* Why Staffora Exists */}
      <section className="section" aria-labelledby="exists-title">
        <div className="wrap split split--center">
          <Reveal>
            <Parallax distance={30} className="photo-frame">
              <img src="/images/office.jpg" alt="A bright open-plan office with desks and a team at work" width={1000} height={1250} loading="lazy" style={{ aspectRatio: "4 / 4.4" }} />
            </Parallax>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">{about.existsEyebrow}</p>
            <h2 id="exists-title">{about.existsTitle}</h2>
            <p className="lead">{about.exists[0]}</p>
            <p className="muted">{about.exists[1]}</p>
            <p className="muted">{about.exists[2]}</p>
            <p className="point">{about.existsPoint}</p>
          </Reveal>
        </div>
      </section>

      {/* Founder */}
      <section className="section section--tint" aria-labelledby="founder-title">
        <div className="wrap founder">
          <Reveal className="founder__photo">
            <ImageSlot label="Adesewa Herbert, founder" ratio="4 / 5" />
            <div className="founder__badge">
              <span className="icon-tile icon-tile--navy"><Briefcase /></span>
              <div><strong><Counter to={9} suffix="+" /></strong><span>Years of experience</span></div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="founder-title">{founder.title}</h2>
            <p className="lead">{founder.body[0]}</p>
            <p className="muted">{founder.body[1]}</p>
            <p className="muted">{founder.body[2]}</p>
          </Reveal>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section" aria-labelledby="approach-title">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">{about.approachEyebrow}</p>
            <h2 id="approach-title">{about.approachTitle}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            {about.approach.map((a) => <p className="lead" key={a}>{a}</p>)}
            <p className="point">{about.approachPoint}</p>
            <p className="muted">{about.approachAfter}</p>
          </Reveal>
        </div>
      </section>

      {/* What We Believe */}
      <section className="section section--tint" aria-labelledby="believe-title">
        <div className="wrap">
          <Reveal className="head"><h2 id="believe-title">What We Believe</h2></Reveal>
          <Stagger className="belief-grid">
            {beliefs.map((b, k) => (
              <StaggerItem key={b.title} className="card card--hover belief" as="article">
                <span className="icon-tile"><b.icon /></span>
                <div>
                  <div className="belief__n">{k + 1}.</div>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Our Values */}
      <section className="section" aria-labelledby="values-title">
        <div className="wrap">
          <Reveal>
            <div className="values-band">
              <h2 id="values-title" style={{ marginBottom: "2rem" }}>Our Values</h2>
              <Stagger as="ul" className="value-grid">
                {values.map((v) => (
                  <StaggerItem as="li" key={v.name} className="value">
                    <span className="value__letter" aria-hidden="true">{v.letter}</span>
                    <span className="icon-tile icon-tile--glass"><v.icon /></span>
                    <h3>{v.name}</h3>
                    <p>{v.body}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Industries */}
      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="ind-title">
        <div className="wrap"><Reveal className="head head--center"><h2 id="ind-title">Industries We&apos;ve Supported</h2></Reveal></div>
        <Reveal><Marquee items={industries} /></Reveal>
      </section>

      <CtaBand title={about.ctaTitle} body={about.ctaBody} />
    </>
  );
}
