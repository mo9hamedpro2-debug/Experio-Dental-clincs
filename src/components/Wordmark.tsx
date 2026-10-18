import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface WordmarkProps {
  inverted?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const Wordmark: React.FC<WordmarkProps> = ({
  inverted = false,
  size = 'md',
  showTagline = false,
  className = '',
}) => {
  const { isRtl } = useLanguage();

  const titleSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl md:text-4xl',
  }[size];

  const subSizes = {
    sm: 'text-[8px] sm:text-[9px] tracking-[0.28em]',
    md: 'text-[9px] sm:text-[10px] tracking-[0.32em]',
    lg: 'text-[11px] sm:text-[12px] tracking-[0.35em]',
  }[size];

  return (
    <Link
      to="/"
      className={`group inline-flex flex-col select-none ${className}`}
      aria-label="Experio Dental Clinics - Homepage"
    >
      <div className="flex items-center gap-1.5">
        <span
          className={`font-serif font-bold tracking-[0.22em] uppercase transition-colors ${titleSizes} ${
            inverted
              ? 'text-white group-hover:text-[#2BA0A7]'
              : 'text-[#102A43] group-hover:text-[#147D83]'
          }`}
        >
          EXPERIO
        </span>
      </div>
      <div className="flex items-center justify-between w-full">
        <span
          className={`font-semibold uppercase transition-colors ${subSizes} ${
            inverted ? 'text-[#2BA0A7]' : 'text-[#147D83]'
          }`}
        >
          DENTAL CLINICS
        </span>
      </div>
      {showTagline && (
        <span
          className={`text-xs mt-1 transition-colors ${
            inverted ? 'text-white/60' : 'text-[#667085]'
          }`}
        >
          {isRtl ? 'لوران، الإسكندرية' : 'Louran, Alexandria'}
        </span>
      )}
    </Link>
  );
};
