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
          'sticky top-0 z-40 w-full transition-colors duration-200 border-b',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-gray-200 py-3 sm:py-3.5'
            : 'bg-white border-transparent py-4 sm:py-5',
          className
        )}
      >
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo & Wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123B63] rounded-[2px]"
            aria-label="Virtual State Head - Home"
          >
            <div className="w-9 h-9 rounded-[3px] bg-[#123B63] text-white flex items-center justify-center font-mono font-extrabold text-xs tracking-tight border border-[#87CEEB]/40 shadow-none">
              {siteContent.brand.shortName}
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg text-[#0B1F33] font-sans tracking-tight leading-tight">
                {siteContent.brand.brandName}
              </span>
              <span className="text-[10px] font-mono text-[#6B7280] tracking-wider uppercase">
                {siteContent.brand.parentEntity} • Odisha
              </span>
            </div>
          </a>

          {/* Desktop Navigation (5 Editorial Links) */}
          <nav
            className="hidden lg:flex items-center gap-7"
            aria-label="Primary Navigation"
          >
            {siteContent.navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-xs font-mono font-semibold uppercase tracking-wider text-[#333333] hover:text-[#123B63] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123B63] rounded-[2px] py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={onCtaClick}
              className="bg-[#123B63] text-white hover:bg-[#0B1F33] transition-colors font-bold text-xs tracking-wide px-5 py-2.5 rounded-[4px] shadow-none flex items-center gap-2 cursor-pointer"
            >
              <span>{siteContent.cta.primaryLabel}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#87CEEB]" />
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
              className="p-2 rounded-[3px] border border-gray-200 text-[#0B1F33] hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123B63]"
            >
              <Menu className="w-5 h-5" />
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
