import React from 'react';
import { clsx } from 'clsx';
import { m, AnimatePresence } from 'motion/react';
import { EnginePillar } from '@/data/siteContent';
import { EngineStageIndex } from './EngineProgressIndicator';
import { CheckCircle2, Compass, Layers, ShieldCheck } from 'lucide-react';

export interface EnginePillarPanelProps {
  currentStage: EngineStageIndex;
  pillars: readonly EnginePillar[];
  climaxData: {
    readonly title: string;
    readonly subtitle: string;
    readonly statements: readonly {
      readonly pillar: string;
      readonly action: string;
    }[];
  };
  onSelectPillarStage?: (stage: EngineStageIndex) => void;
  className?: string;
}

/**
 * EnginePillarPanel
 * Single supporting detail panel for the Sales Performance Engine.
 * Dynamically updates based on the current stage (Intro, Training, Technology, Accountability, Climax).
 * Uses smooth local Motion transitions and adheres strictly to dark-mode consulting aesthetics.
 */
export const EnginePillarPanel: React.FC<EnginePillarPanelProps> = ({
  currentStage,
  pillars,
  climaxData,
  onSelectPillarStage,
  className,
}) => {
  const trainingPillar = pillars[0];
  const technologyPillar = pillars[1];
  const accountabilityPillar = pillars[2];

  return (
    <div
      className={clsx(
        'w-full rounded-2xl bg-deep-blue/40 border border-white/15 backdrop-blur-md p-6 sm:p-7 shadow-lg transition-all duration-300 relative overflow-hidden',
        className
      )}
      aria-live="polite"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-sky-brand/10 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Manual Tab Selectors (Stages 1, 2, 3, 4) */}
      <div className="flex flex-wrap items-center gap-2 mb-5" role="tablist" aria-label="Engine Components">
        {pillars.map((pillar, idx) => {
          const stageIndex = (idx + 1) as EngineStageIndex;
          const isActive = currentStage === stageIndex;

          return (
            <button
              key={pillar.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`engine-panel-${pillar.id}`}
              id={`engine-tab-${pillar.id}`}
              onClick={() => onSelectPillarStage?.(stageIndex)}
              onFocus={() => {
                // Focus updates detail inspection without forcing page scroll
                onSelectPillarStage?.(stageIndex);
              }}
              className={clsx(
                'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans font-bold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-brand',
                isActive
                  ? 'bg-sky-brand text-navy shadow-sm'
                  : 'bg-white/10 text-white/80 hover:bg-white/15 hover:text-white border border-white/10'
              )}
            >
              <span
                className={clsx(
                  'w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-extrabold',
                  isActive ? 'bg-navy text-sky-brand' : 'bg-white/20 text-white'
                )}
              >
                {pillar.number}
              </span>
              <span>{pillar.shortLabel}</span>
            </button>
          );
        })}

        {/* Integration Climax Tab */}
        <button
          type="button"
          role="tab"
          aria-selected={currentStage === 4}
          aria-controls="engine-panel-climax"
          id="engine-tab-climax"
          onClick={() => onSelectPillarStage?.(4)}
          onFocus={() => onSelectPillarStage?.(4)}
          className={clsx(
            'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans font-bold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-brand',
            currentStage === 4
              ? 'bg-sky-brand text-navy shadow-sm'
              : 'bg-white/10 text-white/80 hover:bg-white/15 hover:text-white border border-white/10'
          )}
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>System Integration</span>
        </button>
      </div>

      {/* Dynamic Animated Content Panel */}
      <AnimatePresence mode="wait">
        {currentStage === 0 && (
          <m.div
            key="stage-intro"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-brand" />
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-sky-brand">
                Operating Architecture
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight">
              Three Essential Elements
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans font-normal">
              Sustainable sales performance requires more than one-off interventions. The Sales Performance Engine connects training, technology, and accountability into a single operating discipline.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-muted font-sans">
              <span>Scroll to assemble the engine components.</span>
            </div>
          </m.div>
        )}

        {currentStage === 1 && (
          <m.div
            key="stage-training"
            id={`engine-panel-${trainingPillar.id}`}
            role="tabpanel"
            aria-labelledby={`engine-tab-${trainingPillar.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-sky-brand text-navy text-xs font-sans font-extrabold">
                  {trainingPillar.number}
                </span>
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-sky-brand">
                  Core Element
                </span>
              </div>
              <span className="text-xs font-sans font-bold px-2 py-0.5 rounded bg-white/10 text-sky-brand uppercase tracking-wider">
                {trainingPillar.coreConcept}
              </span>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <Compass className="w-5 h-5 text-sky-brand" />
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight">
                {trainingPillar.title}
              </h3>
            </div>

            <p className="text-base text-white/90 leading-relaxed font-sans font-normal">
              {trainingPillar.description}
            </p>

            <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-white/60 font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-brand" />
              <span>Training builds the sales capability required to compete effectively.</span>
            </div>
          </m.div>
        )}

        {currentStage === 2 && (
          <m.div
            key="stage-technology"
            id={`engine-panel-${technologyPillar.id}`}
            role="tabpanel"
            aria-labelledby={`engine-tab-${technologyPillar.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-sky-brand text-navy text-xs font-sans font-extrabold">
                  {technologyPillar.number}
                </span>
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-sky-brand">
                  Core Element
                </span>
              </div>
              <span className="text-xs font-sans font-bold px-2 py-0.5 rounded bg-white/10 text-sky-brand uppercase tracking-wider">
                {technologyPillar.coreConcept}
              </span>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <Layers className="w-5 h-5 text-sky-brand" />
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight">
                {technologyPillar.title}
              </h3>
            </div>

            <p className="text-base text-white/90 leading-relaxed font-sans font-normal">
              {technologyPillar.description}
            </p>

            <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-white/60 font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-brand" />
              <span>Technology supports sales visibility and structured execution without software bloat.</span>
            </div>
          </m.div>
        )}

        {currentStage === 3 && (
          <m.div
            key="stage-accountability"
            id={`engine-panel-${accountabilityPillar.id}`}
            role="tabpanel"
            aria-labelledby={`engine-tab-${accountabilityPillar.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-sky-brand text-navy text-xs font-sans font-extrabold">
                  {accountabilityPillar.number}
                </span>
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-sky-brand">
                  Core Element
                </span>
              </div>
              <span className="text-xs font-sans font-bold px-2 py-0.5 rounded bg-white/10 text-sky-brand uppercase tracking-wider">
                {accountabilityPillar.coreConcept}
              </span>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <ShieldCheck className="w-5 h-5 text-sky-brand" />
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight">
                {accountabilityPillar.title}
              </h3>
            </div>

            <p className="text-base text-white/90 leading-relaxed font-sans font-normal">
              {accountabilityPillar.description}
            </p>

            <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-white/60 font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-brand" />
              <span>Accountability creates greater ownership and closes the follow-through loop.</span>
            </div>
          </m.div>
        )}

        {currentStage === 4 && (
          <m.div
            key="stage-climax"
            id="engine-panel-climax"
            role="tabpanel"
            aria-labelledby="engine-tab-climax"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="space-y-3.5"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-brand animate-pulse" />
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-sky-brand">
                {climaxData.subtitle}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-white tracking-tight">
              {climaxData.title}
            </h3>

            {/* Approved Climax Logic Statements */}
            <div className="space-y-2 pt-1">
              {climaxData.statements.map((stmt) => (
                <div key={stmt.pillar} className="flex items-center gap-2 text-sm sm:text-base text-white/95 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-brand shrink-0" />
                  <span>
                    <strong className="text-sky-brand font-bold">{stmt.pillar}</strong> {stmt.action}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 text-xs text-white/70 font-sans leading-relaxed">
              When capability, visibility, and follow-through act together, sales performance becomes a disciplined, repeatable reality.
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};
