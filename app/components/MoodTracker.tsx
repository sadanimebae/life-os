'use client';
import { useState } from 'react';
import moods from '@/data/moods.json';

export default function MoodTracker() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">How are you feeling?</h2>
      <div className="flex gap-2 text-2xl">
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => setSelected(mood)}
            className={selected === mood ? 'scale-110' : ''}
          >
            {mood}
          </button>
        ))}
      </div>
      {selected && (
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">Mood logged: {selected}</p>
      )}
    </div>
  );
}
