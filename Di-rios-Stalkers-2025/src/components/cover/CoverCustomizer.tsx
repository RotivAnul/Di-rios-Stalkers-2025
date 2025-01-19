import React, { useState } from 'react';
import { ImagePlus, X } from 'lucide-react';
import PresetCovers from './PresetCovers';
import ImageUploader from './ImageUploader';
import { CoverStyle } from '../../types/diary';

interface CoverCustomizerProps {
  onClose: () => void;
  onCoverSelect: (cover: CoverStyle) => void;
  currentCover: CoverStyle;
}

export default function CoverCustomizer({ onClose, onCoverSelect, currentCover }: CoverCustomizerProps) {
  const [activeTab, setActiveTab] = useState<'presets' | 'upload'>('presets');

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[800px] max-h-[600px] relative">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-serif text-amber-900">Personalizar Capa</h2>
            <button onClick={onClose} className="p-2 hover:bg-amber-100 rounded-full">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setActiveTab('presets')}
              className={`px-4 py-2 rounded ${
                activeTab === 'presets' ? 'bg-amber-100 text-amber-900' : 'text-gray-600'
              }`}
            >
              Capas Predefinidas
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className={`px-4 py-2 rounded ${
                activeTab === 'upload' ? 'bg-amber-100 text-amber-900' : 'text-gray-600'
              }`}
            >
              Enviar Imagem
            </button>
          </div>

          {activeTab === 'presets' ? (
            <PresetCovers onSelect={onCoverSelect} currentCover={currentCover} />
          ) : (
            <ImageUploader onSelect={onCoverSelect} />
          )}
        </div>
      </div>
    </div>
  );
}