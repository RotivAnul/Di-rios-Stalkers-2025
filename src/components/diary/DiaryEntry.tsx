import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { DiaryEntry as DiaryEntryType } from '../../types/diary';

interface DiaryEntryProps {
  entry?: DiaryEntryType;
  onContentChange: (content: string, id: string) => void;
  maxLines: number;
}

export default function DiaryEntry({ entry, onContentChange, maxLines }: DiaryEntryProps) {
  if (!entry) {
    return (
      <div className="h-full flex flex-col">
        <div className="text-amber-900/50 font-serif italic text-lg">
          Página em branco
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="mb-4">
        <h2 className="text-lg font-serif text-amber-900">
          {format(entry.date, "EEEE, d 'de' MMMM 'de' yyyy", { locale: ptBR })}
        </h2>
        {entry.lastModified && (
          <p className="text-xs text-amber-700/70">
            Última modificação: {format(entry.lastModified, "HH:mm")}
          </p>
        )}
      </div>
      <div className="flex-1 relative">
        {Array.from({ length: maxLines }).map((_, i) => (
          <div
            key={i}
            className="w-full h-8 border-b border-amber-200"
          />
        ))}
        <textarea
          value={entry.content}
          onChange={(e) => onContentChange(e.target.value, entry.id)}
          className="absolute inset-0 w-full h-full resize-none bg-transparent focus:outline-none font-serif leading-8 p-0"
          style={{ lineHeight: '2rem' }}
          placeholder="O que você quer registrar?"
        />
      </div>
    </div>
  );
}