# Virtual State Head — UI/UX Redesign Implementation Plan

## Branch
`feature/vsh-uiux-redesign` (Created from `feature/vsh-premium-rebuild`)

## Status
- **Current Milestone:** Milestone 06 — Mobile + Motion + Visual Refinement
- **Current Task:** Comprehensive multi-viewport testing across 1440x900, 1280x800, 390x844, 375x667; verify word budget (~875 words target), eyebrow count (exactly 3), responsive typography, and tap targets.
- **Files Changed:** `src/components/ui/DemoModal.tsx`, `src/sections/Chapters/Chapter10BookingFAQCTA.tsx`, `task_plan.md`
- **Validation Result:** Milestone 05 passed TypeScript (`tsc --noEmit`), Vite build, Playwright (1440px and 375px: 0 console errors, 0 warnings, 0px horizontal overflow, all 9 FAQs present and interactive).
- **Visual Review Result:** Booking stages (clean linear typography), 9 FAQs (accordions), and final CTA (Midnight Navy monolith with locked CTA) validated.
- **Known Issues:** None
- **Next Task:** Multi-viewport visual audit, word count evaluate check, eyebrow count evaluate check, and refinement.

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

- [ ] **Milestone 06: Mobile + Motion + Visual Refinement**
  - Full multi-viewport verification (1440, 1280, 390, 375).
  - Zero horizontal overflow, no text clipping, tap targets >= 44px, smooth scroll physics, reduced-motion fallback.
  - Word budget verification (~875 words target).
  - Eyebrow count verification (exactly 3 across page).
  - Commit: `feat(vsh): finalize responsive visual system`.

- [ ] **Milestone 07: Legacy Cleanup**
  - Remove truly orphaned components in `src/sections/` legacy folders.
  - Remove unmounted `GlobalMotionOverlay.tsx`.
  - Typecheck (`npx tsc --noEmit`) and build (`npm run build`).
  - Ponytail code debt review & Karpathy surgical diff check.
  - Commit: `refactor(vsh): remove obsolete presentation code`.

- [ ] **Final Quality Gate Checklist Verification**
