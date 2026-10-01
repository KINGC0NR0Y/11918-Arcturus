# ARCTURUS #11918 — Team Website

The public website for **ARCTURUS #11918**, a student robotics team at Tom Glenn
High School (Leander, TX). Built with Next.js (App Router), TypeScript, and
Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve the production build
npm run lint      # ESLint
```

## Updating content

Almost everything visitor-facing is driven by plain data files under
`lib/data/` — you generally never need to touch a component to update text,
add a sponsor, or log a competition result.

| To update...              | Edit...                              |
| -------------------------- | ------------------------------------- |
| Team roster / leads        | `lib/data/team.ts`                    |
| Sponsors                   | `lib/data/sponsors.ts`                |
| Homepage stats             | `lib/data/stats.ts`                   |
| Robot specs & subsystems   | `lib/data/robot.ts`                   |
| Engineering sections/posts | `lib/data/engineering.ts`             |
| Competition history        | `lib/data/competitions.ts`            |
| Outreach stats & events    | `lib/data/outreach.ts`                |
| News articles               | `lib/data/news.ts`                    |
| Gallery photos              | `lib/data/gallery.ts` (+ files in `public/gallery/`) |
| Contact / social info      | `lib/data/social.ts`                  |
| Nav / footer links         | `lib/data/nav.ts`                     |

**Rule:** never invent a number, result, or spec. If it isn't known yet, leave
the field as `"TBD"` — every page is built to render that state cleanly, and
it's easy to search the codebase for `TBD` to see what's still outstanding.

### Adding photos

Drop images into `public/` (e.g. `public/gallery/`, `public/team/`,
`public/sponsors/`) and reference them by path in the relevant data file —
`image` on a team member, `logo` on a sponsor, or a new entry in
`lib/data/gallery.ts`.

## Tech notes

- **Next.js App Router** — one folder per route under `app/`.
- **Tailwind CSS v4** — design tokens (colors, fonts, animation) are defined
  in `app/globals.css` via `@theme`, not a `tailwind.config.js`.
- **Fonts** — Space Grotesk (headings), Inter (body), JetBrains Mono
  (technical labels), loaded via `next/font/google` in `app/layout.tsx`.
- **No backend** — the contact form opens the visitor's email client via a
  `mailto:` link rather than posting to a server. If the team later wants a
  hosted inbox/CRM, swap `components/contact/ContactForm.tsx`'s submit
  handler for an API route.
- **`components/tech/TechText.tsx`** — the animated hero wordmark, adapted
  from an open-source React Bits component into a plain client component.

See `docs/PROJECT-PLAN.md` for the season rollout plan and team
responsibilities this site was originally built against.
