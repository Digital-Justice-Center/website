'use client';

import {useTranslations} from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-20 sm:py-28 bg-navy-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-10">
            {t('sectionTitle')}
          </h2>

          <div className="space-y-6 text-navy-300 leading-relaxed">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
          </div>

          <div className="mt-10 pt-8 border-t border-navy-700">
            <p className="text-sm text-navy-400 font-mono">
              {t('legal')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
