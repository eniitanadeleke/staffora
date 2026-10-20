import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { site, nav } from "@/lib/site";
import { services } from "@/lib/content";
import { LinkedInIcon, InstagramIcon } from "./Social";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__top">
        <div>
          <img className="site-footer__logo" src="/brand/staffora-logo-white.png" alt="Staffora" width={131} height={34} />
          <p className="site-footer__tag">{site.tagline}</p>
          <p>Staffora Global helps growing businesses build the structure, people and systems they need to perform, grow and scale sustainably.</p>
          <div className="socials">
            {site.linkedin && <a href={site.linkedin} target="_blank" rel="noopener" aria-label="Staffora on LinkedIn"><LinkedInIcon /></a>}
            {site.instagram && <a href={site.instagram} target="_blank" rel="noopener" aria-label="Staffora on Instagram"><InstagramIcon /></a>}
          </div>
        </div>
        <div>
          <h2>Services</h2>
          <ul>
            {services.map((s) => <li key={s.id}><Link href={`/services/#${s.id}`}>{s.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            {nav.filter((n) => n.href !== "/services/").map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2>Book a Strategy Session</h2>
          <ul className="site-footer__contact">
            <li><Mail /><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><Phone /><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></li>
            {site.address.street && <li><MapPin />{site.address.street}, {site.address.city}</li>}
          </ul>
        </div>
      </div>
      <div className="wrap site-footer__bottom">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span>{site.tagline}</span>
      </div>
    </footer>
  );
}
