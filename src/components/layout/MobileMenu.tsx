import React, { useEffect, useRef } from 'react';
import { siteContent } from '@/data/siteContent';
import { Button } from '@/components/ui/Button';
import { X, ArrowRight } from 'lucide-react';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onCtaClick?: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onCtaClick,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Keyboard navigation & accessibility: Escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Focus close button on open
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      id="mobile-nav-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden flex flex-col justify-between bg-navy/95 backdrop-blur-md text-white transition-opacity duration-200"
    >
      {/* Top Bar with Brand & Close Button */}
      <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-deep-blue text-sky-brand border border-sky-brand/40 flex items-center justify-center font-bold text-sm tracking-tight">
            {siteContent.brand.shortName}
          </div>
          <div>
            <div className="font-extrabold text-base tracking-tight leading-none text-white">
              {siteContent.brand.brandName}
            </div>
            <div className="text-[11px] text-gray-400 mt-1 font-medium">
              {siteContent.brand.parentEntity}
            </div>
          </div>
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-brand"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className="flex-1 overflow-y-auto px-6 py-8 space-y-4"
        aria-label="Mobile Menu Links"
      >
        {siteContent.navigation.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={onClose}
            className="block py-2.5 text-lg font-bold text-gray-200 hover:text-sky-brand border-b border-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-brand"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Bottom CTA & Legal info */}
      <div className="p-6 border-t border-white/10 bg-navy">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          className="bg-sky-brand text-navy hover:bg-white hover:text-navy border-none shadow-md font-extrabold"
          onClick={() => {
            onClose();
            if (onCtaClick) onCtaClick();
          }}
        >
          <span>{siteContent.cta.primaryLabel}</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
        <p className="text-xs text-gray-400 text-center mt-3">
          {siteContent.brand.targetAudience}
        </p>
      </div>
    </div>
  );
};
