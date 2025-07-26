'use client';

import { useState } from 'react';

export default function UrgentAvoidingBoard() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input) {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-amber-50 dark:bg-yellow-900">
      <h2 className="font-semibold mb-2">Urgent But Avoiding 🔥</h2>
      <div className="flex gap-2">
        <input
          className="text-sm px-2 py-1 border rounded w-full"
          placeholder="Add something you’re avoiding"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-rose-500 text-white px-3 py-1 text-sm rounded"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ul className="mt-4 space-y-1 text-sm">
        {tasks.map((t, i) => (
          <li key={i}>⚠️ {t}</li>
        ))}
      </ul>
    </div>
  );
}
