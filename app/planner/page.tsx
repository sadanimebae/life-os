'use client';

import HabitTracker from '@/components/HabitTracker';
import RitualSelector from '@/components/RitualSelector';
import MoodStreak from '@/components/MoodStreak';
import WeeklyPlan from '@/components/WeeklyPlan';

export default function PlannerPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Planner 🗓️</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <HabitTracker />
          <RitualSelector />
        </div>
        <div className="space-y-4">
          <MoodStreak />
          <WeeklyPlan />
        </div>
      </div>
    </section>
  );
}
