import React from 'react';
import { RotateCcw, MousePointer2, Sun, Moon, Zap } from 'lucide-react';
import { useClickCounter } from '../hooks/useClickCounter';
import { useSettings } from '../hooks/useSettings';
import { useAutoClicker } from '../hooks/useAutoClicker';
import { ScoreDisplay } from './ScoreDisplay';
import { Button } from './ui/Button';

export function ClickCounter() {
  const { clicks, bestScore, handleClick, reset } = useClickCounter();
  const { settings, updateSettings } = useSettings();
  
  useAutoClicker(settings.autoClickerEnabled, handleClick);

  return (
    <div className={`min-h-screen ${settings.isDarkMode ? 'bg-gray-900' : 'bg-white'} p-4 flex items-center justify-center`}>
      <div className={`w-full max-w-md rounded-2xl shadow-xl p-6 space-y-6 ${settings.isDarkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
        <div className="flex justify-between items-center">
          <h1 className={`text-3xl font-bold ${settings.isDarkMode ? 'text-white' : 'text-gray-900'}`}>Click Counter</h1>
          <Button
            onClick={() => updateSettings({ isDarkMode: !settings.isDarkMode })}
            variant="ghost"
            size="icon"
            className={settings.isDarkMode ? 'text-white' : 'text-gray-900'}
          >
            {settings.isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </Button>
        </div>

        <div className="flex justify-center items-center">
          <div className={`text-6xl font-bold ${settings.isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {clicks}
          </div>
        </div>

        <div className="space-y-3">
          <Button
            onClick={handleClick}
            variant="primary"
            size="lg"
            className="w-full"
          >
            <MousePointer2 className="mr-2" size={20} />
            Click!
          </Button>

          <Button
            onClick={() => updateSettings({ autoClickerEnabled: !settings.autoClickerEnabled })}
            variant={settings.autoClickerEnabled ? 'success' : 'secondary'}
            size="lg"
            className="w-full"
          >
            <Zap size={20} className="mr-2" />
            {settings.autoClickerEnabled ? 'Auto Click: ON' : 'Auto Click: OFF'}
          </Button>
        </div>

        <ScoreDisplay current={clicks} best={bestScore} isDarkMode={settings.isDarkMode} />

        <Button
          onClick={reset}
          variant="outline"
          size="lg"
          className="w-full"
        >
          <RotateCcw size={18} className="mr-2" />
          Reset
        </Button>
      </div>
    </div>
  );
}