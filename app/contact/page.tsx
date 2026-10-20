import type { Metadata } from "next";
import { Mail, Phone, MapPin, CalendarDays } from "lucide-react";
import PageHero from "@/components/PageHero";
import LeadForm from "@/components/LeadForm";
import { LinkedInIcon, InstagramIcon } from "@/components/Social";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { site } from "@/lib/site";
import { services, mainCta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a Strategy Session",
  description:
    "Talk to Staffora Global about HR structure, recruitment or succession planning for your business. Book a strategy session or email hello@stafforaglobal.com.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Book a Strategy Session" crumb="Contact">
        <p>{mainCta.body}</p>
      </PageHero>

      <section className="section section--tint">
        <div className="wrap split" style={{ alignItems: "start" }}>
          <Stagger className="contact-cards">
            <StaggerItem>
              <a className="contact-card" href={`mailto:${site.email}`}><span className="icon-tile"><Mail /></span><span><small>Email</small><strong>{site.email}</strong></span></a>
            </StaggerItem>
            <StaggerItem>
              <a className="contact-card" href={`tel:${site.phone}`}><span className="icon-tile"><Phone /></span><span><small>Phone</small><strong>{site.phoneDisplay}</strong></span></a>
            </StaggerItem>
            {site.linkedin && (
              <StaggerItem>
                <a className="contact-card" href={site.linkedin} target="_blank" rel="noopener"><span className="icon-tile"><LinkedInIcon /></span><span><small>LinkedIn</small><strong>@stafforaglobalconsulting</strong></span></a>
              </StaggerItem>
            )}
            {site.instagram && (
              <StaggerItem>
                <a className="contact-card" href={site.instagram} target="_blank" rel="noopener"><span className="icon-tile"><InstagramIcon /></span><span><small>Instagram</small><strong>Instagram</strong></span></a>
              </StaggerItem>
            )}
            {site.address.street && (
              <StaggerItem>
                <div className="contact-card"><span className="icon-tile"><MapPin /></span><span><small>Office</small><strong>{site.address.street}, {site.address.city}</strong></span></div>
              </StaggerItem>
            )}
            {site.bookingUrl && (
              <StaggerItem>
                <a className="contact-card" href={site.bookingUrl}><span className="icon-tile"><CalendarDays /></span><span><small>Calendar</small><strong>Book a Strategy Session</strong></span></a>
              </StaggerItem>
            )}
          </Stagger>

          <Reveal delay={0.1}>
            <LeadForm
              title="Book a Strategy Session"
              subject="Strategy session request"
              submitLabel="Book a Strategy Session"
              successMessage="Thank you. Your request has been sent and we'll be in touch shortly."
            >
              <div className="field"><label htmlFor="c-name">Full name</label><input id="c-name" name="name" required autoComplete="name" /></div>
              <div className="field"><label htmlFor="c-business">Business name</label><input id="c-business" name="business" required autoComplete="organization" /></div>
              <div className="field"><label htmlFor="c-email">Email</label><input id="c-email" name="email" type="email" required autoComplete="email" /></div>
              <div className="field"><label htmlFor="c-phone">Phone / WhatsApp</label><input id="c-phone" name="phone" type="tel" autoComplete="tel" /></div>
              <div className="field">
                <label htmlFor="c-size">Team size</label>
                <select id="c-size" name="team_size" defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>1–10 employees</option><option>11–50 employees</option><option>51–200 employees</option><option>200+ employees</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="c-need">What do you need help with?</label>
                <select id="c-need" name="need" defaultValue="">
                  <option value="" disabled>Select one</option>
                  {services.map((s) => <option key={s.id}>{s.name}</option>)}
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="field full"><label htmlFor="c-msg">Tell us about your business <span className="opt">(optional)</span></label><textarea id="c-msg" name="message" /></div>
            </LeadForm>
          </Reveal>
        </div>
      </section>
    </>
  );
}
