import type { ReactNode } from 'react';

interface SectionShellProps {
  id?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  density?: 'hero' | 'default' | 'compact';
}

const densityClasses = {
  hero: 'section-padding-hero',
  default: 'section-padding-default',
  compact: 'section-padding-compact',
};

export function SectionShell({
  id,
  children,
  className = '',
  contentClassName = '',
  density = 'default',
}: SectionShellProps) {
  const shellClassName = `${densityClasses[density]} relative ${className}`.trim();
  const innerClassName = `${density === 'hero' ? 'max-w-[1160px]' : 'max-w-6xl'} mx-auto ${contentClassName}`.trim();

  return (
    <section id={id} className={shellClassName}>
      <div className={innerClassName}>{children}</div>
    </section>
  );
}
