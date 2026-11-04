import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/primitives/button';
import { Reveal } from '@/components/primitives/reveal';
import { SectionShell } from '@/components/primitives/section-shell';
import { trackEvent } from '@/lib/tracking';
import type { LandingContent, Locale, PricingPlanKey, WaitlistSource } from '@/lib/types';

interface FinalCtaSectionProps {
  content: LandingContent;
  locale: Locale;
  onOpenWaitlist: (source: WaitlistSource, plan?: PricingPlanKey) => void;
}

export function FinalCtaSection({ content, locale, onOpenWaitlist }: FinalCtaSectionProps) {
  return (
    <SectionShell density="compact" viewport="cta" className="pb-32 md:pb-24">
      <Reveal preset="card" className="surface-card-strong relative overflow-hidden rounded-[36px] p-8 text-center sm:p-10 lg:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(169,205,225,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(231,181,156,0.2),transparent_32%)]" />
        <div className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink-secondary)]">
            {content.finalCta.eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[var(--ink-primary)] sm:text-4xl">
            {content.finalCta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--ink-secondary)] sm:text-lg">
            {content.finalCta.body}
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              onClick={() => {
                trackEvent('hero_cta_click', {
                  variant: content.variant,
                  locale,
                  placement: 'final_cta',
                  section: 'final_cta',
                });
                onOpenWaitlist('final_cta', 'plus');
              }}
            >
              {content.finalCta.cta}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
