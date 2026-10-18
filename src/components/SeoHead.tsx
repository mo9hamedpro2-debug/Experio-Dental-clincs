import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SeoHeadProps {
  title: string;
  description?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({ title, description }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const siteName =
      language === 'ar' ? 'عيادات إكسبيريو لطب الأسنان' : 'Experio Dental Clinics';
    document.title = `${title} | ${siteName} — Alexandria`;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }
  }, [title, description, language]);

  return null;
};
