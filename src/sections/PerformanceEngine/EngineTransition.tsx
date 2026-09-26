import React from 'react';
import { Container } from '@/components/layout/Container';
import { ChevronRight } from 'lucide-react';

/**
 * EngineTransition
 * Bridge component connecting the Sales Performance Engine into the Frameworks section (Sprint 6 preview).
 *
 * Rules:
 * - Secondary text link bridge: "See the Sales Frameworks" pointing to #frameworks
 * - Statement: "A structured system needs practical sales frameworks."
 * - Five framework preview pills (no invented descriptions)
 */
export const EngineTransition: React.FC = () => {
  const frameworks = [
    'Royal Selling Formula',
    'Strategic Negotiator',
    'Sense Selling',
    'Performance Consulting',
    'Lifetime Client Relationship (LCR)',
  ] as const;

  const handleScrollToFrameworks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('frameworks');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback if section placeholder exists or scroll downward
      window.scrollBy({ top: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-navy border-t border-white/10 py-12 lg:py-16 text-white">
      <Container size="default">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 max-w-5xl mx-auto">
          {/* Left: Statement & Framework Tags */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-bold text-sky-brand uppercase tracking-wider">
              Next in the System
            </div>
            <p className="text-lg sm:text-xl font-bold font-sans text-white">
              A structured system needs practical sales frameworks.
            </p>
            {/* Five Framework Preview Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {frameworks.map((framework) => (
                <span
                  key={framework}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-sans font-medium bg-white/5 border border-white/15 text-white/80"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Secondary Anchor Link Bridge */}
          <div className="shrink-0">
            <a
              href="#frameworks"
              onClick={handleScrollToFrameworks}
              className="inline-flex items-center gap-2 text-sm font-sans font-bold text-sky-brand hover:text-white transition-colors group px-4 py-2.5 rounded-xl bg-white/5 border border-sky-brand/30 hover:border-sky-brand"
            >
              <span>See the Sales Frameworks</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
