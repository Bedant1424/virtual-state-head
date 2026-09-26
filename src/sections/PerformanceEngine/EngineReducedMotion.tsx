import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { siteContent, EnginePillarKey } from '@/data/siteContent';
import { ArrowRight, CheckCircle2, Compass, Layers, ShieldCheck, Sparkles } from 'lucide-react';

export interface EngineReducedMotionProps {
  onCtaClick?: () => void;
}

/**
 * EngineReducedMotion
 * Accessible, static presentation for users with prefers-reduced-motion enabled.
 * All three pillars and system integration are presented clearly without scroll-driven pinning.
 */
export const EngineReducedMotion: React.FC<EngineReducedMotionProps> = ({ onCtaClick }) => {
  const { engine } = siteContent;

  const pillarIconMap: Record<EnginePillarKey, React.ComponentType<{ className?: string }>> = {
    training: Compass,
    technology: Layers,
    accountability: ShieldCheck,
  };

  return (
    <div className="w-full bg-navy text-white py-16 lg:py-24">
      <Container size="default">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <SectionLabel
            label={engine.eyebrow}
            className="text-sky-brand border-sky-brand/30 bg-sky-brand/10 mb-4 inline-block"
          />
          <h2 className="typography-h2 text-white mb-4 font-sans">
            <span>{engine.headline.primary} </span>
            <span className="text-sky-brand font-extrabold block sm:inline">
              {engine.headline.secondary}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-sans leading-relaxed">
            {engine.intro}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {engine.pillars.map((pillar) => {
            const Icon = pillarIconMap[pillar.id];
            return (
              <div
                key={pillar.id}
                className="rounded-2xl bg-white/5 border border-white/15 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-sky-brand uppercase tracking-wider">
                      {pillar.number} • {pillar.coreConcept}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-sky-brand/10 border border-sky-brand/30 flex items-center justify-center text-sky-brand">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white font-sans mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-white/75 font-sans leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-sky-brand font-semibold block mb-2">
                    Key Focus Areas
                  </span>
                  <ul className="space-y-2">
                    {pillar.focusPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-white/70 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-brand shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration Climax Card */}
        <div className="rounded-2xl bg-white/10 border border-sky-brand/40 p-8 mb-10 max-w-4xl mx-auto shadow-xl">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-sky-brand" />
            <span className="text-xs font-mono font-bold text-sky-brand uppercase tracking-wider">
              {engine.climax.eyebrow}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white font-sans mb-4">
            System Integration
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-navy/80 border border-white/10">
            <div className="text-sm font-sans text-white/90">
              <span className="font-bold text-sky-brand block">Training</span>
              <span>Builds capability.</span>
            </div>
            <div className="text-sm font-sans text-white/90">
              <span className="font-bold text-sky-brand block">Technology</span>
              <span>Supports execution.</span>
            </div>
            <div className="text-sm font-sans text-white/90">
              <span className="font-bold text-sky-brand block">Accountability</span>
              <span>Strengthens follow-through.</span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-center mb-6">
            <div className="text-xs font-mono uppercase tracking-wider text-white/60 mb-1">
              System Integration
            </div>
            <div className="text-sm sm:text-base font-sans font-extrabold text-sky-brand tracking-wide">
              TRAINING + TECHNOLOGY + ACCOUNTABILITY
            </div>
            <div className="text-white/60 my-1 text-sm font-bold">=</div>
            <div className="text-base sm:text-lg font-sans font-extrabold text-white tracking-wider">
              SALES PERFORMANCE ENGINE
            </div>
          </div>

          <Button
            variant="primary"
            size="lg"
            onClick={onCtaClick}
            className="shadow-md bg-sky-brand text-navy hover:bg-white transition-colors"
          >
            <span>Book Your Sales Strategy Call</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Container>
    </div>
  );
};
