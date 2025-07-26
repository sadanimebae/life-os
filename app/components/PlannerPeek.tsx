'use client';

const blocks = [
  { time: '6:00 AM', label: 'Work Start' },
  { time: '10:00 AM', label: 'Mid-shift Walk + Snack' },
  { time: '2:00 PM', label: 'Work Ends' },
  { time: '3:00 PM', label: 'Etsy or Schoolwork Block' },
  { time: '6:00 PM', label: 'Dinner + Soft Reset' },
];

export default function PlannerPeek() {
  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">Today’s Plan</h2>
      <ul className="text-sm space-y-1">
        {blocks.map((b) => (
          <li key={b.time}>
            <strong>{b.time}</strong> — {b.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
