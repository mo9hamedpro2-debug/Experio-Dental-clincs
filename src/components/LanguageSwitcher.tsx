import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'header' | 'mobile' | 'footer';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  variant = 'header',
}) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'footer') {
    return (
      <div className={`inline-flex items-center gap-1.5 p-1 rounded-lg bg-white/5 border border-white/10 ${className}`}>
        <Globe className="w-4 h-4 text-[#147D83]" />
        <button
          onClick={() => setLanguage('en')}
          className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
            language === 'en'
              ? 'bg-[#147D83] text-white'
              : 'text-white/70 hover:text-white'
          }`}
          aria-label="Switch to English"
        >
          English
        </button>
        <button
          onClick={() => setLanguage('ar')}
          className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
            language === 'ar'
              ? 'bg-[#147D83] text-white'
              : 'text-white/70 hover:text-white'
          }`}
          aria-label="التبديل إلى العربية"
        >
          العربية
        </button>
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center border border-[#102A43]/15 rounded-full p-0.5 bg-white/70 shadow-2xs backdrop-blur-xs ${className}`}
    >
      <button
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
          language === 'en'
            ? 'bg-[#102A43] text-white shadow-xs'
            : 'text-[#667085] hover:text-[#102A43]'
        }`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ar')}
        className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all font-arabic ${
          language === 'ar'
            ? 'bg-[#102A43] text-white shadow-xs'
            : 'text-[#667085] hover:text-[#102A43]'
        }`}
        aria-pressed={language === 'ar'}
      >
        عربي
      </button>
    </div>
  );
};
