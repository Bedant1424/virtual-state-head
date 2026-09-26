import React from 'react';
import { Framework } from '@/data/siteContent';
import { clsx } from 'clsx';
import { ChevronRight } from 'lucide-react';

export interface FrameworkIndexProps {
  frameworks: readonly Framework[];
  activeFrameworkId: string;
  onSelectFramework: (id: string) => void;
  className?: string;
}

/**
 * FrameworkIndex
 * Vertical methodology library index for desktop screens.
 *
 * Rules:
 * - Semantic button tabs with ARIA tablist/tab patterns.
 * - Active item visually dominant while other four remain quieter.
 * - Full keyboard navigation support (Arrow Up, Arrow Down, Enter, Space).
 */
export const FrameworkIndex: React.FC<FrameworkIndexProps> = ({
  frameworks,
  activeFrameworkId,
  onSelectFramework,
  className,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    let nextIndex = currentIndex;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % frameworks.length;
      onSelectFramework(frameworks[nextIndex].id);
      document.getElementById(`framework-tab-${frameworks[nextIndex].id}`)?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + frameworks.length) % frameworks.length;
      onSelectFramework(frameworks[nextIndex].id);
      document.getElementById(`framework-tab-${frameworks[nextIndex].id}`)?.focus();
    }
  };

  return (
    <div
      role="tablist"
      aria-label="Framework Library Index"
      aria-orientation="vertical"
      className={clsx('flex flex-col gap-3 w-full', className)}
    >
      {frameworks.map((framework, index) => {
        const isActive = framework.id === activeFrameworkId;

        return (
          <button
            key={framework.id}
            id={`framework-tab-${framework.id}`}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`framework-stage-${framework.id}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onSelectFramework(framework.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={clsx(
              'group relative w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-sky-brand flex items-center justify-between',
              isActive
                ? 'bg-white border-2 border-sky-brand/50 shadow-md translate-x-1'
                : 'bg-white/60 hover:bg-white border border-gray-200/70 hover:border-gray-300'
            )}
          >
            {/* Active Left Indicator Bar */}
            {isActive && (
              <span
                className="absolute left-0 top-3 bottom-3 w-1.5 bg-sky-brand rounded-r-md"
                aria-hidden="true"
              />
            )}

            <div className="flex items-center gap-4 pl-1">
              {/* Number Pill */}
              <span
                className={clsx(
                  'w-9 h-9 rounded-xl flex items-center justify-center text-xs font-mono font-bold transition-colors shrink-0',
                  isActive
                    ? 'bg-navy text-sky-brand shadow-xs'
                    : 'bg-paper text-muted group-hover:bg-soft-blue group-hover:text-deep-blue'
                )}
              >
                {framework.number}
              </span>

              {/* Framework Title */}
              <div>
                <span
                  className={clsx(
                    'text-base sm:text-lg font-sans transition-colors block leading-snug',
                    isActive
                      ? 'font-extrabold text-navy'
                      : 'font-semibold text-charcoal/80 group-hover:text-navy'
                  )}
                >
                  {framework.name}
                </span>
              </div>
            </div>

            {/* Trailing Active Indicator */}
            <div
              className={clsx(
                'w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ml-3',
                isActive
                  ? 'bg-sky-brand/20 text-deep-blue'
                  : 'text-gray-300 group-hover:text-muted'
              )}
              aria-hidden="true"
            >
              <ChevronRight
                className={clsx(
                  'w-4 h-4 transition-transform duration-200',
                  isActive ? 'translate-x-0.5 text-deep-blue' : ''
                )}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
};
