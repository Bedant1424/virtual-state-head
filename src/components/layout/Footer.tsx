import React from 'react';
import { siteContent } from '@/data/siteContent';
import { Container } from './Container';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0B1F33] text-white border-t border-white/10 mt-auto">
      <Container size="default" className="py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12 pb-8 border-b border-white/10">
          {/* Brand & Positioning Summary */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-[3px] bg-[#123B63] text-white border border-[#87CEEB]/40 flex items-center justify-center font-mono font-bold text-xs tracking-tight shadow-none">
                {siteContent.brand.shortName}
              </div>
              <div>
                <span className="font-extrabold text-base sm:text-lg text-white font-sans tracking-tight leading-tight block">
                  {siteContent.brand.brandName}
                </span>
                <span className="text-[11px] font-mono text-[#87CEEB]">
                  {siteContent.brand.programName}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed max-w-md">
              {siteContent.brand.positioningStatement}
            </p>

            <div className="text-[11px] font-mono text-gray-400">
              Official Program of <strong className="text-white">{siteContent.brand.parentEntity}</strong> • Serving {siteContent.brand.location}
            </div>
          </div>

          {/* Program Architecture Navigation */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#87CEEB] mb-3">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-1 text-xs font-sans text-gray-300">
              {siteContent.navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="hover:text-[#87CEEB] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#87CEEB] rounded-[2px] py-1.5 inline-flex items-center"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Methodology & Frameworks */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#87CEEB] mb-3">
              Confirmed Frameworks
            </h4>
            <ul className="space-y-1.5 text-xs font-sans text-gray-300">
              {siteContent.frameworks.map((framework) => (
                <li key={framework.id} className="flex items-center gap-2 py-0.5">
                  <span className="w-1 h-1 rounded-full bg-[#87CEEB]" aria-hidden="true" />
                  <span>{framework.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-gray-400">
          <p>
            © {currentYear} {siteContent.brand.parentEntity}. All rights reserved.
          </p>
          <p className="text-[11px] text-gray-500 text-center sm:text-right">
            Demonstration website for evaluation • Methodologies of {siteContent.brand.parentEntity}
          </p>
        </div>
      </Container>
    </footer>
  );
};
