'use client';

import {useTranslations} from 'next-intl';

const icons = {
  free: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  ),
  platforms: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  fast: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
};

export default function Features() {
  const t = useTranslations('features');

  const cards = [
    {key: 'free' as const, icon: icons.free},
    {key: 'platforms' as const, icon: icons.platforms},
    {key: 'fast' as const, icon: icons.fast},
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display text-3xl sm:text-4xl text-navy-950 tracking-tight mb-14">
          {t('sectionTitle')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.key}
              className={`group relative bg-white border border-navy-200/60 rounded-lg p-8 hover:border-navy-400 hover:shadow-lg hover:shadow-navy-200/40 transition-all duration-300 animate-fade-up animation-delay-${(i + 1) * 100}`}
            >
              <div className="w-12 h-12 bg-navy-100 rounded-md flex items-center justify-center text-navy-700 mb-6 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-300">
                {card.icon}
              </div>
              <h3 className="font-display text-xl text-navy-950 mb-3">
                {t(`${card.key}.title`)}
              </h3>
              <p className="text-sm text-navy-600 leading-relaxed">
                {t(`${card.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
