import React, { useRef, useState } from 'react';
import { ImagePlus } from 'lucide-react';
import { CoverStyle } from '../../types/diary';

interface ImageUploaderProps {
  onSelect: (cover: CoverStyle) => void;
}

export default function ImageUploader({ onSelect }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>('');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('A imagem deve ter no máximo 5MB');
      return;
    }

    const img = new Image();
    img.onload = () => {
      // Check dimensions (minimum 600x800)
      if (img.width < 600 || img.height < 800) {
        setError('A imagem deve ter no mínimo 600x800 pixels');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        onSelect({
          id: 'custom-' + Date.now(),
          title: 'Personalizada',
          texture: reader.result as string,
          color: 'from-transparent to-transparent'
        });
      };
      reader.readAsDataURL(file);
    };

    img.src = URL.createObjectURL(file);
  };

  return (
    <div className="space-y-6">
      <div className="border-2 border-dashed border-amber-200 rounded-lg p-8 text-center">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex flex-col items-center gap-4 w-full"
        >
          <ImagePlus className="w-12 h-12 text-amber-400" />
          <div>
            <p className="text-lg font-medium text-amber-900 mb-2">
              Clique para escolher uma imagem
            </p>
            <p className="text-sm text-amber-700">
              Recomendado: 600x800 pixels (proporção 3:4)<br />
              Tamanho máximo: 5MB
            </p>
          </div>
        </button>
      </div>
      
      {error && (
        <p className="text-red-500 text-sm text-center">{error}</p>
      )}
    </div>
  );
}