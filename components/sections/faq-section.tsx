import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Reveal } from '@/components/primitives/reveal';
import { SectionHeading } from '@/components/primitives/section-heading';
import { SectionShell } from '@/components/primitives/section-shell';
import { trackEvent } from '@/lib/tracking';
import type { LandingContent, Locale } from '@/lib/types';

interface FaqSectionProps {
  content: LandingContent;
  locale: Locale;
}

export function FaqSection({ content, locale }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(content.faq.items[0]?.id ?? null);

  return (
    <SectionShell>
      <SectionHeading eyebrow={content.faq.eyebrow} title={content.faq.heading} body={content.faq.body} />

      <div className="mx-auto max-w-3xl space-y-3">
        {content.faq.items.map((item, index) => {
          const isOpen = openId === item.id;

          return (
            <Reveal key={item.id} preset="card" delay={index * 0.03}>
              <div className="surface-card interactive-card overflow-hidden rounded-[26px] p-2">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  data-event="faq_open"
                  data-faq-id={item.id}
                  className="focus-ring flex w-full items-center justify-between gap-4 rounded-[22px] px-4 py-4 text-left"
                  onClick={() => {
                    const nextOpen = !isOpen;
                    setOpenId(nextOpen ? item.id : null);

                    if (nextOpen) {
                      trackEvent('faq_open', {
                        variant: content.variant,
                        locale,
                        placement: 'faq',
                        section: 'faq',
                        faqId: item.id,
                      });
                    }
                  }}
                >
                  <span className="text-base font-semibold text-[var(--ink-primary)]">{item.question}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="h-5 w-5 text-[var(--ink-secondary)]" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`faq-panel-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 text-sm leading-7 text-[var(--ink-secondary)]">{item.answer}</div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
