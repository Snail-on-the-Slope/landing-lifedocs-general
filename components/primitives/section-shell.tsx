import type { ReactNode } from 'react';

interface SectionShellProps {
  id?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  density?: 'hero' | 'default' | 'compact';
  viewport?: 'hero' | 'balanced' | 'dense' | 'natural' | 'cta';
}

const densityClasses = {
  hero: 'section-padding-hero',
  default: 'section-padding-default',
  compact: 'section-padding-compact',
};

const viewportClasses = {
  hero: 'section-viewport-hero',
  balanced: 'section-viewport-balanced',
  dense: 'section-viewport-dense',
  natural: 'section-viewport-natural',
  cta: 'section-viewport-cta',
};

export function SectionShell({
  id,
  children,
  className = '',
  contentClassName = '',
  density = 'default',
  viewport = 'natural',
}: SectionShellProps) {
  const shellClassName = `section-shell ${densityClasses[density]} ${viewportClasses[viewport]} relative ${className}`.trim();
  const innerClassName = `section-inner ${density === 'hero' ? 'max-w-[1160px]' : 'max-w-6xl'} ${contentClassName}`.trim();

  return (
    <section id={id} className={shellClassName}>
      <div className={innerClassName}>{children}</div>
    </section>
  );
}
