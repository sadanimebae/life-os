'use client';

import rewards from '@/data/rewards.json';

export default function SanctuaryVault() {
  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">Unlocked Rewards</h2>
      <ul className="space-y-2 text-sm">
        {rewards.map((r) => (
          <li key={r.name} className="p-2 rounded-md bg-neutral-100 dark:bg-neutral-900">
            <strong>{r.name}</strong> — {r.trigger}
          </li>
        ))}
      </ul>
    </div>
  );
}
