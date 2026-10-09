import React from 'react';
import { motion } from 'framer-motion';

export default function AIRobotAvatar({ className = "w-20 h-20" }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Ambient Pulsating Glow Ring */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.75, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -inset-2 bg-gradient-to-tr from-[#00d2ff] via-[#3a7bd5] to-[#92fe9d] rounded-full blur-xl opacity-60 -z-10"
      />

      {/* Floating 3D AI Robot Character */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-full h-full flex items-center justify-center filter drop-shadow-[0_10px_20px_rgba(0,210,255,0.4)]"
      >
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="robotBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>

            <linearGradient id="robotCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F2FE" />
              <stop offset="100%" stopColor="#4FACFE" />
            </linearGradient>

            <linearGradient id="visorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>

            <linearGradient id="chestGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F2FE" />
              <stop offset="100%" stopColor="#00C6FF" />
            </linearGradient>

            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Left Ear Ring / Antenna */}
          <circle cx="24" cy="48" r="9" fill="url(#robotCyanGrad)" />
          <circle cx="24" cy="48" r="5" fill="#00F2FE" filter="url(#neonGlow)" />

          {/* Right Ear Ring / Antenna */}
          <circle cx="96" cy="48" r="9" fill="url(#robotCyanGrad)" />
          <circle cx="96" cy="48" r="5" fill="#00F2FE" filter="url(#neonGlow)" />

          {/* Top Antenna Head Sphere */}
          <path d="M60 20 V 12" stroke="url(#robotCyanGrad)" strokeWidth="4" strokeLinecap="round" />
          <circle cx="60" cy="10" r="5" fill="#00F2FE" filter="url(#neonGlow)" />

          {/* Main Outer Helmet (Head) */}
          <rect x="28" y="20" width="64" height="52" rx="26" fill="url(#robotBodyGrad)" stroke="#94A3B8" strokeWidth="1.5" />
          {/* Top Helmet Gloss Highlight */}
          <path d="M38 26 Q 60 21 82 26" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.9" />

          {/* Face Visor Display Screen */}
          <rect x="35" y="28" width="50" height="36" rx="16" fill="url(#visorGrad)" stroke="#00F2FE" strokeWidth="1.5" />

          {/* Expressive Glowing Eyes */}
          {/* Left Eye */}
          <path d="M 44 42 Q 48 37 52 42" stroke="#00F2FE" strokeWidth="3.5" strokeLinecap="round" fill="none" filter="url(#neonGlow)" />
          {/* Right Eye */}
          <path d="M 68 42 Q 72 37 76 42" stroke="#00F2FE" strokeWidth="3.5" strokeLinecap="round" fill="none" filter="url(#neonGlow)" />

          {/* Cute Glowing Mouth */}
          <path d="M 54 53 Q 60 58 66 53" stroke="#00F2FE" strokeWidth="2.5" strokeLinecap="round" fill="none" filter="url(#neonGlow)" />

          {/* Neck Joint */}
          <rect x="52" y="70" width="16" height="6" rx="3" fill="#64748B" />

          {/* Robot Torso / Body */}
          <path d="M38 74 C 38 74, 42 102, 60 102 C 78 102, 82 74, 82 74 Z" fill="url(#robotBodyGrad)" stroke="#94A3B8" strokeWidth="1.5" />

          {/* Chest Core Glowing Power Emblem */}
          <circle cx="60" cy="86" r="8" fill="url(#visorGrad)" stroke="url(#robotCyanGrad)" strokeWidth="1.5" />
          <circle cx="60" cy="86" r="4" fill="#00F2FE" filter="url(#neonGlow)" />

          {/* Floating Left Arm */}
          <path d="M 34 80 Q 22 84 20 74" stroke="url(#robotBodyGrad)" strokeWidth="7" strokeLinecap="round" />
          <circle cx="19" cy="73" r="4.5" fill="url(#robotCyanGrad)" />

          {/* Floating Right Arm (Waving 👋) */}
          <path d="M 86 80 Q 98 76 102 64" stroke="url(#robotBodyGrad)" strokeWidth="7" strokeLinecap="round" />
          <circle cx="103" cy="62" r="4.5" fill="url(#robotCyanGrad)" />
        </svg>
      </motion.div>
    </div>
  );
}
