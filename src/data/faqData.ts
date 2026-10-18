import type { FAQItem } from '../types';

export const faqData: FAQItem[] = [
  {
    id: 'how-to-book',
    category: 'appointments',
    question: {
      en: 'How do I request an appointment at Experio Dental Clinics?',
      ar: 'كيف يمكنني طلب موعد في عيادات إكسبيريو لطب الأسنان؟',
    },
    answer: {
      en: 'You can submit an appointment request through our online booking form on this website, or contact our reception directly by phone (01029720243 / 03 5852955) or WhatsApp. Submitting the online form is an appointment request; our reception team will contact you promptly to confirm the specific date and time slot.',
      ar: 'يمكنك إرسال طلب حجز موعد عبر نموذج الحجز الإلكتروني في هذا الموقع، أو التواصل مباشرة مع فريق الاستقبال هاتفياً على الأرقام (01029720243 / 03 5852955) أو عبر تطبيق واتساب. إرسال النموذج الإلكتروني هو طلب حجز، وسيتواصل معك فريق الاستقبال لتأكيد الموعد النهائي المناسب.',
    },
  },
  {
    id: 'how-to-find',
    category: 'location',
    question: {
      en: 'Where is the clinic located in Alexandria, and how do I reach it?',
      ar: 'أين تقع العيادة في الإسكندرية، وكيف يمكن الوصول إليها؟',
    },
    answer: {
      en: 'The clinic is conveniently located in the Louran neighborhood at 24 Shaarawy Street, on the first floor directly above the iScan Center. Shaarawy Street is easily accessible from Abu Qir Road and the Tram line.',
      ar: 'تقع العيادة في حي لوران بمدينة الإسكندرية، وتحديداً في ٢٤ شارع شعراوي، بالدور الأول أعلى مركز آي سكان (iScan). يسهل الوصول إلى شارع شعراوي من طريق أبو قير وخط الترام.',
    },
  },
  {
    id: 'what-to-bring',
    category: 'consultation',
    question: {
      en: 'What should I bring to my initial consultation?',
      ar: 'ما الذي يجب إحضاره معي في أول موعد استشارة؟',
    },
    answer: {
      en: 'We recommend bringing a valid photo ID, a list of any current medications or medical conditions, and any previous dental records or panoramic X-rays taken within the last 6 to 12 months if available.',
      ar: 'ننصح بإحضار إثبات الشخصية، وقائمة بأي أدوية تتناولها بانتظام أو حالات طبية مزمنة، بالإضافة إلى أي أشعة سينية أو بانوراما حديثة تم إجراؤها خلال آخر 6 إلى 12 شهراً إن وجدت.',
    },
  },
  {
    id: 'how-treatment-plans-work',
    category: 'consultation',
    question: {
      en: 'How are dental treatment recommendations made?',
      ar: 'كيف يتم وضع الخطة العلاجية والتوصيات الطبية؟',
    },
    answer: {
      en: 'Treatment recommendations are strictly personalized. Your dentist will conduct an in-person clinical examination, evaluate diagnostic images if needed, discuss your symptoms and personal goals, and present suitable evidence-based options before initiating any procedure.',
      ar: 'توضع التوصيات العلاجية بصورة شخصية تماماً لكل مريض. يقوم طبيب الأسنان بفحص سريري شامل، وتقييم صور الأشعة التشخيصية عند الحاجة، ومناقشة أهدافك وشكواك بالتفصيل، ثم عرض البدائل العلاجية المناسبة قبل البدء في أي إجراء.',
    },
  },
  {
    id: 'how-to-contact',
    category: 'general',
    question: {
      en: 'What are the best channels to contact Experio Dental Clinics?',
      ar: 'ما هي أفضل وسيلة للتواصل مع عيادات إكسبيريو لطب الأسنان؟',
    },
    answer: {
      en: 'You can reach us directly via our mobile line at 01029720243, our Alexandria landline at 03 5852955, or through our WhatsApp messaging link. Our front desk staff will gladly answer your preliminary inquiries.',
      ar: 'يمكنك التواصل معنا مباشرة عبر الهاتف المحمول على الرقم 01029720243، أو الهاتف الأرضي بالإسكندرية على الرقم 03 5852955، أو عبر رابط محادثة واتساب المباشر.',
    },
  },
  {
    id: 'medical-disclaimer-faq',
    category: 'general',
    question: {
      en: 'Can I get a definitive diagnosis or medical prescription online?',
      ar: 'هل يمكن الحصول على تشخيص نهائي أو وصفة طبية عبر الإنترنت؟',
    },
    answer: {
      en: 'No. Digital communications and website contents are strictly for informational and educational purposes. A thorough in-person examination by a licensed dentist is always required for diagnostic certainty and clinical treatment.',
      ar: 'لا، فالمحتوى المنشور ووسائل التواصل الرقمية مخصصة للأغراض التثقيفية والإرشادية فقط. يلزم دائماً الفحص السريري المباشر داخل العيادة للتشخيص الدقيق وتحديد الإجراء الطبي المناسب.',
    },
  },
];
