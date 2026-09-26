import React, { useState } from 'react';
import { m, useReducedMotion } from 'motion/react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { siteContent, ValueAreaKey } from '@/data/siteContent';
import { ValueSystemVisual } from './ValueSystemVisual';
import { ActiveValuePanel } from './ActiveValuePanel';
import { ValueTickerRail } from './ValueTickerRail';
import { BenefitsTransition } from './BenefitsTransition';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { clsx } from 'clsx';

export interface BenefitsProps {
  onCtaClick?: () => void;
}

/**
 * Benefits Section (Sprint 4: "What Your Business Gets")
 *
 * Story Position:
 * Explains what areas virtual sales leadership actually addresses in the business.
 * Presents five interconnected value areas around a central SALES PERFORMANCE core:
 * 1. Sales Strategy
 * 2. Team Performance
 * 3. Leadership Support
 * 4. Accountability
 * 5. Performance Consulting
 *
 * Grounded in clean consulting aesthetics. Avoids SaaS dashboards, fake KPIs, or claims of guaranteed growth.
 */
export const Benefits: React.FC<BenefitsProps> = ({ onCtaClick }) => {
  const [activeKey, setActiveKey] = useState<ValueAreaKey>('strategy');
  const shouldReduceMotion = useReducedMotion();
  const { benefits } = siteContent;

  return (
    <section
      id="benefits"
      aria-label="What Your Business Gets: Structured Sales Performance Support"
      className="py-16 sm:py-24 lg:py-28 bg-white border-b border-gray-200/80 relative overflow-hidden"
    >
      {/* Background Soft Atmospheric Ambient Radiance */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-soft-blue/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-paper/70 rounded-full blur-2xl pointer-events-none -z-10" />

      <Container size="default">
        {/* Top Eyebrow & Headline */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <m.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="mb-4"
          >
            <SectionLabel label={benefits.eyebrow} />
          </m.div>

          <m.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
            className="typography-h2 text-navy mb-4"
          >
            <span>{benefits.headline.primary} </span>
            <span className="text-deep-blue/80 font-semibold block sm:inline">
              {benefits.headline.secondary}
            </span>
          </m.h2>

          {/* Lead Intro Paragraph */}
          <m.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.14, ease: 'easeOut' }}
            className="text-base sm:text-lg text-charcoal font-medium leading-relaxed"
          >
            {benefits.introLead}
          </m.p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP LAYOUT (lg:grid): Left Editorial Column, Right Visual   */}
        {/* ============================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-10 lg:items-start mb-16">
          {/* Left Column (5 cols): Active Value Panel, Closing Concept & CTA */}
          <div className="lg:col-span-5 space-y-6">
            <m.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.18, ease: 'easeOut' }}
            >
              <ActiveValuePanel
                valueAreas={benefits.valueAreas}
                activeKey={activeKey}
                onSelectKey={setActiveKey}
              />
            </m.div>

            {/* Approved Closing Statement Card */}
            <m.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.24, ease: 'easeOut' }}
              className="p-5 rounded-2xl bg-paper/70 border border-gray-200/90 shadow-2xs space-y-2.5"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-deep-blue shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-deep-blue">
                  Integrated Execution
                </span>
              </div>
              <p className="text-sm font-medium text-charcoal leading-relaxed">
                {benefits.closing.statement1}
              </p>
              <p className="text-sm text-muted leading-relaxed">
                {benefits.closing.statement2}
              </p>
            </m.div>

            {/* Primary Commercial CTA */}
            <m.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.3, ease: 'easeOut' }}
              className="pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={onCtaClick}
                className="w-full sm:w-auto shadow-sm"
              >
                <span>Book Your Sales Strategy Call</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </m.div>
          </div>

          {/* Right Column (7 cols): Interactive 5-Part Value System Visual */}
          <div className="lg:col-span-7 lg:sticky lg:top-24">
            <m.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            >
              <ValueSystemVisual
                valueAreas={benefits.valueAreas}
                activeKey={activeKey}
                onSelectKey={setActiveKey}
              />
            </m.div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE ARCHITECTURE (< lg): Vertical Flow as Specified in Brief */}
        {/* Sequence: Intro -> Compact Visual -> Vertical Numbered List    */}
        {/* -> Expanded Active Item -> Closing -> CTA                     */}
        {/* ============================================================== */}
        <div className="block lg:hidden space-y-8 mb-14">
          {/* 1. Compact Five-Part Visual */}
          <div className="w-full">
            <ValueSystemVisual
              valueAreas={benefits.valueAreas}
              activeKey={activeKey}
              onSelectKey={setActiveKey}
              isCompact={true}
            />
          </div>

          {/* 2. Numbered Vertical Value Selector & Expandable Detail */}
          <div
            className="space-y-3"
            role="tablist"
            aria-label="Areas of Structured Support"
          >
            <div className="px-1 flex items-center justify-between text-xs text-muted font-mono mb-2">
              <span>AREAS OF SUPPORT (01 - 05)</span>
              <span>TAP TO EXPLORE</span>
            </div>

            {benefits.valueAreas.map((area) => {
              const isActive = area.valueKey === activeKey;

              return (
                <div
                  key={area.id}
                  className={clsx(
                    'rounded-xl border transition-all duration-200 overflow-hidden',
                    isActive
                      ? 'bg-soft-blue/30 border-deep-blue shadow-xs'
                      : 'bg-white border-gray-200/90 hover:border-sky-brand/60'
                  )}
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`mobile-value-panel-${area.valueKey}`}
                    id={`mobile-value-tab-${area.valueKey}`}
                    onClick={() => setActiveKey(area.valueKey)}
                    className="w-full flex items-center justify-between p-4 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-blue"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={clsx(
                          'w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono transition-colors',
                          isActive
                            ? 'bg-deep-blue text-white'
                            : 'bg-paper text-deep-blue border border-gray-200'
                        )}
                      >
                        {area.number}
                      </span>
                      <div>
                        <span className="text-sm font-bold text-deep-blue block">
                          {area.title}
                        </span>
                        <span className="text-xs text-muted block">
                          {area.shortLabel}
                        </span>
                      </div>
                    </div>

                    <ChevronDown
                      className={clsx(
                        'w-4 h-4 text-deep-blue transition-transform duration-200',
                        isActive && 'rotate-180 text-sky-brand'
                      )}
                    />
                  </button>

                  {/* Expanded Active Description */}
                  {isActive && (
                    <div
                      id={`mobile-value-panel-${area.valueKey}`}
                      role="tabpanel"
                      aria-labelledby={`mobile-value-tab-${area.valueKey}`}
                      className="px-4 pb-4 pt-1 border-t border-sky-brand/20 space-y-2.5 animate-fadeIn"
                    >
                      <p className="text-sm text-charcoal leading-relaxed font-sans font-normal">
                        {area.description}
                      </p>
                      <div className="flex items-center gap-2 text-[11px] font-mono text-muted pt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-deep-blue" />
                        <span>Core focus: {area.visualConcept}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 3. Mobile Closing Statement Card */}
          <div className="p-5 rounded-xl bg-paper/80 border border-gray-200/90 shadow-2xs space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-deep-blue shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider text-deep-blue">
                Integrated Approach
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-charcoal leading-relaxed">
              {benefits.closing.statement1}
            </p>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {benefits.closing.statement2}
            </p>
          </div>

          {/* 4. Mobile Primary CTA */}
          <div>
            <Button
              variant="primary"
              size="lg"
              onClick={onCtaClick}
              className="w-full shadow-sm"
            >
              <span>Book Your Sales Strategy Call</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Restrained Value Pillar Ticker Rail */}
        <ValueTickerRail items={benefits.tickerItems} className="my-8" />

        {/* Transition Bridge Linking to Sales Performance Engine */}
        <BenefitsTransition
          statement={benefits.bridge.statement}
          targetLabel={benefits.bridge.targetLabel}
          targetHref={benefits.bridge.targetHref}
        />
      </Container>
    </section>
  );
};
