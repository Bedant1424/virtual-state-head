import React, { useState, useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { siteContent, type Coach } from '@/data/siteContent';
import { vshImages } from '@/assets/images';
import { useScrollReveal, revealStyles } from '@/hooks/useMotion';

interface CoachCardData extends Coach {
  image: string;
  imageAlt: string;
  metadataTag: string;
  descriptor: string;
  footerLabel: string;
}

/**
 * CHAPTER 04 — EXPERIENCED COACHES / LEADERSHIP SHOWCASE
 * Premium editorial profile cards featuring all three coaches.
 * Image-led, interactive hover/focus choreography:
 * - Active card scales up 1.05x with image zoom, high focus, and border accent.
 * - Inactive cards subtly recede (scale 0.96x, opacity 0.78) for focus hierarchy.
 * - Accessible via keyboard focus (tabIndex) and tap-friendly on mobile devices.
 * - Fully respects prefers-reduced-motion.
 */
export const Chapter04Coaches: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal(0.12);
  const [activeCoachId, setActiveCoachId] = useState<string | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const coachesData: CoachCardData[] = [
    {
      ...siteContent.coaches[0], // Royal Bal
      image: vshImages.coaches.royalBal,
      imageAlt: 'Royal Bal, Sales Leadership Consultant and Founder of Sales Performance Engine',
      metadataTag: 'FOUNDER • SALES PERFORMANCE ENGINE',
      descriptor: 'More than 30 years of sales experience',
      footerLabel: 'LEAD CONSULTANT',
    },
    {
      ...siteContent.coaches[1], // Saroj Kumar Panda
      image: vshImages.coaches.sarojPanda,
      imageAlt: 'Saroj Kumar Panda, Mindfulness Educator and Mindset Coach',
      metadataTag: 'ASSOCIATE COACH • MINDSET & RESILIENCE',
      descriptor: 'Mindset & Resilience Coach',
      footerLabel: 'CAPABILITY & MINDSET',
    },
    {
      ...siteContent.coaches[2], // Sudeep Mohanty
      image: vshImages.coaches.sudeepMohanty,
      imageAlt: 'Sudeep Mohanty, Head Coach and Sales Leadership Coach',
      metadataTag: 'HEAD COACH • SALES EXECUTION',
      descriptor: 'Sales Leadership Coach',
      footerLabel: 'EXECUTION & DISCIPLINE',
    },
  ];

  return (
    <section
      id="coaches"
      ref={sectionRef}
      aria-labelledby="coaches-heading"
      className="py-12 sm:py-16 lg:py-20 bg-[#0B1F33] text-white border-b border-white/10 overflow-hidden relative"
    >
      <Container size="default">
        {/* Section Header: Eyebrow + Display Headline */}
        <div className="mb-8 sm:mb-12">
          <div
            className={`text-xs font-mono font-semibold uppercase tracking-widest text-[#87CEEB] mb-2.5 ${
              revealStyles.transition
            } ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
          >
            • Senior Sales Leadership • Royal Way Academy
          </div>

          <div className="max-w-3xl">
            <div className={revealStyles.clipMaskContainer}>
              <h2
                id="coaches-heading"
                className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight leading-tight mb-2.5 ${
                  revealStyles.clipMaskTransition
                } ${isVisible ? revealStyles.clipMaskVisible : revealStyles.clipMaskHidden}`}
              >
                30+ Years of Frontline{' '}
                <span className="text-[#87CEEB]">Sales Experience.</span>
              </h2>
            </div>
            <p
              className={`text-sm sm:text-base text-gray-300 font-sans leading-relaxed ${
                revealStyles.transition
              } ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
              style={{ transitionDelay: '100ms' }}
            >
              Sales leadership, frontline coaching, and team development delivered by seasoned
              consultants with decades of practical field experience.
            </p>
          </div>
        </div>

        {/* Interactive 3-Card Leadership Showcase */}
        <div
          className={`py-4 px-1 sm:px-2 transition-all duration-700 ${
            isVisible ? revealStyles.visible : revealStyles.hidden
          }`}
          style={{ transitionDelay: '180ms' }}
          role="region"
          aria-label="Leadership team profiles"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {coachesData.map((coach) => {
              const isCardActive = activeCoachId === coach.id;
              const isAnyActive = activeCoachId !== null;
              const isOtherCard = isAnyActive && !isCardActive;

              // Motion classes based on active state and reduced motion preferences
              let cardStateClasses = 'border-white/15 bg-[#0e263f]/90 shadow-md shadow-black/20';
              let imageTransformClass = 'scale-100 brightness-100';

              if (!prefersReducedMotion) {
                if (isCardActive) {
                  cardStateClasses =
                    'scale-[1.05] z-20 border-[#87CEEB]/80 bg-[#123352] shadow-2xl shadow-black/50 ring-1 ring-[#87CEEB]/30';
                  imageTransformClass = 'scale-[1.09] brightness-105';
                } else if (isOtherCard) {
                  cardStateClasses =
                    'scale-[0.96] opacity-75 z-10 border-white/10 bg-[#0e263f]/60 filter brightness-95';
                  imageTransformClass = 'scale-100 brightness-90';
                }
              } else {
                // Reduced motion: no scale transforms, pure border and subtle brightness cue
                if (isCardActive) {
                  cardStateClasses =
                    'border-[#87CEEB] bg-[#123352] shadow-lg shadow-black/30 ring-1 ring-[#87CEEB]/40';
                } else if (isOtherCard) {
                  cardStateClasses = 'opacity-85 border-white/10 bg-[#0e263f]/70';
                }
              }

              return (
                <article
                  key={coach.id}
                  id={`coach-card-${coach.id}`}
                  tabIndex={0}
                  role="article"
                  aria-label={`${coach.name}, ${coach.role}`}
                  onMouseEnter={() => setActiveCoachId(coach.id)}
                  onMouseLeave={() => setActiveCoachId(null)}
                  onFocus={() => setActiveCoachId(coach.id)}
                  onBlur={() => setActiveCoachId(null)}
                  onClick={() =>
                    setActiveCoachId(activeCoachId === coach.id ? null : coach.id)
                  }
                  className={`group rounded-[6px] border overflow-hidden flex flex-col justify-between transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#87CEEB] ${cardStateClasses}`}
                  style={{
                    transformOrigin: 'center center',
                    willChange: prefersReducedMotion ? 'auto' : 'transform, opacity',
                  }}
                >
                  {/* Portrait Photography Canvas */}
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-[#071524]">
                    <img
                      src={coach.image}
                      alt={coach.imageAlt}
                      className={`w-full h-full object-cover object-top transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${imageTransformClass}`}
                      loading="lazy"
                    />

                    {/* Monogram Badge / Watermark */}
                    <div className="absolute top-3.5 right-3.5 z-10">
                      <div className="px-2.5 py-1 rounded-[3px] bg-[#0B1F33]/85 border border-[#87CEEB]/30 backdrop-blur-sm flex items-center gap-1.5 shadow-sm">
                        <span className="text-[11px] font-mono font-bold text-[#87CEEB] tracking-wider">
                          {coach.initials}
                        </span>
                        <span className="text-[9px] font-mono text-gray-300 uppercase">ODISHA</span>
                      </div>
                    </div>

                    {/* Gradient Overlay for seamless text blending */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e263f] via-[#0e263f]/40 to-transparent pointer-events-none" />
                  </div>

                  {/* Profile Structured Information */}
                  <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      {/* Subtitle / Program Role Tag */}
                      <div className="text-[10px] font-mono font-bold tracking-widest text-[#87CEEB] uppercase">
                        {coach.metadataTag}
                      </div>

                      {/* Coach Name */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white font-sans tracking-tight">
                        {coach.name}
                      </h3>

                      {/* Experience Line */}
                      <p className="text-xs sm:text-sm font-semibold text-gray-200 font-sans">
                        {coach.descriptor}
                      </p>

                      {/* Bio Summary */}
                      <p className="text-xs text-gray-300 font-sans leading-relaxed pt-1">
                        {coach.bioSummary}
                      </p>
                    </div>

                    {/* Metadata Footer */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
                      <span className="text-white/60">{coach.footerLabel}</span>
                      <span className="text-[#87CEEB] font-semibold">VSH ADVISORY</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Chapter04Coaches;
