import React from 'react';
import { motion } from 'framer-motion';

export default function Marquee({ children, speed = 25, reverse = false, className = '' }) {
  return (
    <div className={`overflow-hidden flex w-full select-none ${className}`}>
      <motion.div
        initial={{ x: reverse ? '-50%' : '0%' }}
        animate={{ x: reverse ? '0%' : '-50%' }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
        className="flex shrink-0 flex-nowrap items-center gap-8 py-2 hover:[animation-play-state:paused]"
      >
        <div className="flex shrink-0 flex-nowrap items-center gap-8">{children}</div>
        <div className="flex shrink-0 flex-nowrap items-center gap-8">{children}</div>
        <div className="flex shrink-0 flex-nowrap items-center gap-8">{children}</div>
      </motion.div>
    </div>
  );
}
