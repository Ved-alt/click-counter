import { useState, useEffect, useCallback } from 'react';

export function useClickTest(testDuration: number = 10) {
  const [clicks, setClicks] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(testDuration);
  const [isActive, setIsActive] = useState(false);
  const [cps, setCps] = useState(0);
  const [bestCps, setBestCps] = useState(0);

  const startTest = useCallback(() => {
    setIsActive(true);
    setClicks(0);
    setTimeRemaining(testDuration);
    setCps(0);
  }, [testDuration]);

  const handleClick = useCallback(() => {
    if (isActive && timeRemaining > 0) {
      setClicks(prev => prev + 1);
    } else if (!isActive) {
      startTest();
    }
  }, [isActive, timeRemaining, startTest]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (isActive && timeRemaining > 0) {
      intervalId = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(intervalId);
            setIsActive(false);
            const finalCps = clicks / testDuration;
            setCps(finalCps);
            setBestCps(prev => Math.max(prev, finalCps));
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isActive, timeRemaining, clicks, testDuration]);

  return {
    clicks,
    timeRemaining,
    isActive,
    cps,
    bestCps,
    handleClick,
    startTest
  };
}