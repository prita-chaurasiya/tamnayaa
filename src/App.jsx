import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LenisProvider from './components/LenisProvider';
import GlobalBackgroundMotion from './components/GlobalBackgroundMotion';
import CustomCursor from './components/CustomCursor';
import WelcomePreloader from './components/WelcomePreloader';
import AIChatbotWidget from './components/AIChatbotWidget';

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

// ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
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
  );
}

function App() {
  return (
    <Router>
      <LenisProvider>
        {/* Welcome Preloader Launch Animation */}
        <WelcomePreloader />

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

        {/* AI Health Assistant & WhatsApp Floating Widget */}
        <AIChatbotWidget />
      </LenisProvider>
    </Router>
  );
}

export default App;
