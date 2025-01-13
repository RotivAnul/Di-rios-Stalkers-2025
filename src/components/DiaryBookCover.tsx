import React from 'react';
import { Book } from 'lucide-react';
import { DiaryBookCoverProps } from '../types/diary';

export default function DiaryBookCover({ 
  title, 
  onTitleChange,
  fontFamily,
  coverImage,
}: DiaryBookCoverProps) {
  const defaultCoverStyle = {
    backgroundColor: '#000000',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div 
      className="w-56 h-full rounded-l-lg p-6 flex flex-col items-center justify-center shadow-lg relative overflow-hidden"
      style={coverImage ? { backgroundImage: `url(${coverImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : defaultCoverStyle}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      <div className="relative z-10 flex flex-col items-center">
        <Book className="w-16 h-16 text-amber-100 mb-4" />
        <input
          type="text"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          className="bg-transparent text-amber-100 text-center text-xl font-bold border-none outline-none w-full"
          style={{ fontFamily }}
          placeholder="Meu Diário"
        />
      </div>
    </div>
  );
}