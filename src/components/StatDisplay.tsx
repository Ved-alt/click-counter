import React from 'react';

interface StatDisplayProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
}

export function StatDisplay({ value, label, icon }: StatDisplayProps) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-indigo-600 flex items-center justify-center gap-2">
        {icon}
        {value}
      </div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}