'use client';

import {useLocale, useTranslations} from 'next-intl';
import {useRouter, usePathname} from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const next = locale === 'de' ? 'en' : 'de';
    router.replace(pathname, {locale: next});
  };

  return (
    <button
      onClick={switchLocale}
      className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors border border-navy-300 rounded px-2.5 py-1 hover:border-navy-500"
    >
      {t('switchLang')}
    </button>
  );
}
