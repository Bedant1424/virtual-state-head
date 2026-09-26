import React from 'react';
import { siteContent } from '@/data/siteContent';
import { Container } from './Container';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-navy text-white border-t border-white/10 mt-auto">
      <Container size="default" className="py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand & Positioning Summary */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-deep-blue text-sky-brand border border-sky-brand/40 flex items-center justify-center font-extrabold text-sm tracking-tight shadow-sm">
                {siteContent.brand.shortName}
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight leading-tight block">
                  {siteContent.brand.brandName}
                </span>
                <span className="text-xs text-sky-brand font-medium">
                  {siteContent.brand.programName}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-md">
              {siteContent.brand.positioningStatement}
            </p>

            <div className="text-xs text-gray-400 font-medium">
              Official Program of <strong className="text-white">{siteContent.brand.parentEntity}</strong> • Serving {siteContent.brand.location}
            </div>
          </div>

          {/* Program Architecture Navigation */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-brand mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {siteContent.navigation.slice(0, 4).map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="hover:text-sky-brand transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-brand rounded"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Methodology & Frameworks */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-brand mb-4">
              Confirmed Frameworks
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {siteContent.frameworks.map((framework) => (
                <li key={framework.id} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-sky-brand" aria-hidden="true" />
                  <span>{framework.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {currentYear} {siteContent.brand.parentEntity}. All rights reserved.
          </p>
          <p className="text-[11px] text-gray-500 text-center sm:text-right">
            Demonstration website for evaluation • Frameworks and methodologies of {siteContent.brand.parentEntity}
          </p>
        </div>
      </Container>
    </footer>
  );
};
