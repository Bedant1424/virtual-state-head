import React, { useEffect, useRef } from 'react';
import { X, CalendarCheck, ShieldAlert, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { siteContent } from '@/data/siteContent';

export interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeBtnRef.current?.focus(), 50);
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
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white border border-sky-brand/40 shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Close strategy call preview"
          className="absolute top-5 right-5 p-2 rounded-lg text-gray-400 hover:text-navy hover:bg-paper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-brand"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-soft-blue text-deep-blue border border-sky-brand/40 flex items-center justify-center shrink-0">
            <CalendarCheck className="w-6 h-6 text-deep-blue" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-deep-blue block">
              Trial / Demonstration Notice
            </span>
            <h3 id="demo-modal-title" className="text-xl font-bold text-navy leading-tight">
              {siteContent.cta.primaryLabel}
            </h3>
          </div>
        </div>

        {/* Explanation */}
        <div className="p-4 rounded-xl bg-soft-blue/60 border border-sky-brand/30 mb-6 text-xs text-deep-blue leading-relaxed">
          <div className="flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-deep-blue shrink-0 mt-0.5" />
            <p>
              <strong>Notice:</strong> This is an evaluation prototype. In the upcoming production release, this action will open direct scheduling with senior sales leadership from <strong>{siteContent.brand.parentEntity}</strong> for qualified MSMEs across {siteContent.brand.location}.
            </p>
          </div>
        </div>

        {/* Planned Intake Form Preview (Disabled) */}
        <div className="space-y-3 mb-6 opacity-75 select-none pointer-events-none">
          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1">
              Full Name
            </label>
            <input
              type="text"
              readOnly
              value="MSME Business Leader"
              className="w-full px-3.5 py-2 rounded-lg border border-gray-200 bg-paper text-xs text-muted"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-charcoal mb-1">
                Company Name
              </label>
              <input
                type="text"
                readOnly
                value="Enterprise in Odisha"
                className="w-full px-3.5 py-2 rounded-lg border border-gray-200 bg-paper text-xs text-muted"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-charcoal mb-1">
                Sales Team Size
              </label>
              <input
                type="text"
                readOnly
                value="3 – 25+ People"
                className="w-full px-3.5 py-2 rounded-lg border border-gray-200 bg-paper text-xs text-muted"
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-gray-200">
          <Button variant="outline" size="md" fullWidth={false} onClick={onClose}>
            Close Preview
          </Button>
          <Button variant="primary" size="md" onClick={onClose}>
            <span>Acknowledge Demo Mode</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
