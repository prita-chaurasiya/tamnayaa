import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LenisProvider from './components/LenisProvider';
import GlobalBackgroundMotion from './components/GlobalBackgroundMotion';
import CustomCursor from './components/CustomCursor';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Physiotherapy from './pages/Physiotherapy';
import WomensHealth from './pages/WomensHealth';
import SkinCare from './pages/SkinCare';
import SlimmingWellness from './pages/SlimmingWellness';
import HealthCamp from './pages/HealthCamp';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import BookAppointment from './BookAppointment';

import './index.css';

// ScrollToTop & Global Scroll Reveal Observer Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });

    const viewportHeight = window.innerHeight;

    // Intelligent Directional Reveal Assignment across all pages
    const gridSections = document.querySelectorAll('.grid');
    gridSections.forEach((grid) => {
      const children = Array.from(grid.children);
      if (children.length === 2) {
        const leftChild = children[0];
        const rightChild = children[1];

        if (!leftChild.classList.contains('reveal-left') && !leftChild.classList.contains('reveal-right')) {
          leftChild.classList.add('reveal-left');
        }

        if (!rightChild.classList.contains('reveal-left') && !rightChild.classList.contains('reveal-right')) {
          rightChild.classList.add('reveal-right');
        }
      } else if (children.length > 2) {
        children.forEach((child) => {
          if (!child.classList.contains('reveal-left') && 
              !child.classList.contains('reveal-right') && 
              !child.classList.contains('card-3d-element') && 
              !child.classList.contains('card-3d-scroll')) {
            child.classList.add('reveal-up');
          }
        });
      }
    });

    // Explicit targets: headings, paragraphs, images, and custom reveal elements
    const targets = document.querySelectorAll('h1, h2, h3, section p, img, .eyebrow, .card-3d-element, .card-3d-scroll, .reveal-up, .reveal-left, .reveal-right, .reveal-zoom, .reveal-on-scroll, .img-mask-reveal');

    targets.forEach((el) => {
      if (!el.classList.contains('reveal-up') && 
          !el.classList.contains('reveal-left') && 
          !el.classList.contains('reveal-right') && 
          !el.classList.contains('reveal-zoom') && 
          !el.classList.contains('card-3d-scroll') && 
          !el.classList.contains('img-mask-reveal')) {
        if (el.tagName === 'IMG' || el.closest('.aspect-square') || el.closest('.aspect-video') || el.closest('.aspect-\\[4\\/3\\]') || el.closest('.aspect-\\[3\\/4\\]')) {
          el.classList.add('reveal-right');
        } else {
          el.classList.add('reveal-left');
        }
      }

      const rect = el.getBoundingClientRect();
      if (rect.top < viewportHeight - 20) {
        el.classList.add('is-visible');
      }
    });

    // High-performance IntersectionObserver for continuous scroll entrance
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          const rect = entry.target.getBoundingClientRect();
          if (rect.top > viewportHeight + 120 || rect.bottom < -120) {
            entry.target.classList.remove('is-visible');
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '10px 0px 10px 0px',
      threshold: 0.02
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    targets.forEach((el) => observer.observe(el));

    // Scroll-Based Micro-Parallax Nudge
    const handleScrollParallax = () => {
      const scrolledY = window.scrollY;
      const parallaxEls = document.querySelectorAll('.parallax-float');
      parallaxEls.forEach((el, idx) => {
        const speed = (idx % 2 === 0 ? 0.04 : -0.04);
        el.style.transform = `translateY(${scrolledY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScrollParallax, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollParallax);
    };
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16, scale: 0.99, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -16, scale: 0.99, filter: 'blur(4px)' }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex-grow flex flex-col relative z-10"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/physiotherapy" element={<Physiotherapy />} />
          <Route path="/womens-health" element={<WomensHealth />} />
          <Route path="/skin-care" element={<SkinCare />} />
          <Route path="/slimming-wellness" element={<SlimmingWellness />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/health-camp" element={<HealthCamp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-appointment" element={<div className="pt-24 min-h-screen bg-cream"><BookAppointment /></div>} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <LenisProvider>
        <ScrollToTop />
        <CustomCursor />
        <div className="flex flex-col min-h-screen font-sans text-text relative bg-[#F4EFE6] overflow-x-hidden">
          {/* Full Page Ambient Motion Background Layer */}
          <GlobalBackgroundMotion />
          <Navbar />
          <main className="flex-grow flex flex-col relative z-10">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </LenisProvider>
    </Router>
  );
}

export default App;
