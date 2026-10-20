"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/content";

const DURATION = 9000;

export default function Testimonials({ items }: { items: CaseStudy[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (n: number) => setI((n + items.length) % items.length);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(i + 1), DURATION);
    return () => clearTimeout(t);
  });

  const c = items[i];
  return (
    <div className="testi" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="testi__card" aria-live="polite">
        <Quote className="testi__quote-icon" aria-hidden="true" />
        <AnimatePresence mode="wait">
          <motion.div key={c.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <p className="testi__title">{c.title}</p>
            <blockquote>{c.quote.map((q, k) => <p key={k}>{k === 0 ? "“" : ""}{q}{k === c.quote.length - 1 ? "”" : ""}</p>)}</blockquote>
            <div className="testi__by">
              <span className="testi__avatar" aria-hidden="true">{c.client.charAt(0)}</span>
              <span className="testi__name">— {c.person}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div>
        <div className="testi__tabs" role="tablist" aria-label="Client success stories">
          {items.map((t, k) => (
            <button key={t.id} role="tab" aria-selected={k === i} className="testi__tab" onClick={() => go(k)}>
              <strong>{t.client}</strong>
              <span>{t.title}</span>
              <div className="testi__bar">
                {k === i && <motion.i key={`${t.id}-${i}-${paused}`} initial={{ scaleX: 0 }} animate={{ scaleX: paused ? 0 : 1 }} transition={{ duration: paused ? 0 : DURATION / 1000, ease: "linear" }} />}
              </div>
            </button>
          ))}
        </div>
        <div className="testi__controls">
          <button type="button" aria-label="Previous story" onClick={() => go(i - 1)}><ArrowLeft /></button>
          <button type="button" aria-label="Next story" onClick={() => go(i + 1)}><ArrowRight /></button>
        </div>
      </div>
    </div>
  );
}
