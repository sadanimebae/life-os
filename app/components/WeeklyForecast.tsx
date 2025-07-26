'use client';

export default function WeeklyForecast() {
  const forecast = 'This week invites softness, groundedness, and steady progress.';

  return (
    <div className="p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
      <h2 className="font-semibold mb-2">Weekly Energy Forecast</h2>
      <p className="text-sm italic">{forecast}</p>
    </div>
  );
}
