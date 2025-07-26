'use client';

export default function CurrentCourses() {
  const courses = [
    'Humor in the Workplace',
    'Statistics',
    'Stress & Coping',
    'Managing Sustainable Organizations'
  ];

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">Fall 2025 Courses</h2>
      <ul className="text-sm space-y-1">
        {courses.map((c) => (
          <li key={c}>📘 {c}</li>
        ))}
      </ul>
    </div>
  );
}
