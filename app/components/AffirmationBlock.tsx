'use client';
import affirmations from '@/data/affirmations.json';

export default function AffirmationBlock() {
  const phrase = affirmations[Math.floor(Math.random() * affirmations.length)];

  return (
    <div className="p-4 bg-rose-100 dark:bg-rose-900/30 rounded-lg text-sm italic">
      ✨ {phrase}
    </div>
  );
}
