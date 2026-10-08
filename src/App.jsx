import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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

    // Target all text headings, paragraphs, cards, image blocks, and explicit reveal elements across all pages
    const targets = document.querySelectorAll('h1, h2, h3, section p, .eyebrow, .card-3d-element, .card-3d-scroll, .reveal-up, .reveal-left, .reveal-right, .reveal-zoom, .reveal-on-scroll, .img-mask-reveal');
    const viewportHeight = window.innerHeight;

    // Add reveal-up animation class to elements if not already assigned
    targets.forEach((el) => {
      if (!el.classList.contains('reveal-up') && 
          !el.classList.contains('reveal-left') && 
          !el.classList.contains('reveal-right') && 
          !el.classList.contains('reveal-zoom') && 
          !el.classList.contains('card-3d-scroll') && 
          !el.classList.contains('img-mask-reveal')) {
        el.classList.add('reveal-up');
      }

      // Reveal elements already inside initial viewport so top section loads instantly
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportHeight - 20) {
        el.classList.add('is-visible');
      }
    });

    // High-performance IntersectionObserver for continuous up & down scroll animations
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          const rect = entry.target.getBoundingClientRect();
          // Reset animation state when scrolled out of view (up or down) so scrolling back re-animates
          if (rect.top > viewportHeight + 100 || rect.bottom < -100) {
            entry.target.classList.remove('is-visible');
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '20px 0px 20px 0px',
      threshold: 0.08
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    targets.forEach((el) => observer.observe(el));

    // Youngiverse Scroll-Based Micro-Parallax Nudge
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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-text">
        <Navbar />
        <main className="flex-grow">
          <Routes>
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
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
