import React from 'react';
import DiaryBook from './DiaryBook';

export default function DiaryContainer() {
  return (
    <div className="diary-container relative">
      {/* Background layer that adapts to parent */}
      <div className="absolute inset-0 bg-transparent backdrop-blur-sm" />
      
      {/* Content layer */}
      <div className="relative z-10">
        <DiaryBook />
      </div>
    </div>
  );
}