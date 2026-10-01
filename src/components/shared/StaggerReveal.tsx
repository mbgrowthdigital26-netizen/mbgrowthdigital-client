"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay between each child animation in seconds. Default: 0.1 */
  staggerDelay?: number;
  /** Animation duration per child. Default: 0.6 */
  duration?: number;
  /** Initial delay before the first child animates. Default: 0 */
  delay?: number;
  /** If true, re-animates every time element enters viewport */
  once?: boolean;
}

export const StaggerReveal = ({
  children,
  className = "",
  staggerDelay = 0.1,
  delay = 0,
  once = true,
}: StaggerRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "0px 0px -60px 0px" as `${number}px ${number}px ${number}px ${number}px` });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

/** Use this as a direct child of StaggerReveal for each animated item */
export const StaggerItem = ({
  children,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale";
}) => {
  const directionMap = {
    up: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
  };

  return (
    <motion.div
      className={className}
      variants={directionMap[direction]}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
