import type { DentistProfile } from '../types';

export const teamNotice = {
  title: {
    en: 'Meet Our Dental Team — Profiles Coming Soon',
    ar: 'فريق أطباء الأسنان — سيتم نشر الملفات التعريفية قريباً',
  },
  description: {
    en: 'Experio Dental Clinics upholds strict professional transparency. We are currently preparing verified profiles, specialties, and credentials for our clinical team to ensure all published qualifications are authentic and up to date.',
    ar: 'تلتزم عيادات إكسبيريو لطب الأسنان بأعلى معايير الشفافية المهنية. يجري حالياً إعداد واعتماد الملفات الرسمية والتخصصات المعتمدة لأطباء العيادة لضمان دقة كافة البيانات المقدمة لمرضانا الكرام.',
  },
  status: {
    en: 'Pending Official Clinic Verification',
    ar: 'قيد الاعتماد الرسمي من إدارة العيادة',
  },
};

export const sampleDentistPlaceholders: DentistProfile[] = [
  {
    id: 'placeholder-lead',
    name: {
      en: 'Lead Dental Specialist',
      ar: 'أخصائي طب وجراحة الأسنان',
    },
    specialty: {
      en: 'Restorative & Aesthetic Dentistry',
      ar: 'العلاجات التحفظية وتجميل الأسنان',
    },
    qualifications: {
      en: [
        'Confirmed BDS / Master’s Degree in Specialized Dentistry (Pending Documentation)',
        'Registered with the Egyptian Dental Syndicate (Verification in Progress)',
      ],
      ar: [
        'درجة البكالوريوس والماجستير في طب الأسنان التخصصي (بانتظار الوثائق الرسمية)',
        'قيد التسجيل في نقابة أطباء أسنان مصر (جارٍ التحقق)',
      ],
    },
    bio: {
      en: 'Clinical background, postgraduate credentials, and patient-first care philosophy will be presented here following formal clinic approval.',
      ar: 'سيتم استعراض السيرة المهنية والمؤهلات الأكاديمية ونهج الرعاية فور اكتمال التوثيق الرسمي من إدارة العيادة.',
    },
    isVerified: false,
  },
  {
    id: 'placeholder-implant',
    name: {
      en: 'Implantology & Oral Surgery Specialist',
      ar: 'أخصائي زراعة وجراحة الفم',
    },
    specialty: {
      en: 'Implantology & Surgical Dental Care',
      ar: 'زراعة الأسنان والجراحة المتقدمة',
    },
    qualifications: {
      en: [
        'Advanced Fellowship / Postgraduate Training in Implantology (Pending Verification)',
        'Active Professional Licensure in Alexandria (Verification in Progress)',
      ],
      ar: [
        'زمالة متقدمة وتدريب سريري في زراعة الأسنان (بانتظار الاعتماد)',
        'ترخيص المزاولة المهنية في الإسكندرية (جارٍ التحقق)',
      ],
    },
    bio: {
      en: 'Specialized expertise in surgical reconstruction, digital guided surgery, and bone restoration protocols awaiting verified publication.',
      ar: 'تخصص دقيق في الجراحة الرقمية الموجهة وتطوير العظام سيتم نشره بعد استكمال بيانات الاعتماد.',
    },
    isVerified: false,
  },
  {
    id: 'placeholder-ortho',
    name: {
      en: 'Orthodontic & Occlusal Specialist',
      ar: 'أخصائي تقويم الأسنان وعلاقات الإطباق',
    },
    specialty: {
      en: 'Orthodontics & Clear Aligner Therapy',
      ar: 'تقويم الأسنان والمصففات الشفافة',
    },
    qualifications: {
      en: [
        'Master’s Degree in Orthodontics & Dentofacial Orthopedics (Pending Verification)',
        'Certified Provider in Modern Clear Aligner Systems',
      ],
      ar: [
        'ماجستير في تقويم الأسنان والفكين (بانتظار الاعتماد)',
        'اعتماد رسمي في أنظمة التقويم الشفاف المعاصرة',
      ],
    },
    bio: {
      en: 'Focus on functional occlusion, facial balance, and conservative alignment therapies for adolescent and adult patients.',
      ar: 'تركيز على التوازن الوظيفي والجمالي وتصحيح الإطباق للمراهقين والبالغين.',
    },
    isVerified: false,
  },
];
