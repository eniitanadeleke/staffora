import type { Item } from "@/lib/content";

export default function Marquee({ items }: { items: Item[] }) {
  const row = (hidden: boolean) =>
    items.map(({ label, icon: Icon }) => (
      <span className="pill" key={label + hidden} aria-hidden={hidden || undefined}>
        <span className="icon-tile"><Icon /></span>{label}
      </span>
    ));
  return (
    <div className="marquee">
      <div className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
