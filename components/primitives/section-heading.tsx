import { Reveal } from '@/components/primitives/reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  body: string;
}

export function SectionHeading({ eyebrow, title, body }: SectionHeadingProps) {
  return (
    <Reveal preset="section" className="mx-auto mb-8 max-w-[44rem] text-center sm:mb-10">
      <p className="mb-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--ink-secondary)]">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--ink-primary)] sm:text-4xl lg:text-[2.8rem]">
        {title}
      </h2>
      <p className="mx-auto mt-3.5 max-w-2xl text-pretty text-base leading-7 text-[var(--ink-secondary)] sm:text-[1.05rem] sm:leading-8">
        {body}
      </p>
    </Reveal>
  );
}
