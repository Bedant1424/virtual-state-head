import React, { useState, useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { vshImages } from '@/assets/images';
import { siteContent } from '@/data/siteContent';
import { useScrollReveal, revealStyles } from '@/hooks/useMotion';

interface AudienceProfile {
  id: string;
  number: string;
  title: string;
  supporting: string;
  cropFocus: string;
}

interface WhyVshItem {
  number: string;
  title: string;
  description: string;
  tag: string;
}

/**
 * CHAPTER 08 — WHO WE HELP & WHY VIRTUAL STATE HEAD
 * Dual-part interactive qualification experience:
 *
 * PART 1: WHO WE HELP (Audience Qualification Selector + Industrial Leader Portrait)
 * - 01 MSME Owners
 * - 02 Founders
 * - 03 Directors
 * - 04 Business Leaders
 * - 05 Existing Sales Teams
 *
 * PART 2: WHY VIRTUAL STATE HEAD (Strategic Differentiators + Executive Consultation Anchor)
 * - 01 Experienced Sales Leadership
 * - 02 A Broader Performance Perspective
 * - 03 Practical Business Focus
 * - 04 Structured Support
 * - 05 Designed for MSMEs
 *
 * Controlled entirely by pointer hover / keyboard focus / mobile tap. Zero scroll highlighting.
 * Full prefers-reduced-motion & keyboard accessibility support.
 */
export const Chapter08AudienceWhyVSH: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal(0.1);
  const [activeAudienceId, setActiveAudienceId] = useState<string>('msme-owners');
  const [activeWhyId, setActiveWhyId] = useState<string>('01');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const audienceProfiles: AudienceProfile[] = [
    {
      id: 'msme-owners',
      number: '01',
      title: 'MSME Owners',
      supporting:
        'Business owners seeking experienced sales leadership and strategic direction without adding another full-time senior executive.',
      cropFocus: 'scale-105 object-top',
    },
    {
      id: 'founders',
      number: '02',
      title: 'Founders',
      supporting:
        'Founders with active sales teams who need stronger commercial discipline, clearer priorities, and structured review rhythms.',
      cropFocus: 'scale-105 object-center',
    },
    {
      id: 'directors',
      number: '03',
      title: 'Directors',
      supporting:
        'Managing directors seeking higher follow-through, structured accountability, and team performance development.',
      cropFocus: 'scale-105 object-[center_top]',
    },
    {
      id: 'business-leaders',
      number: '04',
      title: 'Business Leaders',
      supporting:
        'Commercial leaders managing inconsistent sales performance and seeking structured operational routines.',
      cropFocus: 'scale-105 object-center',
    },
    {
      id: 'existing-sales-teams',
      number: '05',
      title: 'Existing Sales Teams',
      supporting:
        'Organizations with an active sales team in place that need practical coaching, customer engagement guidance, and daily consistency.',
      cropFocus: 'scale-105 object-[center_bottom]',
    },
  ];

  const whyVshItems: WhyVshItem[] = [
    {
      ...siteContent.whyVsh[0],
      tag: 'EXPERIENCED LEADERSHIP',
    },
    {
      ...siteContent.whyVsh[1],
      tag: 'SYSTEMIC PERSPECTIVE',
    },
    {
      ...siteContent.whyVsh[2],
      tag: 'COMMERCIAL REALITY',
    },
    {
      ...siteContent.whyVsh[3],
      tag: 'ACCOUNTABILITY RHYTHM',
    },
    {
      ...siteContent.whyVsh[4],
      tag: 'MSME MODEL',
    },
  ];

  const activeAudience =
    audienceProfiles.find((p) => p.id === activeAudienceId) || audienceProfiles[0];
  const activeWhy = whyVshItems.find((w) => w.number === activeWhyId) || whyVshItems[0];

  return (
    <section
      id="who-we-help"
      ref={sectionRef}
      aria-labelledby="audience-heading"
      className="py-12 sm:py-16 lg:py-20 bg-[#F3F5F7] border-b border-gray-200/80 overflow-hidden"
    >
      <Container size="default">
        {/* ============================================================ */}
        {/* PART 1: WHO WE HELP (AUDIENCE QUALIFICATION EXPERIENCE)      */}
        {/* ============================================================ */}
        <div className="mb-14 sm:mb-20">
          {/* Eyebrow & Main Headline */}
          <div className="max-w-3xl mb-8 sm:mb-10">
            <div
              className={`flex items-center gap-2 mb-2.5 ${revealStyles.transition} ${
                isVisible ? revealStyles.visible : revealStyles.hidden
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#123B63]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#123B63] font-bold">
                COMMERCIAL QUALIFICATION • OPERATING ENTERPRISES
              </span>
            </div>

            <div className={revealStyles.clipMaskContainer}>
              <h2
                id="audience-heading"
                className={`text-2xl sm:text-3xl lg:text-4xl xl:text-[2.65rem] font-extrabold text-[#0B1F33] font-sans tracking-tight leading-[1.16] mb-3 ${
                  revealStyles.clipMaskTransition
                } ${isVisible ? revealStyles.clipMaskVisible : revealStyles.clipMaskHidden}`}
              >
                Is Virtual State Head{' '}
                <span className="text-[#123B63] block sm:inline">
                  Right for Your Business?
                </span>
              </h2>
            </div>

            <p
              className={`text-sm sm:text-base text-[#4A5568] font-sans leading-relaxed max-w-2xl ${
                revealStyles.transition
              } ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
              style={{ transitionDelay: '80ms' }}
            >
              Virtual State Head works with established MSMEs in Odisha that already have commercial sales activity and need experienced leadership to build consistent execution.
            </p>
          </div>

          {/* Audience Split: Interactive Selector Left, Industrial Leader Portrait Right */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-14 items-start">
            {/* Left Column: Interactive Audience Selector */}
            <div
              className={`lg:col-span-7 divide-y divide-gray-200 border-t border-b border-gray-200 ${
                revealStyles.transition
              } ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
              style={{ transitionDelay: '140ms' }}
              role="region"
              aria-label="Who We Help Selector"
            >
              {audienceProfiles.map((profile) => {
                const isActive = activeAudienceId === profile.id;

                return (
                  <button
                    key={profile.id}
                    type="button"
                    id={`audience-btn-${profile.id}`}
                    onClick={() => setActiveAudienceId(profile.id)}
                    onMouseEnter={() => setActiveAudienceId(profile.id)}
                    onFocus={() => setActiveAudienceId(profile.id)}
                    aria-expanded={isActive}
                    aria-controls={`audience-content-${profile.id}`}
                    className={`group w-full text-left transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#87CEEB] focus-visible:ring-offset-2 ${
                      isActive
                        ? 'py-4 sm:py-5 pl-4 sm:pl-5 pr-4 bg-white border-l-4 border-l-[#87CEEB] shadow-sm rounded-r-sm'
                        : 'py-3.5 sm:py-4 pl-3 sm:pl-4 pr-3 bg-transparent border-l-4 border-l-transparent hover:bg-white/70'
                    } ${
                      !prefersReducedMotion &&
                      (isActive
                        ? 'transform scale-[1.02] sm:scale-[1.025] z-10'
                        : 'transform scale-[0.985] opacity-75 hover:opacity-90')
                    }`}
                  >
                    <div className="flex items-baseline gap-3 sm:gap-4">
                      {/* Monospace Numeral */}
                      <span
                        className={`text-xs sm:text-sm font-mono font-bold transition-colors duration-200 w-6 shrink-0 ${
                          isActive ? 'text-[#123B63]' : 'text-[#6B7280]'
                        }`}
                      >
                        {profile.number}
                      </span>

                      {/* Main Title & Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3
                            className={`font-sans tracking-tight transition-colors duration-200 ${
                              isActive
                                ? 'text-lg sm:text-xl lg:text-2xl font-extrabold text-[#0B1F33]'
                                : 'text-base sm:text-lg lg:text-xl font-bold text-[#333333] group-hover:text-[#0B1F33]'
                            }`}
                          >
                            {profile.title}
                          </h3>

                          {/* Active Pill Badge */}
                          <span
                            className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-sm transition-opacity duration-200 shrink-0 ${
                              isActive
                                ? 'bg-[#123B63]/10 text-[#123B63] font-semibold opacity-100'
                                : 'opacity-0'
                            }`}
                          >
                            QUALIFIED
                          </span>
                        </div>

                        {/* Approved Supporting Sentence */}
                        <div
                          id={`audience-content-${profile.id}`}
                          className={`transition-all duration-300 ease-out overflow-hidden ${
                            isActive
                              ? 'max-h-24 opacity-100 mt-2'
                              : 'max-h-0 opacity-0 mt-0 pointer-events-none'
                          }`}
                        >
                          <p className="text-xs sm:text-sm text-[#4A5568] font-sans leading-relaxed">
                            {profile.supporting}
                          </p>
                        </div>

                        {/* Mobile Inline Visual Preview (< lg) */}
                        <div
                          className={`lg:hidden transition-all duration-300 ease-out overflow-hidden ${
                            isActive
                              ? 'max-h-64 opacity-100 mt-3'
                              : 'max-h-0 opacity-0 mt-0 pointer-events-none'
                          }`}
                          aria-hidden={!isActive}
                        >
                          <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden bg-[#0B1F33] border border-gray-300 shadow-sm">
                            <img
                              src={vshImages.audience}
                              alt="Odisha industrial manufacturing business leader at operating facility"
                              className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                                isActive && !prefersReducedMotion
                                  ? 'scale-105'
                                  : 'scale-100'
                              }`}
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/80 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute bottom-2.5 left-3 text-white pointer-events-none">
                              <span className="text-[10px] font-mono uppercase tracking-widest text-[#87CEEB] font-bold">
                                {profile.title} • ODISHA MSME
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Desktop Sticky Industrial Leader Portrait (>= lg) */}
            <div className="hidden lg:block lg:col-span-5 sticky top-28 self-start">
              <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-[#0B1F33] border border-gray-300 shadow-lg">
                <img
                  src={vshImages.audience}
                  alt="Odisha industrial manufacturing business leader at operating facility"
                  className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                    !prefersReducedMotion ? activeAudience.cropFocus : 'scale-100'
                  }`}
                  loading="lazy"
                />

                {/* Editorial Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/90 via-[#0B1F33]/25 to-transparent pointer-events-none" />

                {/* Overlay Metadata Tagging */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white pointer-events-none">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#87CEEB] font-bold">
                      PROFILE {activeAudience.number}
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="text-[10px] font-mono text-white/70 uppercase">
                      QUALIFIED ENTERPRISE
                    </span>
                  </div>
                  <p className="text-lg font-bold font-sans text-white tracking-tight leading-snug">
                    {activeAudience.title}
                  </p>
                  <p className="text-xs text-white/80 font-sans mt-0.5 line-clamp-2">
                    {activeAudience.supporting}
                  </p>
                </div>
              </div>

              {/* Editorial Caption below Photo */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
                <span>ODISHA INDUSTRIAL SECTOR</span>
                <span className="text-[#123B63] font-semibold">OPERATING ENTERPRISES</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* PART 2: WHY VIRTUAL STATE HEAD (STRATEGIC DIFFERENTIATORS)   */}
        {/* ============================================================ */}
        <div className="pt-10 sm:pt-14 border-t border-gray-300/80">
          {/* Eyebrow & Headline */}
          <div className="max-w-3xl mb-8 sm:mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#123B63]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#123B63] font-bold">
                STRATEGIC ADVANTAGES • WHY THIS MODEL MAKES SENSE
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F33] font-sans tracking-tight leading-tight mb-2">
              Why Virtual State Head
            </h3>
            <p className="text-sm sm:text-base text-[#4A5568] font-sans leading-relaxed">
              Five pragmatic advantages designed specifically for operating MSMEs seeking senior sales leadership without full-time overhead.
            </p>
          </div>

          {/* Why VSH Split: Interactive Differentiators Left, Consultation Anchor Right */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-14 items-start">
            {/* Left Column: Interactive Differentiator List */}
            <div
              className="lg:col-span-7 divide-y divide-gray-200 border-t border-b border-gray-200"
              role="region"
              aria-label="Why VSH Differentiators"
            >
              {whyVshItems.map((item) => {
                const isActive = activeWhyId === item.number;

                return (
                  <button
                    key={item.number}
                    type="button"
                    id={`why-btn-${item.number}`}
                    onClick={() => setActiveWhyId(item.number)}
                    onMouseEnter={() => setActiveWhyId(item.number)}
                    onFocus={() => setActiveWhyId(item.number)}
                    aria-expanded={isActive}
                    aria-controls={`why-content-${item.number}`}
                    className={`group w-full text-left transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#87CEEB] focus-visible:ring-offset-2 ${
                      isActive
                        ? 'py-4 sm:py-5 pl-4 sm:pl-5 pr-4 bg-white border-l-4 border-l-[#123B63] shadow-sm rounded-r-sm'
                        : 'py-3.5 sm:py-4 pl-3 sm:pl-4 pr-3 bg-transparent border-l-4 border-l-transparent hover:bg-white/70'
                    } ${
                      !prefersReducedMotion &&
                      (isActive
                        ? 'transform scale-[1.02] sm:scale-[1.025] z-10'
                        : 'transform scale-[0.985] opacity-75 hover:opacity-90')
                    }`}
                  >
                    <div className="flex items-baseline gap-3 sm:gap-4">
                      {/* Monospace Numeral */}
                      <span
                        className={`text-xs sm:text-sm font-mono font-bold transition-colors duration-200 w-6 shrink-0 ${
                          isActive ? 'text-[#123B63]' : 'text-[#6B7280]'
                        }`}
                      >
                        {item.number}
                      </span>

                      {/* Main Title & Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4
                            className={`font-sans tracking-tight transition-colors duration-200 ${
                              isActive
                                ? 'text-lg sm:text-xl lg:text-2xl font-extrabold text-[#0B1F33]'
                                : 'text-base sm:text-lg lg:text-xl font-bold text-[#333333] group-hover:text-[#0B1F33]'
                            }`}
                          >
                            {item.title}
                          </h4>

                          {/* Active Pill Badge */}
                          <span
                            className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-sm transition-opacity duration-200 shrink-0 ${
                              isActive
                                ? 'bg-[#123B63]/10 text-[#123B63] font-semibold opacity-100'
                                : 'opacity-0'
                            }`}
                          >
                            ADVANTAGE
                          </span>
                        </div>

                        {/* Approved Description */}
                        <div
                          id={`why-content-${item.number}`}
                          className={`transition-all duration-300 ease-out overflow-hidden ${
                            isActive
                              ? 'max-h-28 opacity-100 mt-2'
                              : 'max-h-0 opacity-0 mt-0 pointer-events-none'
                          }`}
                        >
                          <p className="text-xs sm:text-sm text-[#4A5568] font-sans leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Mobile Inline Visual Preview (< lg) */}
                        <div
                          className={`lg:hidden transition-all duration-300 ease-out overflow-hidden ${
                            isActive
                              ? 'max-h-64 opacity-100 mt-3'
                              : 'max-h-0 opacity-0 mt-0 pointer-events-none'
                          }`}
                          aria-hidden={!isActive}
                        >
                          <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden bg-[#0B1F33] border border-gray-300 shadow-sm">
                            <img
                              src={vshImages.whyVsh}
                              alt="Sales leadership consultation in MSME operating facility"
                              className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                                isActive && !prefersReducedMotion
                                  ? 'scale-105'
                                  : 'scale-100'
                              }`}
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/80 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute bottom-2.5 left-3 text-white pointer-events-none">
                              <span className="text-[10px] font-mono uppercase tracking-widest text-[#87CEEB] font-bold">
                                {item.tag}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Desktop Sticky Consultation Anchor Visual (>= lg) */}
            <div className="hidden lg:block lg:col-span-5 sticky top-28 self-start">
              <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden bg-[#0B1F33] border border-gray-300 shadow-lg">
                <img
                  src={vshImages.whyVsh}
                  alt="Sales leadership consultation in MSME operating facility"
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                    !prefersReducedMotion ? 'scale-105' : 'scale-100'
                  }`}
                  loading="lazy"
                />

                {/* Editorial Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/90 via-[#0B1F33]/25 to-transparent pointer-events-none" />

                {/* Overlay Metadata Tagging */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white pointer-events-none">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#87CEEB] font-bold">
                      ADVANTAGE {activeWhy.number}
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="text-[10px] font-mono text-white/70 uppercase">
                      {activeWhy.tag}
                    </span>
                  </div>
                  <p className="text-lg font-bold font-sans text-white tracking-tight leading-snug">
                    {activeWhy.title}
                  </p>
                  <p className="text-xs text-white/80 font-sans mt-0.5 line-clamp-2">
                    {activeWhy.description}
                  </p>
                </div>
              </div>

              {/* Editorial Caption below Photo */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
                <span>STRATEGIC EXECUTION PARTNERSHIP</span>
                <span className="text-[#123B63] font-semibold">ODISHA COMMERCIAL FOCUS</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Chapter08AudienceWhyVSH;
