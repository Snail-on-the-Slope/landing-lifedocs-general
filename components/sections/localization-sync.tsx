'use client';

import { useEffect } from 'react';
import type { Locale, SiteMeta } from '@/lib/types';

interface LocalizationSyncProps {
  locale: Locale;
  siteMeta: SiteMeta;
}

export function LocalizationSync({ locale, siteMeta }: LocalizationSyncProps) {
  useEffect(() => {
    document.title = siteMeta.title;
    document.documentElement.lang = locale;

    let description = document.querySelector('meta[name="description"]');

    if (!description) {
      description = document.createElement('meta');
      description.setAttribute('name', 'description');
      document.head.appendChild(description);
    }

    description.setAttribute('content', siteMeta.description);
  }, [locale, siteMeta.description, siteMeta.title]);

  return null;
}
