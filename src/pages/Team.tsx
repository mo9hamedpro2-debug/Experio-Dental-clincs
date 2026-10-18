import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { teamNotice, sampleDentistPlaceholders } from '../data/dentistsData';
import { DentistCard } from '../components/DentistCard';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { ShieldCheck, Calendar } from 'lucide-react';

export const Team: React.FC = () => {
  const { language, t, isRtl } = useLanguage();

  return (
    <>
      <SeoHead
        title={isRtl ? 'أطباؤنا' : 'Our Dental Team'}
        description={
          isRtl
            ? 'تعرف على معايير اختيار الكوادر الطبية في عيادات إكسبيريو لطب الأسنان بلوران، الإسكندرية.'
            : 'Learn about Experio Dental Clinics’ professional dental team in Louran, Alexandria. Adhering to Egyptian Dental Syndicate standards.'
        }
      />

      {/* Header Banner */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#EAF4F3]/50 to-[#F8F7F3] border-b border-[#102A43]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#147D83]/10 text-[#147D83] border border-[#147D83]/20">
            {t.team.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#102A43] leading-tight">
            {t.team.title}
          </h1>
          <p className="text-base sm:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
            {t.team.subtitle}
          </p>
        </div>
      </section>

      {/* Prominent Verification & Policy Notice */}
      <section className="py-12 bg-white border-b border-[#102A43]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#EAF4F3] border border-[#147D83]/25 flex flex-col sm:flex-row items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#147D83] text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-base sm:text-lg font-semibold text-[#102A43]">
                  {teamNotice.title[language]}
                </h2>
                <span className="text-[11px] font-semibold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
                  {teamNotice.status[language]}
                </span>
              </div>
              <p className="text-sm text-[#667085] leading-relaxed">
                {teamNotice.description[language]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder Team Cards Section (Concept Preview) */}
      <section className="py-14 sm:py-20 bg-[#F8F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#102A43]">
              {isRtl ? 'نموذج هيكل بطاقات الأطباء المعتمدة' : 'Verified Clinical Profile Template'}
            </h2>
            <p className="text-xs sm:text-sm text-[#667085]">
              {isRtl
                ? 'توضح البطاقات أدناه كيف سيتم عرض تخصصات ومؤهلات أطبائنا فور اعتمادها رسمياً.'
                : 'The profile cards below illustrate how confirmed qualifications and specialties will appear upon final clinic documentation.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {sampleDentistPlaceholders.map((dentist) => (
              <DentistCard key={dentist.id} dentist={dentist} />
            ))}
          </div>

          {/* Action Box */}
          <div className="mt-14 text-center">
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
