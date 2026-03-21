import { Variants } from "framer-motion";

export const standardEasing = [0.22, 1, 0.36, 1];

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: standardEasing,
    },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: standardEasing,
    },
  },
};

export const hoverScale = {
  scale: 1.03,
  transition: { duration: 0.3, ease: standardEasing },
};

export const tapScale = {
  scale: 0.97,
  transition: { duration: 0.1, ease: standardEasing },
};

// Button specific variants
export const buttonVariants = {
  hover: hoverScale,
  tap: tapScale,
};
