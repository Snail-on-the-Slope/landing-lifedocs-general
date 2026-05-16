import { motion, useReducedMotion } from 'framer-motion';
import { Chip } from '@/components/primitives/chip';
import { PhoneFrame } from '@/components/mockups/phone-frame';
import { FLOAT_TRANSITION, FLOAT_TRANSITION_LONG, MOTION_DURATION } from '@/lib/motion';
import type { LandingVariant, MockupData, MockupDocument } from '@/lib/types';

type MockupAccent = {
  primary: 'sky' | 'sage';
  secondary: 'peach' | 'sky';
};

const toneStyles: Record<
  MockupDocument['accent'],
  {
    dot: string;
    stripe: string;
    badge: 'sky' | 'peach' | 'sage' | 'amber';
    panel: string;
  }
> = {
  sky: {
    dot: 'bg-[var(--accent-sky)]',
    stripe: 'bg-[rgba(169,205,225,0.9)]',
    badge: 'sky',
    panel: 'border-[rgba(169,205,225,0.28)] bg-[rgba(169,205,225,0.12)]',
  },
  peach: {
    dot: 'bg-[var(--accent-peach)]',
    stripe: 'bg-[rgba(231,181,156,0.92)]',
    badge: 'peach',
    panel: 'border-[rgba(231,181,156,0.28)] bg-[rgba(231,181,156,0.12)]',
  },
  sage: {
    dot: 'bg-[var(--accent-sage)]',
    stripe: 'bg-[rgba(152,183,159,0.9)]',
    badge: 'sage',
    panel: 'border-[rgba(152,183,159,0.3)] bg-[rgba(152,183,159,0.14)]',
  },
  warning: {
    dot: 'bg-[var(--accent-amber)]',
    stripe: 'bg-[rgba(227,184,96,0.92)]',
    badge: 'amber',
    panel: 'border-[rgba(227,184,96,0.28)] bg-[rgba(227,184,96,0.12)]',
  },
};

const heroDotToneMap: Record<LandingVariant, ('sky' | 'peach' | 'sage' | 'warning')[]> = {
  'pet-travel': ['sky', 'warning', 'peach'],
  'family-docs': ['sage', 'peach', 'sky'],
  general: ['sky', 'sage', 'warning'],
};

