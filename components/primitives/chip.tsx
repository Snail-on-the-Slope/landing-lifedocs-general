import type { ReactNode } from 'react';

interface ChipProps {
  children: ReactNode;
  tone?: 'default' | 'sky' | 'sage' | 'peach' | 'amber' | 'lavender';
  animated?: boolean;
  className?: string;
}

const toneClasses = {
  default:
    'border-[rgba(36,50,58,0.08)] bg-[rgba(255,253,249,0.82)] text-[var(--ink-secondary)] shadow-[0_12px_24px_rgba(36,50,58,0.05)]',
  sky: 'border-[rgba(169,205,225,0.34)] bg-[rgba(169,205,225,0.22)] text-[var(--ink-primary)] shadow-[0_14px_28px_rgba(122,167,199,0.10)]',
  sage: 'border-[rgba(152,183,159,0.34)] bg-[rgba(152,183,159,0.2)] text-[var(--ink-primary)] shadow-[0_14px_28px_rgba(126,169,167,0.10)]',
  peach:
    'border-[rgba(231,181,156,0.34)] bg-[rgba(231,181,156,0.22)] text-[var(--ink-primary)] shadow-[0_14px_28px_rgba(217,137,121,0.10)]',
  amber:
    'border-[rgba(227,184,96,0.34)] bg-[rgba(227,184,96,0.2)] text-[var(--ink-primary)] shadow-[0_14px_28px_rgba(227,184,96,0.10)]',
  lavender:
    'border-[rgba(203,198,232,0.4)] bg-[rgba(203,198,232,0.22)] text-[var(--ink-primary)] shadow-[0_14px_28px_rgba(203,198,232,0.10)]',
};

export function Chip({ children, tone = 'default', animated = false, className = '' }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium ${toneClasses[tone]} ${
        animated ? 'chip-breathe' : ''
      } ${className}`.trim()}
    >
      {children}
    </span>
  );
}
