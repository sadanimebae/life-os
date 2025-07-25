// sections/WeeklyPlanner.tsx
"use client";
import { useState } from "react";

const schedule: Record<string, string[]> = {
  Monday: ["6 AM – 2 PM: Work", "2 PM – Pilates", "3 PM – Etsy/OF", "6 PM – Dinner", "7 PM – Tasks"],
  Tuesday: ["6 AM – 2 PM: Work", "3 PM – Robbie Time", "7 PM – Robbie Late Night"],
  Wednesday: ["6 AM – 2 PM: Work", "2 PM – Groceries", "7 PM – Focused Tasks"],
  Thursday: ["Same as Tuesday"],
  Friday: ["Same as Monday"],
  Saturday: ["10 AM – Robbie", "2 PM – Lunch", "7 PM – Time w/ Robbie"],
  Sunday: ["10 AM – Cleaning", "2 PM – Spa", "5 PM – Schoolwork", "7 PM – Wind Down"],
};

export default function WeeklyPlanner() {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [note, setNote] = useState("");

  return (
    <div style={{ padding: "1rem" }}>
      <h2>📆 Weekly Overview</h2>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        {Object.keys(schedule).map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            style={{
              background: day === selectedDay ? "#a2d2ff" : "#d8e2dc",
              padding: "0.5rem 1rem",
              border: "none",
              borderRadius: "6px",
            }}
          >
            {day}
          </button>
        ))}
      </div>
      <div>
        <h3>🗓️ {selectedDay}'s Plan</h3>
        <ul>
          {schedule[selectedDay].map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <label>
          ✍️ Add Quick Note:
          <textarea
            style={{ display: "block", width: "100%", marginTop: "0.5rem" }}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="e.g. Low energy, had cramps but still finished Etsy post"
          />
        </label>
      </div>
    </div>
  );
}
