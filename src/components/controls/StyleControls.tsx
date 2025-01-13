import React from 'react';
import { Bold, Italic, Type } from 'lucide-react';
import { TextStyle } from '../../types/diary';

interface StyleControlsProps {
  textStyle: TextStyle;
  onChange: (style: Partial<TextStyle>) => void;
}

export default function StyleControls({ textStyle, onChange }: StyleControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <Type className="w-5 h-5" />
      <input
        type="number"
        min="12"
        max="32"
        value={textStyle.fontSize}
        onChange={(e) => onChange({ fontSize: Number(e.target.value) })}
        className="w-16 px-2 py-1 rounded border"
        title="Tamanho"
      />
      <button
        onClick={() => onChange({ fontWeight: textStyle.fontWeight === 'bold' ? 'normal' : 'bold' })}
        className={`p-1 rounded ${textStyle.fontWeight === 'bold' ? 'bg-amber-100' : ''}`}
        title="Negrito"
      >
        <Bold className="w-4 h-4" />
      </button>
      <button
        onClick={() => onChange({ fontStyle: textStyle.fontStyle === 'italic' ? 'normal' : 'italic' })}
        className={`p-1 rounded ${textStyle.fontStyle === 'italic' ? 'bg-amber-100' : ''}`}
        title="Itálico"
      >
        <Italic className="w-4 h-4" />
      </button>
    </div>
  );
}