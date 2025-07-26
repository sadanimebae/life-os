'use client';
import drops from '@/data/drops.json';
import DropPhaseCard from './DropPhaseCard';

export default function DropCalendar() {
  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-4">Drop Calendar</h2>
      <ul className="space-y-4">
        {drops.map((drop) => (
          <DropPhaseCard key={drop.title} drop={drop} />
        ))}
      </ul>
    </div>
  );
}
