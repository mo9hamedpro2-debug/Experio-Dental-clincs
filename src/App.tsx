import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context';
import { ConceptNotice } from './components/ConceptNotice';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetails } from './pages/ServiceDetails';
import { Team } from './pages/Team';
import { Booking } from './pages/Booking';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { Privacy } from './pages/Privacy';
import { ReceptionPortal } from './pages/ReceptionPortal';
import { NotFound } from './pages/NotFound';

// Scroll to top on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#F8F7F3] text-[#102A43] font-sans">
          {/* Top Concept Proposal Notice */}
          <ConceptNotice />

          {/* Main Navigation Header */}
          <Header />

          {/* Dynamic Page Content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetails />} />
              <Route path="/team" element={<Team />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/reception" element={<ReceptionPortal />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Footer with verified NAP */}
          <Footer />

          {/* Quick Floating WhatsApp Action */}
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
