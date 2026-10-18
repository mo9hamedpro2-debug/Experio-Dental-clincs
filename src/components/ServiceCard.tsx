import React from 'react';
import { Link } from 'react-router-dom';
import type { DentalService } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  ShieldCheck,
  Sparkles,
  Layers,
  Compass,
  Activity,
  Wrench,
  HeartPulse,
  Smile,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
} from 'lucide-react';

interface ServiceCardProps {
  service: DentalService;
  showDraftBadge?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  showDraftBadge = true,
}) => {
  const { language, isRtl } = useLanguage();

  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#147D83]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#147D83]" />,
    Layers: <Layers className="w-6 h-6 text-[#147D83]" />,
    Compass: <Compass className="w-6 h-6 text-[#147D83]" />,
    Activity: <Activity className="w-6 h-6 text-[#147D83]" />,
    Wrench: <Wrench className="w-6 h-6 text-[#147D83]" />,
    HeartPulse: <HeartPulse className="w-6 h-6 text-[#147D83]" />,
    Smile: <Smile className="w-6 h-6 text-[#147D83]" />,
  };

  const title = service.title[language];
  const category = service.category[language];
  const description = service.shortDescription[language];

  return (
    <div className="group relative flex flex-col justify-between bg-white rounded-xl border border-[#102A43]/10 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#147D83]/40 transition-all duration-200">
      <div>
        {/* Header row: Icon + Category + Draft Badge */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="w-12 h-12 rounded-lg bg-[#EAF4F3] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
            {iconMap[service.iconName] || <ShieldCheck className="w-6 h-6 text-[#147D83]" />}
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#147D83] bg-[#EAF4F3] px-2.5 py-0.5 rounded-full">
              {category}
            </span>
            {showDraftBadge && service.isDraftPlaceholder && (
              <span className="inline-flex items-center gap-1 text-[10px] text-[#667085] bg-gray-100 px-2 py-0.5 rounded-full" title="Subject to clinic confirmation">
                <AlertCircle className="w-2.5 h-2.5 text-amber-600" />
                {isRtl ? 'مقترح مسودة' : 'Draft Placeholder'}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-[#102A43] group-hover:text-[#147D83] transition-colors leading-snug">
          <Link to={`/services/${service.slug}`} className="focus:outline-none">
            {title}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="mt-3 text-sm text-[#667085] leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Footer action link */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#147D83] group-hover:text-[#0E6166] transition-colors"
        >
          <span>{isRtl ? 'تفاصيل الإجراء والمؤشرات' : 'Procedure Details & FAQs'}</span>
          {isRtl ? (
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          ) : (
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          )}
        </Link>
      </div>
    </div>
  );
};
