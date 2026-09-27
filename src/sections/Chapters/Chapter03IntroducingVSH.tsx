import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { vshImages } from '@/assets/images';
import { ArrowRight } from 'lucide-react';

export interface Chapter03IntroducingVSHProps {
  onCtaClick?: () => void;
}

/**
 * CHAPTER 03 — INTRODUCING VIRTUAL STATE HEAD
 * Editorial Strategic Authority: Human / Candid Advisory & Asymmetrical Typography
 *
 * Image-led (candid advisory photograph) + authoritative H2 statement + 6 support areas in sparse typography.
 * Avoids rigid grids, conventional 3-column cards, and SaaS service matrices.
 */
export const Chapter03IntroducingVSH: React.FC<Chapter03IntroducingVSHProps> = ({ onCtaClick }) => {
  const capabilityAreas = [
    {
      num: '01',
      title: 'Sales Strategy',
      description: 'Bring clarity to priorities, direction, and commercial actions.',
    },
    {
      num: '02',
      title: 'Team Development',
      description: 'Develop sales capability, communication, and execution discipline.',
    },
    {
      num: '03',
      title: 'Leadership Support',
      description: 'Strengthen how business owners and leaders guide sales teams.',
    },
    {
      num: '04',
      title: 'Accountability',
      description: 'Establish structured reviews of activities, commitments, and results.',
    },
    {
      num: '05',
      title: 'Sales Execution',
      description: 'Support practical implementation of agreed sales practices and follow-through.',
    },
    {
      num: '06',
      title: 'Strategic Discussions',
      description: 'Work with business owners and leadership teams on important sales decisions and priorities.',
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="introducing-heading"
      className="py-16 sm:py-24 lg:py-28 bg-white border-b border-gray-200/80 overflow-hidden"
    >
      <Container size="default">
        {/* Asymmetric Editorial Header: Photo Left (7 cols), Primary Statement Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
          {/* Left Column (7 cols): Candid Documentary Advisory Photograph */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/9] w-full rounded-[4px] overflow-hidden border border-gray-200 bg-gray-50">
              <img
                src={vshImages.introducingVsh}
                alt="Two senior Indian business leaders in deep strategic advisory discussion over operational plans"
                width={1200}
                height={675}
                className="w-full h-full object-cover object-center filter saturate-[0.95]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-[2px] bg-[#0B1F33]/80 backdrop-blur-xs text-[11px] font-mono text-white/90">
                SALES LEADERSHIP SUPPORT
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Primary Statement & Concise Brief */}
          <div className="lg:col-span-5 space-y-6">
            <h2
              id="introducing-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] font-sans tracking-tight leading-[1.08]"
            >
              Experienced Sales Leadership.{' '}
              <span className="text-[#123B63] block mt-1 sm:mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold">
                Without Necessarily Hiring Another Full-Time Executive.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#333333] font-sans leading-relaxed">
              Virtual State Head provides experienced sales leadership, strategic direction, team development, performance consulting, and accountability support for MSMEs in Odisha that already have sales activity but need stronger direction, execution, and performance discipline.
            </p>

            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onCtaClick}
                className="w-full sm:w-auto bg-[#123B63] text-white hover:bg-[#0B1F33] transition-colors font-bold px-8 py-4 rounded-[4px] shadow-none flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap"
              >
                <span>Book Your Sales Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-[#87CEEB]" />
              </Button>
            </div>
          </div>
        </div>

        {/* Six Capability Focus Areas: Sparse Typography with Asymmetrical Staggered Placement */}
        <div className="pt-10 border-t border-gray-200">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#123B63] mb-8">
            AREAS OF ACTIVE CONSULTING INTERVENTION
          </div>

          {/* Asymmetric, Airy Flow (Not a Rigid 3-Column Boxed Grid) */}
          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:gap-y-10">
            {/* Area 01 & 02: First Row Asymmetry */}
            <div className="lg:col-span-5 space-y-1.5 border-l-2 border-[#123B63] pl-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#123B63]">{capabilityAreas[0].num}</span>
                <h3 className="text-base font-bold text-[#0B1F33] font-sans">
                  {capabilityAreas[0].title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#6B7280] font-sans leading-relaxed">
                {capabilityAreas[0].description}
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 space-y-1.5 border-l-2 border-gray-300 pl-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#123B63]">{capabilityAreas[1].num}</span>
                <h3 className="text-base font-bold text-[#0B1F33] font-sans">
                  {capabilityAreas[1].title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#6B7280] font-sans leading-relaxed">
                {capabilityAreas[1].description}
              </p>
            </div>

            {/* Area 03 & 04: Second Row Asymmetry with Staggered Width */}
            <div className="lg:col-span-6 space-y-1.5 border-l-2 border-gray-300 pl-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#123B63]">{capabilityAreas[2].num}</span>
                <h3 className="text-base font-bold text-[#0B1F33] font-sans">
                  {capabilityAreas[2].title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#6B7280] font-sans leading-relaxed">
                {capabilityAreas[2].description}
              </p>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 space-y-1.5 border-l-2 border-[#123B63] pl-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#123B63]">{capabilityAreas[3].num}</span>
                <h3 className="text-base font-bold text-[#0B1F33] font-sans">
                  {capabilityAreas[3].title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#6B7280] font-sans leading-relaxed">
                {capabilityAreas[3].description}
              </p>
            </div>

            {/* Area 05 & 06: Third Row Asymmetry */}
            <div className="lg:col-span-5 space-y-1.5 border-l-2 border-gray-300 pl-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#123B63]">{capabilityAreas[4].num}</span>
                <h3 className="text-base font-bold text-[#0B1F33] font-sans">
                  {capabilityAreas[4].title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#6B7280] font-sans leading-relaxed">
                {capabilityAreas[4].description}
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 space-y-1.5 border-l-2 border-[#123B63] pl-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#123B63]">{capabilityAreas[5].num}</span>
                <h3 className="text-base font-bold text-[#0B1F33] font-sans">
                  {capabilityAreas[5].title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#6B7280] font-sans leading-relaxed">
                {capabilityAreas[5].description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Chapter03IntroducingVSH;
