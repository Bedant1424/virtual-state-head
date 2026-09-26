import React from 'react';
import { clsx } from 'clsx';
import { ArrowDown } from 'lucide-react';

export interface BenefitsTransitionProps {
  statement?: string;
  targetLabel?: string;
  targetHref?: string;
  className?: string;
}

/**
 * BenefitsTransition
 * Visual architectural bridge linking "WHAT YOUR BUSINESS GETS" to "SALES PERFORMANCE ENGINE".
 * Previews how Strategy, Capability, Leadership, Accountability, and Consulting are powered
 * by the tripartite operating engine (Training, Technology, Accountability).
 */
export const BenefitsTransition: React.FC<BenefitsTransitionProps> = ({
  statement = 'When the value areas are clear, the operating engine becomes the foundation for execution.',
  targetLabel = 'Sales Performance Engine',
  targetHref = '#engine',
  className,
}) => {
  return (
    <div
      className={clsx(
        'w-full pt-12 pb-6 flex flex-col items-center justify-center text-center transition-all duration-300',
        className
      )}
    >
      {/* Downward Architecture Conduit Line */}
      <div className="flex flex-col items-center gap-2 mb-6">
        <div className="w-[1.5px] h-10 bg-gradient-to-b from-sky-brand via-deep-blue/40 to-deep-blue rounded-full" />
        <div className="w-2.5 h-2.5 rounded-full border-2 border-deep-blue bg-sky-brand" />
      </div>

      {/* Conceptual Bridge Text */}
      <p className="max-w-xl text-sm sm:text-base text-muted font-sans leading-relaxed mb-4">
        {statement}
      </p>

      {/* Anchor Navigation Button to Next Section */}
      <a
        href={targetHref}
        className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-paper border border-gray-200 text-deep-blue text-xs sm:text-sm font-bold tracking-wide hover:bg-soft-blue/60 hover:border-sky-brand transition-all duration-200 shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-blue"
      >
        <span>Explore The {targetLabel}</span>
        <ArrowDown className="w-3.5 h-3.5 text-deep-blue group-hover:translate-y-0.5 transition-transform duration-200" />
      </a>

      {/* Tripartite Engine Foundation Preview Pills */}
      <div className="flex items-center gap-3 mt-4 text-[11px] font-mono text-muted uppercase tracking-wider">
        <span>Training</span>
        <span className="text-sky-brand">•</span>
        <span>Technology</span>
        <span className="text-sky-brand">•</span>
        <span>Accountability</span>
      </div>
    </div>
  );
};
