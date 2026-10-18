import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <>
      <SeoHead
        title={isRtl ? 'الصفحة غير موجودة' : 'Page Not Found'}
      />

      <section className="py-24 sm:py-32 bg-[#F8F7F3] text-center px-4">
        <div className="max-w-md mx-auto space-y-6">
          <span className="text-6xl sm:text-7xl font-serif font-bold text-[#147D83] block">
            404
          </span>
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#102A43]">
            {t.notFound.title}
          </h1>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
            {t.notFound.subtitle}
          </p>
          <div className="pt-4 flex justify-center">
            <Button
              to="/"
              variant="teal"
              size="lg"
              icon={<Home className="w-4 h-4" />}
            >
              {t.notFound.button}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
