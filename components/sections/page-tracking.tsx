import { useEffect } from 'react';
import { markScrollThreshold, trackEvent } from '@/lib/tracking';
import { captureAttributionFromLocation } from '@/lib/utm';
import type { LandingVariant, Locale } from '@/lib/types';

interface PageTrackingProps {
  variant: LandingVariant;
  locale: Locale;
}

export function PageTracking({ variant, locale }: PageTrackingProps) {
  useEffect(() => {
    captureAttributionFromLocation();

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height <= 0) return;

      const progress = (scrollTop / height) * 100;

      if (progress >= 50 && markScrollThreshold(variant, 50)) {
        trackEvent('scroll_50', { variant, locale, section: 'page' });
      }

      if (progress >= 90 && markScrollThreshold(variant, 90)) {
        trackEvent('scroll_90', { variant, locale, section: 'page' });
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [locale, variant]);

  return null;
}
