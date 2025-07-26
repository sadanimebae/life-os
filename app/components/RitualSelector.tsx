'use client';
import { useState } from 'react';
import rituals from '@/data/rituals.json';

export default function RitualSelector() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">Today’s Ritual</h2>
      <div className="flex flex-wrap gap-2">
        {rituals.map((ritual) => (
          <button
            key={ritual}
            onClick={() => setSelected(ritual)}
            className={`px-3 py-1 rounded-full text-sm ${
              selected === ritual ? 'bg-rose-500 text-white' : 'bg-neutral-200 dark:bg-neutral-700'
            }`}
          >
            {ritual}
          </button>
        ))}
      </div>
      {selected && (
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
          Ritual locked: <strong>{selected}</strong>
        </p>
      )}
    </div>
  );
}
