'use client';

import {useTranslations} from 'next-intl';

export default function ImprintContent() {
  const t = useTranslations('imprint');

  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-display text-4xl sm:text-5xl text-navy-950 tracking-tight mb-12">
          {t('title')}
        </h1>

        <div className="space-y-8 text-navy-700 leading-relaxed">
          <div>
            <p className="font-medium text-navy-900">{t('company')}</p>
            <p className="whitespace-pre-line">{t('address')}</p>
            <p className="mt-2">{t('email')}</p>
          </div>

          <div>
            <p className="text-sm text-navy-500">{t('managementLabel')}</p>
            <p>{t('management')}</p>
          </div>

          <div>
            <p className="text-sm text-navy-500">{t('contentLabel')}</p>
            <p>{t('content')}</p>
          </div>

          <div>
            <p className="text-sm text-navy-500">{t('registerLabel')}</p>
            <p>{t('register')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
