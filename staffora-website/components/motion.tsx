"use client";

import { animate, motion, useInView, useMotionValueEvent, useScroll, useSpring, useTransform, MotionConfig, type Variants } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Respects the visitor's "reduce motion" setting across the whole site. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

type RevealProps = { children: ReactNode; delay?: number; y?: number; x?: number; className?: string; as?: "div" | "li" | "section" | "article" };

/** Fades and slides content in when it scrolls into view. */
export function Reveal({ children, delay = 0, y = 28, x = 0, className, as = "div" }: RevealProps) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </M>
  );
}

const group: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.11 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

/** Children wrapped in <StaggerItem> appear one after another. */
export function Stagger({ children, className, as = "div" }: { children: ReactNode; className?: string; as?: "div" | "ul" | "ol" }) {
  const M = motion[as];
  return (
    <M className={className} variants={group} initial="hidden" whileInView="show" viewport={{ once: true, margin: "0px 0px -10% 0px" }}>
      {children}
    </M>
  );
}

export function StaggerItem({ children, className, as = "div" }: { children: ReactNode; className?: string; as?: "div" | "li" | "article" }) {
  const M = motion[as];
  return <M className={className} variants={item}>{children}</M>;
}

/** Counts up from 0 when visible. */
export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 1.6, ease, onUpdate: (v) => setVal(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/** The line that draws across Diagnose → Design → Build. */
export function StepsTrack() {
  return (
    <span className="steps__track" aria-hidden="true">
      <motion.span
        className="steps__fill"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "0px 0px -20% 0px" }}
        transition={{ duration: 1.6, ease, delay: 0.3 }}
      />
    </span>
  );
}

/** Thin yellow reading-progress bar at the top of the page. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return <motion.div className="progress" style={{ scaleX }} aria-hidden="true" />;
}

/** Slow parallax drift for decorative images. */
export function Parallax({ children, distance = 60, className }: { children: ReactNode; distance?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return <motion.div ref={ref} style={{ y }} className={className}>{children}</motion.div>;
}

/** Load-in sequence for the top of each page. */
export function Intro({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay }}>
      {children}
    </motion.div>
  );
}

export function IntroImage({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, scale: 0.94, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.1, ease, delay: 0.25 }}>
      {children}
    </motion.div>
  );
}

export function FloatIn({ children, className, delay = 0.9 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay }}>
      {children}
    </motion.div>
  );
}

export function SpinIn({ src, className }: { src: string; className?: string }) {
  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden="true"
      className={className}
      initial={{ opacity: 0, rotate: -40, scale: 0.6 }}
      animate={{ opacity: 1, rotate: 0, scale: 1 }}
      transition={{ duration: 1.2, ease, delay: 0.6 }}
    />
  );
}

/** Used by the header to know when the page has been scrolled. */
export function useScrolled(threshold = 24) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > threshold));
  useEffect(() => setScrolled(window.scrollY > threshold), [threshold]);
  return scrolled;
}
