'use client';

import assignments from '@/data/assignments.json';

export default function AssignmentTracker() {
  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">Weekly Assignments</h2>
      <ul className="space-y-2 text-sm">
        {assignments.map((a) => (
          <li key={a.title}>
            <strong>{a.title}</strong> — {a.course} (Due: {a.due})
          </li>
        ))}
      </ul>
    </div>
  );
}
