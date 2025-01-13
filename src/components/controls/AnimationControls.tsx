import React from 'react';
import { Play } from 'lucide-react';
import { ANIMATIONS } from '../../constants/fonts';
import { TextStyle } from '../../types/diary';

interface AnimationControlsProps {
  textStyle: TextStyle;
  onChange: (style: Partial<TextStyle>) => void;
}

export default function AnimationControls({ textStyle, onChange }: AnimationControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <Play className="w-5 h-5" />
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
    </div>
  );
}