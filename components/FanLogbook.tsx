'use client';

import log from '@/data/fanlog.json';

export default function FanLogbook() {
  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">📓 Fan + Mutual Log</h2>
      <ul className="text-sm space-y-1">
        {log.map((f) => (
          <li key={f.name}>
            {f.name} — {f.notes}
          </li>
        ))}
      </ul>
    </div>
  );
}
