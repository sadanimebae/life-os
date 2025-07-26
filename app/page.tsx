'use client';

import VibeSelector from '@/components/VibeSelector';
import MoodTracker from '@/components/MoodTracker';
import AffirmationBlock from '@/components/AffirmationBlock';
import WeeklyForecast from '@/components/WeeklyForecast';
import DropPreview from '@/components/DropPreview';
import GlimmersLog from '@/components/GlimmersLog';
import PlannerPeek from '@/components/PlannerPeek';

export default function Home() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Welcome Home 🌿</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <VibeSelector />
          <MoodTracker />
          <AffirmationBlock />
          <PlannerPeek />
        </div>
        <div className="space-y-4">
          <WeeklyForecast />
          <DropPreview />
          <GlimmersLog />
        </div>
      </div>
    </section>
  );
}
