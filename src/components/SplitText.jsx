import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SplitText({
  text = '',
  className = '',
  as = 'h2',
  type = 'words', // 'words' | 'chars'
  delay = 0,
  stagger = 0.035,
  duration = 0.8,
  once = true,
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once, amount: 0.15 });
  const Tag = motion[as] || motion.div;

  if (!text) return null;

  // Pure React splitting for 100% reliability and zero DOM mutation errors
  const items = type === 'chars' ? text.split('') : text.split(' ');

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: '100%',
      filter: 'blur(8px)',
      rotateX: -30,
    },
    visible: {
      opacity: 1,
      y: '0%',
      filter: 'blur(0px)',
      rotateX: 0,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Tag
      ref={containerRef}
      className={`inline-block overflow-hidden ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {items.map((item, idx) => (
        <span
          key={idx}
          className={`inline-block overflow-hidden ${
            type === 'words' ? 'mr-[0.25em] last:mr-0' : ''
          } vertical-align-bottom`}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block transform-gpu origin-bottom-left"
          >
            {item === ' ' ? '\u00A0' : item}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
