import { Reveal } from '@/components/primitives/reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  body: string;
}

export function SectionHeading({ eyebrow, title, body }: SectionHeadingProps) {
  return (
    <Reveal preset="section" className="section-heading-shell">
      <p className="mb-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--ink-secondary)]">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--ink-primary)] sm:text-4xl lg:text-[2.55rem]">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-[38rem] text-pretty text-base leading-7 text-[var(--ink-secondary)] sm:text-[1.02rem] sm:leading-8">
        {body}
      </p>
    </Reveal>
  );
}
