import React from 'react';
import { DiaryPageProps } from '../types/diary';

export default function DiaryPage({
  content,
  onContentChange,
  textColor,
  pageColor,
  fontFamily,
  textStyle,
  isAnimating
}: DiaryPageProps) {
  return (
    <div className="relative w-[500px]">
      {/* Back of the previous page (same as cover color) */}
      <div 
        className="absolute inset-0 bg-black rounded-r-lg"
        style={{ 
          transform: isAnimating ? 'rotateY(180deg)' : 'rotateY(0)',
          backfaceVisibility: 'hidden',
          transition: 'transform 0.5s ease-in-out'
        }}
      />

      {/* Current page */}
      <div 
        className="relative w-full rounded-r-lg shadow-lg backdrop-blur-sm"
        style={{ 
          backgroundColor: pageColor,
          transform: isAnimating ? 'rotateY(-180deg)' : 'rotateY(0)',
          backfaceVisibility: 'hidden',
          transition: 'transform 0.5s ease-in-out'
        }}
      >
        <div className="p-6 overflow-y-auto">
          <div className="relative">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="w-full h-8 border-b"
                style={{ 
                  borderColor: `${textColor}33`,
                  borderWidth: `${textStyle.borderWidth}px`
                }}
              />
            ))}
            <textarea
              value={content}
              onChange={(e) => onContentChange(e.target.value)}
              className="absolute inset-0 bg-transparent resize-none outline-none w-full"
              style={{ 
                fontFamily,
                color: textColor,
                fontSize: `${textStyle.fontSize}px`,
                fontWeight: textStyle.fontWeight,
                fontStyle: textStyle.fontStyle,
                lineHeight: '2rem',
                padding: '0.25rem 0',
                textShadow: textStyle.textShadow,
                animation: textStyle.animation,
                transform: textStyle.transform
              }}
              placeholder="Querido diário..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}