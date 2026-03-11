'use client';

import {useTranslations} from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 geo-pattern opacity-40" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-50 via-transparent to-navy-50" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Coming soon badge */}
        <div className="animate-fade-up mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-navy-900 text-white text-sm font-medium rounded-full">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            {t('badge')}
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up animation-delay-100 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-navy-950 leading-[1.1] tracking-tight max-w-4xl">
          {t('title')}
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up animation-delay-200 mt-8 text-lg sm:text-xl text-navy-600 leading-relaxed max-w-2xl">
          {t('subtitle')}
        </p>

        {/* Decorative line */}
        <div className="animate-fade-up animation-delay-300 mt-12 w-16 h-px bg-navy-300" />
      </div>
    </section>
  );
}
