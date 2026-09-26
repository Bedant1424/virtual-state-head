import React from 'react';
import { Container } from '@/components/layout/Container';
import { ArrowDown } from 'lucide-react';

/**
 * EngineTransition
 * Clean editorial bridge connecting the Sales Performance Engine into How It Works.
 *
 * Required statement:
 * "Three elements. One structured approach to sales performance."
 */
export const EngineTransition: React.FC = () => {
  const handleScrollToHowItWorks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('how-it-works');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#081726] border-t border-white/10 py-10 sm:py-12 text-white">
      <Container size="default">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 max-w-4xl mx-auto text-center sm:text-left">
          <div>
            <div className="text-xs font-mono font-bold text-sky-brand uppercase tracking-wider mb-1.5">
              The Architecture
            </div>
            <p className="text-lg sm:text-xl font-bold font-sans text-white tracking-tight">
              Three elements. One structured approach to sales performance.
            </p>
          </div>

          <div className="shrink-0 flex justify-center sm:justify-end">
            <a
              href="#how-it-works"
              onClick={handleScrollToHowItWorks}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-bold text-sky-brand hover:text-white transition-colors group px-4 py-2 rounded-xl bg-white/5 border border-sky-brand/30 hover:border-sky-brand"
            >
              <span>See How the Engagement Works</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EngineTransition;
