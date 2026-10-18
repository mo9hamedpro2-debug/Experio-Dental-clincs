import React, { useState } from 'react';
import type { FAQItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  allowMultiple = false,
  className = '',
}) => {
  const { language } = useLanguage();
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const question = item.question[language];
        const answer = item.answer[language];

        return (
          <div
            key={item.id}
            className={`border rounded-xl transition-colors duration-200 ${
              isOpen
                ? 'border-[#147D83]/40 bg-white shadow-2xs'
                : 'border-[#102A43]/10 bg-white/70 hover:bg-white'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              id={`faq-btn-${item.id}`}
              className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-start gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#147D83] rounded-xl"
            >
              <span className="text-base sm:text-lg font-semibold text-[#102A43]">
                {question}
              </span>
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen
                    ? 'rotate-180 bg-[#EAF4F3] text-[#147D83]'
                    : 'bg-gray-100 text-[#667085]'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                role="region"
                aria-labelledby={`faq-btn-${item.id}`}
                className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#667085] leading-relaxed border-t border-gray-100/60"
              >
                <p>{answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
