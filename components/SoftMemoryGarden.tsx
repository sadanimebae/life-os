'use client';
import memory from '@/data/memory.json';

export default function SoftMemoryGarden() {
  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">Soft Memory Garden 🌸</h2>
      <ul className="text-sm space-y-2">
        {memory.map((m) => (
          <li key={m.month}>
            <strong>{m.month}</strong>: {m.reflection}
          </li>
        ))}
      </ul>
    </div>
  );
}
