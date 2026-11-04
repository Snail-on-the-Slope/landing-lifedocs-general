'use client';

import { useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { WaitlistForm } from '@/components/forms/waitlist-form';
import { interpolate } from '@/lib/i18n';
import type { LandingContent, Locale, PricingPlanKey, WaitlistSource } from '@/lib/types';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: LandingContent;
  locale: Locale;
  selectedPlan: PricingPlanKey;
  source: WaitlistSource;
}

const closeLabelByLocale = {
  en: 'Close',
  ru: 'Закрыть',
  es: 'Cerrar',
} as const;

export function WaitlistModal({
  isOpen,
  onClose,
  content,
  locale,
  selectedPlan,
  source,
}: WaitlistModalProps) {
  const selectedPlanData = useMemo(
    () => content.pricing.plans.find((plan) => plan.key === selectedPlan) ?? content.pricing.plans[1],
    [content.pricing.plans, selectedPlan]
  );

  const selectedLabel = selectedPlanData?.name ?? '';

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label={closeLabelByLocale[locale]}
            className="absolute inset-0 bg-[rgba(36,50,58,0.32)] backdrop-blur-[6px]"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="surface-card-strong relative z-10 w-full max-w-4xl overflow-hidden rounded-[34px] border border-[rgba(36,50,58,0.12)] p-5 sm:p-6 lg:p-7"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(169,205,225,0.2),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(231,181,156,0.16),transparent_28%)]" />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink-secondary)]">
                    {interpolate(content.pricing.waitlistLabel, { plan: selectedLabel })}
                  </p>
                  <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-[var(--ink-primary)] sm:text-[2rem]">
                    {selectedPlanData?.description}
                  </h3>
                </div>

                <button
                  type="button"
                  aria-label={closeLabelByLocale[locale]}
                  onClick={onClose}
                  className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(36,50,58,0.1)] bg-[rgba(255,255,255,0.76)] text-[var(--ink-secondary)] transition-colors duration-200 hover:text-[var(--ink-primary)]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <WaitlistForm
                variant={content.variant}
                locale={locale}
                source={source}
                selectedPlan={selectedPlan}
                selectedPlanLabel={selectedLabel}
                copy={content.waitlistForm}
                className="mt-6"
                successClassName="mt-6"
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
