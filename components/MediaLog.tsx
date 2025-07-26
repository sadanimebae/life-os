'use client';

import media from '@/data/media.json';

export default function MediaLog() {
  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">📚 Media Log</h2>
      <ul className="text-sm space-y-1">
        {media.map((m) => (
          <li key={m.title}>
            {m.type}: <strong>{m.title}</strong> — {m.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
