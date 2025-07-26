'use client';
import drops from '@/data/drops.json';

export default function DropPreview() {
  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">Upcoming Drops</h2>
      <ul className="text-sm space-y-1">
        {drops.map((drop) => (
          <li key={drop.title}>
            <strong>{drop.title}</strong> — {drop.phase} · <span className="text-neutral-500">{drop.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
