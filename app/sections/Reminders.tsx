// sections/Reminders.tsx
"use client";
import { useState } from "react";

export default function Reminders() {
  const [reminder, setReminder] = useState("");
  const [reminders, setReminders] = useState<string[]>([]);

  const addReminder = () => {
    if (reminder.trim() !== "") {
      setReminders([...reminders, reminder]);
      setReminder("");
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>🔔 Life OS Reminders</h2>
      <p>Add soft nudges to keep you on track. These could be daily journaling, finance updates, or self-checks.</p>

      <input
        value={reminder}
        onChange={(e) => setReminder(e.target.value)}
        placeholder="e.g. Log habit streaks, update planner, review bank statement"
        style={{ width: "70%", padding: "0.5rem", marginRight: "0.5rem" }}
      />
      <button onClick={addReminder}>Add</button>

      <ul style={{ marginTop: "1rem" }}>
        {reminders.map((r, i) => (
          <li key={i}>📝 {r}</li>
        ))}
      </ul>
    </div>
  );
}
