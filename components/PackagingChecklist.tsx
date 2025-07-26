'use client';

import { useState } from 'react';

type Item = {
  name: string;
  type: string;
  status: string;
};

const initialItems: Item[] = [
  { name: 'Plushie Set A', type: 'Etsy', status: 'Packed' },
  { name: 'Panty Promo Clip', type: 'OnlyFans', status: 'To Film' },
  { name: 'BTS Reels', type: 'Instagram', status: 'Editing' }
];

export default function PackagingChecklist() {
  const [items, setItems] = useState(initialItems);

  const toggleStatus = (index: number) => {
    const statuses = ['To Film', 'Editing', 'Packed'];
    setItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              status: statuses[(statuses.indexOf(item.status) + 1) % statuses.length]
            }
          : item
      )
    );
  };

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800 mt-6">
      <h2 className="font-semibold mb-2">📦 Packaging + Content Checklist</h2>
      <ul className="text-sm space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            onClick={() => toggleStatus(i)}
            className="cursor-pointer flex justify-between"
          >
            <span>
              {item.type} — {item.name}
            </span>
            <span className="italic text-xs opacity-70">{item.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
