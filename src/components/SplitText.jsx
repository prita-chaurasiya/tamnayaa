import React from 'react';
import { motion } from 'framer-motion';

export default function SplitText({
  text = '',
  className = '',
  as = 'span',
  type = 'words', // 'words' | 'chars'
  delay = 0,
  stagger = 0.035,
  duration = 0.7,
  once = true,
}) {
  const Tag = motion[as] || motion.div;

  if (!text) return null;

  // Pure React splitting for 100% reliability
  const items = type === 'chars' ? text.split('') : text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
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
      y: '25%',
    },
    visible: {
      opacity: 1,
      y: '0%',
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Tag
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: once, amount: 0 }}
    >
      {items.map((item, idx) => (
        <span
          key={idx}
          className={`inline-block ${
            type === 'words' ? 'mr-[0.25em] last:mr-0' : ''
          }`}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block transform-gpu"
          >
            {item === ' ' ? '\u00A0' : item}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
