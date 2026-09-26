import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { CapabilitySystem } from './CapabilitySystem';
import { LeadershipLayerVisual, FocusKey } from './LeadershipLayerVisual';
import { siteContent } from '@/data/siteContent';
import { CheckCircle, ArrowRight } from 'lucide-react';

export interface IntroductionProps {
  onCtaClick?: () => void;
}

/**
 * Introduction / Leadership & Value Section (<section id="about">)
 *
 * Unified editorial two-column composition:
 * - LEFT: Headline, concise premise, 6 core capabilities as compact rows, integrated value card + CTA.
 * - RIGHT: Large consulting architecture diagram showing:
 *   Business Goals → Sales Leadership → 6 Capabilities → Structured Sales Activity.
 *
 * Fully source-backed. Zero fake metrics, zero SaaS clutter.
 */
export const Introduction: React.FC<IntroductionProps> = ({ onCtaClick }) => {
  const [activeFocus, setActiveFocus] = useState<FocusKey>(null);
  const { solution } = siteContent;

  return (
    <section
      id="about"
      aria-label="Experienced Sales Leadership Solution"
      className="py-12 sm:py-14 lg:py-16 bg-white border-b border-gray-200/80 relative overflow-hidden"
    >
      <Container size="default">
        {/* Strong Editorial 2-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ============================================================== */}
          {/* LEFT COLUMN: Narrative, Headline, 6 Capabilities & Action     */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="mb-3">
                <SectionLabel label="Experienced Sales Leadership • Structured Performance Support" />
              </div>

              <h2 className="typography-h2 text-navy mb-4 font-sans font-extrabold tracking-tight">
                <span>{solution.headline.primary} </span>
                <span className="text-deep-blue/85 font-semibold block sm:inline">
                  {solution.headline.secondary}
                </span>
              </h2>

              <p className="text-sm sm:text-base text-charcoal font-medium leading-relaxed mb-6">
                {solution.introLead}
              </p>

              {/* Six Core Capability Rows */}
              <div className="mb-6">
                <CapabilitySystem
                  capabilities={solution.capabilities}
                  activeFocus={activeFocus}
                  onFocusChange={setActiveFocus}
                />
              </div>
            </div>

            {/* Integrated Value Summary & Conversion Action */}
            <div className="p-5 sm:p-6 rounded-xl bg-white border border-gray-200/90 shadow-xs flex flex-col items-start gap-4 mt-2">
              <div className="w-full">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle className="w-4 h-4 text-deep-blue shrink-0" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-deep-blue">
                    Integrated Value
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-charcoal font-medium leading-relaxed">
                  Sales performance is influenced by strategy, leadership, capability, execution, and accountability. Virtual State Head brings these elements together through a structured consulting and development approach.
                </p>
              </div>

              <Button
                variant="primary"
                size="md"
                onClick={onCtaClick}
                className="w-full sm:w-auto group shadow-sm hover:shadow"
              >
                <span>Book Your Sales Strategy Call</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: The Leadership Layer Consulting Architecture Visual */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 lg:sticky lg:top-24">
            <div className="mb-3 flex items-center justify-between px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-navy">
                The Leadership Layer Architecture
              </span>
              <span className="text-[11px] text-muted font-medium">
                Enterprise Alignment
              </span>
            </div>

            <LeadershipLayerVisual
              activeFocus={activeFocus}
              onFocusChange={setActiveFocus}
            />

            <p className="text-[11px] text-muted text-center mt-3 font-sans">
              Diagram illustrates how experienced sales leadership connects business goals with structured sales activity.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Introduction;
