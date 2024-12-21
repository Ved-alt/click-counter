import { useEffect } from 'react';

export function useAutoClicker(enabled: boolean, onClick: () => void) {
  useEffect(() => {
    if (enabled) {
      const interval = setInterval(onClick, 50); // Super fast clicking
      return () => clearInterval(interval);
    }
  }, [enabled, onClick]);
}