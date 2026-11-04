'use client';

import type { DeviceType } from '@/lib/types';

export function getDeviceType(): DeviceType {
  if (typeof window === 'undefined') {
    return 'unknown';
  }

  const width = window.innerWidth;

  if (width < 768) {
    return 'mobile';
  }

  if (width < 1024) {
    return 'tablet';
  }

  return 'desktop';
}
