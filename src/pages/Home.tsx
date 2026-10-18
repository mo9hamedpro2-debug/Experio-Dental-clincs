import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { clinicData } from '../data/clinicData';
import { servicesData } from '../data/servicesData';
import { faqData } from '../data/faqData';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { SeoHead } from '../components/SeoHead';
import {
  Calendar,
  Phone,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  ExternalLink,
  MessageCircle,
  CheckCircle,
} from 'lucide-react';

export const Home: React.FC = () => {
  const { t, isRtl } = useLanguage();

  const previewServices = servicesData.slice(0, 4);
  const homeFaqs = faqData.slice(0, 4);

  return (
    <>
      <SeoHead
        title={isRtl ? 'الرئيسية' : 'Premium Dental Care in Alexandria'}
        description={
          isRtl
            ? 'عيادات إكسبيريو لطب الأسنان في لوران بالإسكندرية. رعاية طبية متقنة ومريحة في ٢٤ شارع شعراوي، أعلى مركز آي سكان.'
            : 'Experio Dental Clinics in Louran, Alexandria. Thoughtful, patient-focused dental care at 24 Shaarawy Street.'
        }
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-32 bg-gradient-to-b from-[#EAF4F3]/40 via-[#F8F7F3] to-[#F8F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-start">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#147D83]/20 shadow-2xs text-xs font-semibold text-[#147D83]">
                <span className="w-2 h-2 rounded-full bg-[#147D83]"></span>
                <span>{t.hero.badge}</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#102A43] leading-[1.12]">
                  <span className="block">{t.hero.titlePrimary}</span>
                  <span className="font-serif italic font-normal text-[#147D83] block">
                    {t.hero.titleSecondary}
                  </span>
                </h1>
              </div>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-[#667085] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {t.hero.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <Button
                  to="/booking"
                  variant="teal"
                  size="lg"
                  className="w-full sm:w-auto shadow-md"
                  icon={<Calendar className="w-5 h-5" />}
                >
                  {t.cta.bookAppointment}
                </Button>

                <Button
                  to="/services"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white/60"
                  icon={
                    isRtl ? (
                      <ArrowLeft className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )
                  }
                  iconPosition="right"
                >
                  {t.cta.exploreServices}
                </Button>
              </div>

              {/* Direct Telephone and Location Strip */}
              <div className="pt-4 border-t border-[#102A43]/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#667085]">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#147D83] shrink-0" />
                  <span>
                    <strong className="text-[#102A43]">{t.hero.phoneDirect}:</strong>{' '}
                    <a
                      href={`tel:${clinicData.mobile}`}
                      className="font-semibold text-[#147D83] hover:underline"
                      dir="ltr"
                    >
                      {clinicData.mobileDisplay}
                    </a>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#147D83] shrink-0" />
                  <span>
                    {isRtl
                      ? '٢٤ شارع شعراوي، أعلى مركز آي سكان'
                      : '24 Shaarawy St, above iScan'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Subtle back decorative frame */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#147D83]/20 via-transparent to-[#102A43]/10 -rotate-1 blur-xs"></div>

                <div className="relative rounded-2xl overflow-hidden border border-[#102A43]/15 shadow-xl bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                    alt="Experio Dental Clinics interior treatment room in Louran Alexandria"
                    loading="eager"
                    className="w-full h-80 sm:h-96 md:h-[420px] object-cover object-center"
                  />

                  {/* Glass-styled floating reassurance pill */}
                  <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-sm text-xs text-[#102A43]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#EAF4F3] text-[#147D83] flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="font-semibold text-xs text-[#102A43]">
                          {isRtl ? 'بيئة علاجية هادئة ونظيفة' : 'Calm, Modern Clinic Setting'}
                        </p>
                        <p className="text-[11px] text-[#667085]">
                          {isRtl
                            ? 'أحدث معايير التعقيم والراحة في لوران'
                            : 'Meticulous hygiene & patient comfort in Louran'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY & THREE PILLARS */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#102A43]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={t.intro.tagline}
            title={t.intro.heading}
            subtitle={t.intro.p1}
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-7 rounded-xl bg-[#F8F7F3] border border-[#102A43]/10 space-y-3.5">
              <div className="w-12 h-12 rounded-lg bg-[#EAF4F3] flex items-center justify-center text-[#147D83]">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#102A43]">
                {t.intro.pillar1Title}
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                {t.intro.pillar1Desc}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-7 rounded-xl bg-[#F8F7F3] border border-[#102A43]/10 space-y-3.5">
              <div className="w-12 h-12 rounded-lg bg-[#EAF4F3] flex items-center justify-center text-[#147D83]">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#102A43]">
                {t.intro.pillar2Title}
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                {t.intro.pillar2Desc}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-7 rounded-xl bg-[#F8F7F3] border border-[#102A43]/10 space-y-3.5">
              <div className="w-12 h-12 rounded-lg bg-[#EAF4F3] flex items-center justify-center text-[#147D83]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#102A43]">
                {t.intro.pillar3Title}
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                {t.intro.pillar3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-16 sm:py-24 bg-[#F8F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              align="left"
              badge={t.servicesPreview.tagline}
              title={t.servicesPreview.heading}
              subtitle={t.servicesPreview.subheading}
              className="max-w-2xl"
            />
            <Button
              to="/services"
              variant="outline"
              size="md"
              icon={
                isRtl ? (
                  <ArrowLeft className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )
              }
              iconPosition="right"
              className="shrink-0 self-start md:self-end"
            >
              {t.cta.viewAllServices}
            </Button>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Draft Note Banner */}
          <div className="mt-8 p-4 rounded-xl bg-white border border-[#102A43]/10 text-xs text-[#667085] flex items-center justify-between gap-4">
            <span>{t.servicesPreview.draftNotice}</span>
            <Link
              to="/services"
              className="font-semibold text-[#147D83] hover:underline shrink-0"
            >
              {t.cta.viewAllServices} →
            </Link>
          </div>
        </div>
      </section>

      {/* PATIENT JOURNEY (4 STEPS) */}
      <section className="py-16 sm:py-24 bg-[#102A43] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            inverted
            badge={t.journey.tagline}
            title={t.journey.heading}
            subtitle={t.journey.subheading}
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-2xl font-serif text-[#2BA0A7] font-bold">01</span>
              <h3 className="text-base font-semibold text-white">
                {t.journey.step1Title}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {t.journey.step1Desc}
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-2xl font-serif text-[#2BA0A7] font-bold">02</span>
              <h3 className="text-base font-semibold text-white">
                {t.journey.step2Title}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {t.journey.step2Desc}
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-2xl font-serif text-[#2BA0A7] font-bold">03</span>
              <h3 className="text-base font-semibold text-white">
                {t.journey.step3Title}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {t.journey.step3Desc}
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-2xl font-serif text-[#2BA0A7] font-bold">04</span>
              <h3 className="text-base font-semibold text-white">
                {t.journey.step4Title}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {t.journey.step4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLINIC ENVIRONMENT & STANDARDS */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#102A43]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#102A43]/15 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                  alt="Experio clinic environment and modern consultation space"
                  loading="lazy"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
              </div>
            </div>

            {/* Text & Features (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                align="left"
                badge={t.environment.tagline}
                title={t.environment.heading}
                subtitle={t.environment.description}
              />

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#EAF4F3] text-[#147D83] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#102A43]">
                      {t.environment.feature1Title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#667085] mt-0.5">
                      {t.environment.feature1Desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#EAF4F3] text-[#147D83] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#102A43]">
                      {t.environment.feature2Title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#667085] mt-0.5">
                      {t.environment.feature2Desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#EAF4F3] text-[#147D83] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#102A43]">
                      {t.environment.feature3Title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#667085] mt-0.5">
                      {t.environment.feature3Desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION & CONTACT HIGHLIGHT */}
      <section className="py-16 sm:py-24 bg-[#F8F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={t.contactPreview.tagline}
            title={t.contactPreview.heading}
            subtitle={
              isRtl
                ? 'عياداتنا مجهزة لخدمة أهالي الإسكندرية في شارع شعراوي بلوران.'
                : 'Easily accessible on Shaarawy Street above iScan Center in Louran.'
            }
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-[#102A43]/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#EAF4F3] flex items-center justify-center text-[#147D83]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base text-[#102A43]">
                {t.contactPreview.addressLabel}
              </h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                {t.contactPreview.addressValue}
              </p>
              <a
                href={clinicData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#147D83] hover:underline pt-2"
              >
                <span>{t.contactPreview.mapsLinkText}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Phones */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-[#102A43]/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#EAF4F3] flex items-center justify-center text-[#147D83]">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base text-[#102A43]">
                {t.contactPreview.mobileLabel}
              </h3>
              <div className="space-y-1 text-sm">
                <a
                  href={`tel:${clinicData.mobile}`}
                  className="block font-semibold text-[#147D83] hover:underline"
                  dir="ltr"
                >
                  {clinicData.mobileDisplay} (Mobile)
                </a>
                <a
                  href={`tel:${clinicData.landline}`}
                  className="block text-xs text-[#667085] hover:text-[#102A43]"
                  dir="ltr"
                >
                  {clinicData.landlineDisplay} (Alexandria Landline)
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${clinicData.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#147D83] hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{t.cta.chatWhatsApp}</span>
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-[#102A43]/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#EAF4F3] flex items-center justify-center text-[#147D83]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base text-[#102A43]">
                {t.contactPreview.hoursLabel}
              </h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                {t.contactPreview.hoursValue}
              </p>
              <div className="pt-2">
                <Button to="/booking" variant="secondary" size="sm">
                  {t.cta.bookAppointment}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="py-16 sm:py-24 bg-white border-t border-[#102A43]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={t.faqPage.badge}
            title={t.faqPage.title}
            subtitle={t.faqPage.subtitle}
          />

          <div className="mt-12">
            <FAQAccordion items={homeFaqs} />
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#147D83] hover:underline"
            >
              <span>{isRtl ? 'عرض كافة الأسئلة الشائعة' : 'View all frequently asked questions'}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </Link>
          </div>
        </div>
      </section>

      {/* APPOINTMENT CALLOUT CTA BANNER */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#102A43] via-[#0B1D2E] to-[#102A43] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
            {isRtl ? 'جاهز لتنسيق زيارتك في عيادات إكسبيريو؟' : 'Ready to Request Your Dental Consultation?'}
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
            {isRtl
              ? 'فريق الاستقبال لدينا في لوران بانتظار اتصالك أو رسالتك لترتيب موعد ملائم.'
              : 'Our reception team in Louran, Alexandria is ready to coordinate a personalized consultation for you.'}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/booking"
              variant="teal"
              size="lg"
              icon={<Calendar className="w-5 h-5" />}
            >
              {t.cta.bookAppointment}
            </Button>
            <a
              href={`tel:${clinicData.mobile}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-[#2BA0A7]" />
              <span dir="ltr">{clinicData.mobileDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
