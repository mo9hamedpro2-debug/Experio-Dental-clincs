import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Info, X, ShieldAlert } from 'lucide-react';

export const ConceptNotice: React.FC = () => {
  const { t } = useLanguage();
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      role="region"
      aria-label="Proposal Notice"
      className="bg-[#102A43] text-white/90 border-b border-white/10 text-xs sm:text-sm py-2 px-4 transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <span className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#147D83] text-white">
            <Info className="w-3.5 h-3.5" />
          </span>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-semibold text-white uppercase tracking-wider text-[11px] bg-white/10 px-2 py-0.5 rounded">
              {t.proposalNotice.tag}
            </span>
            <span className="text-white/80 line-clamp-1 sm:line-clamp-none">
              {t.proposalNotice.message}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden md:inline-flex items-center gap-1.5 text-xs text-[#EAF4F3] bg-[#147D83]/40 px-2.5 py-0.5 rounded-full border border-[#147D83]/50">
            <ShieldAlert className="w-3 h-3 text-[#EAF4F3]" />
            {t.proposalNotice.verifiedDataBadge}
          </span>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss notice"
            className="text-white/60 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
