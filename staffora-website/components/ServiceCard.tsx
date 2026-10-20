"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";

type Props = { num: string; icon: ReactNode; name: string; headline: string; text: string; href: string; linkLabel: string; list: ReactNode };

export default function ServiceCard({ num, icon, name, headline, text, href, linkLabel, list }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card card--hover service-card">
      <div className="service-card__top">
        <span className="icon-tile">{icon}</span>
        <span className="service-card__num">{num}</span>
      </div>
      <p className="service-card__name">{name}</p>
      <h3>{headline}</h3>
      <p>{text}</p>
      <button type="button" className="service-card__toggle" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        What we help with: <ChevronDown />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: "hidden" }}>
            {list}
          </motion.div>
        )}
      </AnimatePresence>
      <Link className="link-arrow" href={href}><span>{linkLabel}</span> <ArrowRight /></Link>
    </div>
  );
}
