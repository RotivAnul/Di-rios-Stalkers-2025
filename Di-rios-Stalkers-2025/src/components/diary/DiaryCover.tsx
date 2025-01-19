import React from 'react';
import { motion } from 'framer-motion';
import { Book, ImagePlus } from 'lucide-react';
import { DiaryState } from '../../types/diary';
import CoverCustomizer from '../cover/CoverCustomizer';
import ViewCounter from '../counter/ViewCounter';

interface DiaryCoverProps {
  state: DiaryState;
  onOpen: () => void;
  setState: React.Dispatch<React.SetStateAction<DiaryState>>;
}

export default function DiaryCover({ state, onOpen, setState }: DiaryCoverProps) {
  const [showCustomizer, setShowCustomizer] = React.useState(false);

  const handleCoverChange = (newCover: CoverStyle) => {
    setState(prev => ({
      ...prev,
      coverStyle: newCover
    }));
    setShowCustomizer(false);
  };

  return (
    <>
      <motion.div
        initial={{ rotateY: -90 }}
        animate={{ rotateY: 0 }}
        exit={{ rotateY: 90 }}
        transition={{ duration: 0.5 }}
        className="w-[400px] h-[600px] rounded-lg shadow-2xl relative cursor-pointer transform-gpu"
        onClick={onOpen}
      >
        {/* Cover Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${state.coverStyle.color} rounded-lg`} />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50 rounded-lg"
          style={{ backgroundImage: `url(${state.coverStyle.texture})` }}
        />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-amber-100">
          <Book className="w-24 h-24 mb-8" />
          <h1 className="text-4xl font-serif mb-4">{state.coverStyle.title}</h1>
          <p className="text-sm opacity-75">Clique para abrir</p>
        </div>

        {/* View Counter */}
        <ViewCounter />

        {/* Customize Cover Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowCustomizer(true);
          }}
          className="absolute bottom-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          title="Personalizar Capa"
        >
          <ImagePlus className="w-5 h-5 text-white" />
        </button>

        {/* Decorative Elements */}
        <div className="absolute inset-x-0 top-0 h-2 bg-black/20 rounded-t-lg" />
        <div className="absolute inset-x-0 bottom-0 h-2 bg-black/20 rounded-b-lg" />
        <div className="absolute inset-y-0 left-0 w-8 bg-black/20" />
        <div className="absolute inset-y-0 right-0 w-2 bg-black/30" />
      </motion.div>

      {showCustomizer && (
        <CoverCustomizer
          onClose={() => setShowCustomizer(false)}
          onCoverSelect={handleCoverChange}
          currentCover={state.coverStyle}
        />
      )}
    </>
  );
}