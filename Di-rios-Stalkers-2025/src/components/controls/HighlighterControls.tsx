import React from 'react';
import { Highlighter } from 'lucide-react';

const HIGHLIGHT_COLORS = [
  { value: 'transparent', label: 'Sem marca' },
  { value: 'rgba(255, 255, 0, 0.3)', label: 'Amarelo' },
  { value: 'rgba(0, 255, 0, 0.3)', label: 'Verde' },
  { value: 'rgba(255, 182, 193, 0.3)', label: 'Rosa' },
  { value: 'rgba(0, 255, 255, 0.3)', label: 'Azul' },
  { value: 'rgba(255, 165, 0, 0.3)', label: 'Laranja' }
];

interface HighlighterControlsProps {
  textStyle: TextStyle;
  onChange: (style: Partial<TextStyle>) => void;
}

export default function HighlighterControls({ textStyle, onChange }: HighlighterControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <Highlighter className="w-5 h-5" />
      <select
        value={textStyle.backgroundColor || 'transparent'}
        onChange={(e) => onChange({ backgroundColor: e.target.value })}
        className="px-2 py-1 rounded border"
        title="Marca Texto"
      >
        {HIGHLIGHT_COLORS.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
    </div>
  );
}