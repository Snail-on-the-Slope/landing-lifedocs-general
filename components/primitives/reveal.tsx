import type { HTMLMotionProps } from 'framer-motion';
import { motion, useReducedMotion } from 'framer-motion';
import { MOTION_DURATION, MOTION_EASE } from '@/lib/motion';

interface RevealProps extends HTMLMotionProps<'div'> {
  delay?: number;
  once?: boolean;
  preset?: 'section' | 'card' | 'hero';
  distance?: number;
  scale?: number;
  duration?: number;
}

export function Reveal({
  children,
  delay = 0,
  once = true,
  preset = 'section',
  distance,
  scale,
  duration,
  className,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const presetConfig = {
    section: {
      distance: 24,
      scale: 1,
      duration: MOTION_DURATION.section,
      amount: 0.18,
    },
    card: {
      distance: 20,
      scale: 0.985,
      duration: MOTION_DURATION.section + 0.04,
      amount: 0.14,
    },
    hero: {
      distance: 28,
      scale: 0.98,
      duration: MOTION_DURATION.hero,
      amount: 0.2,
    },
  }[preset];

  const initialDistance = distance ?? presetConfig.distance;
  const initialScale = scale ?? presetConfig.scale;
  const transitionDuration = duration ?? presetConfig.duration;

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: initialDistance, scale: initialScale }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={reduceMotion ? undefined : { once, amount: presetConfig.amount }}
      transition={reduceMotion ? undefined : { duration: transitionDuration, ease: MOTION_EASE, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
