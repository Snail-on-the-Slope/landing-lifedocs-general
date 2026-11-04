import {
  CarFront,
  CheckCheck,
  Clock3,
  Download,
  FileText,
  PawPrint,
  ShieldCheck,
  UserRound,
} from 'lucide-react';
import type { ComponentType } from 'react';
import { Reveal } from '@/components/primitives/reveal';
import { SectionHeading } from '@/components/primitives/section-heading';
import { SectionShell } from '@/components/primitives/section-shell';
import type { FeatureCard, LandingContent } from '@/lib/types';

const iconMap: Record<FeatureCard['icon'], ComponentType<{ className?: string }>> = {
  file: FileText,
  clock: Clock3,
  paw: PawPrint,
  shield: ShieldCheck,
  download: Download,
  user: UserRound,
  car: CarFront,
  check: CheckCheck,
};

export function FeaturesSection({ content }: { content: LandingContent }) {
  const tonePairs = [
    {
      tile: 'bg-[rgba(169,205,225,0.28)]',
      badge: 'bg-[rgba(169,205,225,0.18)] border-[rgba(169,205,225,0.24)]',
    },
    {
      tile: 'bg-[rgba(231,181,156,0.24)]',
      badge: 'bg-[rgba(231,181,156,0.16)] border-[rgba(231,181,156,0.24)]',
    },
    {
      tile: 'bg-[rgba(152,183,159,0.24)]',
      badge: 'bg-[rgba(152,183,159,0.16)] border-[rgba(152,183,159,0.24)]',
    },
    {
      tile: 'bg-[rgba(227,184,96,0.22)]',
      badge: 'bg-[rgba(227,184,96,0.15)] border-[rgba(227,184,96,0.24)]',
    },
    {
      tile: 'bg-[rgba(203,198,232,0.24)]',
      badge: 'bg-[rgba(203,198,232,0.16)] border-[rgba(203,198,232,0.24)]',
    },
    {
      tile: 'bg-[rgba(126,169,167,0.24)]',
      badge: 'bg-[rgba(126,169,167,0.16)] border-[rgba(126,169,167,0.22)]',
    },
  ];

  return (
    <SectionShell density="compact" viewport="dense">
      <SectionHeading eyebrow={content.features.eyebrow} title={content.features.heading} body={content.features.body} />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 lg:gap-5">
        {content.features.cards.map((card, index) => {
          const Icon = iconMap[card.icon];
          const tone = tonePairs[index % tonePairs.length];

          return (
            <Reveal
              key={card.title}
              preset="card"
              delay={index * 0.04}
              className="surface-card interactive-card group rounded-[30px] p-6 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl text-[var(--ink-primary)] transition-transform duration-200 group-hover:scale-[1.04] ${tone.tile}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold text-[var(--ink-secondary)] ${tone.badge}`}
                >
                  {card.label}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[var(--ink-primary)]">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--ink-secondary)]">{card.description}</p>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
