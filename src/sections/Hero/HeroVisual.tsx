import React from 'react';
import { Compass, ShieldCheck, BarChart3, Activity, Layers, ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

export interface HeroVisualProps {
  className?: string;
}

/**
 * HeroVisual
 * An original, abstract business-performance system visual.
 * Replaces generic stock photography with a multi-layered architectural diagram
 * communicating direction, alignment, weekly governance, and sales leadership.
 */
export const HeroVisual: React.FC<HeroVisualProps> = ({ className }) => {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        'relative w-full max-w-[490px] mx-auto lg:max-w-none transform-gpu',
        className
      )}
    >
      {/* Subtle Background Glow Plane */}
      <div
        className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-deep-blue/10 via-sky-brand/15 to-transparent blur-xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Architectural Visual Container */}
      <div className="relative rounded-2xl bg-white/95 border border-sky-brand/30 shadow-xl overflow-hidden backdrop-blur-sm">
        {/* Top Telemetry Header */}
        <div className="bg-navy px-5 py-4 text-white border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-brand animate-ping" />
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-sky-brand block leading-none">
                Sales Performance Engine
              </span>
              <span className="text-xs text-slate-300 font-medium mt-0.5 block">
                Operating System for MSMEs in Odisha
              </span>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded bg-deep-blue/80 border border-sky-brand/30 text-[10px] font-bold text-sky-brand uppercase tracking-wider">
            Active System
          </span>
        </div>

        {/* Central Core: The 3 Operational Pillars Architecture */}
        <div className="p-6 sm:p-7 space-y-5 bg-gradient-to-b from-paper/40 to-white">
          {/* Diagnostic & Alignment Vector */}
          <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-sm relative overflow-hidden group hover:border-sky-brand transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-soft-blue text-deep-blue flex items-center justify-center border border-sky-brand/40 shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-navy">1. Strategic Direction</span>
                    <span className="text-[10px] font-semibold text-deep-blue bg-soft-blue px-1.5 py-0.5 rounded">
                      Clarity
                    </span>
                  </div>
                  <p className="text-xs text-muted mt-0.5">
                    Target account segmentation & territory discipline
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-deep-blue transition-colors" />
            </div>
          </div>

          {/* Capability & Team Execution Vector */}
          <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-sm relative overflow-hidden group hover:border-sky-brand transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-soft-blue text-deep-blue flex items-center justify-center border border-sky-brand/40 shrink-0">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-navy">2. Team Capability & Visibility</span>
                    <span className="text-[10px] font-semibold text-deep-blue bg-soft-blue px-1.5 py-0.5 rounded">
                      Rigor
                    </span>
                  </div>
                  <p className="text-xs text-muted mt-0.5">
                    Structured negotiation frameworks & pipeline tracking
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-deep-blue transition-colors" />
            </div>
          </div>

          {/* Governance & Weekly Reviews Vector */}
          <div className="p-4 rounded-xl bg-deep-blue text-white border border-sky-brand/40 shadow-sm relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-navy text-sky-brand flex items-center justify-center border border-sky-brand/40 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">3. Weekly Accountability</span>
                    <span className="text-[10px] font-bold text-navy bg-sky-brand px-1.5 py-0.5 rounded">
                      Governance
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 mt-0.5">
                    Executive deal inspection removing founder operational burden
                  </p>
                </div>
              </div>
              <Activity className="w-4 h-4 text-sky-brand" />
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

        {/* Bottom Status Ticker Bar */}
        <div className="bg-paper px-5 py-2.5 border-t border-gray-200/70 flex items-center justify-between text-[11px] text-muted">
          <div className="flex items-center gap-1.5">
            <span
              className={cn(
                'w-2 h-2 rounded-full bg-emerald-500',
                !reducedMotion && 'animate-pulse'
              )}
            />
            <span className="font-medium text-navy">Weekly Review Cadence Active</span>
          </div>
          <span className="font-semibold text-deep-blue">Odisha MSME Cohort</span>
        </div>
      </div>
    </div>
  );
};
