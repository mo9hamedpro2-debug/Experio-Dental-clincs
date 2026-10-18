import type { Language } from '../types';

export interface FormErrors {
  patientName?: string;
  phoneNumber?: string;
  preferredDate?: string;
  preferredTimePeriod?: string;
  consentGiven?: string;
}

export function validateEgyptianPhone(rawPhone: string): boolean {
  // Strip spaces, dashes, parentheses
  const cleaned = rawPhone.replace(/[\s\-()]/g, '');

  // Egyptian mobile format:
  // Local: 010, 011, 012, 015 followed by 8 digits (total 11 digits)
  // International: +2010, +2011, +2012, +2015 followed by 8 digits
  // or 002010..., 2010...
  const localRegex = /^01[0125][0-9]{8}$/;
  const intlRegex = /^(\+20|0020|20)1[0125][0-9]{8}$/;

  return localRegex.test(cleaned) || intlRegex.test(cleaned);
}

export function validateDateNotPast(dateStr: string): boolean {
  if (!dateStr) return false;
  const inputDate = new Date(dateStr);
  if (isNaN(inputDate.getTime())) return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Must not be in the past
  return inputDate >= today;
}

export function validateAppointmentForm(
  data: {
    patientName: string;
    phoneNumber: string;
    preferredDate: string;
    preferredTimePeriod: string;
    consentGiven: boolean;
  },
  lang: Language
): { isValid: boolean; errors: FormErrors } {
  const errors: FormErrors = {};

  // Patient Name
  if (!data.patientName || data.patientName.trim().length < 3) {
    errors.patientName =
      lang === 'ar'
        ? 'يرجى كتابة الاسم بالكامل (٣ أحرف على الأقل).'
        : 'Please enter a valid full name (at least 3 characters).';
  }

  // Phone Number
  if (!data.phoneNumber || !data.phoneNumber.trim()) {
    errors.phoneNumber =
      lang === 'ar'
        ? 'رقم الهاتف المحمول مطلوب للتواصل.'
        : 'A contact phone number is required.';
  } else if (!validateEgyptianPhone(data.phoneNumber)) {
    errors.phoneNumber =
      lang === 'ar'
        ? 'يرجى إدخال رقم هاتف محمول مصري صحيح (مثال: 010XXXXXXXX).'
        : 'Please enter a valid Egyptian mobile number (e.g. 010XXXXXXXX or +2010XXXXXXXX).';
  }

  // Preferred Date
  if (!data.preferredDate) {
    errors.preferredDate =
      lang === 'ar' ? 'يرجى تحديد التاريخ المطلوب.' : 'Please select a preferred date.';
  } else if (!validateDateNotPast(data.preferredDate)) {
    errors.preferredDate =
      lang === 'ar'
        ? 'لا يمكن اختيار تاريخ سابق لليوم.'
        : 'The preferred date cannot be in the past.';
  }

  // Preferred Time Period
  if (!data.preferredTimePeriod) {
    errors.preferredTimePeriod =
      lang === 'ar' ? 'يرجى اختيار الفترة الزمنية المفضلة.' : 'Please select a preferred time slot.';
  }

  // Consent
  if (!data.consentGiven) {
    errors.consentGiven =
      lang === 'ar'
        ? 'يرجى الموافقة على شروط التواصل لإرسال الطلب.'
        : 'Please provide consent to be contacted regarding this request.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
