"use client";

import { motion, useInView, useAnimation, type Variant } from "framer-motion";
import { useEffect, useRef } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "scale" | "blur" | "flip";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
  /** Animation direction/style. Default: "up" */
  direction?: RevealDirection;
  /** Travel distance in pixels (for directional variants). Default: 40 */
  distance?: number;
  /** Animation duration in seconds. Default: 0.7 */
  duration?: number;
  /** If true, animation replays each time the element re-enters viewport */
  once?: boolean;
  /** Viewport margin for triggering (CSS margin string). Default: "0px 0px -80px 0px" */
  viewportMargin?: string;
}

/** Build hidden/visible variants based on direction */
function getVariants(direction: RevealDirection, distance: number): { hidden: Variant; visible: Variant } {
  switch (direction) {
    case "up":
      return {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 },
      };
    case "down":
      return {
        hidden: { opacity: 0, y: -distance },
        visible: { opacity: 1, y: 0 },
      };
    case "left":
      return {
        hidden: { opacity: 0, x: -distance },
        visible: { opacity: 1, x: 0 },
      };
    case "right":
      return {
        hidden: { opacity: 0, x: distance },
        visible: { opacity: 1, x: 0 },
      };
    case "scale":
      return {
        hidden: { opacity: 0, scale: 0.85 },
        visible: { opacity: 1, scale: 1 },
      };
    case "blur":
      return {
        hidden: { opacity: 0, filter: "blur(12px)", y: distance * 0.4 },
        visible: { opacity: 1, filter: "blur(0px)", y: 0 },
      };
    case "flip":
      return {
        hidden: { opacity: 0, rotateX: 45, y: distance * 0.5 },
        visible: { opacity: 1, rotateX: 0, y: 0 },
      };
    default:
      return {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 },
      };
  }
}

export const Reveal = ({
  children,
  width = "fit-content",
  delay = 0,
  className = "",
  direction = "up",
  distance = 40,
  duration = 0.7,
  once = true,
  viewportMargin = "0px 0px -80px 0px",
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: viewportMargin as `${number}px ${number}px ${number}px ${number}px` });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else if (!once) {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, once]);

  const variants = getVariants(direction, distance);

  return (
    <div ref={ref} style={{ width, perspective: direction === "flip" ? 800 : undefined }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1], // custom cubic-bezier for a smooth, premium feel
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
