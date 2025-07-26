'use client';

export default function GiftLog() {
  const gifts = [
    { name: 'Robbie', item: 'Nausicaä pin', occasion: 'Anniversary' },
    { name: 'Jen', item: 'Pink crochet set', occasion: 'Birthday' }
  ];

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">🎁 Gift & Occasion Log</h2>
      <ul className="text-sm space-y-1">
        {gifts.map((g, i) => (
          <li key={i}>
            {g.name} — {g.item} ({g.occasion})
          </li>
        ))}
      </ul>
    </div>
  );
}
