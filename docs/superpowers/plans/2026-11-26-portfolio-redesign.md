# Portfolio Redesign Implementation Plan

> **For agentic workers:** Execute inline in this session. Work from the existing repository and preserve user content unless the requirements below explicitly change it.

**Goal:** Rebuild the public portfolio as a personal, evidence-led site focused on PHP/Laravel, Java/POO, Supabase and the verified After'ish and Nexus Flow work.

**Architecture:** Keep the existing Next application and data-driven project model. Change the visible page composition and copy, revise the data records, and add cropped real screenshots as static public assets; do not add runtime dependencies or new services.

**Tech Stack:** Existing Next app, React, Tailwind CSS, static image assets.

---

### Task 1: Correct portfolio facts and project records

**Files:**
- Modify: `lib/data.ts`

- [ ] Rewrite the profile summary in direct French, keeping the BTS SIO SLAM and September 2027 Licence 3 facts.
- [ ] Keep After'ish first. Use the reported work: dynamic WordPress events via WP_Query, membership profile, 150-day countdown, HelloAsso, DNS/SSL; preserve the CV's reported 200 members and 23 paid memberships.
- [ ] Describe the SaaS work as a supervised contribution: signup validation, cleanup after partial failure, tenant-isolation checks, functional QA, and subdomain-routing review. Avoid claiming authorship of the whole SaaS.
- [ ] Replace the SaaS code sample with a clearly labeled, language-neutral sequence explaining validation, account/workspace creation, linking, and compensating cleanup. Do not call it an atomic distributed transaction.
- [ ] Remove rendered references to Next.js, TypeScript, AI tools, and the AI skills category. Reorganize visible competencies around PHP/Laravel, Java/POO including inheritance and encapsulation, SQL, PostgreSQL/Supabase, JavaScript, Python, CMS, deployment, and SEO.
- [ ] Correct Capte and MindLoop descriptions from their local project sources. Use Supabase on the projects that actually use it; do not claim it for unrelated work.
- [ ] Use year-only dating for Nexus Flow and remove image captions that don't match their actual screenshots.

### Task 2: Replace the repeated card-heavy composition

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] Recompose the profile area with a straightforward statement, portrait, and simple contact links.
- [ ] Present After'ish as the lead case study with a prominent real-site image, outcome, contribution, and PHP example.
- [ ] Present Nexus Flow OS second with verified dashboard/branding captures and the signup-failure explanation.
- [ ] Reduce duplicate experience/project copy and replace repeated boxed chips with a compact, readable skills layout.
- [ ] Use warm white, ink, and one restrained red accent; use clear type hierarchy, rules, and generous spacing instead of decorative gradients, rounded badges, and emoji.
- [ ] Preserve semantic headings, visible focus, mobile navigation, keyboard behavior, and reduced-motion support.
- [ ] Update the page metadata to describe the target profile without stack names the user asked to remove.

### Task 3: Prepare accurate screenshot assets

**Files:**
- Create: `public/realisations/portfolio/afterish-home.webp`
- Create: `public/realisations/portfolio/afterish-member.webp`
- Create: `public/realisations/portfolio/saas-dashboard.webp`
- Create: `public/realisations/portfolio/saas-branding.webp`
- Modify: `lib/data.ts`

- [ ] Use the actual After'ish homepage and member/event screens.
- [ ] Crop the real SaaS dashboard and branding settings to the application viewport, excluding browser chrome and the unrelated AI menu item.
- [ ] Do not use the current falsely mapped After'ish/SaaS images or the report's mislabeled Kanban/invoice figures.
- [ ] Verify each asset against its caption before using it.

### Task 4: Build and publish

**Files:**
- Review: all changed site files and static assets

- [ ] Run `npm run build` from the repository root.
- [ ] Run `git diff --check` and inspect the final diff for factual claims and screenshot-label mismatches.
- [ ] Commit the PRD, implementation plan, site changes, and assets together.
- [ ] Push `main` so the existing Vercel deployment updates, then verify the public HTML contains the new copy and no removed visible skill labels.
