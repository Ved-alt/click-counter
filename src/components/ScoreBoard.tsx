import React from 'react';

interface ScoreBoardProps {
  currentCps: number;
  bestCps: number;
}

export function ScoreBoard({ currentCps, bestCps }: ScoreBoardProps) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
      <div className="text-center flex-1">
        <div className="text-2xl font-bold text-gray-900">
          {currentCps.toFixed(1)}
        </div>
        <div className="text-sm text-gray-500">Current CPS</div>
      </div>
      <div className="text-center flex-1">
        <div className="text-2xl font-bold text-gray-900">
          {bestCps.toFixed(1)}
        </div>
        <div className="text-sm text-gray-500">Best CPS</div>
      </div>
    </div>
  );
}