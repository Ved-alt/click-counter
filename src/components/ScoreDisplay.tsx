import React from 'react';

interface ScoreDisplayProps {
  current: number;
  best: number;
  isDarkMode: boolean;
}

export function ScoreDisplay({ current, best, isDarkMode }: ScoreDisplayProps) {
  return (
    <div className={`flex justify-between items-center p-4 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
      <div className="text-center flex-1">
        <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{current}</div>
        <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Current Clicks</div>
      </div>
      <div className="text-center flex-1">
        <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{best}</div>
        <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Best Score</div>
      </div>
    </div>
  );
}