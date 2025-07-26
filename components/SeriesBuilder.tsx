'use client';

import { useState } from 'react';

type Series = {
  title: string;
  entries: string[];
};

export default function SeriesBuilder() {
  const [series, setSeries] = useState<Series>({
    title: 'Learning to Find Myself',
    entries: ['Day 1: Just got started', 'Day 2: Stuck but showing up'],
  });

  const [newEntry, setNewEntry] = useState('');

  const addEntry = () => {
    if (newEntry.trim()) {
      setSeries((prev) => ({
        ...prev,
        entries: [...prev.entries, newEntry],
      }));
      setNewEntry('');
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800 mt-6">
      <h2 className="font-semibold mb-2">🌀 Content Series Builder</h2>
      <p className="text-sm mb-3 text-neutral-600 dark:text-neutral-300">
        Series: <strong>{series.title}</strong>
      </p>
      <ul className="text-sm space-y-1 mb-3">
        {series.entries.map((e, i) => (
          <li key={i}>📍 {e}</li>
        ))}
      </ul>
      <div className="flex gap-2">
        <input
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          placeholder="Add new post to series"
          className="border px-3 py-1 text-sm w-full"
        />
        <button onClick={addEntry} className="bg-blue-600 text-white px-3 py-1 text-sm rounded">
          Add
        </button>
      </div>
    </div>
  );
}
