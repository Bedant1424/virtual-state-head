import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { siteContent, EnginePillarKey } from '@/data/siteContent';
import { EngineVisual } from './EngineVisual';
import { type EngineStageIndex } from './EngineProgressIndicator';
import { ArrowRight, CheckCircle2, Compass, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { clsx } from 'clsx';

export interface EngineMobileProps {
  onCtaClick?: () => void;
}

/**
 * EngineMobile
 * Unpinned, stacked vertical narrative experience tailored for mobile and tablet screens (<1024px).
 *
 * Sequence:
 * 1. Eyebrow + Section Headline + Editorial Intro
 * 2. Centerpiece System Visual (Compact overview)
 * 3. Three System Pillars (Interactive Switcher or Expanded Cards)
 * 4. Integration Climax Summary Card
 * 5. Primary Commercial CTA
 */
export const EngineMobile: React.FC<EngineMobileProps> = ({ onCtaClick }) => {
  const { engine } = siteContent;
  const [activePillarKey, setActivePillarKey] = useState<EnginePillarKey>('training');

  const activePillarIndex = engine.pillars.findIndex((p) => p.id === activePillarKey);
  const visualStage: EngineStageIndex = (activePillarIndex >= 0 ? (activePillarIndex + 1) : 4) as EngineStageIndex;

  const pillarIconMap: Record<EnginePillarKey, React.ComponentType<{ className?: string }>> = {
    training: Compass,
    technology: Layers,
    accountability: ShieldCheck,
  };

  return (
    <div className="w-full bg-navy text-white py-16 sm:py-20">
      <Container size="default">
        {/* Section Header */}
        <div className="mb-8">
          <SectionLabel
            label={engine.eyebrow}
            className="text-sky-brand border-sky-brand/30 bg-sky-brand/10 mb-4 inline-block"
          />
          <h2 className="typography-h2 text-white mb-4 font-sans">
            <span>{engine.headline.primary} </span>
            <span className="text-sky-brand font-extrabold block">
              {engine.headline.secondary}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
            {engine.intro}
          </p>
        </div>

        {/* Compact Centerpiece Visual */}
        <div className="mb-10">
          <EngineVisual
            currentStage={visualStage}
            pillars={engine.pillars}
            isCompact={true}
            onSelectStage={(stage) => {
              if (stage === 1) setActivePillarKey('training');
              if (stage === 2) setActivePillarKey('technology');
              if (stage === 3) setActivePillarKey('accountability');
            }}
          />
        </div>

        {/* Pillar Selection Tabs */}
        <div className="mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-sky-brand mb-3 font-semibold">
            Explore The Three Pillars
          </div>
          <div
            className="grid grid-cols-3 gap-1.5 p-1 bg-white/5 border border-white/10 rounded-2xl"
            role="tablist"
            aria-label="Engine Pillars"
          >
            {engine.pillars.map((pillar) => {
              const isActive = activePillarKey === pillar.id;
              return (
                <button
                  key={pillar.id}
                  id={`mobile-tab-${pillar.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`mobile-panel-${pillar.id}`}
                  onClick={() => setActivePillarKey(pillar.id)}
                  className={clsx(
                    'py-2.5 px-1 rounded-xl text-center transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-sky-brand',
                    isActive
                      ? 'bg-sky-brand text-navy shadow-sm'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  )}
                >
                  <span
                    className={clsx(
                      'block text-[11px] font-mono font-bold leading-none mb-1',
                      isActive ? 'text-navy' : 'text-sky-brand'
                    )}
                  >
                    {pillar.number}
                  </span>
                  <span className="block text-xs font-sans font-bold tracking-tight">
                    {pillar.shortLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Pillar Card */}
        {(() => {
          const currentPillar = engine.pillars.find((p) => p.id === activePillarKey) || engine.pillars[0];
          const Icon = pillarIconMap[currentPillar.id];

          return (
            <div
              id={`mobile-panel-${currentPillar.id}`}
              role="tabpanel"
              aria-labelledby={`mobile-tab-${currentPillar.id}`}
              className="rounded-2xl bg-white/5 border border-white/15 p-6 mb-8 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-brand/10 border border-sky-brand/30 flex items-center justify-center text-sky-brand">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-sky-brand uppercase tracking-wider block">
                      {currentPillar.number} • {currentPillar.coreConcept}
                    </span>
                    <h3 className="text-lg font-bold text-white font-sans">
                      {currentPillar.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-sm text-white/80 leading-relaxed font-sans mb-5">
                {currentPillar.description}
              </p>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-sky-brand font-semibold block mb-2">
                  Key Focus Areas
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentPillar.focusPoints.map((point, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-sans font-medium bg-white/10 text-white/90 border border-white/10"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-brand shrink-0" />
                      <span>{point}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}

        {/* Integration Climax Summary Card */}
        <div className="rounded-2xl bg-linear-to-br from-white/10 to-white/5 border border-sky-brand/40 p-6 mb-8 shadow-xl">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-sky-brand" />
            <span className="text-xs font-mono font-bold text-sky-brand uppercase tracking-wider">
              {engine.climax.eyebrow}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white font-sans mb-3">
            System Integration
          </h3>

          <div className="space-y-2.5 mb-5 p-3.5 rounded-xl bg-navy/60 border border-white/10">
            <div className="text-xs sm:text-sm font-sans text-white/90">
              <span className="font-bold text-sky-brand">Training</span> builds capability.
            </div>
            <div className="text-xs sm:text-sm font-sans text-white/90">
              <span className="font-bold text-sky-brand">Technology</span> supports execution.
            </div>
            <div className="text-xs sm:text-sm font-sans text-white/90">
              <span className="font-bold text-sky-brand">Accountability</span> strengthens follow-through.
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 text-center">
            <div className="text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1">
              Integrated System
            </div>
            <div className="text-xs sm:text-sm font-sans font-extrabold text-sky-brand tracking-wide">
              TRAINING + TECHNOLOGY + ACCOUNTABILITY
            </div>
            <div className="text-white/60 my-0.5 text-xs font-bold">=</div>
            <div className="text-sm sm:text-base font-sans font-extrabold text-white tracking-wider">
              SALES PERFORMANCE ENGINE
            </div>
          </div>
        </div>

        {/* Primary Call to Action */}
        <div className="pt-2">
          <Button
            variant="primary"
            size="lg"
            onClick={onCtaClick}
            className="w-full shadow-md bg-sky-brand text-navy hover:bg-white transition-colors"
          >
            <span>Book Your Sales Strategy Call</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Container>
    </div>
  );
};
