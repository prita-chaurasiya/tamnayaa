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
import Contact from './pages/Contact';
import BookAppointment from './BookAppointment';

import './index.css';
import './style.css'; // Make sure all global styles are imported if needed

// ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
