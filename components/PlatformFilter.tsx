'use client';

import { useState } from 'react';

const platforms = ['All', 'TikTok', 'Instagram', 'Etsy', 'OnlyFans', 'ManyVids'];

export default function PlatformFilter({
  onChange,
}: {
  onChange: (value: string) => void;
}) {
  const [selected, setSelected] = useState('All');

  const handleSelect = (platform: string) => {
    setSelected(platform);
    onChange(platform);
  };

  return (
    <div className="flex gap-2 flex-wrap mb-4">
      {platforms.map((p) => (
        <button
          key={p}
          onClick={() => handleSelect(p)}
          className={`px-3 py-1 text-sm rounded border ${
            selected === p
              ? 'bg-blue-500 text-white'
              : 'bg-white dark:bg-neutral-700'
          }`}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
