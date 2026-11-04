'use client';

import type { AttributionSnapshot } from '@/lib/types';

const UTM_FIRST_STORAGE_KEY = 'lifedocs_utm_first';
const UTM_LAST_STORAGE_KEY = 'lifedocs_utm_last';

function readStoredAttribution(key: string): AttributionSnapshot | null {
  if (typeof window === 'undefined') return null;

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as AttributionSnapshot) : null;
  } catch {
    return null;
  }
}

function writeStoredAttribution(key: string, snapshot: AttributionSnapshot) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(key, JSON.stringify(snapshot));
}

function getAttributionFromLocation(): AttributionSnapshot | null {
  if (typeof window === 'undefined') return null;

  const params = new URLSearchParams(window.location.search);
  const snapshot: AttributionSnapshot = {
    utmSource: params.get('utm_source') ?? undefined,
    utmMedium: params.get('utm_medium') ?? undefined,
    utmCampaign: params.get('utm_campaign') ?? undefined,
    utmTerm: params.get('utm_term') ?? undefined,
    utmContent: params.get('utm_content') ?? undefined,
    ref: params.get('ref') ?? undefined,
    gclid: params.get('gclid') ?? undefined,
    fbclid: params.get('fbclid') ?? undefined,
    landingPath: window.location.pathname,
    capturedAt: new Date().toISOString(),
  };

  const hasAnyAttribution = Object.values(snapshot).some((value) => Boolean(value));
  return hasAnyAttribution ? snapshot : null;
}

export function captureAttributionFromLocation() {
  const snapshot = getAttributionFromLocation();
  if (!snapshot) return;

  const firstTouch = readStoredAttribution(UTM_FIRST_STORAGE_KEY);
  if (!firstTouch) {
    writeStoredAttribution(UTM_FIRST_STORAGE_KEY, snapshot);
  }

  writeStoredAttribution(UTM_LAST_STORAGE_KEY, snapshot);
}

export function getFirstTouchAttribution(): AttributionSnapshot {
  return readStoredAttribution(UTM_FIRST_STORAGE_KEY) ?? {};
}

export function getLastTouchAttribution(): AttributionSnapshot {
  return readStoredAttribution(UTM_LAST_STORAGE_KEY) ?? {};
}
