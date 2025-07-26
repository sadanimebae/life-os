'use client';

import DropCalendar from '@/components/DropCalendar';
import PackagingChecklist from '@/components/PackagingChecklist';

export default function DropsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Drop Dashboard 🎁</h1>
      <DropCalendar />
      <PackagingChecklist />
    </section>
  );
}
