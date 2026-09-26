import React from 'react';
import { Compass, Users, CheckCircle, ShieldCheck, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface HeroVisualProps {
  className?: string;
}

/**
 * HeroVisual
 * Premium editorial sales leadership visual.
 *
 * Replaces SaaS/Kanban dashboards with an authoritative consulting architecture:
 *
 * BUSINESS OBJECTIVES
 *        ↓
 * SALES LEADERSHIP (Virtual State Head)
 *        ↓
 * STRATEGY  •  TEAM  •  EXECUTION  •  ACCOUNTABILITY
 *
 * Communicates: Experience, Authority, Strategy, Commercial Understanding.
 */
export const HeroVisual: React.FC<HeroVisualProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'relative w-full max-w-[500px] mx-auto lg:max-w-none select-none',
        className
      )}
    >
      {/* Subtle Ambient Elevation Base */}
      <div
        className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-deep-blue/10 via-sky-brand/10 to-transparent blur-xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Editorial Visual Card */}
      <div className="relative rounded-2xl bg-navy text-white border border-white/15 shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Editorial Eyebrow & Brand Tag */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-brand" />
            <span className="font-bold tracking-widest uppercase text-sky-brand text-[11px]">
              Sales Leadership Model
            </span>
          </div>
          <span className="text-slate-300 text-xs font-medium">
            Odisha MSME Focus
          </span>
        </div>

        {/* ============================================================== */}
        {/* TIER 1: BUSINESS GOALS (Top Authority Level)                   */}
        {/* ============================================================== */}
        <div className="pt-6 pb-2 text-center">
          <div className="inline-block px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-center shadow-xs">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300 block mb-0.5">
              The Enterprise Goal
            </span>
            <span className="text-sm sm:text-base font-extrabold text-white tracking-tight">
              Business Goals & Commercial Objectives
            </span>
          </div>
        </div>

        {/* Central Vertical Connector */}
        <div className="flex flex-col items-center my-1.5" aria-hidden="true">
          <div className="w-0.5 h-6 bg-gradient-to-b from-white/40 to-sky-brand" />
          <ArrowDown className="w-3.5 h-3.5 text-sky-brand -mt-1" />
        </div>

        {/* ============================================================== */}
        {/* TIER 2: VIRTUAL STATE HEAD (Senior Sales Leadership Anchor)     */}
        {/* ============================================================== */}
        <div className="p-4 sm:p-5 rounded-xl bg-deep-blue border border-sky-brand/40 shadow-md text-center relative">
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-sky-brand text-navy font-extrabold text-[10px] uppercase tracking-wider">
            Senior Sales Leadership
          </div>
          <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight mt-1 mb-1">
            Virtual State Head
          </h3>
          <p className="text-xs text-slate-200 font-medium max-w-sm mx-auto leading-relaxed">
            Connecting owner vision to daily sales execution with structured direction, capability development, and accountability.
          </p>
        </div>

        {/* Downward Branching Connectors */}
        <div className="flex flex-col items-center my-2" aria-hidden="true">
          <div className="w-0.5 h-5 bg-gradient-to-b from-sky-brand to-white/30" />
        </div>

        {/* ============================================================== */}
        {/* TIER 3: THE FOUR OPERATIONAL DOMAINS (Structured Foundation)   */}
        {/* ============================================================== */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          {/* Domain 1: Strategy */}
          <div className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-sky-brand/40 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <Compass className="w-4 h-4 text-sky-brand shrink-0" />
              <span className="text-xs font-bold text-white uppercase tracking-tight">
                Strategy
              </span>
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              Commercial priorities & target market clarity
            </p>
          </div>

          {/* Domain 2: Team */}
          <div className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-sky-brand/40 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-4 h-4 text-sky-brand shrink-0" />
              <span className="text-xs font-bold text-white uppercase tracking-tight">
                Team
              </span>
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              Skill development & objection handling rigor
            </p>
          </div>

          {/* Domain 3: Execution */}
          <div className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-sky-brand/40 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle className="w-4 h-4 text-sky-brand shrink-0" />
              <span className="text-xs font-bold text-white uppercase tracking-tight">
                Execution
              </span>
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              Structured cadence & daily sales practices
            </p>
          </div>

          {/* Domain 4: Accountability */}
          <div className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-sky-brand/40 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <ShieldCheck className="w-4 h-4 text-sky-brand shrink-0" />
              <span className="text-xs font-bold text-white uppercase tracking-tight">
                Accountability
              </span>
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              Regular reviews & commitment tracking
            </p>
          </div>
        </div>

        {/* Bottom Credibility Anchor */}
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
          <div>
            <span className="text-white font-bold block leading-none">
              Royal Bal
            </span>
            <span className="text-[10px] text-slate-300">
              More than 30 Years Sales Experience
            </span>
          </div>
          <span className="text-[11px] font-semibold text-sky-brand">
            Royal Way Academy
          </span>
        </div>
      </div>
    </div>
  );
};
