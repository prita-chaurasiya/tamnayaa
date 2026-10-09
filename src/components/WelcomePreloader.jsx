import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/tam.png';

export default function WelcomePreloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Disable scrolling during preloader
    document.body.style.overflow = 'hidden';

    let startTime = null;
    const duration = 2500; // 2.5 seconds elegant loading animation

    const animateProgress = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const calculatedProgress = Math.min(Math.floor((elapsedTime / duration) * 100), 100);

      setProgress(calculatedProgress);

      if (calculatedProgress < 100) {
        requestAnimationFrame(animateProgress);
      } else {
        setTimeout(() => {
          setIsComplete(true);
          document.body.style.overflow = '';
        }, 700);
      }
    };

    requestAnimationFrame(animateProgress);

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
            opacity: 0,
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] bg-[#293225] text-[#FAF7F1] flex flex-col justify-between p-8 sm:p-12 font-sans select-none overflow-hidden"
        >
          {/* Top Brand Tag */}
          <div className="flex justify-between items-center text-xs uppercase tracking-[0.25em] font-bold text-[#B89A5A]">
            <span>TAMANYA HEALTH CLINIC</span>
            <span>VARANASI, UP</span>
          </div>

          {/* Center Brand Unveil Logo & Welcome Heading */}
          <div className="flex flex-col items-center justify-center text-center max-w-xl mx-auto my-auto space-y-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <img
                src={logoImg}
                alt="Tamanya Health"
                className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_0_25px_rgba(184,154,90,0.6)] brightness-125"
              />
              <div className="absolute -inset-4 bg-[#B89A5A]/20 rounded-full blur-2xl -z-10 animate-pulse" />
            </motion.div>

            <div className="overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#B89A5A] uppercase tracking-[0.3em] text-[11px] font-extrabold block mb-2"
              >
                WELCOME TO EXCELLENCE IN REHABILITATION
              </motion.span>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-3xl sm:text-5xl font-bold text-[#FAF7F1] leading-tight"
              >
                Get Back to the Life You Love.
              </motion.h1>
            </div>
          </div>

          {/* Bottom Progress Counter & Shimmer Progress Bar */}
          <div className="w-full max-w-2xl mx-auto space-y-3">
            <div className="flex justify-between items-center text-xs font-mono font-bold text-[#B89A5A] tracking-wider">
              <span>LOADING CLINICAL SUITE</span>
              <span>{progress}%</span>
            </div>

            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/15">
              <motion.div
                className="h-full bg-gradient-to-r from-[#B89A5A] via-[#D4B878] to-[#5F6B45] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
