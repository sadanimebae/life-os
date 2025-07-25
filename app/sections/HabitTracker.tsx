// sections/HabitTracker.tsx
"use client";
import { useState } from "react";

const starterHabits = [
  { name: "🌿 Followed Schedule", streak: 0 },
  { name: "🧘‍♀️ Emotional Check-In", streak: 0 },
  { name: "💧 Hydration + Meals", streak: 0 },
  { name: "🏃‍♀️ Movement or Stretch", streak: 0 },
];

export default function HabitTracker() {
  const [habits, setHabits] = useState(starterHabits);

  const incrementStreak = (index: number) => {
    const updated = [...habits];
    updated[index].streak += 1;
    setHabits(updated);
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>📈 Habit Streak Tracker</h2>
      <p>Track your soft streaks and unlock rewards when you hit your goals.</p>

      <ul>
        {habits.map((habit, i) => (
          <li key={i} style={{ marginBottom: "1rem" }}>
            <strong>{habit.name}</strong> — Streak: {habit.streak}
            <button
              onClick={() => incrementStreak(i)}
              style={{ marginLeft: "1rem" }}
            >
              +1
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
