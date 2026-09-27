import React, { useState, useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { vshImages } from '@/assets/images';
import { siteContent } from '@/data/siteContent';
import { useScrollReveal, revealStyles } from '@/hooks/useMotion';

interface FrameworkItem {
  id: string;
  number: string;
  name: string;
  description: string;
  theme: string;
  image: string;
  imageAlt: string;
}

interface ProcessStageItem {
  id: string;
  number: string;
  name: string;
  description: string;
  tag: string;
}

/**
 * CHAPTER 07 — FRAMEWORKS & ENGAGEMENT PROCESS
 * One unified editorial chapter that connects:
 * 1. Five Named Frameworks (Interactive Editorial Selector + Large Photo Preview)
 * 2. How the Engagement Works (Interactive 6-Stage Process Showcase)
 *
 * Interaction is purely pointer / focus / tap driven. Zero scroll-highlighting.
 * Full keyboard navigation & prefers-reduced-motion support.
 */
export const Chapter07FrameworksProcess: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal(0.1);
  const [activeFrameworkId, setActiveFrameworkId] = useState<string>('royal-selling-formula');
  const [activeStageId, setActiveStageId] = useState<string>('assess');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const frameworksData: FrameworkItem[] = [
    {
      ...siteContent.frameworks[0], // Royal Selling Formula
      description:
        'Structured sales methodology guiding conversations from initial customer engagement to qualified commitment.',
      theme: 'Strategic Consultative Dialogue',
      image: vshImages.frameworks.royalSelling,
      imageAlt: 'Senior sales professional in strategic consultative client conversation',
    },
    {
      ...siteContent.frameworks[1], // Strategic Negotiator
      description:
        'Commercial negotiation framework designed to protect value, manage concessions, and secure alignment.',
      theme: 'Value Protection & Alignment',
      image: vshImages.frameworks.strategicNegotiator,
      imageAlt: 'Senior business executives conducting high-stakes commercial negotiation',
    },
    {
      ...siteContent.frameworks[2], // Sense Selling
      description:
        'Needs-discovery approach focused on deeply understanding customer context, priorities, and buying motivation.',
      theme: 'Empathetic Needs Discovery',
      image: vshImages.frameworks.senseSelling,
      imageAlt: 'Sales advisor actively listening to client operational challenges in discovery session',
    },
    {
      ...siteContent.frameworks[3], // Performance Consulting
      description:
        'Diagnostic advisory method identifying sales gaps, leadership priorities, and execution improvements.',
      theme: 'Leadership Advisory & Gap Resolution',
      image: vshImages.frameworks.performanceConsulting,
      imageAlt: 'Senior sales performance consultant presenting strategic solutions to leadership',
    },
    {
      ...siteContent.frameworks[4], // Lifetime Client Relationship (LCR)
      description:
        'Account development framework focused on retention, sustained trust, and long-term customer value.',
      theme: 'Long-Term Trust & Retention',
      image: vshImages.frameworks.lifetimeClient,
      imageAlt: 'Senior business leaders discussing enduring partnership in executive lounge',
    },
  ];

  const processStagesData: ProcessStageItem[] = [
    {
      ...siteContent.processStages[0], // Assess
      description: 'Comprehensive diagnosis of existing sales activity, pipeline, and team capabilities.',
      tag: 'DIAGNOSTIC ASSESSMENT',
    },
    {
      ...siteContent.processStages[1], // Set Direction
      description: 'Define clear commercial priorities, target accounts, and strategic objectives.',
      tag: 'STRATEGIC PRIORITIES',
    },
    {
      ...siteContent.processStages[2], // Develop
      description: 'Equip the sales team through focused coaching, skill development, and mindset alignment.',
      tag: 'TEAM CAPABILITY',
    },
    {
      ...siteContent.processStages[3], // Execute
      description: 'Implement disciplined daily sales routines, structured outreach, and follow-through.',
      tag: 'DAILY DISCIPLINE',
    },
    {
      ...siteContent.processStages[4], // Review
      description: 'Regular performance reviews analyzing activity consistency, commitments, and pipeline health.',
      tag: 'ACCOUNTABILITY RHYTHM',
    },
    {
      ...siteContent.processStages[5], // Improve
      description: 'Refine approaches, address emerging bottlenecks, and institutionalize best practices.',
      tag: 'CONTINUOUS REFINEMENT',
    },
  ];

  const activeStage = processStagesData.find((s) => s.id === activeStageId) || processStagesData[0];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      aria-labelledby="frameworks-process-heading"
      className="py-12 sm:py-16 lg:py-20 bg-white border-b border-gray-200/80 overflow-hidden"
    >
      <Container size="default">
        {/* ============================================================ */}
        {/* PART 1: STRUCTURED FRAMEWORKS SHOWCASE                       */}
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
                PRACTICAL METHODOLOGIES • FIVE NAMED FRAMEWORKS
              </span>
            </div>

            <div className={revealStyles.clipMaskContainer}>
              <h2
                id="frameworks-process-heading"
                className={`text-2xl sm:text-3xl lg:text-4xl xl:text-[2.65rem] font-extrabold text-[#0B1F33] font-sans tracking-tight leading-[1.16] mb-3 ${
                  revealStyles.clipMaskTransition
                } ${isVisible ? revealStyles.clipMaskVisible : revealStyles.clipMaskHidden}`}
              >
                Structured Frameworks.{' '}
                <span className="text-[#123B63]">Practical Sales Execution.</span>
              </h2>
            </div>

            <p
              className={`text-sm sm:text-base text-[#4A5568] font-sans leading-relaxed max-w-2xl ${
                revealStyles.transition
              } ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
              style={{ transitionDelay: '80ms' }}
            >
              Practical sales frameworks applied across the engagement to structure client discussions, handle negotiations, and build sustainable client relationships.
            </p>
          </div>

          {/* Frameworks Split Layout: Selector on Left, Sticky Photographic Canvas on Right */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-14 items-start">
            {/* Left Column: Interactive Framework List */}
            <div
              className={`lg:col-span-7 divide-y divide-gray-200 border-t border-b border-gray-200 ${
                revealStyles.transition
              } ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
              style={{ transitionDelay: '140ms' }}
              role="region"
              aria-label="Frameworks Selector"
            >
              {frameworksData.map((fw) => {
                const isActive = activeFrameworkId === fw.id;

                return (
                  <button
                    key={fw.id}
                    type="button"
                    id={`framework-btn-${fw.id}`}
                    onClick={() => setActiveFrameworkId(fw.id)}
                    onMouseEnter={() => setActiveFrameworkId(fw.id)}
                    onFocus={() => setActiveFrameworkId(fw.id)}
                    aria-expanded={isActive}
                    aria-controls={`framework-content-${fw.id}`}
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
                        {fw.number}
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
                            {fw.name}
                          </h3>

                          {/* Active Pill Badge */}
                          <span
                            className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-sm transition-opacity duration-200 shrink-0 ${
                              isActive
                                ? 'bg-[#123B63]/10 text-[#123B63] font-semibold opacity-100'
                                : 'opacity-0'
                            }`}
                          >
                            FRAMEWORK
                          </span>
                        </div>

                        {/* Approved Description (Revealed on active) */}
                        <div
                          id={`framework-content-${fw.id}`}
                          className={`transition-all duration-300 ease-out overflow-hidden ${
                            isActive
                              ? 'max-h-28 opacity-100 mt-2'
                              : 'max-h-0 opacity-0 mt-0 pointer-events-none'
                          }`}
                        >
                          <p className="text-xs sm:text-sm text-[#4A5568] font-sans leading-relaxed">
                            {fw.description}
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
                              src={fw.image}
                              alt={fw.imageAlt}
                              className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                                isActive && !prefersReducedMotion ? 'scale-105' : 'scale-100'
                              }`}
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/80 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute bottom-2.5 left-3 text-white pointer-events-none">
                              <span className="text-[10px] font-mono uppercase tracking-widest text-[#87CEEB] font-bold">
                                {fw.theme}
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

            {/* Right Column: Desktop Sticky Photographic Preview (>= lg) */}
            <div className="hidden lg:block lg:col-span-5 sticky top-28 self-start">
              <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden bg-[#0B1F33] border border-gray-200/90 shadow-lg">
                {frameworksData.map((item) => {
                  const isSelected = activeFrameworkId === item.id;

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

                      {/* Editorial Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/90 via-[#0B1F33]/25 to-transparent pointer-events-none" />

                      {/* Overlay Metadata Tagging */}
                      <div className="absolute bottom-0 inset-x-0 p-5 text-white pointer-events-none">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#87CEEB] font-bold">
                            FRAMEWORK {item.number}
                          </span>
                          <span className="text-white/40">•</span>
                          <span className="text-[10px] font-mono text-white/70 uppercase">
                            METHODOLOGY
                          </span>
                        </div>
                        <p className="text-lg font-bold font-sans text-white tracking-tight leading-snug">
                          {item.name}
                        </p>
                        <p className="text-xs text-white/80 font-sans mt-0.5 line-clamp-1">
                          {item.theme}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Editorial Caption below Photo */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
                <span>APPLIED METHODOLOGY ENGINE</span>
                <span className="text-[#123B63] font-semibold">ODISHA COMMERCIAL PRACTICE</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* PART 2: HOW THE ENGAGEMENT WORKS (ENGAGEMENT PROCESS)        */}
        {/* ============================================================ */}
        <div className="pt-10 sm:pt-14 border-t border-gray-200/90">
          {/* Eyebrow & Process Headline */}
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#123B63]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#123B63] font-bold">
                ENGAGEMENT SEQUENCE • SIX OPERATIONAL STAGES
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F33] font-sans tracking-tight leading-tight mb-2">
              How the Engagement Works
            </h3>
            <p className="text-sm sm:text-base text-[#4A5568] font-sans leading-relaxed">
              When frameworks are in place, disciplined execution follows a structured, sequential six-stage engagement progression.
            </p>
          </div>

          {/* Slim Six-Stage Interactive Selector Strip */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8"
            role="tablist"
            aria-label="Engagement Stages"
          >
            {processStagesData.map((stage) => {
              const isStageActive = activeStageId === stage.id;

              return (
                <button
                  key={stage.id}
                  type="button"
                  id={`stage-btn-${stage.id}`}
                  onClick={() => setActiveStageId(stage.id)}
                  onMouseEnter={() => setActiveStageId(stage.id)}
                  onFocus={() => setActiveStageId(stage.id)}
                  role="tab"
                  aria-selected={isStageActive}
                  aria-controls={`stage-panel-${stage.id}`}
                  className={`py-3 px-3.5 text-left rounded-sm border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#87CEEB] ${
                    isStageActive
                      ? 'bg-[#0B1F33] border-[#0B1F33] text-white shadow-sm'
                      : 'bg-white border-gray-200/90 text-[#333333] hover:border-gray-300 hover:bg-gray-50/80'
                  } ${
                    !prefersReducedMotion && (isStageActive ? 'scale-[1.02]' : 'scale-100')
                  }`}
                >
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isStageActive ? 'text-[#87CEEB]' : 'text-[#123B63]'
                      }`}
                    >
                      {stage.number}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-bold font-sans tracking-tight truncate ${
                        isStageActive ? 'text-white' : 'text-[#0B1F33]'
                      }`}
                    >
                      {stage.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Featured Showcase Card */}
          <div
            id={`stage-panel-${activeStage.id}`}
            role="tabpanel"
            aria-labelledby={`stage-btn-${activeStage.id}`}
            className="p-6 sm:p-8 lg:p-10 rounded-sm bg-[#F3F5F7] border border-gray-200/80"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              {/* Left Detail (7 cols) */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-mono font-extrabold text-[#123B63]/25 select-none">
                    {activeStage.number}
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#123B63] bg-white px-2.5 py-1 rounded-sm border border-gray-200">
                    STAGE {activeStage.number} • {activeStage.tag}
                  </span>
                </div>

                <h4 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-sans text-[#0B1F33] tracking-tight mb-3">
                  {activeStage.name}
                </h4>

                <p className="text-sm sm:text-base lg:text-lg text-[#333333] font-sans leading-relaxed max-w-xl mb-4">
                  {activeStage.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-mono text-[#6B7280]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#123B63]" />
                  <span>CONTINUOUS SEQUENCE: ASSESS → EXECUTE → IMPROVE</span>
                </div>
              </div>

              {/* Right Documentary Anchor Visual (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[3/2] w-full rounded-sm overflow-hidden bg-[#0B1F33] border border-gray-200/90 shadow-sm">
                  <img
                    src={vshImages.howItWorks}
                    alt="Frontline sales field review and strategic execution in Odisha"
                    className="w-full h-full object-cover object-center filter saturate-[0.95]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 text-[10px] font-mono text-white/90 uppercase tracking-widest pointer-events-none">
                    FRONTLINE FIELD REVIEW • ODISHA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Chapter07FrameworksProcess;