function AnimatedStatusDot({ accent }: { accent: MockupDocument['accent'] }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${toneStyles[accent].dot}`}
      animate={reduceMotion ? undefined : { scale: [1, 1.18, 1], opacity: [0.82, 1, 0.82] }}
      transition={
        reduceMotion
          ? undefined
          : {
              duration: MOTION_DURATION.floatLong,
              repeat: Infinity,
              ease: 'easeInOut',
            }
      }
    />
  );
}

export function HeroPhoneMockup({
  mockup,
  variant,
  accent,
}: {
  mockup: MockupData;
  variant: LandingVariant;
  accent: MockupAccent;
}) {
  const reduceMotion = useReducedMotion();
  const heroDotTones = heroDotToneMap[variant];
  const statusTone = accent.primary === 'sage' ? 'sage' : 'sky';

  return (
    <PhoneFrame>
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--ink-secondary)]">
              {mockup.labels.todayEyebrow}
            </p>
            <h3 className="mt-1 text-[1.12rem] font-semibold text-[var(--ink-primary)]">
              {mockup.labels.todayTitle}
            </h3>
          </div>
          <Chip tone={statusTone} animated={!reduceMotion}>
            {mockup.labels.pinnedChip}
          </Chip>
        </div>

        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-[rgba(36,50,58,0.08)] bg-[rgba(255,255,255,0.72)] px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[var(--ink-secondary)] shadow-[0_10px_22px_rgba(36,50,58,0.05)]"
          animate={reduceMotion ? undefined : { y: [0, -2, 0] }}
          transition={reduceMotion ? undefined : FLOAT_TRANSITION_LONG}
        >
          <span className={`h-2 w-2 rounded-full ${toneStyles[heroDotTones[0]].dot}`} />
          {mockup.labels.documentStackEyebrow}
        </motion.div>

        <div className="space-y-3">
          {mockup.todayItems.map((item, index) => {
            const tone = heroDotTones[index % heroDotTones.length];

            return (
              <div
                key={item}
                className="group relative overflow-hidden rounded-[1.5rem] border border-[rgba(36,50,58,0.08)] bg-[rgba(255,255,255,0.92)] px-4 py-3.5 shadow-[0_14px_28px_rgba(36,50,58,0.06)]"
              >
                <span className={`absolute bottom-4 left-0 top-4 w-1 rounded-full ${toneStyles[tone].stripe}`} />
                <div className="flex items-start gap-3 pl-3">
                  <AnimatedStatusDot accent={tone} />
                  <p className="text-sm leading-6 text-[var(--ink-primary)]">{item}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PhoneFrame>
  );
}

export function PreviewMockup({
  mockup,
  variant,
  accent,
}: {
  mockup: MockupData;
  variant: LandingVariant;
  accent: MockupAccent;
}) {
  const reduceMotion = useReducedMotion();
  const heroDotTones = heroDotToneMap[variant];
  const headerTone = accent.secondary === 'peach' ? 'peach' : accent.primary === 'sage' ? 'sage' : 'sky';

  return (
    <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr] lg:gap-6">
      <motion.div animate={reduceMotion ? undefined : { y: [0, -4, 0] }} transition={reduceMotion ? undefined : FLOAT_TRANSITION_LONG}>
        <PhoneFrame>
          <div className="space-y-4">
            {[
              {
                eyebrow: mockup.labels.walletEyebrow,
                title: mockup.walletTitle,
                meta: mockup.walletMeta,
                tone: heroDotTones[0],
              },
              {
                eyebrow: mockup.labels.profileEyebrow,
                title: mockup.profileTitle,
                meta: mockup.profileMeta,
                tone: heroDotTones[1],
              },
              {
                eyebrow: mockup.labels.reminderEyebrow,
                title: mockup.reminderTitle,
                meta: mockup.reminderMeta,
                tone: heroDotTones[2],
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`rounded-[1.45rem] border p-4 shadow-[0_12px_26px_rgba(36,50,58,0.05)] ${toneStyles[card.tone].panel}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--ink-secondary)]">
                      {card.eyebrow}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-[var(--ink-primary)]">{card.title}</h3>
                  </div>
                  <span className={`mt-1 h-2.5 w-2.5 rounded-full ${toneStyles[card.tone].dot}`} />
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-secondary)]">{card.meta}</p>
              </div>
            ))}
          </div>
        </PhoneFrame>
      </motion.div>

      <div className="space-y-4">
        {mockup.emergencyName ? (
          <motion.div
            className="surface-card rounded-[30px] p-5 sm:p-6"
            animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
            transition={reduceMotion ? undefined : FLOAT_TRANSITION}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--ink-secondary)]">
                  {mockup.emergencyChip}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-[var(--ink-primary)]">{mockup.emergencyName}</h3>
              </div>
              <Chip tone={headerTone}>{mockup.labels.maskedDetailsChip}</Chip>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.2rem] border border-[rgba(36,50,58,0.08)] bg-[rgba(255,255,255,0.76)] px-4 py-3 shadow-[0_10px_22px_rgba(36,50,58,0.04)]">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--ink-secondary)]">
                  {mockup.labels.microchipLabel}
                </p>
                <p className="mt-1 text-sm font-medium text-[var(--ink-primary)]">***4821</p>
              </div>
              <div className="rounded-[1.2rem] border border-[rgba(36,50,58,0.08)] bg-[rgba(255,255,255,0.76)] px-4 py-3 shadow-[0_10px_22px_rgba(36,50,58,0.04)]">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--ink-secondary)]">
                  {mockup.labels.rabiesLabel}
                </p>
                <p className="mt-1 text-sm font-medium text-[var(--ink-primary)]">{mockup.labels.rabiesValue}</p>
              </div>
            </div>
          </motion.div>
        ) : null}

        <motion.div
          className="surface-card rounded-[30px] p-5 sm:p-6"
          animate={reduceMotion ? undefined : { y: [0, -2, 0] }}
          transition={reduceMotion ? undefined : FLOAT_TRANSITION_LONG}
        >
          <div className="flex items-center justify-between gap-3">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--ink-secondary)]">
              {mockup.labels.documentStackEyebrow}
            </p>
            <Chip tone={accent.primary === 'sage' ? 'sage' : 'sky'}>{mockup.labels.pinnedChip}</Chip>
          </div>

          <div className="mt-4 space-y-3">
            {mockup.floatingDocs.map((item) => (
              <div
                key={item.title}
                className={`flex items-center gap-3 rounded-[1.35rem] border px-4 py-3 shadow-[0_10px_22px_rgba(36,50,58,0.05)] ${toneStyles[item.accent].panel}`}
              >
                <span className={`h-2.5 w-2.5 rounded-full ${toneStyles[item.accent].dot}`} />
                <div>
                  <p className="text-sm font-semibold text-[var(--ink-primary)]">{item.title}</p>
                  <p className="text-xs leading-6 text-[var(--ink-secondary)]">{item.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
