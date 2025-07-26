'use client';

import data from '@/data/lunar.json';

export default function LunarSync() {
  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">🌙 Lunar Sync</h2>
      <ul className="text-sm space-y-1">
        {data.map((entry) => (
          <li key={entry.date}>
            <strong>{entry.date}</strong>: {entry.note}
          </li>
        ))}
      </ul>
    </div>
  );
}
