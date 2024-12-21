import { useState, useEffect } from 'react';

export interface Settings {
  isDarkMode: boolean;
  autoClickerEnabled: boolean;
}

const getInitialSettings = (): Settings => {
  const saved = localStorage.getItem('clickerSettings');
  return saved ? JSON.parse(saved) : {
    isDarkMode: false,
    autoClickerEnabled: false,
  };
};

export function useSettings() {
  const [settings, setSettings] = useState<Settings>(getInitialSettings);

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings(prev => {
      const updated = { ...prev, ...newSettings };
      localStorage.setItem('clickerSettings', JSON.stringify(updated));
      return updated;
    });
  };

  useEffect(() => {
    const saved = localStorage.getItem('clickerSettings');
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  return { settings, updateSettings };
}