import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { DiaryState } from '../../types/diary';
import DiaryCover from './DiaryCover';
import DiaryPages from './DiaryPages';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function DiaryBook() {
  const [state, setState] = useLocalStorage<DiaryState>('diary_state', {
    isOpen: false,
    entries: [],
    currentPage: 0,
    coverStyle: {
      id: 'default',
      title: 'Meu Diário',
      texture: 'https://www.transparenttextures.com/patterns/leather.png',
      color: 'from-amber-800 to-amber-950'
    }
  });

  const handleToggleDiary = () => {
    setState(prev => ({ ...prev, isOpen: !prev.isOpen }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center p-8">
      <AnimatePresence mode="wait">
        {!state.isOpen ? (
          <DiaryCover 
            key="cover"
            state={state}
            setState={setState}
            onOpen={handleToggleDiary}
          />
        ) : (
          <DiaryPages
            key="pages"
            state={state}
            setState={setState}
            onClose={handleToggleDiary}
          />
        )}
      </AnimatePresence>
    </div>
  );
}