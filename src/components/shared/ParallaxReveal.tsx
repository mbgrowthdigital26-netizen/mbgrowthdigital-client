"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxRevealProps {
  children: React.ReactNode;
  className?: string;
  /** How much the element moves relative to scroll. Default: 0.15 */
  speed?: number;
  /** Direction of parallax movement. Default: "up" */
  direction?: "up" | "down";
}

/**
 * Scroll-linked parallax effect. Elements move at a different speed
 * than the page scroll, creating depth and visual interest.
 */
export const ParallaxReveal = ({
  children,
  className = "",
  speed = 0.15,
  direction = "up",
}: ParallaxRevealProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const factor = direction === "up" ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [factor * 60 * speed, factor * -60 * speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

interface ScrollProgressRevealProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Fades + scales up element based on scroll progress through its container.
 * Great for hero sections and large imagery.
 */
export const ScrollProgressReveal = ({
  children,
  className = "",
}: ScrollProgressRevealProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.92, 1]);
  const y = useTransform(scrollYProgress, [0, 0.6], [40, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, scale, y }} className={className}>
      {children}
    </motion.div>
  );
};
