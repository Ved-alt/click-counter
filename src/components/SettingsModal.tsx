import React from 'react';
import { X, Sun, Moon } from 'lucide-react';
import { Settings } from '../hooks/useSettings';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: Settings;
  onUpdateSettings: (settings: Partial<Settings>) => void;
}

export function SettingsModal({ isOpen, onClose, settings, onUpdateSettings }: SettingsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`w-full max-w-md rounded-2xl shadow-xl p-6 space-y-6 ${settings.isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="flex justify-between items-center">
          <h2 className={`text-2xl font-bold ${settings.isDarkMode ? 'text-white' : 'text-gray-900'}`}>Settings</h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-full hover:bg-opacity-10 ${settings.isDarkMode ? 'hover:bg-white' : 'hover:bg-black'}`}
          >
            <X className={settings.isDarkMode ? 'text-white' : 'text-gray-900'} />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {settings.isDarkMode ? <Moon className="text-white" /> : <Sun className="text-gray-900" />}
              <span className={settings.isDarkMode ? 'text-white' : 'text-gray-900'}>Dark Mode</span>
            </div>
            <button
              onClick={() => onUpdateSettings({ isDarkMode: !settings.isDarkMode })}
              className={`w-12 h-6 rounded-full relative ${settings.isDarkMode ? 'bg-indigo-600' : 'bg-gray-200'}`}
            >
              <div className={`absolute w-4 h-4 rounded-full top-1 transition-all ${settings.isDarkMode ? 'right-1 bg-white' : 'left-1 bg-white'}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}