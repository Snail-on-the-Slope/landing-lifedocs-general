import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from '@/components/primitives/reveal';
import { SectionHeading } from '@/components/primitives/section-heading';
import { SectionShell } from '@/components/primitives/section-shell';
import { PreviewMockup } from '@/components/mockups/mockup-screens';
import { FLOAT_TRANSITION } from '@/lib/motion';
import type { LandingContent } from '@/lib/types';

export function PreviewSection({ content }: { content: LandingContent }) {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell id="preview" density="compact" viewport="balanced">
      <SectionHeading eyebrow={content.preview.eyebrow} title={content.preview.heading} body={content.preview.body} />

      <motion.div
        className="mx-auto max-w-[68rem]"
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={reduceMotion ? undefined : FLOAT_TRANSITION}
      >
        <PreviewMockup mockup={content.preview.mockup} variant={content.variant} accent={content.accent} />
      </motion.div>

      <Reveal preset="card" className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-[var(--ink-secondary)]">
        {content.preview.note}
      </Reveal>
    </SectionShell>
  );
}
