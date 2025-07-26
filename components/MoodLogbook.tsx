'use client';

import { useState } from 'react';

export default function MoodLogbook() {
  const [mood, setMood] = useState('');
  const [log, setLog] = useState<string[]>([]);

  const saveMood = () => {
    if (mood) setLog((prev) => [...prev, mood]);
    setMood('');
  };

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">Mood Log</h2>
      <div className="flex gap-2">
        <input
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="How are you feeling?"
          className="border px-3 py-1 text-sm w-full"
        />
        <button onClick={saveMood} className="bg-rose-500 text-white px-3 py-1 rounded text-sm">
          Save
        </button>
      </div>
      <ul className="mt-4 space-y-1 text-sm">
        {log.map((m, i) => (
          <li key={i}>🩵 {m}</li>
        ))}
      </ul>
    </div>
  );
}
