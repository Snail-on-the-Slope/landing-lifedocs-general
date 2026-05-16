import type { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="phone-shell relative mx-auto w-full max-w-[356px] overflow-hidden p-[0.85rem] sm:max-w-[370px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.88),transparent_48%)]" />
      <div className="absolute left-1/2 top-2.5 h-1.5 w-24 -translate-x-1/2 rounded-full bg-[rgba(36,50,58,0.12)]" />
      <div className="wallet-grid relative overflow-hidden rounded-[1.7rem] border border-[rgba(36,50,58,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,248,242,0.76))] p-4 pt-9 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
        <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(169,205,225,0.16),transparent)]" />
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
