import { motion } from 'framer-motion';

export const animatedButtonProps = {
  as: motion.button,
  whileTap: { scale: 0.95 },
  initial: { opacity: 0, y: 4 },
  animate: { opacity: 1, y: 0 },
  pointer: 'cursor',
  whileHover: {
    y: -4,
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
};
export const animatedTrProps = {
  as: motion.tr,
  borderWidth: 1,
  // whileTap: { scale: 0.95 },
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  exit: { opacity: 0, y: 10, transition: { duration: 0.3, ease: 'easeInOut' } },
  whileHover: {
    y: -4,
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

export const animatedCardProps = {
  as: motion.button,
  whileTap: { scale: 0.95 },
  initial: { opacity: 0, y: 5 },
  animate: { opacity: 1, y: 0 },
  whileHover: {
    y: -5,
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
};

export const hideScrollbar = {
  '&::-webkit-scrollbar': {
    display: 'none', // For Chrome, Safari, and Edge
  },
  '&': {
    scrollbarWidth: 'none', // For Firefox
    msOverflowStyle: 'none', // For IE and Edge
  },
};
