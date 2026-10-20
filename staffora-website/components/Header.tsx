"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowRight, Mail, Phone } from "lucide-react";
import { nav, bookingHref, site } from "@/lib/site";
import { useScrolled } from "./motion";

export default function Header() {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const current = (href: string) => pathname === href || pathname + "/" === href;

  return (
    <>
      <header className={`site-header${scrolled || open ? " is-scrolled" : ""}`}>
        <div className="wrap site-header__bar">
          <Link href="/" className="site-header__logo" aria-label="Staffora Global home">
            <img src="/brand/staffora-logo-white.png" alt="Staffora" width={131} height={34} />
          </Link>

          <nav className="site-nav" aria-label="Main">
            <ul>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} aria-current={current(n.href) ? "page" : undefined}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <a href={bookingHref} className="btn btn--yellow site-header__cta">Book a Strategy Session</a>

          <button type="button" className="menu-btn" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Main"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul>
              {[{ href: "/", label: "Home" }, ...nav].map((n, i) => (
                <motion.li key={n.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i + 0.1 }}>
                  <Link href={n.href} aria-current={current(n.href) ? "page" : undefined}>
                    {n.label} <ArrowRight />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <a href={bookingHref} className="btn btn--yellow">Book a Strategy Session <ArrowRight /></a>
            <div className="mobile-menu__contact">
              <p style={{ display: "flex", gap: ".5rem", alignItems: "center", marginTop: "2rem" }}><Mail size={16} /> <a href={`mailto:${site.email}`}>{site.email}</a></p>
              <p style={{ display: "flex", gap: ".5rem", alignItems: "center" }}><Phone size={16} /> <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
