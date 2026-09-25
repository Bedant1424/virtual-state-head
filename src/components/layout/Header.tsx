import React, { useState, useEffect } from 'react';
import { siteContent } from '@/data/siteContent';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';
import { Menu, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface HeaderProps {
  onCtaClick?: () => void;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ onCtaClick, className }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Monitor scroll for header background & elevation transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-200 border-b',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-paper shadow-sm py-3.5'
            : 'bg-white border-transparent py-4 sm:py-5',
          className
        )}
      >
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo & Wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-brand rounded-lg p-1"
            aria-label="Virtual State Head - Home"
          >
            <div className="w-10 h-10 rounded-lg bg-deep-blue text-white flex items-center justify-center font-extrabold text-sm tracking-tight border border-sky-brand/40 shadow-sm transition-transform duration-200 group-hover:scale-105">
              {siteContent.brand.shortName}
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg text-navy tracking-tight leading-tight group-hover:text-deep-blue transition-colors">
                {siteContent.brand.brandName}
              </span>
              <span className="text-[11px] text-muted tracking-tight font-medium">
                {siteContent.brand.parentEntity} • Odisha MSME
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-6"
            aria-label="Primary Navigation"
          >
            {siteContent.navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm font-semibold text-charcoal/90 hover:text-deep-blue hover:underline decoration-sky-brand decoration-2 underline-offset-8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-brand rounded-md px-1.5 py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Header Action */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={onCtaClick}
              className="gap-2"
            >
              <span>{siteContent.cta.primaryLabel}</span>
              <ArrowRight className="w-4 h-4 text-sky-brand" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
              className="p-2.5 rounded-lg border border-paper text-navy hover:bg-paper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-brand"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onCtaClick={onCtaClick}
      />
    </>
  );
};
