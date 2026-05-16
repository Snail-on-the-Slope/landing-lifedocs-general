import { Reveal } from '@/components/primitives/reveal';
import { SectionHeading } from '@/components/primitives/section-heading';
import { SectionShell } from '@/components/primitives/section-shell';
import type { LandingContent } from '@/lib/types';

export function ProblemSection({ content }: { content: LandingContent }) {
  const tones = [
    'bg-[var(--accent-sky)]',
    'bg-[var(--accent-peach)]',
    'bg-[var(--accent-sage)]',
  ];

  return (
    <SectionShell>
      <SectionHeading eyebrow={content.problem.eyebrow} title={content.problem.heading} body={content.problem.body} />

      <div className="grid gap-5 lg:grid-cols-3">
        {content.problem.cards.map((card, index) => (
          <Reveal
            key={card.title}
            preset="card"
            delay={index * 0.06}
            className="surface-card interactive-card rounded-[30px] p-6 sm:p-7"
          >
            <span className={`mb-5 block h-1.5 w-16 rounded-full ${tones[index % tones.length]}`} />
            <p className="text-lg font-semibold text-[var(--ink-primary)]">{card.title}</p>
            <p className="mt-3 text-sm leading-7 text-[var(--ink-secondary)]">{card.description}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
