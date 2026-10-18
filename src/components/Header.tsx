import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Wordmark } from './Wordmark';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from './Button';
import { clinicData } from '../data/clinicData';
import {
  Menu,
  X,
  Phone,
  Calendar,
  MapPin,
  MessageCircle,
} from 'lucide-react';

export const Header: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname);
    setMobileMenuOpen(false);
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/services', label: t.nav.services },
    { to: '/team', label: t.nav.team },
    { to: '/contact', label: t.nav.contact },
    { to: '/faq', label: t.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F8F7F3]/95 backdrop-blur-md border-b border-[#102A43]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Wordmark */}
          <div className="flex items-center">
            <Wordmark size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-[#147D83] font-semibold bg-[#EAF4F3]/60'
                      : 'text-[#102A43]/80 hover:text-[#102A43] hover:bg-black/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Actions: Phone + Language + Book CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${clinicData.mobile}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#102A43] hover:text-[#147D83] transition-colors rounded-lg hover:bg-black/5"
              title={`Call ${clinicData.mobileDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#147D83]" />
              <span dir="ltr">{clinicData.mobileDisplay}</span>
            </a>

            <LanguageSwitcher />

            <Button
              to="/booking"
              variant="teal"
              size="md"
              icon={<Calendar className="w-4 h-4" />}
            >
              {t.cta.bookAppointment}
            </Button>
          </div>

          {/* Mobile Right Controls: Language + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#102A43] hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#147D83]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div className="relative bg-[#F8F7F3] border-b border-[#102A43]/15 shadow-xl px-5 pt-4 pb-8 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#EAF4F3] text-[#147D83] font-semibold'
                        : 'text-[#102A43] hover:bg-black/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-[#102A43]/10 space-y-3">
              <Button
                to="/booking"
                variant="teal"
                size="lg"
                className="w-full justify-center"
                icon={<Calendar className="w-4 h-4" />}
              >
                {t.cta.bookAppointment}
              </Button>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${clinicData.mobile}`}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-[#102A43]/20 bg-white text-xs font-semibold text-[#102A43] active:bg-black/5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#147D83]" />
                  <span dir="ltr">{clinicData.mobileDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${clinicData.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-[#147D83]/30 bg-[#EAF4F3] text-xs font-semibold text-[#147D83] active:bg-[#147D83]/20"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="pt-2 text-center text-xs text-[#667085] flex items-center justify-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#147D83]" />
                <span>
                  {isRtl
                    ? '٢٤ شارع شعراوي، لوران، الإسكندرية'
                    : '24 Shaarawy St, Louran, Alexandria'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
