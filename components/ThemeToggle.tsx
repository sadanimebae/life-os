'use client';

import { useState } from 'react';
import themes from '@/data/themes.json';

export default function ThemeToggle() {
  const [current, setCurrent] = useState<string>('Summer Isla Babe');

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">Current Theme</h2>
      <div className="flex flex-wrap gap-2">
        {themes.map((t) => (
          <button
            key={t}
            onClick={() => setCurrent(t)}
            className={`px-3 py-1 rounded-full text-xs ${
              current === t ? 'bg-rose-500 text-white' : 'bg-neutral-200 dark:bg-neutral-700'
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <p className="text-sm mt-2 text-neutral-500 dark:text-neutral-300">
        Active theme: <strong>{current}</strong>
      </p>
    </div>
  );
}
