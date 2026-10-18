import React from 'react';
import type { DentistProfile } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './Button';
import { UserCheck, ShieldAlert, Award, Calendar } from 'lucide-react';

interface DentistCardProps {
  dentist: DentistProfile;
}

export const DentistCard: React.FC<DentistCardProps> = ({ dentist }) => {
  const { language, isRtl } = useLanguage();

  const name = dentist.name[language];
  const specialty = dentist.specialty[language];
  const bio = dentist.bio[language];
  const qualifications = dentist.qualifications[language];

  return (
    <div className="relative flex flex-col justify-between bg-white rounded-xl border border-[#102A43]/10 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
      {/* Verification status header banner */}
      <div className="bg-[#EAF4F3] border-b border-[#147D83]/15 px-5 py-2.5 flex items-center justify-between text-xs">
        <span className="font-semibold text-[#147D83] flex items-center gap-1.5">
          <UserCheck className="w-3.5 h-3.5" />
          {specialty}
        </span>
        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
          <ShieldAlert className="w-3 h-3" />
          {isRtl ? 'بانتظار الاعتماد الرسمي' : 'Pending Verification'}
        </span>
      </div>

      <div className="p-6 sm:p-7 space-y-4">
        {/* Placeholder Avatar / Photo */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#102A43]/5 border-2 border-[#147D83]/20 flex items-center justify-center shrink-0 text-[#102A43]/40">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#102A43]">{name}</h3>
            <p className="text-xs text-[#667085] mt-0.5">
              {isRtl ? 'عيادات إكسبيريو لطب الأسنان' : 'Experio Dental Clinics'}
            </p>
          </div>
        </div>

        {/* Bio / Notice */}
        <p className="text-sm text-[#667085] leading-relaxed italic bg-gray-50 p-3 rounded-lg border border-gray-100">
          "{bio}"
        </p>

        {/* Qualifications checklist */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#102A43] flex items-center gap-1.5 mb-2">
            <Award className="w-3.5 h-3.5 text-[#147D83]" />
            <span>{isRtl ? 'الشهادات والمؤهلات المعتمدة' : 'Credentials & Documentation'}</span>
          </h4>
          <ul className="space-y-1.5 text-xs text-[#667085]">
            {qualifications.map((q, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#147D83] mt-1.5 shrink-0" />
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 sm:p-6 bg-gray-50/50 border-t border-gray-100">
        <Button
          to="/booking"
          variant="outline"
          size="sm"
          className="w-full justify-center"
          icon={<Calendar className="w-3.5 h-3.5" />}
        >
          {isRtl ? 'طلب استشارة مع هذا التخصص' : 'Request Consultation'}
        </Button>
      </div>
    </div>
  );
};
