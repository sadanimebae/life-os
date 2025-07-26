'use client';

import DegreePlan from '@/components/DegreePlan';
import CurrentCourses from '@/components/CurrentCourses';
import AssignmentTracker from '@/components/AssignmentTracker';

export default function SchoolPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">School Tracker 🎓</h1>
      <CurrentCourses />
      <AssignmentTracker />
      <DegreePlan />
    </section>
  );
}
