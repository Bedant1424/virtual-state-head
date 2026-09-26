import React from 'react';
import { siteContent } from '@/data/siteContent';
import { Award, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AuthorityStripProps {
  className?: string;
}

/**
 * AuthorityStrip
 * Connected horizontal rail presenting the 4 core pillars of sales leadership:
 * - Experienced Sales Leadership
 * - Strategic Direction
 * - Team Performance
 * - Accountability
 *
 * Plus authoritative attribution: 30+ Years Sales Experience (Royal Bal).
 */
export const AuthorityStrip: React.FC<AuthorityStripProps> = ({ className }) => {
  const concepts = siteContent.authority.concepts;

  return (
    <div
      className={cn('w-full mt-10 lg:mt-14', className)}
      role="region"
      aria-label="Sales Leadership Capabilities & Authority"
    >
      {/* Top Meta Line: Attribution Anchor */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 text-xs font-bold text-deep-blue uppercase tracking-wider">
          <Award className="w-4 h-4 text-sky-brand" />
          <span>Experienced Sales Leadership</span>
        </div>
        <div className="text-xs font-semibold text-muted bg-paper px-2.5 py-1 rounded-md border border-gray-200">
          <span className="text-navy font-bold">{siteContent.authority.royalBalExperience}</span>
        </div>
      </div>

      {/* Main Connected Rail Container */}
      <div className="relative rounded-xl bg-white border border-gray-200/90 shadow-sm p-3 sm:p-4 overflow-hidden">
        {/* Continuous Connecting Line Background */}
        <div
          className="hidden md:block absolute top-1/2 left-8 right-8 h-0.5 bg-gray-200 -translate-y-1/2 pointer-events-none"
          aria-hidden="true"
        />

        {/* 4 Connected Concept Segments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative z-10">
          {concepts.map((concept, index) => (
            <div
              key={concept.title}
              className="group p-3 rounded-lg bg-paper/60 hover:bg-white border border-transparent hover:border-sky-brand/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-5 h-5 rounded-full bg-soft-blue text-deep-blue font-extrabold text-[10px] flex items-center justify-center border border-sky-brand/30 shrink-0">
                  0{index + 1}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-navy leading-tight">
                  {concept.title}
                </h3>
              </div>
              <p className="text-[11px] text-muted leading-snug pl-7">
                {concept.description}
              </p>
              <div className="mt-2 pl-7 flex items-center gap-1 text-[10px] font-semibold text-deep-blue opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle className="w-3 h-3 text-sky-brand" />
                <span>Active Capability</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
