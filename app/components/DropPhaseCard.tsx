'use client';

export default function DropPhaseCard({ drop }: { drop: any }) {
  const colorMap: any = {
    'Craft It': 'bg-neutral-200',
    'Tease It': 'bg-yellow-200',
    'Enchanting It': 'bg-purple-200',
    'Drop Day': 'bg-green-200',
    'Complete': 'bg-sky-200'
  };

  return (
    <li className="p-3 border rounded bg-neutral-100 dark:bg-neutral-900">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold">{drop.title}</p>
          <p className="text-xs text-neutral-500">{drop.date}</p>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${colorMap[drop.phase]}`}>
          {drop.phase}
        </span>
      </div>
    </li>
  );
}
