import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { DiaryState } from '../../types/diary';
import DiaryEntry from './DiaryEntry';
import NewEntryButton from './NewEntryButton';

interface DiaryPagesProps {
  state: DiaryState;
  setState: React.Dispatch<React.SetStateAction<DiaryState>>;
  onClose: () => void;
}

const MAX_LINES = 20; // Maximum number of lines per page
const CHARS_PER_LINE = 50; // Approximate characters per line

export default function DiaryPages({ state, setState, onClose }: DiaryPagesProps) {
  const updateEntry = (content: string, id: string) => {
    // Calculate number of lines based on content length and wrapping
    const numberOfLines = Math.ceil(content.length / CHARS_PER_LINE);
    
    // Only update if within line limit or if reducing content
    if (numberOfLines <= MAX_LINES || content.length < state.entries[state.currentPage]?.content.length) {
      setState(prev => ({
        ...prev,
        entries: prev.entries.map(entry =>
          entry.id === id
            ? { ...entry, content, lastModified: new Date() }
            : entry
        )
      }));
    }
  };

  const currentEntry = state.entries[state.currentPage];

  return (
    <motion.div
      initial={{ rotateY: -90 }}
      animate={{ rotateY: 0 }}
      exit={{ rotateY: 90 }}
      transition={{ duration: 0.5 }}
      className="w-[600px] h-[600px] bg-white rounded-lg shadow-2xl flex relative"
    >
      {/* Single Page */}
      <div className="flex-1 p-8">
        <DiaryEntry
          entry={currentEntry}
          onContentChange={updateEntry}
          maxLines={MAX_LINES}
        />
      </div>

      {/* Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={() => setState(prev => ({ ...prev, currentPage: prev.currentPage - 1 }))}
          disabled={state.currentPage === 0}
          className="p-2 rounded-full hover:bg-amber-100 disabled:opacity-50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="text-sm text-amber-900">
          {state.currentPage + 1} / {state.entries.length}
        </span>
        <button
          onClick={() => setState(prev => ({ ...prev, currentPage: prev.currentPage + 1 }))}
          disabled={state.currentPage >= state.entries.length - 1}
          className="p-2 rounded-full hover:bg-amber-100 disabled:opacity-50"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* New Entry Button */}
      <NewEntryButton state={state} setState={setState} />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-amber-100"
      >
        <X className="w-6 h-6 text-amber-900" />
      </button>
    </motion.div>
  );
}