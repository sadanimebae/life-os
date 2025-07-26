'use client';
import { useState } from 'react';

export default function MoodStreak() {
  const [days, setDays] = useState(4); // placeholder streak count

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">Mood Streak</h2>
      <p className="text-sm">You’ve logged your mood for <strong>{days}</strong> days in a row 💖</p>
    </div>
  );
}
