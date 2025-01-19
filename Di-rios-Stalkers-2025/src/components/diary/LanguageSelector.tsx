import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (lang: 'pt-BR' | 'en-US') => void;
}

export default function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <Globe className="w-5 h-5" />
      <select
        value={currentLanguage}
        onChange={(e) => onLanguageChange(e.target.value as 'pt-BR' | 'en-US')}
        className="px-2 py-1 rounded border"
      >
        <option value="pt-BR">Português</option>
        <option value="en-US">English</option>
      </select>
    </div>
  );
}