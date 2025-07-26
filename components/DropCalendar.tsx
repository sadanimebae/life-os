'use client';

import drops from '@/data/drops.json';

export default function DropCalendar() {
  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">📅 Drop Launch Calendar</h2>
      <ul className="text-sm space-y-1">
        {drops.map((drop, i) => (
          <li key={i}>
            <span className="font-medium">{drop.date} — {drop.title}</span>
            <span className="ml-2 text-xs italic text-neutral-500">({drop.phase})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
