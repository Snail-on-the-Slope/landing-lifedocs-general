export const MOTION_DURATION = {
  interaction: 0.2,
  section: 0.56,
  hero: 0.66,
  floatShort: 6.2,
  floatLong: 8.2,
};

export const MOTION_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const FLOAT_TRANSITION = {
  duration: MOTION_DURATION.floatShort,
  repeat: Infinity,
  repeatType: 'mirror' as const,
  ease: 'easeInOut' as const,
};

export const FLOAT_TRANSITION_LONG = {
  duration: MOTION_DURATION.floatLong,
  repeat: Infinity,
  repeatType: 'mirror' as const,
  ease: 'easeInOut' as const,
};
