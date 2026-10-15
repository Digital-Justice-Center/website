'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="py-12 border-t border-navy-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          {/* Left side */}
          <div>
            <span className="font-display text-lg text-navy-900 block mb-4">
              Digital Justice Center
            </span>
            <p className="text-sm text-navy-500 mb-1">
              Digital Justice Center DJC GmbH
            </p>
            <p className="text-sm text-navy-500">
              {t('address')}
            </p>
          </div>

          {/* Right side */}
          <div className="flex flex-col sm:items-end gap-3">
            <div className="flex gap-6">
              <Link href="/impressum" className="text-sm text-navy-500 hover:text-navy-900 transition-colors">
                {t('imprint')}
              </Link>
              <Link href="/datenschutz" className="text-sm text-navy-500 hover:text-navy-900 transition-colors">
                {t('privacy')}
              </Link>
            </div>
            <p className="text-sm text-navy-400 italic font-display">
              {t('tagline')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
