import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { faqData } from '../data/faqData';
import { clinicData } from '../data/clinicData';
import { FAQAccordion } from '../components/FAQAccordion';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import {
  Phone,
  Filter,
  Calendar,
} from 'lucide-react';

export const FAQ: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t.faqPage.filterAll },
    { id: 'appointments', label: t.faqPage.filterAppointments },
    { id: 'location', label: t.faqPage.filterLocation },
    { id: 'consultation', label: t.faqPage.filterConsultation },
    { id: 'general', label: t.faqPage.filterGeneral },
  ];

  const filteredFaqs =
    activeCategory === 'all'
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  return (
    <>
      <SeoHead
        title={isRtl ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
        description={
          isRtl
            ? 'إجابات واضحة ومطمئنة حول طلب المواعيد، الوصول لعيادات إكسبيريو في لوران بالإسكندرية، والاستعداد للزيارة.'
            : 'Answers about booking dental appointments, finding the clinic in Louran, and preparing for your dental visit at Experio.'
        }
      />

      {/* Header Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#EAF4F3]/50 to-[#F8F7F3] border-b border-[#102A43]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-block text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#147D83]/10 text-[#147D83] border border-[#147D83]/20">
            {t.faqPage.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#102A43] leading-tight">
            {t.faqPage.title}
          </h1>
          <p className="text-base sm:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
            {t.faqPage.subtitle}
          </p>
        </div>
      </section>

      {/* Main FAQ Accordion Section */}
      <section className="py-14 sm:py-20 bg-[#F8F7F3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            <span className="text-xs font-semibold text-[#667085] shrink-0 me-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>{isRtl ? 'الأقسام:' : 'Category:'}</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#102A43] text-white shadow-xs'
                    : 'bg-white text-[#667085] hover:text-[#102A43] border border-[#102A43]/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion Component */}
          <FAQAccordion items={filteredFaqs} allowMultiple={true} />

          {/* Contact Support Box */}
          <div className="mt-14 p-8 rounded-2xl bg-white border border-[#102A43]/10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-start">
              <h3 className="font-semibold text-lg text-[#102A43]">
                {t.faqPage.stillHaveQuestions}
              </h3>
              <p className="text-sm text-[#667085]">
                {t.faqPage.stillHaveQuestionsDesc}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${clinicData.mobile}`}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#102A43]/20 bg-[#F8F7F3] text-xs font-semibold text-[#102A43] hover:border-[#147D83] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#147D83]" />
                <span dir="ltr">{clinicData.mobileDisplay}</span>
              </a>
              <Button
                to="/booking"
                variant="teal"
                size="md"
                icon={<Calendar className="w-4 h-4" />}
              >
                {t.cta.bookAppointment}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
