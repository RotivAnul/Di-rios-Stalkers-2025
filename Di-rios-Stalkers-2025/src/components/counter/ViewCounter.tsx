import React from 'react';
import { Eye } from 'lucide-react';
import { useViewCount } from '../../hooks/useViewCount';

export default function ViewCounter() {
  const { viewCount } = useViewCount();

  return (
    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-amber-100">
      <Eye className="w-4 h-4 opacity-85" />
      <span className="text-sm font-medium">{viewCount}</span>
    </div>
  );
}