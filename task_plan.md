# Virtual State Head — UI/UX Redesign Implementation Plan

## Branch
`feature/vsh-uiux-redesign` (Created from `feature/vsh-premium-rebuild`)

## Status
- **Current Milestone:** Milestone 07 — Legacy Cleanup
- **Current Task:** Audit unreferenced legacy sections in `src/sections/`, safely remove unused presentation files and unmounted overlays, verify TypeScript build, and perform final code quality check.
- **Files Changed:** `src/components/layout/Footer.tsx`, `src/components/layout/Header.tsx`, `src/components/ui/DemoModal.tsx`, `src/sections/Chapters/Chapter02Problem.tsx`, `src/sections/Chapters/Chapter03IntroducingVSH.tsx`, `src/sections/Chapters/Chapter06Engine.tsx`, `src/sections/Chapters/Chapter09PerformanceGapBatch.tsx`, `src/sections/Chapters/Chapter10BookingFAQCTA.tsx`, `src/styles/globals.css`, `task_plan.md`
- **Validation Result:** Milestone 06 passed: Multi-viewport audit (1440, 1280, 390, 375: 0px overflow), Eyebrow count strictly 3, tap targets 100% >= 44px (0 issues), 0 console errors, 0 warnings.
- **Visual Review Result:** Clean responsive scaling, fluid typography, full reduced-motion accessibility.
- **Known Issues:** None
- **Next Task:** Milestone 07 legacy component deletion and final quality gate.

---

## Redesign Milestones Roadmap

- [x] **Milestone 01: Shell + Global Styles + Hero + Problem**
  - Verified global fonts (Manrope), master 8-color palette tokens, header/footer shell.
  - Rebuilt `Chapter01Hero.tsx`: Asymmetric Editorial Split (5 left / 7 right), 16:9 industrial dawn photo, two-line H1, Royal Bal sign-off, locked CTA.
  - Rebuilt `Chapter02Problem.tsx`: Solitary boardroom chiaroscuro photo, 3 core realities, 5 operational gaps in spacious typography, closing source principle (no mathematical lockups or formula slogans).
  - Playwright visual audit across 1440 and 375 viewports (0 console errors, 0px overflow).
  - Commit: `feat(vsh): rebuild hero and problem experience`.

- [x] **Milestone 02: Introducing VSH + Coaches**
  - Rebuilt `Chapter03IntroducingVSH.tsx`: Candid advisory photo (`introducing_vsh_advisory.jpg`), H2 headline, locked CTA, six capability focus areas in sparse, unboxed, asymmetrical placement with generous whitespace (no rigid 3-column grid).
  - Rebuilt `Chapter04Coaches.tsx`: High-gravity Midnight Navy (`#0B1F33`), Royal Bal dominant frame with verified 30+ yrs bio, Saroj Kumar Panda & Sudeep Mohanty paired frames with verified bios, architectural monogram frames (`RB`, `SP`, `SM`).
  - Playwright visual audit across 1440 and 375 viewports (0 console errors, 0px overflow).
  - Commit: `feat(vsh): rebuild leadership and coaching experience`.

- [x] **Milestone 03: What You Get + Sales Performance Engine**
  - Rebuilt `Chapter05WhatYouGet.tsx`: Pure typography-first, generous whitespace, 5 horizontal architectural bands (Strategy, Capability, Leadership, Accountability, Consulting). No cards, no icons.
  - Rebuilt `Chapter06Engine.tsx`: Optical crystal prism artwork (`engine_optical_prism.jpg`), 3 strictly named elements (`TRAINING`, `TECHNOLOGY`, `ACCOUNTABILITY`), climax formula lockup (`TRAINING + TECHNOLOGY + ACCOUNTABILITY = SALES PERFORMANCE ENGINE`), locked CTA. No UI controls, no cards, no node diagrams.
  - Playwright visual audit across 1440 and 375 viewports (0 console errors, 0px overflow).
  - Commit: `feat(vsh): rebuild value and performance engine sections`.

- [x] **Milestone 04: Frameworks + Audience + Batch**
  - Rebuilt `Chapter07FrameworksProcess.tsx`: Field reportage photo (`how_it_works_field.jpg`), 5 named Royal Way frameworks, 6 engagement stages purely as typography (no arrows, no connectors, no rail, no flowchart, no progress bar).
  - Rebuilt `Chapter08AudienceWhyVSH.tsx`: Dominant 3:4 vertical editorial portrait (`audience_industrial_leader.jpg`), concise qualification criteria, 5 quiet secondary differentiators beneath. No dual dense lists, no cards.
  - Rebuilt `Chapter09PerformanceGapBatch.tsx`: Structural tension photo (`performance_gap_tension.jpg`), 8 approved performance impacts in quiet 2-col matrix, sculptural '10' cohort block, locked CTA.
  - Playwright visual audit across 1440 and 375 viewports (0 console errors, 0px overflow).
  - Commit: `feat(vsh): rebuild methodology and fit experience`.

- [x] **Milestone 05: Booking + FAQ + Final CTA**
  - Rebuilt `Chapter10BookingFAQCTA.tsx`: 4 approved booking stages (`01 Book Your Call` to `04 Discuss the Engagement`), all 9 master FAQs with smooth keyboard-accessible accordions (collapsed by default), decisive Midnight Navy closing canvas with locked CTA.
  - Cleaned `DemoModal.tsx` input value placeholder to "Active Sales Team" (removed invented 3 - 25+).
  - Playwright visual audit across 1440 and 375 viewports (0 console errors, 0px overflow).
  - Commit: `feat(vsh): rebuild conversion experience`.

- [x] **Milestone 06: Mobile + Motion + Visual Refinement**
  - Full multi-viewport verification (1440, 1280, 390, 375): passed with 0px overflow across all breakpoints.
  - Eyebrow count strictly verified to exactly 3 instances of `.tracking-widest.uppercase.text-xs` (Hero, Coaches, Conversion).
  - Mobile tap targets verified to 100% compliance (all buttons/links >= 44x44px).
  - Prefers-reduced-motion verified with global and component fallbacks.
  - Zero console errors and zero warnings.
  - Commit: `feat(vsh): finalize responsive visual system`.

- [ ] **Milestone 07: Legacy Cleanup**
  - Remove truly orphaned components in `src/sections/` legacy folders.
  - Remove unmounted `GlobalMotionOverlay.tsx`.
  - Typecheck (`npx tsc --noEmit`) and build (`npm run build`).
  - Ponytail code debt review & Karpathy surgical diff check.
  - Commit: `refactor(vsh): remove obsolete presentation code`.

- [ ] **Final Quality Gate Checklist Verification**
