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
      transition={{ duration: 0.45, ease: luxuryEase }}
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
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.75,
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
  duration = 0.7, 
  distance = 35, 
  className = "",
  once = true 
}) {
  const getInitial = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: distance };
      case "down": return { opacity: 0, y: -distance };
      case "left": return { opacity: 0, x: -distance, y: 10 };
      case "right": return { opacity: 0, x: distance, y: 10 };
      case "zoom": return { opacity: 0, scale: 0.94, y: 15 };
      default: return { opacity: 0, y: distance };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: once, amount: 0.15 }}
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
export function StaggerContainer({ children, staggerDelay = 0.1, delay = 0, className = "" }) {
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
      viewport={{ once: true, amount: 0.1 }}
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
      y: direction === "up" ? 30 : 0,
      x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
      scale: 0.97
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.65,
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
 * Image Reveal Component (Clip-path mask unveil with subtle scale down)
 */
export function ImageReveal({ src, alt, className = "", imgClassName = "", delay = 0, aspectClass = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-inherit ${aspectClass} ${className}`}>
      <motion.div
        initial={{ clipPath: 'inset(12% 0% 12% 0%)', opacity: 0, scale: 1.12 }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, delay: delay, ease: luxuryEase }}
        className="w-full h-full"
      >
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${imgClassName}`}
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}

/**
 * Floating Accent / Card Element (Gentle continuous levitation)
 */
export function FloatElement({ children, className = "", duration = 5, distance = 7, delay = 0 }) {
  return (
    <motion.div
      animate={{
        y: [-distance / 2, distance / 2, -distance / 2]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Restrained 3D Tilt Card (Mouse-driven subtle 3D depth for testimonial cards & content boxes)
 */
export function TiltCard({ children, className = "", maxTilt = 8, scale = 1.02 }) {
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rX = ((y - centerY) / centerY) * -maxTilt;
    const rY = ((x - centerX) / centerX) * maxTilt;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="perspective-1000">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          scale: isHovered ? scale : 1,
          y: isHovered ? -6 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          mass: 0.6
        }}
        className={`transform-gpu ${className}`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

