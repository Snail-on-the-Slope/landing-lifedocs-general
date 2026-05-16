export type Locale = 'en' | 'ru' | 'es';

export type ValidationEvent =
  | 'hero_cta_click'
  | 'secondary_cta_click'
  | 'pricing_plus_click'
  | 'pricing_family_click'
  | 'faq_open'
  | 'email_submit'
  | 'scroll_50'
  | 'scroll_90';

export type LandingVariant = 'pet-travel' | 'family-docs' | 'general';
export type PricingPlanKey = 'plus' | 'family';

export interface TrackEventPayload {
  variant: LandingVariant;
  locale?: Locale;
  placement?: string;
  section?: string;
  plan?: PricingPlanKey;
  faqId?: string;
  emailDomain?: string;
}

export interface SiteMeta {
  name: string;
  title: string;
  description: string;
}

export type LocalizedSiteMeta = Record<Locale, SiteMeta>;

export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  chips: string[];
}

export interface ProblemCard {
  title: string;
  description: string;
}

export interface SolutionPillar {
  title: string;
  description: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  label: string;
  icon: 'file' | 'clock' | 'paw' | 'shield' | 'download' | 'user' | 'car' | 'check';
}

export interface HowStep {
  title: string;
  description: string;
}

export interface UseCaseCard {
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface MockupDocument {
  title: string;
  meta: string;
  accent: 'sky' | 'peach' | 'sage' | 'warning';
}

export interface MockupLabels {
  todayEyebrow: string;
  todayTitle: string;
  pinnedChip: string;
  walletEyebrow: string;
  profileEyebrow: string;
  reminderEyebrow: string;
  maskedDetailsChip: string;
  microchipLabel: string;
  rabiesLabel: string;
  rabiesValue: string;
  documentStackEyebrow: string;
}

export interface MockupData {
  labels: MockupLabels;
  todayItems: string[];
  walletTitle: string;
  walletMeta: string;
  profileTitle: string;
  profileMeta: string;
  reminderTitle: string;
  reminderMeta: string;
  emergencyName?: string;
  emergencyChip?: string;
  floatingDocs: MockupDocument[];
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  key?: PricingPlanKey;
  featured?: boolean;
  ctaLabel?: string;
  staticLabel?: string;
}

export interface WaitlistCopy {
  emailLabel: string;
  emailPlaceholder: string;
  submitLabel: string;
  validationLabelTemplate: string;
  noChargeLabel: string;
  invalidEmail: string;
  successEyebrow: string;
  successTitleTemplate: string;
  successBody: string;
}

export interface LandingContent {
  variant: LandingVariant;
  accent: {
    primary: 'sky' | 'sage';
    secondary: 'peach' | 'sky';
  };
  hero: HeroContent;
  problem: {
    eyebrow: string;
    heading: string;
    body: string;
    cards: ProblemCard[];
  };
  solution: {
    eyebrow: string;
    heading: string;
    body: string;
    pillars: SolutionPillar[];
  };
  features: {
    eyebrow: string;
    heading: string;
    body: string;
    cards: FeatureCard[];
  };
  howItWorks: {
    eyebrow: string;
    heading: string;
    body: string;
    stepLabel: string;
    steps: HowStep[];
  };
  preview: {
    eyebrow: string;
    heading: string;
    body: string;
    note: string;
    mockup: MockupData;
  };
  trust: {
    eyebrow: string;
    heading: string;
    body: string;
    bullets: string[];
  };
  useCases: {
    eyebrow: string;
    heading: string;
    body: string;
    cards: UseCaseCard[];
  };
  pricing: {
    eyebrow: string;
    heading: string;
    body: string;
    waitlistLabel: string;
    plans: PricingPlan[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    body: string;
    items: FaqItem[];
  };
  finalCta: {
    eyebrow: string;
    heading: string;
    body: string;
    cta: string;
  };
  waitlistForm: WaitlistCopy;
}

export type LocalizedLandingContent = Record<Locale, LandingContent>;

export interface WaitlistEntry {
  email: string;
  emailDomain: string;
  source: string;
  variant: LandingVariant;
  plan: PricingPlanKey;
  locale: Locale;
  createdAt: string;
}
