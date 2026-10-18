import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import {
  Heart,
  Shield,
  MessageSquare,
  Building,
  Award,
  Calendar,
} from 'lucide-react';

export const About: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <>
      <SeoHead
        title={isRtl ? 'عن العيادة' : 'About Experio Dental Clinics'}
        description={
          isRtl
            ? 'تعرف على فلسفة الرعاية ونهج راحة المريض في عيادات إكسبيريو لطب الأسنان بلوران، الإسكندرية.'
            : 'Learn about Experio Dental Clinics’ patient-first philosophy and modern clinical care in Louran, Alexandria.'
        }
      />

      {/* Hero Header */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#EAF4F3]/50 to-[#F8F7F3] border-b border-[#102A43]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#147D83]/10 text-[#147D83] border border-[#147D83]/20">
            {t.about.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#102A43] leading-tight">
            {t.about.title}
          </h1>
          <p className="text-base sm:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>
      </section>

      {/* Main Philosophy & Care Approach */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Approach to Care */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-[#EAF4F3] text-[#147D83] flex items-center justify-center shadow-xs">
                <Heart className="w-10 h-10" />
              </div>
            </div>
            <div className="md:col-span-8 space-y-3">
              <h2 className="text-2xl font-semibold text-[#102A43]">
                {t.about.philosophyTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                {t.about.philosophyBody}
              </p>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Patient Comfort & Communication */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex items-center justify-center order-first md:order-last">
              <div className="w-20 h-20 rounded-2xl bg-[#EAF4F3] text-[#147D83] flex items-center justify-center shadow-xs">
                <MessageSquare className="w-10 h-10" />
              </div>
            </div>
            <div className="md:col-span-8 space-y-3">
              <h2 className="text-2xl font-semibold text-[#102A43]">
                {t.about.comfortTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                {t.about.comfortBody}
              </p>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Clinic Environment */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-[#EAF4F3] text-[#147D83] flex items-center justify-center shadow-xs">
                <Building className="w-10 h-10" />
              </div>
            </div>
            <div className="md:col-span-8 space-y-3">
              <h2 className="text-2xl font-semibold text-[#102A43]">
                {t.about.environmentTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                {t.about.environmentBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications & Accreditations (Pending Section) */}
      <section className="py-16 sm:py-20 bg-[#F8F7F3] border-t border-[#102A43]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-white border border-[#102A43]/10 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#EAF4F3] text-[#147D83] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#102A43]">
                  {t.about.credentialsTitle}
                </h3>
                <span className="text-xs text-[#147D83] font-medium">
                  {isRtl ? 'سياسة الشفافية الطبية' : 'Clinical Transparency Standard'}
                </span>
              </div>
            </div>
            <p className="text-sm text-[#667085] leading-relaxed">
              {t.about.credentialsNotice}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#667085]">
              <Shield className="w-4 h-4 text-[#147D83]" />
              <span>
                {isRtl
                  ? 'لا يتم نشر أية مؤهلات أو أرقام قيد غير محققة رسمياً.'
                  : 'We strictly publish only verified professional credentials.'}
              </span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              to="/booking"
              variant="teal"
              size="lg"
              icon={<Calendar className="w-4 h-4" />}
            >
              {t.cta.bookAppointment}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
