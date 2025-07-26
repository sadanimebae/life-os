'use client';

import ContentVault from '@/components/ContentVault';
import PlatformFilter from '@/components/PlatformFilter';
import SeriesBuilder from '@/components/SeriesBuilder';

export default function CreativePage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Creative Studio 🎨</h1>
      <PlatformFilter />
      <ContentVault />
      <SeriesBuilder />
    </section>
  );
}
