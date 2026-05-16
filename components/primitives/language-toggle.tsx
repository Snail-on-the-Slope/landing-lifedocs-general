'use client';

import { localeLabels, supportedLocales } from '@/lib/i18n';
import type { Locale } from '@/lib/types';

interface LanguageToggleProps {
  locale: Locale;
  onChange: (locale: Locale) => void;
}

export function LanguageToggle({ locale, onChange }: LanguageToggleProps) {
  return (
    <div
      className="inline-flex min-h-11 items-center rounded-full border border-[rgba(36,50,58,0.1)] bg-[linear-gradient(180deg,rgba(255,253,249,0.9),rgba(255,248,242,0.84))] p-1 shadow-[0_14px_30px_rgba(36,50,58,0.08)] backdrop-blur"
      aria-label="Choose language"
      role="group"
    >
      {supportedLocales.map((option) => {
        const isActive = option === locale;
        const optionLabel = localeLabels[option];

        return (
          <button
            key={option}
            type="button"
            aria-pressed={isActive}
            aria-label={optionLabel.label}
            title={optionLabel.label}
            className={`min-h-9 min-w-11 rounded-full px-3 text-xs font-semibold tracking-[0.14em] transition-[transform,background-color,color,box-shadow] duration-200 ${
              isActive
                ? 'bg-[linear-gradient(135deg,#24323a_0%,#33545c_100%)] text-white shadow-[0_10px_24px_rgba(36,50,58,0.18)]'
                : 'text-[var(--ink-secondary)] hover:bg-white/90 hover:text-[var(--ink-primary)]'
            }`}
            onClick={() => onChange(option)}
          >
            {optionLabel.short}
          </button>
        );
      })}
    </div>
  );
}
