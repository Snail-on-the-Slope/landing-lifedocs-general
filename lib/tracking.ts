'use client';

import type { TrackEventPayload, ValidationEvent } from '@/lib/types';

export const SCROLL_MARKERS_KEY = 'lifedocs_scroll_markers';
const SCROLL_SESSION_KEY = 'lifedocs_scroll_session';

export function trackEvent(event: ValidationEvent, payload: TrackEventPayload) {
  const data = {
    event,
    ...payload,
    timestamp: new Date().toISOString(),
  };

  console.log('[LifeDocs validation]', data);

  if (typeof window !== 'undefined') {
    const globalWindow = window as Window & {
      dataLayer?: Array<Record<string, unknown>>;
    };

    globalWindow.dataLayer?.push(data);
    window.dispatchEvent(new CustomEvent('lifedocs:track', { detail: data }));
  }
}

export function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function getScrollSessionId() {
  if (typeof window === 'undefined') return 'server';

  const current = window.sessionStorage.getItem(SCROLL_SESSION_KEY);
  if (current) return current;

  const sessionId = crypto.randomUUID();
  window.sessionStorage.setItem(SCROLL_SESSION_KEY, sessionId);
  return sessionId;
}

export function markScrollThreshold(variant: string, threshold: 50 | 90) {
  if (typeof window === 'undefined') return false;

  const sessionId = getScrollSessionId();
  const markers = readJsonObject(SCROLL_MARKERS_KEY);
  const key = `${variant}:${sessionId}`;
  const fired = Array.isArray(markers[key]) ? (markers[key] as number[]) : [];

  if (fired.includes(threshold)) {
    return false;
  }

  markers[key] = [...fired, threshold];
  window.localStorage.setItem(SCROLL_MARKERS_KEY, JSON.stringify(markers));
  return true;
}

function readJsonObject(key: string): Record<string, unknown> {
  if (typeof window === 'undefined') return {};

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as Record<string, unknown>) : {};
  } catch {
    return {};
  }
}
