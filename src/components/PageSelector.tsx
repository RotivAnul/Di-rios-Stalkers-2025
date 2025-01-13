import React from 'react';

interface PageSelectorProps {
  currentPage: number;
  onPageSelect: (page: number) => void;
}

export default function PageSelector({ currentPage, onPageSelect }: PageSelectorProps) {
  return (
    <div className="flex gap-2 justify-center mt-4 items-center">
      {Array.from({ length: 12 }, (_, i) => (
        <button
          key={i}
          onClick={() => onPageSelect(i)}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            currentPage === i
              ? 'bg-amber-700 text-white'
              : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}