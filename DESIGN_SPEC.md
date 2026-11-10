# Webshift — Design Specification

Status: Approved for implementation  
Brand: Webshift  
Category: Independent web design & development  
Tagline: Better websites. Better business opportunities.

This document is the source of truth for visual design, interaction, content structure, and implementation constraints. Do not invent client results, testimonials, personal credentials, or turnaround times.

---

## 1. Positioning

Webshift is an independently operated studio, not a large agency and not a personal résumé.

The site must answer three questions within a few seconds:

1. What does Webshift do? Design and build modern websites for businesses.
2. Who is it for? Local and small businesses that need credibility and enquiries.
3. How do I start? A clear project conversation via form, WhatsApp, or email.

Voice: professional, modern, direct, approachable. Write about business outcomes (credibility, enquiries, clarity) without fake statistics.

Concept projects are labelled **Website Concept**. Never present them as commissioned client work.

---

## 2. Reference analysis

Screenshots in `design-references/` were studied as atmosphere, not templates.

### Dark studio references (Kinetic-style)

Useful:

- Near-black field with a single electric accent.
- Oversized editorial headlines, one accent word in the highlight colour.
- Persistent, quiet navigation with one lime CTA.
- Numbered, full-bleed project moments instead of a uniform card grid.
- Index numbers (`01 / 03`) and small uppercase labels.

Rejected:

- Generic “AI agency” glass dashboards and neon orbital art.
- Fake partner quotes, star ratings, and invented percentages.
- Pill-shaped everything and three identical testimonial cards.

### Light product-studio references (Musemind-style)

Useful:

- Warm off-white breathing room.
- Large black headlines with a calm supporting paragraph.
- Physical device mockups (hand + phone, floating UI) as proof of craft.
- Horizontal strips of work that imply more than a 3-up grid.
- Numbered service rows with a quiet rule and an arrow.

Rejected:

- Bright candy-coloured industry tiles.
- Stock product photography and generic SaaS UI screenshots.
- Claims such as “dozens of businesses” or “we excel across industries.”

### Direction taken

A split-field studio: deep graphite as the primary canvas, warm off-white as the reading canvas. Electric lime is a signal, not a wash. Work is shown as composed website mockups inside asymmetric frames. Motion is editorial (mask reveals, slow float, magnetic buttons), not spectacle.

---

## 3. Colour

| Token | Hex | Role |
| --- | --- | --- |
| `graphite` | `#111820` | Primary background, ink on light surfaces |
| `graphite-raised` | `#1A222C` | Elevated dark panels |
| `ink-line` | `#2A333D` | Hairline borders on dark |
| `paper` | `#F5F4EF` | Light sections, body canvas |
| `paper-deep` | `#E8E6DE` | Light section rules and subtle fills |
| `lime` | `#C6F36B` | Accent, primary CTA, one word per headline |
| `lime-deep` | `#A6D24A` | Lime hover / pressed |
| `mist` | `#8B9299` | Secondary text, meta labels |
| `white` | `#F7F8F6` | Text on graphite |

Rules:

- Lime never fills a large region. Use it for one headline word, rules, dots, buttons, and focus rings.
- No gradients as decoration. A single soft radial glow behind the hero object is allowed.
- Do not introduce extra brand colours inside project mockups beyond each project’s own restrained palette (telecom ink, cool service blue-grey, solar amber). Those palettes live only inside mockups.

---

## 4. Typography

- Headings: **Space Grotesk**, 500–700.
- Body and UI: **Inter**, 400–500.
- Load from Google Fonts with `font-display: swap`.

| Style | Size (desktop) | Tracking | Line height |
| --- | --- | --- | --- |
| Display | 92–120px | -0.045em | 0.88 |
| Section title | 56–72px | -0.04em | 0.95 |
| Project title | 40–64px | -0.035em | 1 |
| Lead | 18–20px | -0.01em | 1.55 |
| Body | 16px | 0 | 1.65 |
| Label | 12px | 0.16em, uppercase | 1 |

Mobile display drops to ~44–56px. Never let a headline overflow the viewport.

One word or short phrase per major headline may be set in lime. The rest stays paper or graphite.

---

## 5. Layout

- Max content width: 1280px, with 24px (mobile) / 40px (tablet) / 64px (desktop) page padding.
- Sections alternate graphite and paper. Do not stack two identical dark blocks without a change in composition.
- Asymmetry is the default: a 7/5 or 8/4 split, a number in the margin, or a mockup that breaks the column.
- Avoid three equal cards as a section pattern. Services are a numbered list. Projects are large staggered frames. Process is a horizontal sequence with a connecting rule.
- Corner radius: 2px on buttons and frames, 16–20px only on device mockups. No bubbly cards.
- Hairline borders (`1px`) over drop shadows.

---

## 6. Sections

### Navbar

- Wordmark: `webshift.` with the period in lime.
- Links: Home, Work, Services, About, Contact.
- CTA: “Start a project” — lime fill, graphite text.
- Sticky, translucent graphite, 1px bottom border. Desktop links sit centered. Mobile uses a full-screen menu.
- Active route indicated by a lime underscore, not a pill.

### Hero

- Eyebrow: “Independent web design studio”.
- Headline, exactly:

  > Your business deserves  
  > a better website.

  “better” is lime.
- Supporting copy as specified in the brief.
- Actions: “Explore our work” (lime) and “Let’s discuss your project” (ghost).
- Right side: a composed cluster of three website mockups (desktop + phone) with slight rotation and a slow float. Cursor nudges the cluster by a few degrees. Not a 3D product render of abstract glass.
- A small scroll cue, not a bouncing gimmick.

