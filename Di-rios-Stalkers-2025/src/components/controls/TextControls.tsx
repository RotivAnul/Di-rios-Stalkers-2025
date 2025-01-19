import React from 'react';
import { TextControlsProps } from '../types/diary';
import { ANIMATIONS } from '../constants/fonts';

export default function TextControls({ textStyle, onChange }: TextControlsProps) {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <input
        type="number"
        min="12"
        max="32"
        value={textStyle.fontSize}
        onChange={(e) => onChange({ fontSize: Number(e.target.value) })}
        className="w-16 px-2 py-1 rounded border"
        title="Tamanho da Fonte"
      />
      
      <select
        value={textStyle.fontWeight}
        onChange={(e) => onChange({ fontWeight: e.target.value })}
        className="px-2 py-1 rounded border"
        title="Peso da Fonte"
      >
        <option value="normal">Normal</option>
        <option value="bold">Negrito</option>
      </select>

      <select
        value={textStyle.fontStyle}
        onChange={(e) => onChange({ fontStyle: e.target.value })}
        className="px-2 py-1 rounded border"
        title="Estilo da Fonte"
      >
        <option value="normal">Normal</option>
        <option value="italic">Itálico</option>
      </select>

      <input
        type="number"
        min="1"
        max="5"
        value={textStyle.borderWidth}
        onChange={(e) => onChange({ borderWidth: Number(e.target.value) })}
        className="w-16 px-2 py-1 rounded border"
        title="Espessura da Borda"
      />

      <select
        value={textStyle.animation}
        onChange={(e) => onChange({ animation: e.target.value })}
        className="px-2 py-1 rounded border"
        title="Animação"
      >
        {ANIMATIONS.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>

      <input
        type="range"
        min="-20"
        max="20"
        value={parseInt(textStyle.transform.replace('rotate(', '').replace('deg)', ''))}
        onChange={(e) => onChange({ transform: `rotate(${e.target.value}deg)` })}
        className="w-24"
        title="Curvatura do Texto"
      />
    </div>
  );
}