import { FileText, Clock3, Users } from 'lucide-react';
import { Reveal } from '@/components/primitives/reveal';
import { SectionHeading } from '@/components/primitives/section-heading';
import { SectionShell } from '@/components/primitives/section-shell';
import type { LandingContent } from '@/lib/types';

const icons = [FileText, Users, Clock3];

export function SolutionSection({ content }: { content: LandingContent }) {
  const iconTones = [
    'bg-[rgba(169,205,225,0.26)]',
    'bg-[rgba(152,183,159,0.24)]',
    'bg-[rgba(231,181,156,0.24)]',
  ];

  return (
    <SectionShell>
      <SectionHeading eyebrow={content.solution.eyebrow} title={content.solution.heading} body={content.solution.body} />

      <div className="grid gap-5 md:grid-cols-3">
        {content.solution.pillars.map((pillar, index) => {
          const Icon = icons[index] ?? FileText;
          return (
            <Reveal
              key={pillar.title}
              preset="card"
              delay={index * 0.06}
              className="surface-card interactive-card group rounded-[30px] p-6 sm:p-7"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl text-[var(--ink-primary)] transition-transform duration-200 group-hover:scale-[1.04] ${iconTones[index % iconTones.length]}`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[var(--ink-primary)]">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--ink-secondary)]">{pillar.description}</p>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
