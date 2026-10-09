import React from 'react';
import { motion } from 'framer-motion';

// Soft, editorial luxury easing curve
const luxuryEase = [0.16, 1, 0.3, 1];

/**
 * Smooth Page Transition Wrapper
 */
export function PageTransition({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: luxuryEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Text Mask Reveal Component for Headings & Eyebrows
 */
export function TextReveal({ children, delay = 0, className = "", as = "div" }) {
  const Component = motion[as] || motion.div;

  return (
    <div className={`overflow-hidden ${className}`}>
      <Component
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{
          duration: 0.65,
          delay: delay,
          ease: luxuryEase
        }}
      >
        {children}
      </Component>
    </div>
  );
}

/**
 * General Scroll Fade Reveal (Up, Left, Right, Zoom)
 */
export function FadeIn({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 0.6, 
  distance = 25, 
  className = "",
  once = true 
}) {
  const getInitial = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: distance };
      case "down": return { opacity: 0, y: -distance };
      case "left": return { opacity: 0, x: -distance, y: 0 };
      case "right": return { opacity: 0, x: distance, y: 0 };
      case "zoom": return { opacity: 0, scale: 0.96, y: 10 };
      default: return { opacity: 0, y: distance };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: once, amount: 0 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: luxuryEase
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger Container & Items for Grids & Lists
 */
export function StaggerContainer({ children, staggerDelay = 0.08, delay = 0, className = "" }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", direction = "up" }) {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 20 : 0,
      x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.55,
        ease: luxuryEase
      }
    }
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * 3D Tilt Card Wrapper for High-End Interaction
 */
export function TiltCard({ children, className = "", maxTilt = 8, scale = 1.02 }) {
  return (
    <motion.div
      whileHover={{ 
        scale: scale,
        rotateX: -2,
        rotateY: 2,
        transition: { duration: 0.3, ease: luxuryEase }
      }}
      className={`transform-gpu ${className}`}
    >
      {children}
    </motion.div>
  );
}

/**
 * Floating Physics Element for Decorative Accents
 */
export function FloatElement({ children, className = "", yOffset = 12, duration = 6 }) {
  return (
    <motion.div
      animate={{
        y: [0, -yOffset, 0],
        rotate: [0, 1.5, -1.5, 0]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Image Reveal with Shimmer Mask
 */
export function ImageReveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.7, delay: delay, ease: luxuryEase }}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}
