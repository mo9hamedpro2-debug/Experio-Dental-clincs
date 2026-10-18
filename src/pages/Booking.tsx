import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { AppointmentForm } from '../components/AppointmentForm';
import { SeoHead } from '../components/SeoHead';
import { clinicData } from '../data/clinicData';
import {
  CalendarCheck,
  PhoneCall,
  MapPin,
} from 'lucide-react';

export const Booking: React.FC = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service') || '';
  const { t, isRtl } = useLanguage();

  return (
    <>
      <SeoHead
        title={isRtl ? 'حجز موعد' : 'Request an Appointment'}
        description={
          isRtl
            ? 'طلب حجز موعد كشف واستشارة في عيادات إكسبيريو لطب الأسنان في لوران بالإسكندرية. تواصل مباشر أو نموذج إلكتروني.'
            : 'Request a dental consultation at Experio Dental Clinics in Louran, Alexandria. Convenient online request or direct WhatsApp coordination.'
        }
      />

      {/* Header Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#EAF4F3]/50 to-[#F8F7F3] border-b border-[#102A43]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-block text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#147D83]/10 text-[#147D83] border border-[#147D83]/20">
            {t.booking.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#102A43] leading-tight">
            {t.booking.title}
          </h1>
          <p className="text-base sm:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
            {t.booking.subtitle}
          </p>
        </div>
      </section>

      {/* Main Form and Guidance Layout */}
      <section className="py-12 sm:py-20 bg-[#F8F7F3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            {/* Form Column (8 cols) */}
            <div className="lg:col-span-8">
              <AppointmentForm initialServiceId={serviceParam} />
            </div>

            {/* Sidebar Guidance Column (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* How Booking Works Card */}
              <div className="p-6 rounded-2xl bg-white border border-[#102A43]/10 shadow-xs space-y-4">
                <h3 className="font-semibold text-base text-[#102A43] flex items-center gap-2">
                  <CalendarCheck className="w-5 h-5 text-[#147D83]" />
                  <span>{isRtl ? 'كيف يتم تنسيق الموعد؟' : 'How Requests Are Processed'}</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-[#667085]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#147D83] mt-2 shrink-0" />
                    <span>
                      {isRtl
                        ? 'إرسال النموذج يعد طلباً لتنسيق الموعد وليس حجزاً نهائياً فورياً.'
                        : 'Submitting this form is an appointment request, not a confirmed time slot.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#147D83] mt-2 shrink-0" />
                    <span>
                      {isRtl
                        ? 'سيتصل بك موظف الاستقبال أو يراسلك على واتساب لتأكيد الساعة المناسبة لك.'
                        : 'Our reception team will call or message your phone to confirm an exact slot.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#147D83] mt-2 shrink-0" />
                    <span>
                      {isRtl
                        ? 'لا يتم طلب أي بيانات دفع أو بطاقات بنكية عبر الموقع.'
                        : 'No online payment or credit card details are collected.'}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Direct Telephone Card */}
              <div className="p-6 rounded-2xl bg-white border border-[#102A43]/10 shadow-xs space-y-3">
                <h3 className="font-semibold text-base text-[#102A43] flex items-center gap-2">
                  <PhoneCall className="w-5 h-5 text-[#147D83]" />
                  <span>{isRtl ? 'تفضل بالاتصال المباشر؟' : 'Prefer Immediate Assistance?'}</span>
                </h3>
                <p className="text-xs text-[#667085]">
                  {isRtl
                    ? 'يمكنك التحدث مباشرة مع موظف الاستقبال لتحديد موعدك فوراً:'
                    : 'Call our Alexandria lines directly to arrange your consultation:'}
                </p>
                <div className="pt-1 space-y-2">
                  <a
                    href={`tel:${clinicData.mobile}`}
                    className="block p-3 rounded-lg bg-[#F8F7F3] border border-[#102A43]/10 hover:border-[#147D83] transition-colors"
                  >
                    <span className="text-[11px] text-[#667085] block">
                      {isRtl ? 'المحمول وخط الحجز السريع' : 'Mobile Line'}
                    </span>
                    <span className="text-sm font-semibold text-[#147D83]" dir="ltr">
                      {clinicData.mobileDisplay}
                    </span>
                  </a>
                  <a
                    href={`tel:${clinicData.landline}`}
                    className="block p-3 rounded-lg bg-[#F8F7F3] border border-[#102A43]/10 hover:border-[#147D83] transition-colors"
                  >
                    <span className="text-[11px] text-[#667085] block">
                      {isRtl ? 'الهاتف الأرضي بالإسكندرية' : 'Alexandria Landline'}
                    </span>
                    <span className="text-sm font-semibold text-[#102A43]" dir="ltr">
                      {clinicData.landlineDisplay}
                    </span>
                  </a>
                </div>
              </div>

              {/* Location Reference */}
              <div className="p-6 rounded-2xl bg-[#EAF4F3] border border-[#147D83]/20 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#147D83]">
                  <MapPin className="w-4 h-4" />
                  <span>{isRtl ? 'مقر العيادة' : 'Clinic Location'}</span>
                </div>
                <p className="text-xs text-[#102A43] leading-relaxed">
                  {isRtl ? clinicData.streetAddressAr : clinicData.streetAddress}
                </p>
                <p className="text-[11px] text-[#667085]">
                  {isRtl ? clinicData.landmarkAr : clinicData.landmark}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
