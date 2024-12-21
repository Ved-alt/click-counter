import { useState, useCallback } from 'react';

export function useClickCounter() {
  const [clicks, setClicks] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleClick = useCallback(() => {
    setClicks(prev => prev + 1);
  }, []);

  const reset = useCallback(() => {
    setBestScore(prev => Math.max(prev, clicks));
    setClicks(0);
  }, [clicks]);

  return {
    clicks,
    bestScore,
    handleClick,
    reset
  };
}