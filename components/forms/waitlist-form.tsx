import { useState } from 'react';
import { Button } from '@/components/primitives/button';
import { interpolate } from '@/lib/i18n';
import { saveWaitlistEntry, trackEvent } from '@/lib/tracking';
import type { LandingVariant, Locale, PricingPlanKey, WaitlistCopy } from '@/lib/types';

interface WaitlistFormProps {
  variant: LandingVariant;
  locale: Locale;
  source: string;
  selectedPlan: PricingPlanKey;
  selectedPlanLabel: string;
  copy: WaitlistCopy;
}

export function WaitlistForm({
  variant,
  locale,
  source,
  selectedPlan,
  selectedPlanLabel,
  copy,
}: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalized = email.trim().toLowerCase();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);

    if (!isValid) {
      setError(copy.invalidEmail);
      return;
    }

    const emailDomain = normalized.split('@')[1] ?? '';

    saveWaitlistEntry({
      email: normalized,
      emailDomain,
      source,
      variant,
      plan: selectedPlan,
      locale,
      createdAt: new Date().toISOString(),
    });

    trackEvent('email_submit', {
      variant,
      locale,
      placement: source,
      section: 'pricing',
      emailDomain,
      plan: selectedPlan,
    });

    setError('');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="surface-card-strong relative mt-6 overflow-hidden rounded-[28px] p-6 text-left">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(169,205,225,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(231,181,156,0.16),transparent_28%)]" />
        <div className="relative z-10">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--ink-secondary)]">
          {copy.successEyebrow}
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-[var(--ink-primary)]">
          {interpolate(copy.successTitleTemplate, { plan: selectedPlanLabel })}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[var(--ink-secondary)]">{copy.successBody}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card-strong mt-6 rounded-[28px] p-6">
      <input type="hidden" name="variant" value={variant} />
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="plan" value={selectedPlan} />

      <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
        <label htmlFor="waitlist-email" className="flex flex-col gap-2">
          <span className="text-sm font-medium text-[var(--ink-primary)]">{copy.emailLabel}</span>
          <input
            id="waitlist-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder={copy.emailPlaceholder}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="focus-ring min-h-12 rounded-[1.2rem] border border-[rgba(36,50,58,0.12)] bg-[rgba(255,255,255,0.88)] px-4 text-[var(--ink-primary)] shadow-[0_10px_22px_rgba(36,50,58,0.04)] placeholder:text-[var(--ink-soft)]"
          />
        </label>

        <div className="flex items-end">
          <Button id="waitlist-submit" data-event="email_submit" type="submit" fullWidth className="sm:min-w-[210px]">
            {copy.submitLabel}
          </Button>
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-2 text-sm text-[var(--ink-secondary)] sm:flex-row sm:items-center sm:justify-between">
        <span>{interpolate(copy.validationLabelTemplate, { plan: selectedPlanLabel })}</span>
        <span>{copy.noChargeLabel}</span>
      </div>

      {error ? <p className="mt-3 text-sm text-[var(--status-alert)]">{error}</p> : null}
    </form>
  );
}
