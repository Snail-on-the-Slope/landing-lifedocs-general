'use client';

import { useSyncExternalStore } from 'react';
import { HeroSection } from '@/components/sections/hero-section';
import { ProblemSection } from '@/components/sections/problem-section';
import { SolutionSection } from '@/components/sections/solution-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { PreviewSection } from '@/components/sections/preview-section';
import { TrustSection } from '@/components/sections/trust-section';
import { UseCasesSection } from '@/components/sections/use-cases-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { FaqSection } from '@/components/sections/faq-section';
import { FinalCtaSection } from '@/components/sections/final-cta-section';
import { StickyMobileCta } from '@/components/sections/sticky-mobile-cta';
import { PageTracking } from '@/components/sections/page-tracking';
import { LocalizationSync } from '@/components/sections/localization-sync';
import {
  defaultLocale,
  getLocaleServerSnapshot,
  getLocaleSnapshot,
  persistLocale,
  subscribeLocale,
} from '@/lib/i18n';
import type { LocalizedLandingContent, LocalizedSiteMeta } from '@/lib/types';

interface LandingPageProps {
  contentByLocale: LocalizedLandingContent;
  siteMetaByLocale: LocalizedSiteMeta;
}

export function LandingPage({ contentByLocale, siteMetaByLocale }: LandingPageProps) {
  const locale = useSyncExternalStore(subscribeLocale, getLocaleSnapshot, getLocaleServerSnapshot);

  const content = contentByLocale[locale] ?? contentByLocale[defaultLocale];
  const siteMeta = siteMetaByLocale[locale] ?? siteMetaByLocale[defaultLocale];

  const handleLocaleChange = (nextLocale: typeof locale) => {
    persistLocale(nextLocale);
  };

  return (
    <main className="pb-24 text-[var(--ink-primary)] md:pb-0">
      <LocalizationSync locale={locale} siteMeta={siteMeta} />
      <PageTracking variant={content.variant} locale={locale} />
      <HeroSection content={content} locale={locale} onLocaleChange={handleLocaleChange} />
      <ProblemSection content={content} />
      <SolutionSection content={content} />
      <FeaturesSection content={content} />
      <HowItWorksSection content={content} />
      <PreviewSection content={content} />
      <TrustSection content={content} />
      <UseCasesSection content={content} />
      <PricingSection content={content} locale={locale} />
      <FaqSection content={content} locale={locale} />
      <FinalCtaSection content={content} locale={locale} />
      <StickyMobileCta label={content.hero.primaryCta} variant={content.variant} locale={locale} />
    </main>
  );
}
