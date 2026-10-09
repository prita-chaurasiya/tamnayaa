import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports fine hover (desktop cursor)
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!hasPointer || prefersReducedMotion) {
      return;
    }

    setIsVisible(true);

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable elements
      const target = e.target;
      const isInteractive = Boolean(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.card-3d-element') ||
        target.closest('.cursor-pointer') ||
        target.closest('.btn-olive') ||
        target.closest('.btn-champagne') ||
        target.closest('.btn-linen')
      );

      setIsHovered(isInteractive);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Precision Gold Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#B89A5A] rounded-full pointer-events-none z-[9999] mix-blend-difference shadow-[0_0_10px_rgba(184,154,90,0.8)]"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isClicked ? 0.6 : isHovered ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 35,
          mass: 0.1,
        }}
      />

      {/* Trailing Luxury Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 border-2 border-[#B89A5A]/70 rounded-full pointer-events-none z-[9998] shadow-[0_0_20px_rgba(184,154,90,0.3)] backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
          scale: isClicked ? 0.8 : isHovered ? 2.2 : 1,
          borderColor: isHovered ? 'rgba(184, 154, 90, 0.9)' : 'rgba(184, 154, 90, 0.5)',
          backgroundColor: isHovered ? 'rgba(184, 154, 90, 0.12)' : 'rgba(184, 154, 90, 0.02)',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 250,
          damping: 22,
          mass: 0.2,
        }}
      />
    </>
  );
}
