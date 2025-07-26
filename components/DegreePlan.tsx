'use client';

import degree from '@/data/degree.json';

export default function DegreePlan() {
  const totalCredits = degree.reduce((sum, d) => sum + d.credits, 0);

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">Degree Progress</h2>
      <ul className="text-sm space-y-2">
        {degree.map((d) => (
          <li key={d.term}>
            <strong>{d.term}</strong>: {d.credits} credits — GPA: {d.gpa}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-neutral-500">
        Total earned: {totalCredits} / 120 credits
      </p>
    </div>
  );
}
