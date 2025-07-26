'use client';

import logs from '@/data/growth.json';

export default function GrowthArchive() {
  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">🌱 Growth Archive</h2>
      <ul className="text-sm space-y-1">
        {logs.map((g) => (
          <li key={g.month}>
            <strong>{g.month}</strong>: {g.entry}
          </li>
        ))}
      </ul>
    </div>
  );
}
