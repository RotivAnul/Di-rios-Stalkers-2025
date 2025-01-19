import React from 'react';
import { Plus } from 'lucide-react';
import { DiaryState } from '../../types/diary';

interface NewEntryButtonProps {
  state: DiaryState;
  setState: React.Dispatch<React.SetStateAction<DiaryState>>;
}

export default function NewEntryButton({ state, setState }: NewEntryButtonProps) {
  const handleNewEntry = () => {
    const newEntry = {
      id: Date.now().toString(),
      date: new Date(),
      content: ''
    };

    setState(prev => ({
      ...prev,
      entries: [...prev.entries, newEntry],
      currentPage: prev.entries.length
    }));
  };

  return (
    <button
      onClick={handleNewEntry}
      className="absolute -right-6 top-1/2 -translate-y-1/2 bg-amber-700 text-white p-3 rounded-full shadow-lg hover:bg-amber-800 transition-colors"
      title="Nova página"
    >
      <Plus className="w-6 h-6" />
    </button>
  );
}