'use client';
import { useState } from 'react';
import vibes from '@/data/vibes.json';

export default function VibeSelector() {
  const [selected, setSelected] = useState(vibes[0]);

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">Today’s Vibe</h2>
      <div className="flex flex-wrap gap-2">
        {vibes.map((vibe) => (
          <button
            key={vibe}
            onClick={() => setSelected(vibe)}
            className={`px-3 py-1 rounded-full text-sm ${
              selected === vibe ? 'bg-rose-600 text-white' : 'bg-neutral-200 dark:bg-neutral-700'
            }`}
          >
            {vibe}
          </button>
        ))}
      </div>
      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
        Vibe locked: <strong>{selected}</strong>
      </p>
    </div>
  );
}
