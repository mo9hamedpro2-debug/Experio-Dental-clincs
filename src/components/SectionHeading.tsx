import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  inverted?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
  inverted = false,
}) => {
  const alignmentClass = {
    left: 'text-left rtl:text-right items-start',
    center: 'text-center items-center',
    right: 'text-right rtl:text-left items-end',
  }[align];

  return (
    <div className={`flex flex-col ${alignmentClass} ${className}`}>
      {badge && (
        <span
          className={`inline-block text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full mb-3.5 ${
            inverted
              ? 'bg-white/10 text-white/90 border border-white/20'
              : 'bg-[#EAF4F3] text-[#147D83] border border-[#147D83]/20'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight max-w-3xl ${
          inverted ? 'text-white' : 'text-[#102A43]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3.5 text-base sm:text-lg max-w-2xl leading-relaxed ${
            inverted ? 'text-white/80' : 'text-[#667085]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
