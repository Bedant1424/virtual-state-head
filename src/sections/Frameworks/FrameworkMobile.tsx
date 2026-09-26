import React from 'react';
import { Framework } from '@/data/siteContent';
import { FrameworkGraphic } from './FrameworkGraphic';
import { clsx } from 'clsx';
import { ChevronDown } from 'lucide-react';

export interface FrameworkMobileProps {
  frameworks: readonly Framework[];
  activeFrameworkId: string;
  onSelectFramework: (id: string) => void;
}

/**
 * FrameworkMobile
 * Responsive framework library experience tailored for mobile and tablet screens (<1024px).
 *
 * Sequence:
 * Stacked vertical accordion where all five frameworks are accessible,
 * and the active framework expands to display its large typography and abstract graphic.
 * Touch targets are comfortably sized (>=48px) with readable typography.
 */
export const FrameworkMobile: React.FC<FrameworkMobileProps> = ({
  frameworks,
  activeFrameworkId,
  onSelectFramework,
}) => {
  return (
    <div className="flex flex-col gap-3 w-full" role="region" aria-label="Frameworks Mobile Library">
      {frameworks.map((framework) => {
        const isActive = framework.id === activeFrameworkId;

        return (
          <div
            key={framework.id}
            className={clsx(
              'rounded-2xl transition-all duration-200 overflow-hidden',
              isActive
                ? 'bg-white border-2 border-sky-brand/50 shadow-md'
                : 'bg-white/70 border border-gray-200/80 hover:bg-white'
            )}
          >
            {/* Header Button Trigger */}
            <button
              id={`mobile-framework-btn-${framework.id}`}
              type="button"
              aria-expanded={isActive}
              aria-controls={`mobile-framework-content-${framework.id}`}
              onClick={() => onSelectFramework(framework.id)}
              className="w-full min-h-[52px] p-4 flex items-center justify-between text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-sky-brand"
            >
              <div className="flex items-center gap-3">
                {/* Number Badge */}
                <span
                  className={clsx(
                    'w-8 h-8 rounded-xl flex items-center justify-center text-xs font-mono font-bold shrink-0',
                    isActive ? 'bg-navy text-sky-brand' : 'bg-paper text-muted'
                  )}
                >
                  {framework.number}
                </span>

                {/* Framework Name */}
                <span
                  className={clsx(
                    'text-base font-sans leading-snug',
                    isActive ? 'font-extrabold text-navy' : 'font-semibold text-charcoal'
                  )}
                >
                  {framework.name}
                </span>
              </div>

              {/* Chevron Icon */}
              <div
                className={clsx(
                  'w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 shrink-0 ml-2',
                  isActive ? 'bg-sky-brand/20 text-deep-blue rotate-180' : 'text-gray-400'
                )}
                aria-hidden="true"
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {/* Expanded Content Stage (when active) */}
            {isActive && (
              <div
                id={`mobile-framework-content-${framework.id}`}
                role="region"
                aria-labelledby={`mobile-framework-btn-${framework.id}`}
                className="px-4 pb-5 pt-1 border-t border-gray-100"
              >
                <div className="my-3">
                  <FrameworkGraphic
                    frameworkId={framework.id}
                    frameworkNumber={framework.number}
                    isCompact={true}
                  />
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-muted font-sans">
                  <span>Five named frameworks</span>
                  <span className="font-mono text-sky-brand font-semibold">{framework.number} of 05</span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
