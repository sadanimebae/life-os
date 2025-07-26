'use client';

export default function CleaningNest() {
  const zones = ['Kitchen', 'Bathroom', 'Bedroom', 'Studio', 'Living Room'];

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">🏡 Home Nest</h2>
      <ul className="text-sm space-y-1">
        {zones.map((zone) => (
          <li key={zone}>🧽 {zone} - Reset ✅</li>
        ))}
      </ul>
    </div>
  );
}
