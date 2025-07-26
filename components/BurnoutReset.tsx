'use client';
import { useState } from 'react';

export default function BurnoutReset() {
  const [activated, setActivated] = useState(false);

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">Burnout Override</h2>
      <button
        className="bg-purple-500 text-white px-4 py-1 text-sm rounded"
        onClick={() => setActivated(true)}
      >
        Trigger Reset
      </button>
      {activated && (
        <div className="mt-2 text-sm space-y-2">
          <p>🌧️ Comfort Mode Active: You can always pick it back up.</p>
          <p>🧸 Try: rest, spa routine, animation, tea, low-stim playlist</p>
        </div>
      )}
    </div>
  );
}
