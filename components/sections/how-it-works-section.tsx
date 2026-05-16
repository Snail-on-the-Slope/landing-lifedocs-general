import { Check } from 'lucide-react';
import { Reveal } from '@/components/primitives/reveal';
import { SectionHeading } from '@/components/primitives/section-heading';
import { SectionShell } from '@/components/primitives/section-shell';
import type { LandingContent } from '@/lib/types';

export function HowItWorksSection({ content }: { content: LandingContent }) {
  const tones = [
    'bg-[rgba(231,181,156,0.24)]',
    'bg-[rgba(169,205,225,0.24)]',
    'bg-[rgba(152,183,159,0.24)]',
    'bg-[rgba(227,184,96,0.22)]',
  ];

  return (
    <SectionShell id="how-it-works">
      <SectionHeading
        eyebrow={content.howItWorks.eyebrow}
        title={content.howItWorks.heading}
        body={content.howItWorks.body}
      />

      <div className="grid gap-5 lg:grid-cols-4">
        {content.howItWorks.steps.map((step, index) => (
          <Reveal
            key={step.title}
            preset="card"
            delay={index * 0.05}
            className="surface-card interactive-card group rounded-[30px] p-6 sm:p-7"
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl text-[var(--ink-primary)] transition-transform duration-200 group-hover:scale-[1.04] ${tones[index % tones.length]}`}
              >
                <Check className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold text-[var(--ink-secondary)]">
                {content.howItWorks.stepLabel} {index + 1}
              </span>
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[var(--ink-primary)]">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--ink-secondary)]">{step.description}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
