import React from 'react';
import { Compass, ShieldCheck, BarChart3, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface HeroVisualProps {
  className?: string;
}

/**
 * HeroVisual
 * Clean architectural visualization of the Sales Performance Engine pillars.
 * Shows the three pillars (Training, Technology, Accountability) with
 * source-backed descriptions only. No unsupported micro-claims.
 */
export const HeroVisual: React.FC<HeroVisualProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'relative w-full max-w-[490px] mx-auto lg:max-w-none transform-gpu',
        className
      )}
    >
      {/* Subtle Ambient Glow Plane */}
      <div
        className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-deep-blue/10 via-sky-brand/15 to-transparent blur-xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Architectural Visual Container */}
      <div className="relative rounded-2xl bg-white/95 border border-sky-brand/35 shadow-xl overflow-hidden backdrop-blur-sm">
        {/* Top Architecture Header */}
        <div className="bg-navy px-5 py-4 text-white border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-brand" />
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-sky-brand block leading-none">
                Sales Performance Engine
              </span>
              <span className="text-xs text-slate-300 font-medium mt-0.5 block">
                Sales Performance Consulting for MSMEs in Odisha
              </span>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded bg-deep-blue/90 border border-sky-brand/40 text-[10px] font-bold text-sky-brand uppercase tracking-wider shrink-0">
            3 Pillars
          </span>
        </div>

        {/* System Formula Banner */}
        <div className="bg-soft-blue/70 px-5 py-2.5 border-b border-sky-brand/20 flex items-center justify-center text-xs">
          <div className="flex items-center gap-1.5 sm:gap-2 font-mono font-bold text-[11px] text-deep-blue tracking-tight">
            <span className="text-navy">TRAINING</span>
            <span className="text-sky-brand font-black">+</span>
            <span className="text-navy">TECHNOLOGY</span>
            <span className="text-sky-brand font-black">+</span>
            <span className="text-navy">ACCOUNTABILITY</span>
          </div>
        </div>

        {/* Central Core: The 3 Official System Pillars */}
        <div className="p-5 sm:p-6 space-y-3.5 bg-gradient-to-b from-paper/30 to-white">
          {/* PILLAR 1: TRAINING */}
          <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm group hover:border-sky-brand/60 transition-colors">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-soft-blue text-deep-blue flex items-center justify-center border border-sky-brand/40 shrink-0">
                <Compass className="w-5 h-5 text-deep-blue" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-extrabold text-navy tracking-tight uppercase mb-1">
                  1. Training
                </h3>
                <p className="text-xs text-charcoal leading-relaxed font-medium">
                  Develop skills, mindset, communication and sales capability.
                </p>
              </div>
            </div>
          </div>

          {/* PILLAR 2: TECHNOLOGY */}
          <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm group hover:border-sky-brand/60 transition-colors">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-soft-blue text-deep-blue flex items-center justify-center border border-sky-brand/40 shrink-0">
                <BarChart3 className="w-5 h-5 text-deep-blue" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-extrabold text-navy tracking-tight uppercase mb-1">
                  2. Technology
                </h3>
                <p className="text-xs text-charcoal leading-relaxed font-medium">
                  Support sales visibility, tracking, coordination and execution through appropriate tools and systems.
                </p>
              </div>
            </div>
          </div>

          {/* PILLAR 3: ACCOUNTABILITY */}
          <div className="p-4 rounded-xl bg-deep-blue text-white border border-sky-brand/40 shadow-sm">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-navy text-sky-brand flex items-center justify-center border border-sky-brand/40 shrink-0">
                <ShieldCheck className="w-5 h-5 text-sky-brand" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-extrabold text-white tracking-tight uppercase mb-1">
                  3. Accountability
                </h3>
                <p className="text-xs text-slate-100 leading-relaxed font-medium">
                  Create ownership through structured reviews, commitments, follow-through and performance discussions.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Authority Anchor Bar */}
          <div className="pt-3 border-t border-gray-200/70 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-navy text-sky-brand font-extrabold text-[11px] flex items-center justify-center">
                RB
              </div>
              <div>
                <span className="font-bold text-navy block leading-none">Royal Bal</span>
                <span className="text-[10px] text-muted">More than 30 Years Sales Experience</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-deep-blue font-semibold text-[11px]">
              <Layers className="w-3.5 h-3.5 text-sky-brand" />
              <span>Royal Way Academy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
