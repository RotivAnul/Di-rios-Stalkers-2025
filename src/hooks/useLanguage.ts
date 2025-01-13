import { useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

type SupportedLanguages = 'pt-BR' | 'en-US';

export function useLanguage() {
  const [language, setLanguage] = useState<SupportedLanguages>('pt-BR');

  useEffect(() => {
    const userLanguage = navigator.language;
    if (userLanguage.startsWith('en')) {
      setLanguage('en-US');
    }
  }, []);

  const t = (key: keyof typeof translations['pt-BR']) => {
    return translations[language][key];
  };

  return { language, setLanguage, t };
}