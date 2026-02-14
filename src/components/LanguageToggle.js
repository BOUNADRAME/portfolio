'use client';

import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 p-1 rounded-lg bg-dark-900/50 border border-white/10">
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
          language === 'fr'
            ? 'bg-primary-600 text-white'
            : 'text-dark-400 hover:text-white'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-primary-600 text-white'
            : 'text-dark-400 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
}
