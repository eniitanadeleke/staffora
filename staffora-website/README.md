# Staffora Global – website

Next.js (App Router, TypeScript) marketing site for **stafforaglobal.com**.
Six pages: Home, Services, About, Case Studies, Masterclass, Contact.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site is written to /out
```

The site is a static export (`output: "export"`), so `/out` can be deployed to Vercel, Netlify, or any cPanel/static host.

## Where things live

| What | File |
|---|---|
| Contact details, socials, address, booking link, masterclass date | `lib/site.ts` |
| All page copy (word-for-word from the client's content doc) and the icon for each item | `lib/content.tsx` |
| Colours, fonts, layout | `app/globals.css` (brand tokens at the top) |
| Pages | `app/page.tsx`, `app/services/`, `app/about/`, `app/case-studies/`, `app/masterclass/`, `app/contact/` |
| Logos and icon | `public/brand/` |
| Social share image | `public/og.png` |

## Still to fill in (search for `TODO` in `lib/site.ts`)

- Instagram URL, office address, and confirm the LinkedIn URL
- Booking link (Calendly / Cal.com). Until it's set, "Book a strategy session" goes to `/contact/`
- Masterclass date/time (`startDate`, `dateDisplay`). Google event markup switches on automatically once `startDate` is set
- Masterclass registration link, if the client uses Zoom/Luma/Google Forms instead of the built-in form

## Animation and icons

- Animations use [Motion](https://motion.dev) (`components/motion.tsx`): scroll reveals, counters, the Diagnose → Design → Build line, the testimonial slider, page fades and the reading-progress bar. They switch off automatically for visitors who have "reduce motion" turned on.
- Icons come from [lucide-react](https://lucide.dev/icons). To change one, swap the icon name next to the item in `lib/content.tsx`.

## Photos

The two photos from the brand book are in `public/images/`: `team-meeting.jpg` (homepage, "Why businesses choose Staffora") and `office.jpg` (About page). To swap either one, replace the file and keep the same name.

The founder headshot is still a placeholder. 
Placeholders are rendered by `components/ImageSlot.tsx`. To use a real photo, put it in `public/images/` and pass `src`:

```tsx
<ImageSlot label="Adesewa Herbert, founder" src="/images/adesewa.jpg" alt="Adesewa Herbert, founder of Staffora Global" />
```

## Forms

Contact and masterclass forms post to `NEXT_PUBLIC_FORM_ENDPOINT` (e.g. a Formspree form URL), set in `.env.local` or the host's environment settings.
Until that's set, submitting opens the visitor's email app with their details addressed to hello@stafforaglobal.com.

## SEO included

- Unique title and description per page, canonical URLs, Open Graph/WhatsApp share image
- `sitemap.xml` and `robots.txt` generated at build
- Structured data: ProfessionalService (organisation), Service (each service), Review (testimonials), Event (masterclass, once a date is set)
- Brand fonts self-hosted (no Google Fonts request) for speed

After launch: submit `https://www.stafforaglobal.com/sitemap.xml` in Google Search Console and set up a Google Business Profile.
