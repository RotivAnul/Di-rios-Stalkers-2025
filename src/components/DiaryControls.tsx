import React from 'react';
import { Palette, Upload } from 'lucide-react';
import { DiaryControlsProps } from '../types/diary';
import FontControls from './controls/FontControls';
import StyleControls from './controls/StyleControls';
import AnimationControls from './controls/AnimationControls';

export default function DiaryControls({
  textColor,
  pageColor,
  fontFamily,
  textStyle,
  onTextColorChange,
  onPageColorChange,
  onFontFamilyChange,
  onTextStyleChange,
  onCoverImageChange,
}: DiaryControlsProps) {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onCoverImageChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-wrap gap-4 mb-4 items-center bg-white p-3 rounded-lg shadow-sm">
      <div className="flex items-center gap-2">
        <Palette className="w-5 h-5" />
        <input
          type="color"
          value={pageColor}
          onChange={(e) => onPageColorChange(e.target.value)}
          className="w-8 h-8"
          title="Cor da Página"
        />
        <input
          type="color"
          value={textColor}
          onChange={(e) => onTextColorChange(e.target.value)}
          className="w-8 h-8"
          title="Cor do Texto"
        />
      </div>
      
      <div className="h-6 w-px bg-gray-300" />
      <FontControls fontFamily={fontFamily} onFontFamilyChange={onFontFamilyChange} />
      
      <div className="h-6 w-px bg-gray-300" />
      <StyleControls textStyle={textStyle} onChange={onTextStyleChange} />
      
      <div className="h-6 w-px bg-gray-300" />
      <AnimationControls textStyle={textStyle} onChange={onTextStyleChange} />
      
      <div className="h-6 w-px bg-gray-300" />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="flex items-center gap-2 px-3 py-1 bg-amber-700 text-white rounded hover:bg-amber-800 transition-colors"
      >
        <Upload className="w-4 h-4" />
        Mudar Capa
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
}