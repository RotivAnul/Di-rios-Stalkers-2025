import { useState, useEffect } from 'react';

const VIEW_COUNT_KEY = 'diary_view_count';
const OWNER_KEY = 'diary_owner';

export function useViewCount() {
  const [viewCount, setViewCount] = useState(0);
  const [isOwner] = useState(() => {
    const stored = localStorage.getItem(OWNER_KEY);
    if (!stored) {
      localStorage.setItem(OWNER_KEY, 'true');
      return true;
    }
    return stored === 'true';
  });

  useEffect(() => {
    // Get current count
    const currentCount = parseInt(localStorage.getItem(VIEW_COUNT_KEY) || '0');
    
    // Only increment if not owner
    if (!isOwner) {
      const newCount = currentCount + 1;
      localStorage.setItem(VIEW_COUNT_KEY, newCount.toString());
      setViewCount(newCount);
    } else {
      setViewCount(currentCount);
    }
  }, [isOwner]);

  return { viewCount, isOwner };
}