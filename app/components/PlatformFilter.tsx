'use client';

import platforms from '@/data/platforms.json';

export default function PlatformFilter() {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {platforms.map((platform) => (
        <span
          key={platform}
          className="text-xs bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded-full"
        >
          {platform}
        </span>
      ))}
    </div>
  );
}
