import React from 'react';
import { CoverStyle } from '../../types/diary';

interface PresetCoversProps {
  onSelect: (cover: CoverStyle) => void;
  currentCover: CoverStyle;
}

const presetCovers = [
  {
    id: 'leather',
    title: 'Couro Clássico',
    texture: 'https://www.transparenttextures.com/patterns/leather.png',
    color: 'from-amber-800 to-amber-950',
    preview: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=200'
  },
  {
    id: 'vintage',
    title: 'Vintage',
    texture: 'https://www.transparenttextures.com/patterns/old-map.png',
    color: 'from-amber-700 to-amber-900',
    preview: 'https://images.unsplash.com/photo-1595436301907-0b361827c9b6?auto=format&fit=crop&w=200'
  },
  {
    id: 'floral',
    title: 'Floral',
    texture: 'https://www.transparenttextures.com/patterns/flowers.png',
    color: 'from-rose-400 to-rose-600',
    preview: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=200'
  }
];

export default function PresetCovers({ onSelect, currentCover }: PresetCoversProps) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {presetCovers.map((cover) => (
        <button
          key={cover.id}
          onClick={() => onSelect(cover)}
          className={`relative aspect-[3/4] rounded-lg overflow-hidden group ${
            currentCover.id === cover.id ? 'ring-4 ring-amber-500' : ''
          }`}
        >
          <img
            src={cover.preview}
            alt={cover.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white font-medium">{cover.title}</span>
          </div>
        </button>
      ))}
    </div>
  );
}