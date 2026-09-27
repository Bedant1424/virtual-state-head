import React, { useState, useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { siteContent } from '@/data/siteContent';
import { vshImages } from '@/assets/images';
import { useScrollReveal, revealStyles } from '@/hooks/useMotion';

interface CapabilityVisual {
  id: string;
  number: string;
  title: string;
  shortLabel: string;
  description: string;
  visualConcept: string;
  valueKey: string;
  image: string;
  imageAlt: string;
}

/**
 * CHAPTER 05 — WHAT YOUR BUSINESS GETS
 * Interactive Capability Showcase with split composition:
 * - Editorial Capability List on left / primary area
 * - Large Photographic Preview on right (sticky desktop crossfade)
 * - Mobile inline expandable preview on tap
 * - Active item scales (1.02-1.04x) with Sky Blue (#87CEEB) accent & description reveal
 * - Inactive items gently recede (0.98x, 0.75 opacity)
 * - Zero scroll-position-driven row highlights; purely interactive pointer/focus/tap
 * - Full prefers-reduced-motion support
 */
export const Chapter05WhatYouGet: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal(0.12);
  const { benefits } = siteContent;
  const [activeId, setActiveId] = useState<string>('sales-strategy');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const capabilityItems: CapabilityVisual[] = [
    {
      ...benefits.valueAreas[0], // sales-strategy
      image: vshImages.benefits.strategy,
      imageAlt: 'Senior business executives analyzing commercial sales strategy in corporate boardroom',
    },
    {
      ...benefits.valueAreas[1], // team-performance
      image: vshImages.benefits.team,
      imageAlt: 'Sales leadership team collaborating in structured coaching workshop',
    },
    {
      ...benefits.valueAreas[2], // leadership-support
      image: vshImages.benefits.leadership,
      imageAlt: 'Senior executive advisor mentoring business leadership in private office',
    },
    {
      ...benefits.valueAreas[3], // accountability
      image: vshImages.benefits.accountability,
      imageAlt: 'Commercial sales leadership conducting structured milestone accountability review',
    },
    {
      ...benefits.valueAreas[4], // performance-consulting
      image: vshImages.benefits.consulting,
      imageAlt: 'Strategic sales performance consultant delivering actionable solutions to founders',
    },
  ];

  return (
    <section
      id="benefits"
      ref={sectionRef}
      aria-labelledby="benefits-heading"
      className="py-12 sm:py-16 lg:py-20 bg-white border-b border-gray-200/80 overflow-hidden"
    >
      <Container size="default">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-14 items-start">
          {/* LEFT COLUMN: Editorial Header & Interactive Capability List */}
          <div className="lg:col-span-7">
            {/* Section Eyebrow */}
            <div
              className={`flex items-center gap-2 mb-3 ${revealStyles.transition} ${
                isVisible ? revealStyles.visible : revealStyles.hidden
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#123B63]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#123B63] font-bold">
                {benefits.eyebrow}
              </span>
            </div>

            {/* Section Headline */}
            <div className={`mb-3 ${revealStyles.clipMaskContainer}`}>
              <h2
                id="benefits-heading"
                className={`text-2xl sm:text-3xl lg:text-4xl xl:text-[2.65rem] font-extrabold text-[#0B1F33] font-sans tracking-tight leading-[1.16] ${
                  revealStyles.clipMaskTransition
                } ${isVisible ? revealStyles.clipMaskVisible : revealStyles.clipMaskHidden}`}
              >
                {benefits.headline.primary}{' '}
                <span className="text-[#123B63] block sm:inline">
                  {benefits.headline.secondary}
                </span>
              </h2>
            </div>

            {/* Supporting Sentence */}
            <p
              className={`text-sm sm:text-base text-[#4A5568] font-sans leading-relaxed mb-6 sm:mb-8 max-w-2xl ${
                revealStyles.transition
              } ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
              style={{ transitionDelay: '80ms' }}
            >
              {benefits.introLead}
            </p>

            {/* Capability List: Purely User-Interactive (Hover/Focus/Tap) */}
            <div
              className={`divide-y divide-gray-200 border-t border-b border-gray-200 ${
                revealStyles.transition
              } ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
              style={{ transitionDelay: '140ms' }}
              role="region"
              aria-label="Capabilities Showcase"
            >
              {capabilityItems.map((area) => {
                const isActive = activeId === area.id;

                return (
                  <button
                    key={area.id}
                    type="button"
                    id={`capability-btn-${area.id}`}
                    onClick={() => setActiveId(area.id)}
                    onMouseEnter={() => setActiveId(area.id)}
                    onFocus={() => setActiveId(area.id)}
                    aria-expanded={isActive}
                    aria-controls={`capability-content-${area.id}`}
                    className={`group w-full text-left transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#87CEEB] focus-visible:ring-offset-2 ${
                      isActive
                        ? 'py-4 sm:py-5 pl-4 sm:pl-5 pr-4 bg-[#F3F5F7] border-l-4 border-l-[#87CEEB] shadow-sm rounded-r-sm'
                        : 'py-3.5 sm:py-4 pl-3 sm:pl-4 pr-3 bg-transparent border-l-4 border-l-transparent hover:bg-gray-50/70'
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
                        {area.number}
                      </span>

                      {/* Main Title & Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3
                            className={`font-sans tracking-tight transition-colors duration-200 ${
                              isActive
                                ? 'text-xl sm:text-2xl font-extrabold text-[#0B1F33]'
                                : 'text-lg sm:text-xl font-bold text-[#333333] group-hover:text-[#0B1F33]'
                            }`}
                          >
                            {area.shortLabel}
                          </h3>

                          {/* Active Pill Badge */}
                          <span
                            className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-sm transition-opacity duration-200 shrink-0 ${
                              isActive
                                ? 'bg-[#123B63]/10 text-[#123B63] font-semibold opacity-100'
                                : 'opacity-0'
                            }`}
                          >
                            ACTIVE
                          </span>
                        </div>

                        {/* Expandable Approved Description */}
                        <div
                          id={`capability-content-${area.id}`}
                          className={`transition-all duration-300 ease-out overflow-hidden ${
                            isActive
                              ? 'max-h-28 opacity-100 mt-2'
                              : 'max-h-0 opacity-0 mt-0 pointer-events-none'
                          }`}
                        >
                          <p className="text-xs sm:text-sm text-[#4A5568] font-sans leading-relaxed">
                            {area.description}
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
                          <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden bg-[#0B1F33] border border-gray-200/90 shadow-sm">
                            <img
                              src={area.image}
                              alt={area.imageAlt}
                              className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                                isActive && !prefersReducedMotion ? 'scale-105' : 'scale-100'
                              }`}
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/80 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute bottom-2.5 left-3 text-white pointer-events-none">
                              <span className="text-[10px] font-mono uppercase tracking-widest text-[#87CEEB] font-bold">
                                {area.visualConcept}
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
          </div>

          {/* RIGHT COLUMN: Desktop Sticky Photographic Preview Frame (>= lg) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28 self-start">
            <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden bg-[#0B1F33] border border-gray-200/90 shadow-lg">
              {capabilityItems.map((item) => {
                const isSelected = activeId === item.id;

                return (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                      isSelected ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                    aria-hidden={!isSelected}
                  >
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                        isSelected && !prefersReducedMotion ? 'scale-105' : 'scale-100'
                      }`}
                      loading="lazy"
                    />

                    {/* Gradient Overlay for Editorial Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/90 via-[#0B1F33]/25 to-transparent pointer-events-none" />

                    {/* Overlay Metadata Tagging */}
                    <div className="absolute bottom-0 inset-x-0 p-5 text-white pointer-events-none">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#87CEEB] font-bold">
                          CAPABILITY {item.number}
                        </span>
                        <span className="text-white/40">•</span>
                        <span className="text-[10px] font-mono text-white/70 uppercase">
                          {item.valueKey}
                        </span>
                      </div>
                      <p className="text-lg font-bold font-sans text-white tracking-tight leading-snug">
                        {item.shortLabel}
                      </p>
                      <p className="text-xs text-white/80 font-sans mt-0.5 line-clamp-1">
                        {item.visualConcept}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Subtle Editorial Caption below photo */}
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
              <span>SYSTEMIC CAPABILITY SHOWCASE</span>
              <span className="text-[#123B63] font-semibold">ODISHA MSME LEADERSHIP</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Chapter05WhatYouGet;
