import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { siteContent, Framework } from '@/data/siteContent';
import { FrameworkIndex } from './FrameworkIndex';
import { FrameworkStage } from './FrameworkStage';
import { FrameworkMobile } from './FrameworkMobile';
import { FrameworkGraphic } from './FrameworkGraphic';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * Frameworks
 * Primary Frameworks Library section (<section id="frameworks">).
 *
 * Source-grounded content:
 * Strictly presents the five named frameworks from the master brief:
 * 1. Royal Selling Formula
 * 2. Strategic Negotiator
 * 3. Sense Selling
 * 4. Performance Consulting
 * 5. Lifetime Client Relationship (LCR)
 *
 * Content boundary:
 * Zero invented methodology steps, stages, formulas, or outcomes.
 */
export const Frameworks: React.FC = () => {
  const { frameworksSection, frameworks } = siteContent;
  const [activeFrameworkId, setActiveFrameworkId] = useState<string>(frameworks[0].id);
  const prefersReducedMotion = useReducedMotion();

  const activeFramework: Framework =
    frameworks.find((f) => f.id === activeFrameworkId) || frameworks[0];

  return (
    <section
      id="frameworks"
      className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-gray-200/80 relative overflow-hidden"
      aria-labelledby="frameworks-heading"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <div className="mb-4">
            <SectionLabel label={frameworksSection.eyebrow} />
          </div>
          <h2
            id="frameworks-heading"
            className="typography-h2 text-navy mb-3 font-sans font-extrabold"
          >
            {frameworksSection.headline}
          </h2>
          <p className="typography-body text-muted font-sans leading-relaxed">
            {frameworksSection.supportingText}
          </p>
        </div>

        {/* Reduced Motion Presentation: Complete static list */}
        {prefersReducedMotion ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((fw) => (
              <div
                key={fw.id}
                className="rounded-2xl bg-white border border-gray-200/80 p-6 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-start mb-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-soft-blue text-deep-blue border border-sky-brand/30">
                      FRAMEWORK {fw.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-navy font-sans mb-4">
                    {fw.name}
                  </h3>
                </div>
                <div className="pt-2">
                  <FrameworkGraphic
                    frameworkId={fw.id}
                    frameworkNumber={fw.number}
                    isCompact={true}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Desktop Editorial Split Layout (>=1024px) */}
            <div className="hidden lg:grid grid-cols-12 gap-8 xl:gap-12 items-stretch">
              {/* Left Column (5 cols): Numbered Vertical Framework Index */}
              <div className="col-span-5 flex flex-col justify-center">
                <FrameworkIndex
                  frameworks={frameworks}
                  activeFrameworkId={activeFrameworkId}
                  onSelectFramework={setActiveFrameworkId}
                />
              </div>

              {/* Right Column (7 cols): Large Visual Showcase Stage */}
              <div className="col-span-7">
                <FrameworkStage framework={activeFramework} />
              </div>
            </div>

            {/* Mobile & Tablet Stacked Accordion Layout (<1024px) */}
            <div className="block lg:hidden">
              <FrameworkMobile
                frameworks={frameworks}
                activeFrameworkId={activeFrameworkId}
                onSelectFramework={setActiveFrameworkId}
              />
            </div>
          </>
        )}
      </Container>
    </section>
  );
};
