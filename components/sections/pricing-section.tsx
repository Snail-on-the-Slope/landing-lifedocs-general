import { useMemo, useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/primitives/button';
import { Reveal } from '@/components/primitives/reveal';
import { SectionHeading } from '@/components/primitives/section-heading';
import { SectionShell } from '@/components/primitives/section-shell';
import { WaitlistForm } from '@/components/forms/waitlist-form';
import { interpolate } from '@/lib/i18n';
import { trackEvent } from '@/lib/tracking';
import type { LandingContent, Locale, PricingPlanKey } from '@/lib/types';

interface PricingSectionProps {
  content: LandingContent;
  locale: Locale;
}

export function PricingSection({ content, locale }: PricingSectionProps) {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlanKey>('plus');

  const selectedPlanData = useMemo(
    () => content.pricing.plans.find((plan) => plan.key === selectedPlan) ?? content.pricing.plans[1],
    [content.pricing.plans, selectedPlan]
  );

  const selectedLabel = selectedPlanData?.name ?? '';

  return (
    <SectionShell id="pricing">
      <SectionHeading eyebrow={content.pricing.eyebrow} title={content.pricing.heading} body={content.pricing.body} />

      <div className="grid gap-5 xl:grid-cols-3">
        {content.pricing.plans.map((plan, index) => (
          <Reveal
            key={plan.name}
            preset="card"
            delay={index * 0.05}
            className={`relative overflow-hidden rounded-[32px] p-6 sm:p-7 ${
              plan.featured
                ? 'surface-card-strong border border-[rgba(36,50,58,0.12)]'
                : 'surface-card interactive-card'
            }`}
          >
            {plan.featured ? (
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(169,205,225,0.24),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(231,181,156,0.18),transparent_30%)]" />
            ) : null}

            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink-secondary)]">
                {plan.name}
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-[var(--ink-primary)]">{plan.price}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--ink-secondary)]">{plan.description}</p>

              <ul className="mt-5 space-y-3">
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
                    setSelectedPlan(planKey);
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
                <div className="mt-6 rounded-full bg-[rgba(36,50,58,0.05)] px-4 py-3 text-center text-sm font-medium text-[var(--ink-secondary)]">
                  {plan.staticLabel}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal id="pricing-waitlist" preset="card" className="mx-auto mt-7 max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink-secondary)]">
          {interpolate(content.pricing.waitlistLabel, { plan: selectedLabel })}
        </p>
        <WaitlistForm
          variant={content.variant}
          locale={locale}
          source="pricing_section"
          selectedPlan={selectedPlan}
          selectedPlanLabel={selectedLabel}
          copy={content.waitlistForm}
        />
      </Reveal>
    </SectionShell>
  );
}
