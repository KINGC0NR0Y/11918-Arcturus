# ARCTURUS #11918 Website — Project Plan

Internal planning reference for the team. Not shown on the public site.

## Six-week rollout

**Week 1 — Planning & Organization**
Finalize the site's pages, collect what we already know about ARCTURUS, and
identify what's still missing. Organize the roster, sponsor info, contact
info, photos, and logos. Anything we don't have yet (robot specs, outreach
numbers) gets marked `TBD` instead of invented. End of week: a clear plan for
what the site includes and who owns what.

**Week 2 — Design & UX**
Lock the visual direction around ARCTURUS's orange/blue/gray palette.
Wireframe the main pages and decide where information, photos, and CTAs go.
Confirm the layout works on both desktop and mobile. End of week: a visual
design ready to build against.

**Week 3 — Website Development**
Build the navbar, homepage, footer, and core pages (About, Team, Sponsors,
Contact). Add the 15 current roster members and the 8 sponsors. Goal: a
functional site with consistent design across every page.

**Week 4 — Technical Content & Features**
Build out Robot, Engineering, Competitions, Outreach, Gallery, Join Us, and
News. Add robot info, CAD, photos, and competition results as they become
available — everything else stays `TBD` and gets updated through the season.

**Week 5 — Testing & Improvements**
Review for incorrect info, typos, broken links, and formatting issues. Test
across screen sizes. Check color, contrast, and accessibility. Goal: a site
the team is comfortable showing to students, parents, and sponsors.

**Week 6 — Launch & Maintenance**
Final review, confirm contact/social links work, and publish. Announce
through social media and share with the school, sponsors, and families.
Establish who keeps the site updated through the season — new robot
developments, competitions, outreach events, photos, and results.

## Team responsibilities (suggested)

| Area                        | Owner                          |
| ---------------------------- | ------------------------------- |
| Website leadership           | Co-Captains                     |
| Technical development        | Software                        |
| Robot content                | Hardware + CAD                  |
| Engineering documentation    | Hardware + CAD + Software       |
| Sponsors                     | Business                        |
| Outreach                     | Business                        |
| Team information             | Business                        |
| Strategy                     | Strategy Lead                   |
| Photography                  | TBD                              |
| Media                        | TBD                              |
| Website maintenance          | TBD                              |

These assignments are a starting point — reassign as needed. Whoever owns a
section should know it maps to a specific file under `lib/data/` (see the
table in the root `README.md`).

## A note on the roster count

This master prompt states the team has "16 listed students," but only 15
names were actually provided (4 leads + 11 members). Rather than invent a
16th student, the site derives its "Team Members" stat directly from the
roster array in `lib/data/team.ts` (`teamMembers.length`), so the number is
always accurate and updates automatically the moment a 16th student is added
to that file.
