import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
}

export function Button({
  className = '',
  variant = 'primary',
  fullWidth = false,
  ...props
}: ButtonProps) {
  const base =
    'focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[-0.01em] transition-[opacity,background-color,color,border-color] duration-200 ease-out disabled:pointer-events-none disabled:opacity-60';

  const variants = {
    primary:
      'bg-[linear-gradient(135deg,#24323a_0%,#33545c_100%)] text-white shadow-[0_18px_42px_rgba(36,50,58,0.18)]',
    secondary:
      'border border-[rgba(36,50,58,0.12)] bg-[linear-gradient(180deg,rgba(255,253,249,0.96),rgba(255,248,242,0.86))] text-[var(--ink-primary)] shadow-[0_14px_30px_rgba(36,50,58,0.06)]',
    ghost:
      'bg-transparent text-[var(--ink-secondary)]',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`.trim()}
      {...props}
    />
  );
}
