import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function GlobalBackgroundMotion() {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: -1000, y: -1000, currentX: -1000, currentY: -1000 });

  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Floating particles
    const particleCount = Math.min(Math.floor(width / 35), 45);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.45 + 0.15,
      pulseSpeed: Math.random() * 0.015 + 0.005,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow lerp
      mousePos.current.currentX += (mousePos.current.x - mousePos.current.currentX) * 0.06;
      mousePos.current.currentY += (mousePos.current.y - mousePos.current.currentY) * 0.06;

      // Render subtle mouse spotlight glow
      if (mousePos.current.currentX > -500) {
        const mouseGlow = ctx.createRadialGradient(
          mousePos.current.currentX,
          mousePos.current.currentY,
          0,
          mousePos.current.currentX,
          mousePos.current.currentY,
          350
        );
        mouseGlow.addColorStop(0, 'rgba(184, 154, 90, 0.08)');
        mouseGlow.addColorStop(0.5, 'rgba(95, 107, 69, 0.04)');
        mouseGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.arc(mousePos.current.currentX, mousePos.current.currentY, 350, 0, Math.PI * 2);
        ctx.fillStyle = mouseGlow;
        ctx.fill();
      }

      // Render floating particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.003;
        const clampedAlpha = Math.max(0.1, Math.min(0.65, p.alpha));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(184, 154, 90, ${clampedAlpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(184, 154, 90, 0.5)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Moving Ambient Aurora Blur Orbs */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#B89A5A]/12 blur-[120px] pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, -90, 60, 0],
          y: [0, 70, -50, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 -right-32 w-[650px] h-[650px] rounded-full bg-[#5F6B45]/15 blur-[140px] pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, 60, -80, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-32 left-1/3 w-[550px] h-[550px] rounded-full bg-[#B89A5A]/10 blur-[130px] pointer-events-none"
      />

      {/* Particle & Mouse Glow Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
