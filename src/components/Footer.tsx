import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Wordmark } from './Wordmark';
import { LanguageSwitcher } from './LanguageSwitcher';
import { clinicData } from '../data/clinicData';
import {
  MapPin,
  Phone,
  ExternalLink,
  ShieldAlert,
  ArrowUpRight,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <footer className="bg-[#102A43] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Wordmark & Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Wordmark inverted size="md" />
            <p className="text-white/70 text-sm leading-relaxed max-w-sm pt-2">
              {t.footer.aboutText}
            </p>

            <div className="pt-2">
              <LanguageSwitcher variant="footer" />
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#2BA0A7]">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  {t.nav.team}
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-white transition-colors">
                  {t.nav.booking}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  {t.nav.faq}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Verified Contact & Address (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#2BA0A7]">
              {t.footer.verifiedDetails}
            </h3>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2BA0A7] shrink-0 mt-0.5" />
                <span>
                  {isRtl ? clinicData.streetAddressAr : clinicData.streetAddress}
                  <span className="block text-xs text-white/60">
                    {isRtl ? clinicData.landmarkAr : clinicData.landmark}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2BA0A7] shrink-0" />
                <div>
                  <a
                    href={`tel:${clinicData.mobile}`}
                    className="hover:text-white transition-colors block"
                    dir="ltr"
                  >
                    {clinicData.mobileDisplay} (Mobile)
                  </a>
                  <a
                    href={`tel:${clinicData.landline}`}
                    className="hover:text-white transition-colors block text-xs text-white/60"
                    dir="ltr"
                  >
                    {clinicData.landlineDisplay} (Landline)
                  </a>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href={clinicData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#2BA0A7] hover:text-white transition-colors underline underline-offset-4"
                >
                  <span>{t.contactPreview.mapsLinkText}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Transparency & Concept Notice (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#2BA0A7]">
              {t.footer.legalTitle}
            </h3>
            <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/70 space-y-2">
              <div className="flex items-center gap-1.5 font-medium text-white/90">
                <ShieldAlert className="w-3.5 h-3.5 text-[#2BA0A7]" />
                <span>{isRtl ? 'حالة البيانات والمقترح' : 'Data Transparency'}</span>
              </div>
              <p className="leading-relaxed">
                {t.disclaimer.verificationNotice}
              </p>
              <Link
                to="/privacy"
                className="inline-flex items-center gap-1 text-[#2BA0A7] hover:text-white transition-colors text-xs font-medium pt-1"
              >
                <span>{t.footer.privacyLink}</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer Banner */}
        <div className="py-6 border-b border-white/10 text-xs text-white/60 leading-relaxed">
          <p>
            <strong className="text-white/80">{t.disclaimer.title}: </strong>
            {t.disclaimer.text}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Location Badge */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {t.footer.copyrightYear} {clinicData.name}. {t.footer.allRights}
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2BA0A7]"></span>
              {isRtl ? 'لوران، الإسكندرية، مصر' : 'Louran, Alexandria, Egypt'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
