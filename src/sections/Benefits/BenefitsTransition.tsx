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

      {/* Lightweight Secondary Text Link */}
      <a
        href={targetHref}
        className="group inline-flex items-center gap-1.5 text-sm font-bold text-deep-blue hover:text-navy transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-blue rounded-sm py-1 px-2 font-sans"
      >
        <span className="underline decoration-deep-blue/30 group-hover:decoration-deep-blue underline-offset-4">
          See how the {targetLabel} works
        </span>
        <ArrowDown className="w-4 h-4 text-deep-blue/70 group-hover:text-deep-blue group-hover:translate-y-0.5 transition-all duration-200" aria-hidden="true" />
      </a>

      {/* Tripartite Engine Foundation Preview Pills */}
      <div className="flex items-center gap-3 mt-4 text-[11px] font-sans font-semibold text-muted uppercase tracking-wider">
        <span>Training</span>
        <span className="text-sky-brand font-bold">•</span>
        <span>Technology</span>
        <span className="text-sky-brand font-bold">•</span>
        <span>Accountability</span>
      </div>
    </div>
  );
};
