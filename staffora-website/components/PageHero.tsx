import Link from "next/link";
import type { ReactNode } from "react";
import { Intro, SpinIn } from "./motion";

type Props = { title: string; crumb: string; children?: ReactNode; actions?: ReactNode; badge?: ReactNode };

export default function PageHero({ title, crumb, children, actions, badge }: Props) {
  return (
    <section className="page-hero">
      <SpinIn src="/brand/staffora-icon.svg" className="page-hero__mark" />
      <div className="wrap page-hero__inner">
        <Intro>
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>{crumb}</span></nav>
          {badge}
          <h1>{title}</h1>
        </Intro>
        <Intro delay={0.15}>{children}</Intro>
        {actions && <Intro delay={0.3}><div className="btn-row">{actions}</div></Intro>}
      </div>
    </section>
  );
}
