'use client';

export default function EnergyTag({ level }: { level: 'low' | 'medium' | 'high' }) {
  const colorMap = {
    low: 'bg-green-200 text-green-800',
    medium: 'bg-yellow-200 text-yellow-800',
    high: 'bg-rose-300 text-rose-800',
  };

  return (
    <span className={`text-xs px-2 py-1 rounded-full ${colorMap[level]}`}>
      {level} energy
    </span>
  );
}