### Selected work

- Label: “Selected work”.
- Heading: “Work that speaks for itself.”
- Three concept projects, each a large horizontal band (image-dominant, copy in a side column), not a row of equal cards.
- Each band links to `/work/:slug`.
- Visible label on every project: “Website concept”.

### Services

- Numbered rows `01–07` on paper.
- Name, one-sentence business benefit, and a short supporting line.
- Hover shifts the row and reveals a lime index. No icon grid.

Services:

1. Business website development — a clear home online that explains the business and invites enquiries.
2. Landing page development — one focused page for a service, offer, or campaign.
3. Website redesign — replace an outdated site without losing what already works.
4. Responsive web design — a considered layout on phones, tablets, and desktops.
5. WhatsApp integration — a direct line from the page to a conversation.
6. Basic local SEO — sensible structure, titles, and page clarity for local search.
7. Website maintenance — a point of contact after launch for updates and care.

### Why Webshift

Six principles, set as an editorial list, not stat cards:

- Designed around the business.
- Mobile-first experiences.
- Clear communication.
- Thoughtful design.
- Performance-conscious development.
- Direct collaboration.

No metrics, no “guaranteed results”.

### Process

Four steps on a single horizontal rule (stacks on small screens):

1. Discover — understand the business and objectives.
2. Design — create the visual direction and user experience.
3. Develop — build and refine the website.
4. Launch — prepare the website for launch and handover.

### About

- Independent operator. Interest in thoughtful design. Focus on local businesses.
- Portrait is a clearly marked placeholder frame (`Portrait` / configurable later). No invented name credentials, years of experience, or client counts.
- Copy must work if the person’s name is only “the person behind Webshift” until configured.

### FAQ

Accordion. Questions from the brief only. Answers must not promise timelines.

### Contact

- Headline: “Have a business ready for its next digital shift?”
- Fields: name, business name, email, phone, project type, description.
- The form does **not** pretend to submit. It validates locally and shows an honest note that delivery needs a backend or a mail service. A `mailto:` fallback is prepared from config so the visitor is not stranded.
- Secondary actions: WhatsApp and email, both driven by `src/config/site.ts`.

### Footer

Wordmark, navigation, services, contact, socials (rendered only when configured), copyright year.

### Floating WhatsApp

A single lime/graphite button, bottom-right, hidden when it would cover the contact form’s submit area on small screens (it may sit above the footer with safe spacing). No popup, no chat widget.

---

## 7. Project presentation

Each case study (`/work/:slug`) includes:

- Back link, index, “Website concept” label, industry, focus.
- A large composed mockup (desktop and mobile).
- The business problem the concept addresses, the design approach, and what the page is meant to do. Written as a concept, not a result.
- No before/after metrics.

Mockup art direction (built in code, not stock photos):

| Project | Palette inside the mockup | Composition |
| --- | --- | --- |
| Jaswant Telecom | Graphite, paper, a sharp red accent | Repair services, device grid, enquiry bar |
| Northline Air | Paper, ink, a cool steel blue | Service areas, emergency call, WhatsApp strip |
| Helio Field Solar | Warm sand, ink, amber | Credibility header, installation types, lead panel |

Mockups are inline SVG/HTML so they stay sharp and lightweight.

---

## 8. Motion

Library: Motion for React. Three.js is not used; a floating mockup cluster with pointer parallax delivers depth without a WebGL scene.

- Page entrance: headline lines mask-reveal (translateY + opacity), 0.7s, ease `[0.22, 1, 0.36, 1]`.
- Hero mockups: idle float 6s, pointer tilt capped at 6 degrees.
- Buttons: magnetic pull within 40px, spring, disabled when `pointer: coarse` or reduced motion.
- Project bands: image scale 1 → 1.04 on hover, 0.6s.
- Section entrances: one fade/rise per section, not per child, except the process steps which stagger by 80ms.
- Navbar indicator: layout underline.
- `prefers-reduced-motion`: no float, no magnetic, no mask; content is visible immediately.

Animations use `transform` and `opacity` only.

---

## 9. Accessibility

- Semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Visible focus rings in lime on graphite and graphite on paper.
- Contrast: paper text on graphite, graphite text on paper and on lime buttons.
- Mobile menu is a dialog with focus trap behaviour via native `<dialog>` or an equivalent labelled region.
- Form errors are text, not colour alone.
- All mockups have accessible names; decorative shapes are `aria-hidden`.

---

## 10. SEO

- Title: `Webshift — Web design for local businesses`
- Description: the supporting line from the hero, tightened.
- Open Graph title, description, and a generated share image path.
- `sitemap.xml` and `robots.txt` in `public/`.
- One `h1` per page.

---

## 11. Configuration

All contact details, social URLs, and the about-name live in `src/config/site.ts`. Empty socials are not rendered. Placeholder contact values are obviously placeholders (`hello@webshift.studio`, a documented WhatsApp number field) so they can be replaced without hunting through components.

---

## 12. Breakpoints to verify

- 1440 desktop — hero split, project bands side by side, nav inline.
- 768 tablet — hero stacks, projects stack, nav may collapse.
- 390 mobile — type fits, CTA visible, menu usable, no horizontal scroll.

---

## 13. Out of scope

- Real form backend.
- CMS.
- Invented testimonials, team headcount, or performance guarantees.
- Deployment.
