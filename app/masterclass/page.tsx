import type { Metadata } from "next";
import { ArrowRight, Video, Clock, CalendarDays, Gift, UserPlus, Building2, GraduationCap } from "lucide-react";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { site, bookingHref } from "@/lib/site";
import { masterclass as m } from "@/lib/content";

export const metadata: Metadata = {
  title: "Free Performance Hiring Masterclass™",
  description:
    "A live 3 hour virtual masterclass for founders, CEOs, HR professionals and hiring managers. Hire people who perform, grow and stay, with the free Performance Hiring Toolkit™.",
  alternates: { canonical: "/masterclass/" },
};

const mc = site.masterclass;
const eventSchema = mc.startDate
  ? {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Staffora Performance Hiring Masterclass™",
      description: m.format,
      startDate: mc.startDate,
      ...(mc.endDate ? { endDate: mc.endDate } : {}),
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: { "@type": "VirtualLocation", url: `${site.url}/masterclass/` },
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "NGN", availability: "https://schema.org/InStock", url: `${site.url}/masterclass/` },
      organizer: { "@id": `${site.url}/#organization` },
    }
  : null;

export default function MasterclassPage() {
  const register = mc.registrationUrl || "#register";
  const Check = m.forYouIcon;
  return (
    <>
      <PageHero
        title={m.title}
        crumb="Masterclass"
        badge={<span className="badge"><GraduationCap />{m.badge}</span>}
        actions={<a href={register} className="btn btn--yellow">Reserve Your Free Seat <ArrowRight /></a>}
      >
        <p>{m.intro}</p>
        <p>The <strong>Staffora Performance Hiring Masterclass™</strong> {m.body}</p>
        <p>{m.learnLine} <strong>{m.learnBold}</strong></p>
        <ul className="mc-meta">
          <li><Video />Live &amp; virtual</li>
          <li><Clock />3 hours</li>
          {mc.dateDisplay && <li><CalendarDays />{mc.dateDisplay}</li>}
        </ul>
        <p style={{ marginTop: "1.25rem" }}><strong>{m.format}</strong></p>
      </PageHero>

      {/* For you / What you'll learn */}
      <section className="section" aria-labelledby="for-you">
        <div className="wrap split split--even">
          <Reveal className="card">
            <h2 id="for-you">{m.forYouTitle}</h2>
            <p className="lead">{m.forYouLead}</p>
            <Stagger as="ul" className="check-list">
              {m.forYou.map((i) => <StaggerItem as="li" key={i}><Check />{i}</StaggerItem>)}
            </Stagger>
          </Reveal>
          <Reveal delay={0.1} className="card">
            <h2>{m.learnTitle}</h2>
            <p className="lead">{m.learnLead}</p>
            <Stagger as="ul" className="icon-list">
              {m.learn.map((i) => <StaggerItem as="li" key={i.label}><span className="icon-tile"><i.icon /></span>{i.label}</StaggerItem>)}
            </Stagger>
          </Reveal>
        </div>
      </section>

      {/* Toolkit + Why Performance Hiring */}
      <section className="section section--tint" aria-labelledby="why-ph">
        <div className="wrap split split--even split--center">
          <Reveal>
            <h2 id="why-ph">{m.whyTitle}</h2>
            <p className="lead">{m.whyLead}</p>
            <p>{m.whyBodyA} <strong>{m.whyBold}</strong></p>
            <p className="point">{m.whyConnects}</p>
            <Stagger as="ol" className="flow">
              {m.flow.map((f) => <StaggerItem as="li" key={f}>{f}</StaggerItem>)}
            </Stagger>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="toolkit">
              <span className="icon-tile icon-tile--glass"><Gift /></span>
              <h3 style={{ marginTop: "1rem" }}>{m.toolkitTitle}</h3>
              <p>{m.toolkitLead}</p>
              <Stagger as="ul" className="toolkit-grid">
                {m.toolkit.map((t) => <StaggerItem as="li" key={t.label}><span className="icon-tile icon-tile--glass icon-tile--sm"><t.icon /></span>{t.label}</StaggerItem>)}
              </Stagger>
              <p className="toolkit__close">{m.toolkitClose}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* After + Register */}
      <section className="section" id="register" aria-labelledby="register-title" style={{ scrollMarginTop: 80 }}>
        <div className="wrap split split--even">
          <Reveal>
            <h2>{m.afterTitle}</h2>
            <p className="lead">{m.afterLead} <strong>{m.afterBold}</strong></p>
            <p className="muted">{m.afterBody}</p>
            <div className="help-grid">
              <div className="card card--hover">
                <span className="icon-tile"><UserPlus /></span>
                <h3>{m.hireTitle}</h3>
                <p>{m.hireBody}</p>
              </div>
              <div className="card card--hover">
                <span className="icon-tile"><Building2 /></span>
                <h3>{m.hrTitle}</h3>
                <p>{m.hrBody}</p>
              </div>
            </div>
            <a href={bookingHref} className="btn btn--line">Book a Strategy Session <ArrowRight /></a>
          </Reveal>

          <Reveal delay={0.1}>
            {mc.registrationUrl ? (
              <div className="form-card">
                <h3 id="register-title">{m.closeTitle}</h3>
                <p>{m.closeBody}</p>
                <a href={mc.registrationUrl} className="btn btn--navy">Register for the Free Masterclass <ArrowRight /></a>
              </div>
            ) : (
              <LeadForm
                title={m.closeTitle}
                titleId="register-title"
                intro={m.closeBody}
                subject="Masterclass registration"
                submitLabel="Register for the Free Masterclass"
                successMessage="You're registered. We'll email your joining link and the Performance Hiring Toolkit™ before the session."
              >
                <div className="field full"><label htmlFor="mc-name">Full name</label><input id="mc-name" name="name" required autoComplete="name" /></div>
                <div className="field"><label htmlFor="mc-email">Email</label><input id="mc-email" name="email" type="email" required autoComplete="email" /></div>
                <div className="field"><label htmlFor="mc-phone">Phone / WhatsApp</label><input id="mc-phone" name="phone" type="tel" required autoComplete="tel" /></div>
                <div className="field"><label htmlFor="mc-company">Business name</label><input id="mc-company" name="business" autoComplete="organization" /></div>
                <div className="field">
                  <label htmlFor="mc-role">Your role</label>
                  <select id="mc-role" name="role" defaultValue="">
                    <option value="" disabled>Select one</option>
                    <option>Founder / CEO</option><option>Business owner</option><option>HR professional</option><option>Hiring manager</option><option>Other</option>
                  </select>
                </div>
              </LeadForm>
            )}
          </Reveal>
        </div>
      </section>

      {eventSchema && <JsonLd data={eventSchema} />}
    </>
  );
}
