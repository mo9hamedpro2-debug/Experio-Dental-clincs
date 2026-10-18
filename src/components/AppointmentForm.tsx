import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import { clinicData } from '../data/clinicData';
import { validateAppointmentForm } from '../lib/validation';
import type { FormErrors } from '../lib/validation';
import {
  submitAppointmentRequest,
  getWhatsAppUrl,
  buildWhatsAppMessage,
} from '../lib/bookingService';
import type { AppointmentRequest } from '../types';
import { Button } from './Button';
import {
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Calendar,
  Clock,
  User,
  Phone,
  ShieldCheck,
  ExternalLink,
  RotateCcw,
} from 'lucide-react';

function getTomorrowMinDate(): string {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
}

interface AppointmentFormProps {
  initialServiceId?: string;
  className?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialServiceId = '',
  className = '',
}) => {
  const { language, t, isRtl } = useLanguage();

  // Find initial service title if provided
  const initialService = servicesData.find((s) => s.slug === initialServiceId || s.id === initialServiceId);
  const initialServiceTitle = initialService ? initialService.title[language] : '';

  // Get minimum date (tomorrow)
  const minDateString = getTomorrowMinDate();

  // Form state (in-memory only, never persisted to storage)
  const [formData, setFormData] = useState({
    patientName: '',
    phoneNumber: '',
    preferredDate: '',
    preferredTimePeriod: 'morning' as 'morning' | 'afternoon' | 'evening',
    serviceCategory: initialServiceTitle,
    shortNote: '',
    consentGiven: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<AppointmentRequest | null>(null);
  const [showWhatsAppPreview, setShowWhatsAppPreview] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateAppointmentForm(formData, language);
    if (!validation.isValid) {
      setErrors(validation.errors);
      // Focus first erroneous element
      const firstErrorKey = Object.keys(validation.errors)[0];
      const element = document.getElementById(firstErrorKey);
      if (element) {
        element.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const payload: AppointmentRequest = {
        patientName: formData.patientName.trim(),
        phoneNumber: formData.phoneNumber.trim(),
        preferredDate: formData.preferredDate,
        preferredTimePeriod: formData.preferredTimePeriod,
        serviceCategory: formData.serviceCategory || undefined,
        shortNote: formData.shortNote ? formData.shortNote.trim() : undefined,
        consentGiven: formData.consentGiven,
      };

      await submitAppointmentRequest(payload);
      setSubmittedData(payload);
      setSubmissionSuccess(true);
    } catch {
      setErrors({
        patientName:
          language === 'ar'
            ? 'حدث خطأ أثناء المحاكاة. يرجى استخدام الحجز عبر واتساب أو الاتصال المباشر.'
            : 'An unexpected issue occurred. Please reach out via phone or WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData({
      patientName: '',
      phoneNumber: '',
      preferredDate: '',
      preferredTimePeriod: 'morning',
      serviceCategory: '',
      shortNote: '',
      consentGiven: false,
    });
    setErrors({});
    setSubmissionSuccess(false);
    setSubmittedData(null);
    setShowWhatsAppPreview(false);
  };

  return (
    <div className={`bg-white rounded-2xl border border-[#102A43]/15 shadow-sm overflow-hidden ${className}`}>
      {/* Top Banner: Notice & Demo Mode Indicator */}
      <div className="bg-[#EAF4F3] border-b border-[#147D83]/20 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-[#147D83] font-medium">
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span>{t.booking.formNotice}</span>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-[#102A43] font-semibold border border-[#147D83]/30 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          {t.booking.demoBadge}
        </span>
      </div>

      <div className="p-6 sm:p-8 lg:p-10">
        {submissionSuccess && submittedData ? (
          /* Success / Request Summary State */
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
              <div>
                <h3 className="font-semibold text-base sm:text-lg">
                  {t.booking.successTitle}
                </h3>
                <p className="text-sm text-emerald-800 mt-1">
                  {t.booking.successMessage}
                </p>
              </div>
            </div>

            {/* Request Summary Receipt */}
            <div className="bg-[#F8F7F3] rounded-xl border border-[#102A43]/10 p-5 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#102A43]">
                {t.booking.successSummaryTitle}
              </h4>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-xs text-[#667085]">{t.booking.successPatient}</dt>
                  <dd className="font-semibold text-[#102A43]">{submittedData.patientName}</dd>
                </div>
                <div>
                  <dt className="text-xs text-[#667085]">{t.booking.successPhone}</dt>
                  <dd className="font-semibold text-[#102A43]" dir="ltr">{submittedData.phoneNumber}</dd>
                </div>
                <div>
                  <dt className="text-xs text-[#667085]">{t.booking.successDate}</dt>
                  <dd className="font-semibold text-[#102A43]">{submittedData.preferredDate}</dd>
                </div>
                <div>
                  <dt className="text-xs text-[#667085]">{t.booking.successTime}</dt>
                  <dd className="font-semibold text-[#102A43]">
                    {submittedData.preferredTimePeriod === 'morning' && t.booking.timeMorning}
                    {submittedData.preferredTimePeriod === 'afternoon' && t.booking.timeAfternoon}
                    {submittedData.preferredTimePeriod === 'evening' && t.booking.timeEvening}
                  </dd>
                </div>
                {submittedData.serviceCategory && (
                  <div className="sm:col-span-2">
                    <dt className="text-xs text-[#667085]">{t.booking.successService}</dt>
                    <dd className="font-semibold text-[#147D83]">{submittedData.serviceCategory}</dd>
                  </div>
                )}
                {submittedData.shortNote && (
                  <div className="sm:col-span-2">
                    <dt className="text-xs text-[#667085]">{t.booking.successNote}</dt>
                    <dd className="text-[#667085] italic">"{submittedData.shortNote}"</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Direct WhatsApp Action for Instant Booking */}
            <div className="p-4 rounded-xl bg-[#EAF4F3] border border-[#147D83]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-sm text-[#102A43]">
                  {isRtl ? 'تسريع التأكيد عبر واتساب؟' : 'Expedite via WhatsApp?'}
                </p>
                <p className="text-xs text-[#667085] mt-0.5">
                  {isRtl
                    ? 'يمكنك إرسال هذه البيانات مسبقة التجهيز مباشرة لاستقبال العيادة.'
                    : 'Send these prefilled details directly to clinic reception.'}
                </p>
              </div>
              <a
                href={getWhatsAppUrl(submittedData, language)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#147D83] text-white hover:bg-[#0E6166] text-xs font-semibold shrink-0 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.cta.openInWhatsApp}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex justify-end pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleResetForm}
                icon={<RotateCcw className="w-3.5 h-3.5" />}
              >
                {t.booking.newRequestButton}
              </Button>
            </div>
          </div>
        ) : (
          /* Standard Interactive Form */
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {/* Patient Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="patientName"
                  className="block text-sm font-semibold text-[#102A43]"
                >
                  {t.booking.fullName} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[#667085]">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="patientName"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleInputChange}
                    placeholder={t.booking.fullNamePlaceholder}
                    aria-invalid={!!errors.patientName}
                    aria-describedby={errors.patientName ? 'patientName-error' : undefined}
                    className={`w-full ps-10 pe-3.5 py-2.5 rounded-lg border text-sm text-[#102A43] placeholder-[#667085]/60 focus:bg-white transition-colors ${
                      errors.patientName
                        ? 'border-rose-500 bg-rose-50/30 focus:border-rose-500'
                        : 'border-[#102A43]/20 bg-gray-50/50 focus:border-[#147D83]'
                    }`}
                  />
                </div>
                {errors.patientName && (
                  <p id="patientName-error" className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.patientName}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-semibold text-[#102A43]"
                >
                  {t.booking.phoneNumber} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[#667085]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    dir="ltr"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder={t.booking.phonePlaceholder}
                    aria-invalid={!!errors.phoneNumber}
                    aria-describedby="phone-help"
                    className={`w-full ps-10 pe-3.5 py-2.5 rounded-lg border text-sm text-[#102A43] placeholder-[#667085]/60 focus:bg-white transition-colors ${
                      errors.phoneNumber
                        ? 'border-rose-500 bg-rose-50/30 focus:border-rose-500'
                        : 'border-[#102A43]/20 bg-gray-50/50 focus:border-[#147D83]'
                    }`}
                  />
                </div>
                {errors.phoneNumber ? (
                  <p id="phoneNumber-error" className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.phoneNumber}</span>
                  </p>
                ) : (
                  <p id="phone-help" className="text-[11px] text-[#667085]">
                    {t.booking.phoneHelp}
                  </p>
                )}
              </div>

              {/* Preferred Date */}
              <div className="space-y-1.5">
                <label
                  htmlFor="preferredDate"
                  className="block text-sm font-semibold text-[#102A43]"
                >
                  {t.booking.preferredDate} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[#667085]">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    min={minDateString}
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    aria-invalid={!!errors.preferredDate}
                    aria-describedby={errors.preferredDate ? 'date-error' : undefined}
                    className={`w-full ps-10 pe-3.5 py-2.5 rounded-lg border text-sm text-[#102A43] focus:bg-white transition-colors ${
                      errors.preferredDate
                        ? 'border-rose-500 bg-rose-50/30 focus:border-rose-500'
                        : 'border-[#102A43]/20 bg-gray-50/50 focus:border-[#147D83]'
                    }`}
                  />
                </div>
                {errors.preferredDate && (
                  <p id="date-error" className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.preferredDate}</span>
                  </p>
                )}
              </div>

              {/* Preferred Time Period */}
              <div className="space-y-1.5">
                <label
                  htmlFor="preferredTimePeriod"
                  className="block text-sm font-semibold text-[#102A43]"
                >
                  {t.booking.preferredTime} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[#667085]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <select
                    id="preferredTimePeriod"
                    name="preferredTimePeriod"
                    value={formData.preferredTimePeriod}
                    onChange={handleInputChange}
                    aria-invalid={!!errors.preferredTimePeriod}
                    className="w-full ps-10 pe-3.5 py-2.5 rounded-lg border border-[#102A43]/20 bg-gray-50/50 text-sm text-[#102A43] focus:bg-white focus:border-[#147D83] transition-colors"
                  >
                    <option value="morning">{t.booking.timeMorning}</option>
                    <option value="afternoon">{t.booking.timeAfternoon}</option>
                    <option value="evening">{t.booking.timeEvening}</option>
                  </select>
                </div>
              </div>

              {/* Optional Service Category */}
              <div className="sm:col-span-2 space-y-1.5">
                <label
                  htmlFor="serviceCategory"
                  className="block text-sm font-semibold text-[#102A43]"
                >
                  {t.booking.serviceInterest}
                </label>
                <select
                  id="serviceCategory"
                  name="serviceCategory"
                  value={formData.serviceCategory}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#102A43]/20 bg-gray-50/50 text-sm text-[#102A43] focus:bg-white focus:border-[#147D83] transition-colors"
                >
                  <option value="">{t.booking.serviceSelectDefault}</option>
                  {servicesData.map((svc) => (
                    <option key={svc.id} value={svc.title[language]}>
                      {svc.title[language]} ({svc.category[language]})
                    </option>
                  ))}
                </select>
              </div>

              {/* Optional Notes / Symptoms */}
              <div className="sm:col-span-2 space-y-1.5">
                <label
                  htmlFor="shortNote"
                  className="block text-sm font-semibold text-[#102A43]"
                >
                  {t.booking.notes}
                </label>
                <div className="relative">
                  <textarea
                    id="shortNote"
                    name="shortNote"
                    rows={3}
                    maxLength={300}
                    value={formData.shortNote}
                    onChange={handleInputChange}
                    placeholder={t.booking.notesPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#102A43]/20 bg-gray-50/50 text-sm text-[#102A43] placeholder-[#667085]/60 focus:bg-white focus:border-[#147D83] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="space-y-1 pt-1">
              <label className="flex items-start gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  id="consentGiven"
                  name="consentGiven"
                  checked={formData.consentGiven}
                  onChange={handleInputChange}
                  aria-invalid={!!errors.consentGiven}
                  className="mt-1 w-4 h-4 rounded text-[#147D83] border-[#102A43]/30 focus:ring-[#147D83] cursor-pointer"
                />
                <span className="text-xs text-[#667085] leading-relaxed">
                  {t.booking.consent} <span className="text-rose-500">*</span>
                </span>
              </label>
              {errors.consentGiven && (
                <p className="text-xs text-rose-600 flex items-center gap-1 ps-6">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.consentGiven}</span>
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <Button
                type="submit"
                variant="teal"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto"
                icon={<Calendar className="w-4 h-4" />}
              >
                {isSubmitting ? t.cta.sending : t.booking.submitButton}
              </Button>

              {/* Pre-fill WhatsApp Toggle */}
              <button
                type="button"
                onClick={() => setShowWhatsAppPreview(!showWhatsAppPreview)}
                className="text-xs font-semibold text-[#147D83] hover:text-[#0E6166] inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg hover:bg-[#EAF4F3] transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>
                  {showWhatsAppPreview
                    ? (isRtl ? 'إخفاء معاينة واتساب' : 'Hide WhatsApp Preview')
                    : (isRtl ? 'حجز مباشر عبر واتساب' : 'Book directly via WhatsApp')}
                </span>
              </button>
            </div>

            {/* WhatsApp Fallback Drawer & Message Preview */}
            {showWhatsAppPreview && (
              <div className="mt-5 p-5 rounded-xl bg-[#F8F7F3] border border-[#147D83]/20 space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#102A43] flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 text-[#147D83]" />
                    <span>{t.booking.whatsAppPreviewTitle}</span>
                  </h4>
                  <span className="text-[11px] text-[#667085]">
                    {clinicData.whatsappNumber}
                  </span>
                </div>

                <p className="text-xs text-[#667085]">
                  {t.booking.whatsAppNotice}
                </p>

                <div className="bg-white p-3.5 rounded-lg border border-gray-200 text-xs font-mono text-[#102A43] whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto">
                  {buildWhatsAppMessage(
                    {
                      patientName: formData.patientName || (language === 'ar' ? '[الاسم]' : '[Your Name]'),
                      phoneNumber: formData.phoneNumber || (language === 'ar' ? '[رقم الهاتف]' : '[Your Phone]'),
                      preferredDate: formData.preferredDate || (language === 'ar' ? '[التاريخ]' : '[Selected Date]'),
                      preferredTimePeriod: formData.preferredTimePeriod,
                      serviceCategory: formData.serviceCategory,
                      shortNote: formData.shortNote,
                      consentGiven: true,
                    },
                    language
                  )}
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl(
                      {
                        patientName: formData.patientName || 'Guest Patient',
                        phoneNumber: formData.phoneNumber || '',
                        preferredDate: formData.preferredDate || '',
                        preferredTimePeriod: formData.preferredTimePeriod,
                        serviceCategory: formData.serviceCategory,
                        shortNote: formData.shortNote,
                        consentGiven: true,
                      },
                      language
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#147D83] text-white hover:bg-[#0E6166] text-xs font-semibold shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t.cta.openInWhatsApp}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
