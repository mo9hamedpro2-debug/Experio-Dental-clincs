import type { AppointmentRequest, Language } from '../types';
import { clinicData } from '../data/clinicData';
import { saveNewAppointment } from './appointmentStore';

export interface BookingSubmissionResult {
  success: boolean;
  mode: 'demo' | 'live';
  message: string;
}

/**
 * Builds a safely encoded prefilled WhatsApp message based on form inputs.
 */
export function buildWhatsAppMessage(request: AppointmentRequest, lang: Language): string {
  const isArabic = lang === 'ar';

  const timeLabel = {
    morning: isArabic ? 'صباحاً (١٠:٠٠ ص – ١:٠٠ م)' : 'Morning (10:00 AM – 1:00 PM)',
    afternoon: isArabic ? 'ظهراً (١:٠٠ م – ٥:٠٠ م)' : 'Afternoon (1:00 PM – 5:00 PM)',
    evening: isArabic ? 'مساءً (٥:٠٠ م – ٩:٠٠ م)' : 'Evening (5:00 PM – 9:00 PM)',
  }[request.preferredTimePeriod] || request.preferredTimePeriod;

  if (isArabic) {
    let msg = `مرحباً عيادات إكسبيريو لطب الأسنان،\n`;
    msg += `أود إرسال طلب حجز موعد استشارة بالعيادة في لوران:\n\n`;
    msg += `• اسم المريض: ${request.patientName}\n`;
    msg += `• رقم الهاتف: ${request.phoneNumber}\n`;
    msg += `• التاريخ المفضل: ${request.preferredDate}\n`;
    msg += `• الفترة المفضلة: ${timeLabel}\n`;
    if (request.serviceCategory) {
      msg += `• الخدمة المطلوبة: ${request.serviceCategory}\n`;
    }
    if (request.shortNote && request.shortNote.trim()) {
      msg += `• ملاحظات إضافية: ${request.shortNote.trim()}\n`;
    }
    msg += `\nيرجى التواصل لتأكيد الموعد المناسب. شكراً جزيلاً.`;
    return msg;
  } else {
    let msg = `Hello Experio Dental Clinics,\n`;
    msg += `I would like to request a dental consultation at your Louran clinic:\n\n`;
    msg += `• Patient Name: ${request.patientName}\n`;
    msg += `• Phone Number: ${request.phoneNumber}\n`;
    msg += `• Preferred Date: ${request.preferredDate}\n`;
    msg += `• Preferred Time: ${timeLabel}\n`;
    if (request.serviceCategory) {
      msg += `• Service Category: ${request.serviceCategory}\n`;
    }
    if (request.shortNote && request.shortNote.trim()) {
      msg += `• Notes / Symptoms: ${request.shortNote.trim()}\n`;
    }
    msg += `\nPlease let me know available slots to confirm. Thank you.`;
    return msg;
  }
}

/**
 * Builds the direct WhatsApp link.
 */
export function getWhatsAppUrl(request: AppointmentRequest, lang: Language): string {
  const number = clinicData.whatsappNumber;
  const message = buildWhatsAppMessage(request, lang);
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Modular booking service implementation.
 * In concept mode without a configured backend, it provides a safe, transparent demo response.
 */
export async function submitAppointmentRequest(
  request: AppointmentRequest
): Promise<BookingSubmissionResult> {
  // Always save locally to reception dashboard store
  saveNewAppointment(request);

  const apiUrl = import.meta.env.VITE_BOOKING_API_URL;

  if (apiUrl) {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      return {
        success: true,
        mode: 'live',
        message: 'Appointment request transmitted successfully to clinic server.',
      };
    } catch {
      throw new Error('Unable to reach booking server. Please use our phone or WhatsApp booking.');
    }
  }

  // Safe demo simulation: 600ms simulated latency
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    success: true,
    mode: 'demo',
    message: 'Demo mode: Appointment request recorded in reception portal.',
  };
}
