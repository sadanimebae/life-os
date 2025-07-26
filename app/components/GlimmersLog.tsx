'use client';
import { useState } from 'react';

export default function GlimmersLog() {
  const [input, setInput] = useState('');
  const [glimmers, setGlimmers] = useState<string[]>([]);

  const addGlimmer = () => {
    if (input.trim()) {
      setGlimmers([input.trim(), ...glimmers]);
      setInput('');
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">Glimmers ✨</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="A small joy, moment, or smile"
        className="w-full p-2 text-sm border rounded mb-2"
      />
      <button onClick={addGlimmer} className="text-xs px-2 py-1 bg-rose-200 rounded">
        Add
      </button>
      <ul className="mt-3 text-sm space-y-1">
        {glimmers.map((g, i) => (
          <li key={i}>• {g}</li>
        ))}
      </ul>
    </div>
  );
}
