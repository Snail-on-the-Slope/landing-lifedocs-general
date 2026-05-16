import { Button } from '@/components/primitives/button';
import { scrollToId, trackEvent } from '@/lib/tracking';
import type { LandingVariant, Locale } from '@/lib/types';

interface StickyMobileCtaProps {
  label: string;
  variant: LandingVariant;
  locale: Locale;
}

export function StickyMobileCta({ label, variant, locale }: StickyMobileCtaProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[rgba(36,50,58,0.08)] bg-[linear-gradient(180deg,rgba(246,242,234,0.84),rgba(246,242,234,0.96))] px-4 py-3 backdrop-blur md:hidden">
      <Button
        fullWidth
        onClick={() => {
          trackEvent('hero_cta_click', { variant, locale, placement: 'sticky_mobile', section: 'hero' });
          scrollToId('pricing');
        }}
      >
        {label}
      </Button>
    </div>
  );
}
