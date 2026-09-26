import React from 'react';
import { Framework } from '@/data/siteContent';
import { FrameworkGraphic } from './FrameworkGraphic';
import { m, AnimatePresence } from 'motion/react';

export interface FrameworkStageProps {
  framework: Framework;
}

/**
 * FrameworkStage
 * Large desktop visual showcase for the currently active named framework.
 *
 * Content boundary:
 * Strictly presents the framework number, name, and abstract geometric motif.
 * Zero invented methodology steps, stages, or outcomes.
 */
export const FrameworkStage: React.FC<FrameworkStageProps> = ({ framework }) => {
  return (
    <div
      id={`framework-stage-${framework.id}`}
      role="region"
      aria-label={`Visual stage for ${framework.name}`}
      className="w-full h-full flex flex-col justify-between rounded-3xl bg-white border border-gray-200/80 p-8 sm:p-10 shadow-xs relative overflow-hidden"
    >
      {/* Top Stage Header: Framework Number & Badge */}
      <AnimatePresence mode="wait">
        <m.div
          key={framework.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="space-y-4 mb-8"
        >
          <div className="flex items-center justify-start">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-soft-blue text-deep-blue border border-sky-brand/30">
              FRAMEWORK {framework.number}
            </span>
          </div>

          <div className="flex items-baseline gap-4 pt-1">
            <span className="text-4xl sm:text-5xl font-mono font-extrabold text-sky-brand/80 select-none">
              {framework.number}
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy font-sans tracking-tight leading-tight">
              {framework.name}
            </h3>
          </div>
        </m.div>
      </AnimatePresence>

      {/* Abstract Architectural Vector Composition */}
      <div className="flex-1 flex items-center justify-center">
        <FrameworkGraphic
          frameworkId={framework.id}
          frameworkNumber={framework.number}
        />
      </div>

      {/* Grounded Subline */}
      <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs text-muted font-sans">
        <span>Five named frameworks</span>
        <span className="font-mono text-sky-brand font-semibold">{framework.number} / 05</span>
      </div>
    </div>
  );
};
