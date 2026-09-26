import React, { useState, useEffect, useRef } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { siteContent } from '@/data/siteContent';
import { EngagementDesktop } from './EngagementDesktop';
import { EngagementMobile } from './EngagementMobile';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * EngagementProcess
 * Primary Engagement Process section (<section id="process">).
 *
 * Official Source Sequence:
 * Assess -> Set Direction -> Develop -> Execute -> Review -> Improve
 *
 * Content Boundary:
 * Zero invented stage explanations, descriptions, procedures, audits, KPIs, or outcomes.
 *
 * Visual System:
 * Continuous engagement sequence — structured, practical, senior-led, sequential, and easy to understand.
 */
export const EngagementProcess: React.FC = () => {
  const { processSection, processStages } = siteContent;
  const prefersReducedMotion = useReducedMotion();

  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [isResolvedState, setIsResolvedState] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-linked progression for standard motion mode
  useEffect(() => {
    if (prefersReducedMotion) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) {
            ticking = false;
            return;
          }

          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // When section is in view
          if (rect.top <= windowHeight * 0.6 && rect.bottom >= windowHeight * 0.2) {
            // Calculate progress through the section (0 to 1)
            const sectionHeight = rect.height;
            const scrollProgress = Math.min(
              1,
              Math.max(0, (windowHeight * 0.6 - rect.top) / (sectionHeight * 0.7))
            );

            // If scrolled near bottom of section, activate resolved state
            if (scrollProgress >= 0.95) {
              setIsResolvedState(true);
            } else {
              setIsResolvedState(false);
              const targetIndex = Math.min(
                processStages.length - 1,
                Math.floor(scrollProgress * processStages.length)
              );
              setActiveStageIndex(targetIndex);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReducedMotion, processStages.length]);

  const handleSelectStage = (index: number) => {
    setIsResolvedState(false);
    setActiveStageIndex(index);
  };

  const handleToggleResolved = () => {
    setIsResolvedState((prev) => !prev);
  };

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-20 lg:py-28 bg-white border-b border-gray-200/80 relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-4xl mb-12 lg:mb-16">
          <div className="mb-4">
            <SectionLabel label={processSection.eyebrow} />
          </div>
          <h2
            id="process-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy font-sans tracking-tight leading-tight"
          >
            {processSection.headline}
          </h2>
        </div>

        {/* Reduced Motion Presentation: Static Resolved Progression */}
        {prefersReducedMotion ? (
          <div className="w-full">
            <div className="hidden lg:block">
              <EngagementDesktop
                stages={processStages}
                activeStageIndex={0}
                onSelectStage={() => {}}
                isResolvedState={true}
                onToggleResolved={() => {}}
              />
            </div>
            <div className="block lg:hidden">
              <EngagementMobile
                stages={processStages}
                activeStageIndex={0}
                onSelectStage={() => {}}
                isResolvedState={true}
                onToggleResolved={() => {}}
              />
            </div>
          </div>
        ) : (
          <>
            {/* Desktop Horizontal Process Track (>=1024px) */}
            <div className="hidden lg:block">
              <EngagementDesktop
                stages={processStages}
                activeStageIndex={activeStageIndex}
                onSelectStage={handleSelectStage}
                isResolvedState={isResolvedState}
                onToggleResolved={handleToggleResolved}
              />
            </div>

            {/* Mobile & Tablet Vertical Timeline (<1024px) */}
            <div className="block lg:hidden">
              <EngagementMobile
                stages={processStages}
                activeStageIndex={activeStageIndex}
                onSelectStage={handleSelectStage}
                isResolvedState={isResolvedState}
                onToggleResolved={handleToggleResolved}
              />
            </div>
          </>
        )}
      </Container>
    </section>
  );
};
