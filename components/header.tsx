'use client';

import {Link} from '@/i18n/navigation';
import LanguageSwitcher from './language-switcher';

export default function Header() {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-50/80 backdrop-blur-md border-b border-navy-200/50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-xl text-navy-900 tracking-tight">
          Digital Justice Center
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
