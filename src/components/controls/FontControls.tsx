import React from 'react';
import { Type } from 'lucide-react';
import { FONT_OPTIONS } from '../../constants/fonts';

interface FontControlsProps {
  fontFamily: string;
  onFontFamilyChange: (font: string) => void;
}

export default function FontControls({ fontFamily, onFontFamilyChange }: FontControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <Type className="w-5 h-5" />
      <select
        value={fontFamily}
        onChange={(e) => onFontFamilyChange(e.target.value)}
        className="px-2 py-1 rounded border"
        title="Fonte"
      >
        {FONT_OPTIONS.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
    </div>
  );
}