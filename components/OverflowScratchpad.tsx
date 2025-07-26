'use client';

import { useState } from 'react';

export default function OverflowScratchpad() {
  const [notes, setNotes] = useState('');
  return (
    <div className="p-4 border rounded-lg bg-neutral-100 dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">🌀 Overflow Scratchpad</h2>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full text-sm px-3 py-2 border rounded min-h-[100px]"
        placeholder="Dump your messy thoughts here"
      />
    </div>
  );
}
