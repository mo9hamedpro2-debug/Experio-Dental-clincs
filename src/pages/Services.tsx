import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import { ServiceCard } from '../components/ServiceCard';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { AlertTriangle, Calendar, Filter } from 'lucide-react';

export const Services: React.FC = () => {
  const { language, t, isRtl } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Extract unique categories
  const categories = ['all', ...Array.from(new Set(servicesData.map((s) => s.category[language])))];

  const filteredServices =
    selectedCategory === 'all'
      ? servicesData
      : servicesData.filter((s) => s.category[language] === selectedCategory);

  return (
    <>
      <SeoHead
        title={isRtl ? 'دليل الخدمات الطبية' : 'Dental Services Directory'}
        description={
          isRtl
            ? 'استعرض دليل علاجات وخدمات طب الأسنان في عيادات إكسبيريو بالإسكندرية. من العناية الوقائية إلى زراعة وتجميل الأسنان.'
            : 'Explore prospective dental care and treatments at Experio Dental Clinics in Alexandria. From preventive care to restorative dentistry.'
        }
      />

      {/* Header Banner */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#EAF4F3]/50 to-[#F8F7F3] border-b border-[#102A43]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#147D83]/10 text-[#147D83] border border-[#147D83]/20">
            {t.servicesPage.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#102A43] leading-tight">
            {t.servicesPage.title}
          </h1>
          <p className="text-base sm:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
            {t.servicesPage.subtitle}
          </p>
        </div>
      </section>

      {/* Medical Disclaimer Banner (prominent on Services) */}
      <div className="bg-amber-50/80 border-b border-amber-200/60 py-3.5 px-4 text-xs sm:text-sm text-amber-950">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <strong className="font-semibold">{isRtl ? 'إشعار سريري هام:' : 'Clinical Assessment Notice:'}</strong>{' '}
            <span>{t.servicesPage.disclaimerBanner}</span>
            <p className="text-[11px] text-amber-800 pt-0.5">
              {t.servicesPage.draftNotice}
            </p>
          </div>
        </div>
      </div>

      {/* Main Directory & Category Filtering */}
      <section className="py-14 sm:py-20 bg-[#F8F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            <span className="text-xs font-semibold text-[#667085] shrink-0 me-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>{isRtl ? 'التصنيف:' : 'Filter:'}</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#102A43] text-white shadow-xs'
                    : 'bg-white text-[#667085] hover:text-[#102A43] border border-[#102A43]/10'
                }`}
              >
                {cat === 'all' ? (isRtl ? 'كافة الخدمات' : 'All Categories') : cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Consultation CTA Banner */}
          <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#102A43] text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-start">
              <h3 className="text-xl sm:text-2xl font-semibold">
                {isRtl ? 'غير متأكد من الإجراء الأنسب لحالتك؟' : 'Not sure which treatment fits your needs?'}
              </h3>
              <p className="text-sm text-white/80 max-w-xl">
                {isRtl
                  ? 'احجز موعد كشف واستشارة عامة، وسيقوم طبيب الأسنان بفحصك ومناقشة الخطة الأفضل لك.'
                  : 'Schedule an initial examination consultation to evaluate your oral health and discuss personalized recommendations.'}
              </p>
            </div>
            <Button
              to="/booking"
              variant="teal"
              size="lg"
              className="shrink-0"
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
