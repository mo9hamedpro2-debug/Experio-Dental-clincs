import { createContext } from 'react';
import type { Language } from '../types';
import { translations } from '../data/translations';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof translations.en;
  isRtl: boolean;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export { useLanguage } from '../hooks/useLanguage';

