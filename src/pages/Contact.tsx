import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { clinicData } from '../data/clinicData';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ExternalLink,
  Navigation,
  Calendar,
  Building2,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <>
      <SeoHead
        title={isRtl ? 'العنوان والتواصل' : 'Contact & Location in Alexandria'}
        description={
          isRtl
            ? 'تواصل مع عيادات إكسبيريو لطب الأسنان في ٢٤ شارع شعراوي، أعلى مركز آي سكان، لوران، الإسكندرية. هواتف الحجز وخرائط جوجل.'
            : 'Contact Experio Dental Clinics at 24 Shaarawy Street, above iScan Center, Louran, Alexandria. Direct phones and directions.'
        }
      />

      {/* Header Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#EAF4F3]/50 to-[#F8F7F3] border-b border-[#102A43]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-block text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#147D83]/10 text-[#147D83] border border-[#147D83]/20">
            {t.contactPage.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#102A43] leading-tight">
            {t.contactPage.title}
          </h1>
          <p className="text-base sm:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
            {t.contactPage.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="py-14 sm:py-20 bg-[#F8F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Address */}
            <div className="p-7 rounded-2xl bg-white border border-[#102A43]/10 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#EAF4F3] text-[#147D83] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#102A43]">
                  {t.contactPage.addressCardTitle}
                </h3>
                <div className="space-y-1 text-sm text-[#667085]">
                  <p className="font-medium text-[#102A43]">
                    {isRtl ? clinicData.streetAddressAr : clinicData.streetAddress}
                  </p>
                  <p className="text-xs text-[#147D83]">
                    {isRtl ? clinicData.landmarkAr : clinicData.landmark}
                  </p>
                  <p className="text-xs text-[#667085]">
                    {isRtl
                      ? `${clinicData.districtAr}، ${clinicData.cityAr}`
                      : `${clinicData.district}, ${clinicData.city}, Egypt`}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={clinicData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#EAF4F3] text-[#147D83] hover:bg-[#d6eae8] text-xs font-semibold transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{t.contactPage.openMapsText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 2: Telephone & WhatsApp */}
            <div className="p-7 rounded-2xl bg-white border border-[#102A43]/10 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#EAF4F3] text-[#147D83] flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#102A43]">
                  {t.contactPage.phoneCardTitle}
                </h3>
                <div className="space-y-3 text-sm">
                  <a
                    href={`tel:${clinicData.mobile}`}
                    className="block p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-[#147D83] transition-colors"
                  >
                    <span className="text-xs text-[#667085] block">
                      {t.contactPage.mobileTapText}
                    </span>
                    <span className="text-base font-semibold text-[#147D83]" dir="ltr">
                      {clinicData.mobileDisplay}
                    </span>
                  </a>

                  <a
                    href={`tel:${clinicData.landline}`}
                    className="block p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-[#147D83] transition-colors"
                  >
                    <span className="text-xs text-[#667085] block">
                      {t.contactPage.landlineTapText}
                    </span>
                    <span className="text-sm font-semibold text-[#102A43]" dir="ltr">
                      {clinicData.landlineDisplay}
                    </span>
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${clinicData.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#147D83] text-white hover:bg-[#0E6166] text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.cta.chatWhatsApp}</span>
                </a>
              </div>
            </div>

            {/* Card 3: Hours & Appointments */}
            <div className="p-7 rounded-2xl bg-white border border-[#102A43]/10 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#EAF4F3] text-[#147D83] flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#102A43]">
                  {t.contactPage.hoursCardTitle}
                </h3>
                <p className="text-sm text-[#667085] leading-relaxed">
                  {t.contactPage.hoursNotice}
                </p>
                <div className="p-3 rounded-lg bg-[#F8F7F3] border border-[#102A43]/10 text-xs text-[#667085]">
                  <strong className="text-[#102A43] block mb-1">
                    {isRtl ? 'حجز مسبق مطلوب:' : 'Prior Coordination:'}
                  </strong>
                  <span>
                    {isRtl
                      ? 'لضمان عدم الانتظار وتوفير الوقت الكافي لكل مريض، نوصي بالحجز المسبق.'
                      : 'To prevent waiting and ensure dedicated consultation time, we recommend scheduling in advance.'}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  to="/booking"
                  variant="teal"
                  size="md"
                  className="w-full justify-center"
                  icon={<Calendar className="w-4 h-4" />}
                >
                  {t.cta.bookAppointment}
                </Button>
              </div>
            </div>
          </div>

          {/* Direction Guide for Louran, Alexandria */}
          <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-white border border-[#102A43]/10 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#EAF4F3] text-[#147D83] flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#102A43]">
                  {t.contactPage.directionsTitle}
                </h2>
                <p className="text-xs text-[#147D83] font-medium">
                  {isRtl ? '٢٤ شارع شعراوي، الدور الأول أعلى مركز آي سكان' : '24 Shaarawy St, 1st Floor above iScan'}
                </p>
              </div>
            </div>

            <p className="text-sm text-[#667085] leading-relaxed">
              {t.contactPage.directionsDesc}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={clinicData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#102A43] text-white hover:bg-[#0B1D2E] text-xs font-semibold transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#2BA0A7]" />
                <span>{t.contactPage.openMapsText}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${clinicData.mobile}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#102A43]/20 text-[#102A43] hover:bg-black/5 text-xs font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-[#147D83]" />
                <span>{clinicData.mobileDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
