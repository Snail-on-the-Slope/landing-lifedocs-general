import { Reveal } from '@/components/primitives/reveal';
import { SectionHeading } from '@/components/primitives/section-heading';
import { SectionShell } from '@/components/primitives/section-shell';
import type { LandingContent } from '@/lib/types';

export function UseCasesSection({ content }: { content: LandingContent }) {
  const tones = [
    'bg-[var(--accent-sky)]',
    'bg-[var(--accent-peach)]',
    'bg-[var(--accent-sage)]',
    'bg-[var(--accent-lavender)]',
  ];

  return (
    <SectionShell>
      <SectionHeading eyebrow={content.useCases.eyebrow} title={content.useCases.heading} body={content.useCases.body} />

      <div className="grid gap-5 md:grid-cols-2">
        {content.useCases.cards.map((card, index) => (
          <Reveal
            key={card.title}
            preset="card"
            delay={index * 0.05}
            className="surface-card interactive-card rounded-[30px] p-6 sm:p-7"
          >
            <span className={`mb-5 block h-1.5 w-16 rounded-full ${tones[index % tones.length]}`} />
            <h3 className="text-xl font-semibold text-[var(--ink-primary)]">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--ink-secondary)]">{card.description}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
