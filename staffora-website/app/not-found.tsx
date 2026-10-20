import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function NotFound() {
  return (
    <PageHero crumb="Not found" title={"This page doesn't exist"} actions={<Link href="/" className="btn btn--yellow">Go to the homepage</Link>}>
      <p>The link may be out of date. Use the menu above to find what you need.</p>
    </PageHero>
  );
}
