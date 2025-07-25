// sections/DailyPlanner.tsx
"use client";
import { useState } from "react";

export default function DailyPlanner() {
  const [vibe, setVibe] = useState("🌿 Cozy Girl");
  const [mood, setMood] = useState("😊");
  const [affirmation, setAffirmation] = useState("You can always pick it back up.");
  const [tasksDone, setTasksDone] = useState<string[]>([]);

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  const handleToggle = (task: string) => {
    setTasksDone((prev) =>
      prev.includes(task) ? prev.filter((t) => t !== task) : [...prev, task]
    );
  };

  const dailySchedule: Record<string, string[]> = {
    Monday: [
      "5:45 AM — Morning Routine",
      "6:00 AM — Work Begins",
      "2:00 PM — Pilates",
      "3:00 PM — Etsy / OF / Schoolwork",
      "6:00 PM — Clean Litter Box",
      "6:15 PM — Dinner (Solo)",
      "7:00 PM — Focused Tasks",
      "9:00 PM — Nighttime Routine",
    ],
    Tuesday: [
      "5:45 AM — Morning Routine",
      "6:00 AM — Work Begins",
      "2:00 PM — Pilates + Shower",
      "3:00 PM — Time with Robbie",
      "6:00 PM — Feed Chunks",
      "6:15 PM — Dinner",
      "7:00 PM — Robbie Time (Late Night)",
      "9:00 PM — Night Routine",
    ],
    Wednesday: [
      "5:45 AM — Morning Routine",
      "6:00 AM — Work Begins",
      "2:00 PM — Refresh + Groceries",
      "5:30 PM — Unpack + Dinner",
      "7:00 PM — Focused Tasks",
      "8:00 PM — Relaxation",
      "9:00 PM — Night Routine",
    ],
    Thursday: [
      "Same as Tuesday",
    ],
    Friday: [
      "Same as Monday",
    ],
    Saturday: [
      "8:00 AM — Wake-Up",
      "10:00 AM — Feed Chunks",
      "10:15 AM — Time with Robbie",
      "2:00 PM — Lunch",
      "6:00 PM — Feed Chunks",
      "7:00 PM — Dinner + Wind Down",
      "10:00 PM — Skincare",
    ],
    Sunday: [
      "8:00 AM — Wake-Up",
      "9:15 AM — Skincare",
      "10:00 AM — Cleaning",
      "2:00 PM — Spa Time",
      "3:00 PM — Focused Tasks",
      "6:00 PM — Dinner",
      "8:30 PM — Night Routine",
    ],
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>🗓️ Daily Planner — {today}</h2>
      <div>
        <label>Today’s Vibe:</label>
        <select value={vibe} onChange={(e) => setVibe(e.target.value)}>
          <option>🌿 Cozy Girl</option>
          <option>🎮 Cozy Gamer</option>
          <option>✂️ Craft Goblin</option>
          <option>💋 Soft Egirl</option>
          <option>✨ Bimbo Brain</option>
          <option>🧶 Cozy Crafter</option>
        </select>
      </div>
      <div>
        <label>Mood:</label>
        <input value={mood} onChange={(e) => setMood(e.target.value)} />
      </div>
      <div>
        <label>Affirmation:</label>
        <input value={affirmation} onChange={(e) => setAffirmation(e.target.value)} />
      </div>
      <h3>📋 Today’s Tasks</h3>
      <ul>
        {dailySchedule[today]?.map((task) => (
          <li key={task}>
            <label>
              <input
                type="checkbox"
                checked={tasksDone.includes(task)}
                onChange={() => handleToggle(task)}
              />
              {task}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
