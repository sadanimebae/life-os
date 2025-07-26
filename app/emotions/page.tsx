'use client';

import MoodLogbook from '@/components/MoodLogbook';
import BurnoutReset from '@/components/BurnoutReset';
import SoftMemoryGarden from '@/components/SoftMemoryGarden';

export default function EmotionsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Emotional Archive 🌙</h1>
      <MoodLogbook />
      <BurnoutReset />
      <SoftMemoryGarden />
    </section>
  );
}
