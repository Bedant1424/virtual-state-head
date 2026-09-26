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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
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
      className="fixed inset-0 z-50 lg:hidden flex flex-col justify-between bg-[#0B1F33] text-white transition-opacity duration-200"
    >
      {/* Top Bar with Brand & Close Button */}
      <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[3px] bg-[#123B63] text-white border border-[#87CEEB]/40 flex items-center justify-center font-mono font-bold text-xs tracking-tight">
            {siteContent.brand.shortName}
          </div>
          <div>
            <div className="font-extrabold text-base tracking-tight leading-none text-white">
              {siteContent.brand.brandName}
            </div>
            <div className="text-[10px] font-mono text-gray-400 mt-1 uppercase tracking-wider">
              {siteContent.brand.parentEntity} • Odisha
            </div>
          </div>
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 rounded-[3px] text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#87CEEB]"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className="flex-1 overflow-y-auto px-6 py-8 space-y-2"
        aria-label="Mobile Menu Links"
      >
        {siteContent.navigation.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={onClose}
            className="block py-3 text-base font-bold font-sans text-gray-200 hover:text-[#87CEEB] border-b border-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#87CEEB]"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Bottom CTA & Legal info */}
      <div className="p-6 border-t border-white/10 bg-[#081827]">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          className="bg-[#123B63] text-white hover:bg-[#1a4a7a] border border-[#87CEEB]/30 shadow-none font-bold rounded-[4px] py-4 flex items-center justify-center gap-2 cursor-pointer"
          onClick={() => {
            onClose();
            if (onCtaClick) onCtaClick();
          }}
        >
          <span>{siteContent.cta.primaryLabel}</span>
          <ArrowRight className="w-4 h-4 text-[#87CEEB]" />
        </Button>
        <p className="text-[11px] font-mono text-gray-400 text-center mt-3">
          {siteContent.brand.targetAudience}
        </p>
      </div>
    </div>
  );
};
