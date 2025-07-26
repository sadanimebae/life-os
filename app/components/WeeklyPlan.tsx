'use client';

const days = [
  { day: 'Mon', focus: 'Work + Planner' },
  { day: 'Tue', focus: 'Etsy Drop Prep' },
  { day: 'Wed', focus: 'Creative Studio' },
  { day: 'Thu', focus: 'School Block' },
  { day: 'Fri', focus: 'Free Play + TikTok' },
  { day: 'Sat', focus: 'Content Batching' },
  { day: 'Sun', focus: 'Spa Day + Reset' }
];

export default function WeeklyPlan() {
  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">Weekly Plan</h2>
      <ul className="text-sm space-y-1">
        {days.map((d) => (
          <li key={d.day}>
            <strong>{d.day}:</strong> {d.focus}
          </li>
        ))}
      </ul>
    </div>
  );
}
