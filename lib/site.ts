/**
 * Site-wide settings. Fill in the TODO values once the client supplies them;
 * the site hides any empty item automatically.
 */
export const site = {
  name: "Staffora Global",
  shortName: "Staffora",
  tagline: "Building Sustainable Performance™",
  description:
    "Staffora Global helps growing businesses in Nigeria build the structure, people and systems they need to perform, grow and scale: HR consulting, performance-focused recruitment and succession planning.",
  url: "https://www.stafforaglobal.com",

  email: "hello@stafforaglobal.com",
  phone: "+2349043612329",
  phoneDisplay: "+234 904 361 2329",

  linkedin: "https://www.linkedin.com/company/stafforaglobalconsulting", // TODO: confirm URL
  instagram: "", // TODO: e.g. "https://www.instagram.com/stafforaglobal"

  // TODO: office address (also used for Google/local SEO)
  address: {
    street: "",
    city: "Lagos", // TODO: confirm city
    region: "Lagos",
    country: "NG",
  },

  // TODO: Calendly / Cal.com link. If empty, "Book a strategy session" goes to the contact form.
  bookingUrl: "",

  masterclass: {
    // TODO: fill in once confirmed. ISO format for date, e.g. "2026-11-20T10:00:00+01:00"
    startDate: "",
    endDate: "",
    dateDisplay: "", // e.g. "Thursday, 20 November 2026 · 10am–1pm WAT"
    // If the client uses Zoom/Luma/Google Forms, paste the link here and the
    // page will send people there instead of using the built-in form.
    registrationUrl: "",
  },
};

export const nav = [
  { href: "/services/", label: "Services" },
  { href: "/case-studies/", label: "Case Studies" },
  { href: "/about/", label: "About" },
  { href: "/masterclass/", label: "Masterclass" },
  { href: "/contact/", label: "Contact" },
];

export const bookingHref = site.bookingUrl || "/contact/";
