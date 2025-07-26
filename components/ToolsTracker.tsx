'use client';

import tools from '@/data/tools.json';

export default function ToolsTracker() {
  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">🔧 Tools + Tech</h2>
      <ul className="text-sm space-y-1">
        {tools.map((t) => (
          <li key={t.name}>
            {t.name} — {t.status} ({t.cost})
          </li>
        ))}
      </ul>
    </div>
  );
}
