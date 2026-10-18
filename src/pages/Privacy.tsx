import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SeoHead } from '../components/SeoHead';
import { Shield, FileText, AlertTriangle, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Privacy: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <>
      <SeoHead
        title={isRtl ? 'الخصوصية والإشعار الطبي' : 'Privacy Notice & Medical Disclaimer'}
        description={
          isRtl
            ? 'سياسة الخصوصية، حالة المقترح، وإخلاء المسؤولية الطبية لعيادات إكسبيريو لطب الأسنان.'
            : 'Privacy notice, website concept proposal status, and clinical disclaimer for Experio Dental Clinics.'
        }
      />

      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#EAF4F3]/40 to-[#F8F7F3] border-b border-[#102A43]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-block text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#147D83]/10 text-[#147D83] border border-[#147D83]/20">
            {isRtl ? 'الشفافية القانونية' : 'Legal & Compliance'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#102A43]">
            {t.privacyPage.title}
          </h1>
          <p className="text-base text-[#667085] max-w-2xl mx-auto">
            {t.privacyPage.subtitle}
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#102A43]">
              <FileText className="w-5 h-5 text-[#147D83]" />
              <h2 className="text-xl font-semibold">
                {t.privacyPage.section1Title}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              {t.privacyPage.section1Text}
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Section 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#102A43]">
              <Shield className="w-5 h-5 text-[#147D83]" />
              <h2 className="text-xl font-semibold">
                {t.privacyPage.section2Title}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              {t.privacyPage.section2Text}
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Section 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#102A43]">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <h2 className="text-xl font-semibold">
                {t.privacyPage.section3Title}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              {t.privacyPage.section3Text}
            </p>
          </div>

          <div className="pt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#147D83] hover:underline"
            >
              {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              <span>{t.cta.backToHome}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
