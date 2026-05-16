import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/primitives/button';
import { Chip } from '@/components/primitives/chip';
import { LanguageToggle } from '@/components/primitives/language-toggle';
import { Reveal } from '@/components/primitives/reveal';
import { SectionShell } from '@/components/primitives/section-shell';
import { HeroPhoneMockup } from '@/components/mockups/mockup-screens';
import { FLOAT_TRANSITION, FLOAT_TRANSITION_LONG, MOTION_DURATION, MOTION_EASE } from '@/lib/motion';
import { scrollToId, trackEvent } from '@/lib/tracking';
import type { LandingContent, Locale, MockupDocument } from '@/lib/types';

const accentMap = {
  sky: 'rgba(169, 205, 225, 0.54)',
  sage: 'rgba(152, 183, 159, 0.5)',
  peach: 'rgba(231, 181, 156, 0.54)',
};

const chipToneMap = {
  'pet-travel': ['sky', 'peach', 'amber'],
  'family-docs': ['sage', 'peach', 'sky'],
  general: ['sky', 'sage', 'lavender'],
} as const;

const companionPositions = {
  'pet-travel': [
    'left-0 top-12 xl:-left-4',
    'right-0 top-28 xl:-right-6',
    'left-10 bottom-4 xl:left-0',
  ],
  'family-docs': [
    'left-2 top-16 xl:-left-2',
    'right-0 top-28 xl:-right-4',
    'left-14 bottom-4 xl:left-6',
  ],
  general: [
    'left-1 top-16 xl:left-0',
    'right-2 top-28 xl:-right-2',
    'left-16 bottom-3 xl:left-8',
  ],
} as const;

