'use client';
import { useState } from 'react';
import habits from '@/data/habits.json';

export default function HabitTracker() {
  const [completed, setCompleted] = useState<string[]>([]);

  const toggle = (habit: string) => {
    setCompleted((prev) =>
      prev.includes(habit) ? prev.filter((h) => h !== habit) : [...prev, habit]
    );
  };

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">Habits</h2>
      <ul className="space-y-2 text-sm">
        {habits.map((habit) => (
          <li key={habit}>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={completed.includes(habit)}
                onChange={() => toggle(habit)}
              />
              {habit}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
