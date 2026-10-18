import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import { Button } from '../components/Button';
import { FAQAccordion } from '../components/FAQAccordion';
import { SeoHead } from '../components/SeoHead';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  HelpCircle,
  FileCheck,
  ShieldCheck,
} from 'lucide-react';

export const ServiceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t, isRtl } = useLanguage();

  const service = servicesData.find((s) => s.slug === id || s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const title = service.title[language];
  const category = service.category[language];
  const fullDesc = service.fullDescription[language];
  const procedureSteps = service.procedureOverview[language];
  const typicalReasons = service.typicalReasons[language];

  const serviceFaqItems = service.faqs.map((faq, idx) => ({
    id: `${service.id}-faq-${idx}`,
    category: 'consultation' as const,
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <>
      <SeoHead
        title={title}
        description={service.shortDescription[language]}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-[#102A43]/10 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#147D83] hover:text-[#0E6166] transition-colors"
          >
            {isRtl ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
            <span>{t.serviceDetail.backLink}</span>
          </Link>
        </div>
      </div>

      {/* Service Header */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#EAF4F3]/40 to-[#F8F7F3] border-b border-[#102A43]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#147D83] text-white">
              {category}
            </span>
            {service.isDraftPlaceholder && (
              <span className="text-xs font-medium text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
                {isRtl ? 'تصنيف مسودة قيد التأكيد' : 'Draft Placeholder — Pending Clinic Confirmation'}
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#102A43] leading-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-3xl">
            {fullDesc}
          </p>
        </div>
      </section>

      {/* Medical Disclaimer Callout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="p-4 sm:p-5 rounded-xl bg-amber-50 border border-amber-200/80 shadow-xs flex items-start gap-3.5 text-xs sm:text-sm text-amber-900">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="font-semibold">{isRtl ? 'إخلاء مسؤولية سريري: ' : 'Clinical Disclaimer: '}</strong>
            {t.servicesPage.disclaimerBanner}
          </p>
        </div>
      </div>

      {/* Main Content Sections */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Section 1: What the procedure generally involves */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <FileCheck className="w-6 h-6 text-[#147D83]" />
              <h2 className="text-xl sm:text-2xl font-semibold text-[#102A43]">
                {t.serviceDetail.processTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {procedureSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F8F7F3] border border-[#102A43]/10 flex items-start gap-3 text-sm text-[#102A43]"
                >
                  <span className="w-5 h-5 rounded-full bg-[#147D83] text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed text-[#667085]">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 2: Common reasons for consultation */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-[#147D83]" />
              <h2 className="text-xl sm:text-2xl font-semibold text-[#102A43]">
                {t.serviceDetail.reasonsTitle}
              </h2>
            </div>
            <ul className="space-y-3">
              {typicalReasons.map((reason, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-lg bg-[#EAF4F3]/60 border border-[#147D83]/15 text-sm text-[#102A43]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#147D83] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: FAQs for this procedure */}
          {serviceFaqItems.length > 0 && (
            <>
              <hr className="border-gray-100" />
              <div className="space-y-6">
                <div className="flex items-center gap-2.5">
                  <HelpCircle className="w-6 h-6 text-[#147D83]" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-[#102A43]">
                    {t.serviceDetail.faqTitle}
                  </h2>
                </div>
                <FAQAccordion items={serviceFaqItems} />
              </div>
            </>
          )}

          {/* Consultation Request Box */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#102A43] text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-start">
              <h3 className="text-xl sm:text-2xl font-semibold">
                {t.serviceDetail.appointmentBoxTitle}
              </h3>
              <p className="text-sm text-white/80 max-w-xl leading-relaxed">
                {t.serviceDetail.appointmentBoxDesc}
              </p>
            </div>
            <Button
              to={`/booking?service=${service.slug}`}
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
