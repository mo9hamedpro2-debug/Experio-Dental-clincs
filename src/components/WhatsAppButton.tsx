import React from 'react';
import { clinicData } from '../data/clinicData';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const { isRtl } = useLanguage();

  const greeting = isRtl
    ? encodeURIComponent('مرحباً عيادات إكسبيريو لطب الأسنان، أود الاستفسار عن المواعيد.')
    : encodeURIComponent('Hello Experio Dental Clinics, I would like to inquire about appointments.');

  const href = `https://wa.me/${clinicData.whatsappNumber}?text=${greeting}`;

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 end-6 z-30">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={isRtl ? 'تواصل معنا مباشرة عبر واتساب' : 'Chat with us on WhatsApp'}
        className="group flex items-center gap-2.5 bg-[#147D83] hover:bg-[#0E6166] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102A43]"
      >
        <MessageCircle className="w-5 h-5 shrink-0 group-hover:rotate-6 transition-transform" />
        <span className="text-xs sm:text-sm font-semibold hidden sm:inline">
          {isRtl ? 'محادثة واتساب' : 'WhatsApp'}
        </span>
      </a>
    </aside>
  );
};