function FloatingCompanionCard({
  item,
  className,
  delay,
}: {
  item: MockupDocument;
  className: string;
  delay: number;
}) {
  const reduceMotion = useReducedMotion();
  const accentStyles = {
    sky: {
      dot: 'bg-[var(--accent-sky)]',
      panel: 'border-[rgba(169,205,225,0.3)] bg-[rgba(255,255,255,0.88)]',
    },
    peach: {
      dot: 'bg-[var(--accent-peach)]',
      panel: 'border-[rgba(231,181,156,0.3)] bg-[rgba(255,250,246,0.9)]',
    },
    sage: {
      dot: 'bg-[var(--accent-sage)]',
      panel: 'border-[rgba(152,183,159,0.3)] bg-[rgba(252,255,252,0.9)]',
    },
    warning: {
      dot: 'bg-[var(--accent-amber)]',
      panel: 'border-[rgba(227,184,96,0.28)] bg-[rgba(255,251,241,0.92)]',
    },
  }[item.accent];

  return (
    <motion.div
      className={`pointer-events-none absolute hidden w-52 rounded-[22px] p-4 shadow-[0_18px_42px_rgba(36,50,58,0.10)] backdrop-blur md:block ${accentStyles.panel} ${className}`.trim()}
      initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.96 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: [0, -10, 0], rotate: [0, 1, 0] }}
      transition={
        reduceMotion
          ? undefined
          : {
              opacity: { duration: MOTION_DURATION.hero, delay },
              y: { ...FLOAT_TRANSITION_LONG, delay },
              rotate: { ...FLOAT_TRANSITION_LONG, delay: delay + 0.1 },
            }
      }
    >
      <div className="flex items-start gap-3">
        <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${accentStyles.dot}`} />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[var(--ink-primary)]">{item.title}</p>
          <p className="mt-1 text-xs leading-5 text-[var(--ink-secondary)]">{item.meta}</p>
        </div>
      </div>
    </motion.div>
  );
}

interface HeroSectionProps {
  content: LandingContent;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export function HeroSection({ content, locale, onLocaleChange }: HeroSectionProps) {
  const reduceMotion = useReducedMotion();
  const chipTones = chipToneMap[content.variant];
  const positions = companionPositions[content.variant];

  return (
    <SectionShell density="hero" className="overflow-hidden">
      <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 xl:gap-12">
        <Reveal preset="hero" className="relative z-10">
          <div className="mb-4 flex justify-start">
            <LanguageToggle locale={locale} onChange={onLocaleChange} />
          </div>

          <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--ink-secondary)]">
            {content.hero.eyebrow}
          </p>

          <h1 className="text-balance text-[2.7rem] font-semibold tracking-tight text-[var(--ink-primary)] sm:text-[3.35rem] sm:leading-[1.02] lg:text-[4.2rem] lg:leading-[0.96]">
            <span className="display-font italic text-[var(--ink-primary)]">LifeDocs</span>
            <span className="mt-2 block">{content.hero.title}</span>
          </h1>

          <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-[var(--ink-secondary)] sm:text-lg sm:leading-8">
            {content.hero.subtitle}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              id="hero-cta"
              data-event="hero_cta_click"
              onClick={() => {
                trackEvent('hero_cta_click', {
                  variant: content.variant,
                  locale,
                  placement: 'hero_primary',
                  section: 'hero',
                });
                scrollToId('pricing');
              }}
            >
              {content.hero.primaryCta}
            </Button>
            <Button
              id="secondary-cta"
              data-event="secondary_cta_click"
              variant="secondary"
              onClick={() => {
                trackEvent('secondary_cta_click', {
                  variant: content.variant,
                  locale,
                  placement: 'hero_secondary',
                  section: 'hero',
                });
                scrollToId('preview');
              }}
            >
              {content.hero.secondaryCta}
            </Button>
          </div>

          <div className="mt-4 flex max-w-xl flex-wrap gap-2.5">
            {content.hero.chips.map((chip, index) => (
              <Chip key={chip} tone={chipTones[index % chipTones.length]} animated={index === 0}>
                {chip}
              </Chip>
            ))}
          </div>
        </Reveal>

        <motion.div
          className="relative mx-auto w-full max-w-[40rem] lg:mx-0 lg:max-w-none"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={reduceMotion ? undefined : { duration: MOTION_DURATION.hero, ease: MOTION_EASE }}
        >
          <motion.div
            className="absolute -left-6 top-4 h-44 w-44 rounded-full blur-3xl"
            style={{ backgroundColor: accentMap[content.accent.primary] }}
            animate={reduceMotion ? undefined : { x: [0, 8, 0], y: [0, -10, 0] }}
            transition={reduceMotion ? undefined : FLOAT_TRANSITION_LONG}
          />
          <motion.div
            className="absolute bottom-0 right-0 h-48 w-48 rounded-full blur-3xl"
            style={{ backgroundColor: accentMap[content.accent.secondary] }}
            animate={reduceMotion ? undefined : { x: [0, -8, 0], y: [0, 10, 0] }}
            transition={reduceMotion ? undefined : FLOAT_TRANSITION}
          />
          <motion.div
            className="absolute left-20 top-16 h-20 w-20 rounded-full bg-[rgba(255,255,255,0.5)] blur-2xl"
            animate={reduceMotion ? undefined : { y: [0, 10, 0], opacity: [0.35, 0.6, 0.35] }}
            transition={reduceMotion ? undefined : FLOAT_TRANSITION_LONG}
          />

          {content.preview.mockup.floatingDocs.slice(0, 3).map((item, index) => (
            <FloatingCompanionCard
              key={`${item.title}-${index}`}
              item={item}
              className={positions[index]}
              delay={index * 0.08}
            />
          ))}

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -15, 0], rotate: [0, 1.2, 0] }}
            transition={reduceMotion ? undefined : FLOAT_TRANSITION}
            className="relative z-10 mx-auto w-full max-w-[24rem] sm:max-w-[25.5rem] lg:max-w-[27rem]"
          >
            <HeroPhoneMockup mockup={content.preview.mockup} variant={content.variant} accent={content.accent} />
          </motion.div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
