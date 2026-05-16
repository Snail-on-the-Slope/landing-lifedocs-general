import { LockKeyhole, ShieldCheck, EyeOff, FileWarning } from 'lucide-react';
import { Reveal } from '@/components/primitives/reveal';
import { SectionHeading } from '@/components/primitives/section-heading';
import { SectionShell } from '@/components/primitives/section-shell';
import type { LandingContent } from '@/lib/types';

const icons = [LockKeyhole, EyeOff, ShieldCheck, FileWarning];

export function TrustSection({ content }: { content: LandingContent }) {
  const tones = [
    'bg-[rgba(169,205,225,0.2)]',
    'bg-[rgba(231,181,156,0.2)]',
    'bg-[rgba(152,183,159,0.2)]',
    'bg-[rgba(227,184,96,0.18)]',
  ];

  return (
    <SectionShell>
      <SectionHeading eyebrow={content.trust.eyebrow} title={content.trust.heading} body={content.trust.body} />

      <div className="grid gap-5 md:grid-cols-2">
        {content.trust.bullets.map((bullet, index) => {
          const Icon = icons[index] ?? ShieldCheck;
          return (
            <Reveal
              key={bullet}
              preset="card"
              delay={index * 0.05}
              className="surface-card interactive-card group rounded-[30px] p-6 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-[var(--ink-primary)] transition-transform duration-200 group-hover:scale-[1.04] ${tones[index % tones.length]}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm leading-7 text-[var(--ink-secondary)]">{bullet}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
