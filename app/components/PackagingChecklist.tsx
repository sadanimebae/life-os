'use client';
import { useState } from 'react';

const items = ['Product tagged', 'Photos taken', 'Content batched', 'Shipping ready'];

export default function PackagingChecklist() {
  const [done, setDone] = useState<string[]>([]);

  const toggle = (item: string) => {
    setDone((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">Packaging Checklist</h2>
      <ul className="text-sm space-y-2">
        {items.map((item) => (
          <li key={item}>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={done.includes(item)}
                onChange={() => toggle(item)}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
