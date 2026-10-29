'use client';

import {useTranslations} from 'next-intl';

export default function PrivacyContent() {
  const t = useTranslations('privacy');

  const simpleSections = [
    {title: 'introTitle', text: 'introText'},
    {title: 'dataTitle', text: 'dataText'},
    {title: 'logsTitle', text: 'logsText'},
    {title: 'rightsTitle', text: 'rightsText'},
  ];

  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-display text-4xl sm:text-5xl text-navy-950 tracking-tight mb-12">
          {t('title')}
        </h1>

        <div className="space-y-10 text-navy-700 leading-relaxed">
          {simpleSections.slice(0, 1).map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl text-navy-950 mb-3">{t(s.title)}</h2>
              <p>{t(s.text)}</p>
            </div>
          ))}

          <div>
            <h2 className="font-display text-xl text-navy-950 mb-3">{t('responsibleTitle')}</h2>
            <p className="mb-4">{t('responsibleText')}</p>
            <p className="font-medium text-navy-900">{t('responsibleCompany')}</p>
            <p className="whitespace-pre-line">{t('responsibleAddress')}</p>
            <p className="mt-2">{t('responsibleEmail')}</p>
          </div>

          {simpleSections.slice(1).map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl text-navy-950 mb-3">{t(s.title)}</h2>
              <p>{t(s.text)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
