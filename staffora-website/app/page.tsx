import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Briefcase, Layers, Factory } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import Marquee from "@/components/Marquee";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import { Reveal, Stagger, StaggerItem, Counter, StepsTrack, Intro, IntroImage, FloatIn, SpinIn } from "@/components/motion";
import { bookingHref } from "@/lib/site";
import {
  scale, problems, connected, services, howWeHelp, reasons, approach, caseStudies, stories, industries,
} from "@/lib/content";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="hero">
        <div className="wrap hero__grid">
          <div>
            <Intro>
              <span className="hero__tag"><img src="/brand/staffora-icon.svg" alt="" aria-hidden="true" />Building Sustainable Performance™</span>
            </Intro>
            <Intro delay={0.1}>
              <h1>Build Organizations Where Great Teams Perform, Grow &amp; Stay.</h1>
            </Intro>
            <Intro delay={0.22}>
              <p className="hero__lead">Growing a business takes more than hiring good people.</p>
              <p className="hero__body">
                Staffora helps growing businesses build the <strong>structure, people and systems</strong> they need to
                improve performance, strengthen accountability and scale with confidence without everything depending on
                the founder.
              </p>
            </Intro>
            <Intro delay={0.34}>
              <div className="btn-row">
                <a href={bookingHref} className="btn btn--yellow">Book a Strategy Session <ArrowRight /></a>
                <Link href="/services/" className="btn btn--ghost">{connected.cta}</Link>
              </div>
            </Intro>
          </div>

          <div className="hero__visual">
            <SpinIn src="/brand/staffora-icon.svg" className="hero__mark" />
            <IntroImage className="hero__photo">
              <img src="/images/team-meeting.jpg" alt="A team in a working session around a meeting table" width={1600} height={1067} />
            </IntroImage>
            <FloatIn className="hero__float">
              <p className="hero__float-title">How We Work</p>
              <ol>
                {approach.map((a, k) => (
                  <li key={a.step}>
                    {k > 0 && <span className="sep" aria-hidden="true">→</span>}
                    <span className="icon-tile icon-tile--navy"><a.icon /></span>{a.step}
                  </li>
                ))}
              </ol>
            </FloatIn>
          </div>
        </div>
      </section>

      {/* ---------------- Stats ---------------- */}
      <div className="stats">
        <div className="wrap">
          <Reveal y={20}>
            <div className="stats__card">
              <div className="stat">
                <span className="icon-tile"><Briefcase /></span>
                <div><div className="stat__num"><Counter to={9} suffix="+" /></div><div className="stat__label">Years of experience</div></div>
              </div>
              <div className="stat">
                <span className="icon-tile"><Layers /></span>
                <div><div className="stat__num"><Counter to={3} /></div><div className="stat__label">Critical areas we strengthen</div></div>
              </div>
              <div className="stat">
                <span className="icon-tile"><Factory /></span>
                <div><div className="stat__num"><Counter to={8} /></div><div className="stat__label">Industries we&apos;ve supported</div></div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ---------------- Is Your Business Built to Scale? ---------------- */}
      <section className="section" aria-labelledby="scale-title">
        <div className="wrap">
          <Reveal className="head">
            <h2 id="scale-title">{scale.title}</h2>
            <p className="lead"><strong>{scale.lead}</strong></p>
            <p className="muted">{scale.body}</p>
            <p className="point">{scale.familiar}</p>
          </Reveal>

          <Stagger className="problem-grid">
            {problems.map((p) => (
              <StaggerItem key={p.quote} className="card card--hover problem" as="article">
                <span className="icon-tile"><p.icon /></span>
                <h3>{p.quote}</h3>
                {p.body.map((b) => <p key={b}>{b}</p>)}
                <p className="point">{p.point}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal>
            <div className="connected">
              <img className="connected__mark" src="/brand/staffora-icon.svg" alt="" aria-hidden="true" />
              <div>
                <h3>{connected.title}</h3>
                <p>{connected.body}</p>
                <p><strong>{connected.point}</strong></p>
              </div>
              <Link href="/services/" className="btn btn--yellow">{connected.cta} <ArrowRight /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- How We Help ---------------- */}
      <section className="section section--tint" aria-labelledby="help-title">
        <div className="wrap">
          <Reveal className="head">
            <h2 id="help-title">{howWeHelp.title}</h2>
            <p className="lead">{howWeHelp.body}</p>
            <p className="point">{howWeHelp.lead}</p>
          </Reveal>
          <Stagger className="service-grid">
            {services.map((s, k) => (
              <StaggerItem key={s.id}>
                <ServiceCard
                  num={`0${k + 1}`}
                  icon={<s.icon />}
                  name={s.name}
                  headline={s.homeHeadline}
                  text={s.homeText}
                  href={`/services/#${s.id}`}
                  linkLabel={s.homeLink}
                  list={
                    <ul className="icon-list">
                      {s.items.map((it) => (
                        <li key={it.label}><span className="icon-tile"><it.icon /></span>{it.label}</li>
                      ))}
                    </ul>
                  }
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------------- How We Work ---------------- */}
      <section className="section" aria-labelledby="work-title">
        <div className="wrap">
          <Reveal className="head head--center">
            <h2 id="work-title">How We Work</h2>
          </Reveal>
          <div style={{ position: "relative" }}>
            <StepsTrack />
            <Stagger as="ol" className="steps">
              {approach.map((a, k) => (
                <StaggerItem as="li" key={a.step} className="step">
                  <span className="step__icon"><a.icon /><span className="step__n">{k + 1}</span></span>
                  <h3>{a.step}</h3>
                  <p>{a.body}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ---------------- Why Businesses Choose Staffora ---------------- */}
      <section className="section section--tint" aria-labelledby="why-title">
        <div className="wrap split">
          <div className="sticky">
            <Reveal>
              <h2 id="why-title">Why Businesses Choose Staffora</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <a href={bookingHref} className="btn btn--navy" style={{ marginTop: ".5rem" }}>Book a Strategy Session <ArrowRight /></a>
            </Reveal>
          </div>
          <Stagger className="reason-list">
            {reasons.map((r) => (
              <StaggerItem key={r.title} className="card card--hover reason" as="article">
                <span className="icon-tile"><r.icon /></span>
                <div>
                  <h3>{r.title}</h3>
                  {r.body.map((b) => <p key={b}>{b}</p>)}
                  {r.questions && (
                    <ul className="questions">{r.questions.map((q) => <li key={q}>{q}</li>)}</ul>
                  )}
                  {r.after && <p>{r.after}</p>}
                  {r.point && <p className="point">{r.point}</p>}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------------- Industries ---------------- */}
      <section className="section" style={{ paddingBottom: 0 }} aria-labelledby="ind-title">
        <div className="wrap">
          <Reveal className="head head--center" >
            <h2 id="ind-title">Industries We&apos;ve Supported</h2>
          </Reveal>
        </div>
        <Reveal><Marquee items={industries} /></Reveal>
      </section>

      {/* ---------------- Client Success Stories ---------------- */}
      <section className="section" aria-labelledby="stories-title">
        <div className="wrap">
          <Reveal className="head">
            <h2 id="stories-title">{stories.title}</h2>
            <p className="lead">{stories.intro}</p>
          </Reveal>
          <Reveal><Testimonials items={caseStudies} /></Reveal>
          <Reveal>
            <p style={{ marginTop: "2rem" }}>
              <Link className="link-arrow" href="/case-studies/"><span>Client Success Stories</span> <ArrowRight /></Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
