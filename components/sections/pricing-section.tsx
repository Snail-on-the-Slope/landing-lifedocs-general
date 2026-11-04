import { Check } from 'lucide-react';
import { Button } from '@/components/primitives/button';
import { Reveal } from '@/components/primitives/reveal';
import { SectionHeading } from '@/components/primitives/section-heading';
import { SectionShell } from '@/components/primitives/section-shell';
import { scrollToId, trackEvent } from '@/lib/tracking';
import type { LandingContent, Locale, PricingPlanKey, WaitlistSource } from '@/lib/types';

interface PricingSectionProps {
  content: LandingContent;
  locale: Locale;
  onOpenWaitlist: (source: WaitlistSource, plan?: PricingPlanKey) => void;
}

export function PricingSection({ content, locale, onOpenWaitlist }: PricingSectionProps) {
  return (
    <SectionShell id="pricing" density="compact" viewport="dense">
      <SectionHeading eyebrow={content.pricing.eyebrow} title={content.pricing.heading} body={content.pricing.body} />

      <div className="grid gap-4 xl:grid-cols-3 lg:gap-5">
        {content.pricing.plans.map((plan, index) => (
          <Reveal
            key={plan.name}
            preset="card"
            delay={index * 0.05}
            className={`relative h-full overflow-hidden rounded-[32px] p-6 sm:p-7 ${
              plan.featured
                ? 'surface-card-strong border border-[rgba(36,50,58,0.12)]'
                : 'surface-card interactive-card'
            }`}
          >
            {plan.featured ? (
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(169,205,225,0.24),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(231,181,156,0.18),transparent_30%)]" />
            ) : null}

            <div className="relative z-10 flex h-full flex-col">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink-secondary)]">
                {plan.name}
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-[var(--ink-primary)]">{plan.price}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--ink-secondary)]">{plan.description}</p>

              <ul className="mt-5 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[var(--ink-secondary)]">
                    <span
                      className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full text-[var(--ink-primary)] ${
                        plan.featured ? 'bg-[rgba(169,205,225,0.22)]' : 'bg-[rgba(152,183,159,0.18)]'
                      }`}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.key ? (
                <Button
                  id={plan.key === 'plus' ? 'pricing-plus-cta' : 'pricing-family-cta'}
                  data-event={plan.key === 'plus' ? 'pricing_plus_click' : 'pricing_family_click'}
                  variant={plan.featured ? 'primary' : 'secondary'}
                  fullWidth
                  className="mt-6"
                  onClick={() => {
                    const planKey = plan.key ?? 'plus';
                    const source = planKey === 'plus' ? 'pricing_plus' : 'pricing_family';
                    onOpenWaitlist(source, planKey);
                    trackEvent(planKey === 'plus' ? 'pricing_plus_click' : 'pricing_family_click', {
                      variant: content.variant,
                      locale,
                      placement: `pricing_${planKey}`,
                      section: 'pricing',
                      plan: planKey,
                    });
                  }}
                >
                  {plan.ctaLabel}
                </Button>
              ) : (
                <Button
                  id="pricing-free-cta"
                  data-event="secondary_cta_click"
                  variant="secondary"
                  fullWidth
                  className="mt-6"
                  onClick={() => {
                    trackEvent('secondary_cta_click', {
                      variant: content.variant,
                      locale,
                      placement: 'pricing_free_preview',
                      section: 'pricing',
                    });
                    scrollToId('preview');
                  }}
                >
                  {plan.staticLabel}
                </Button>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
