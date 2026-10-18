export type Language = 'en' | 'ar';

export interface ClinicInfo {
  name: string;
  nameAr: string;
  tagline: string;
  taglineAr: string;
  streetAddress: string;
  streetAddressAr: string;
  landmark: string;
  landmarkAr: string;
  district: string;
  districtAr: string;
  city: string;
  cityAr: string;
  country: string;
  countryAr: string;
  mobile: string;
  mobileDisplay: string;
  landline: string;
  landlineDisplay: string;
  googleMapsUrl: string;
  whatsappNumber: string;
  isPreliminaryResearch: boolean;
}

export interface DentalService {
  id: string;
  slug: string;
  title: {
    en: string;
    ar: string;
  };
  category: {
    en: string;
    ar: string;
  };
  shortDescription: {
    en: string;
    ar: string;
  };
  fullDescription: {
    en: string;
    ar: string;
  };
  procedureOverview: {
    en: string[];
    ar: string[];
  };
  typicalReasons: {
    en: string[];
    ar: string[];
  };
  faqs: Array<{
    question: { en: string; ar: string };
    answer: { en: string; ar: string };
  }>;
  isDraftPlaceholder: boolean;
  iconName: string;
}

export interface DentistProfile {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  specialty: {
    en: string;
    ar: string;
  };
  qualifications: {
    en: string[];
    ar: string[];
  };
  bio: {
    en: string;
    ar: string;
  };
  isVerified: boolean;
  photoUrl?: string;
}

export interface AppointmentRequest {
  patientName: string;
  phoneNumber: string;
  preferredDate: string;
  preferredTimePeriod: 'morning' | 'afternoon' | 'evening';
  serviceCategory?: string;
  shortNote?: string;
  consentGiven: boolean;
}

export interface FAQItem {
  id: string;
  category: 'appointments' | 'location' | 'consultation' | 'general';
  question: {
    en: string;
    ar: string;
  };
  answer: {
    en: string;
    ar: string;
  };
}
