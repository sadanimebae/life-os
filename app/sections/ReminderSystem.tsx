// sections/ReminderSystem.tsx
"use client";
import { useState } from "react";

type Reminder = {
  task: string;
  recurring: boolean;
};

export default function ReminderSystem() {
  const [task, setTask] = useState("");
  const [recurring, setRecurring] = useState(false);
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const addReminder = () => {
    if (task.trim() !== "") {
      setReminders([...reminders, { task, recurring }]);
      setTask("");
      setRecurring(false);
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>⏰ Reminder System</h2>
      <p>Add gentle reminders to update your Life OS regularly.</p>

      <input
        type="text"
        placeholder="Reminder (e.g. Update planner, log workout)"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "0.5rem", width: "60%", marginRight: "0.5rem" }}
      />

      <label>
        <input
          type="checkbox"
          checked={recurring}
          onChange={(e) => setRecurring(e.target.checked)}
          style={{ marginRight: "0.5rem" }}
        />
        Recurring
      </label>

      <button onClick={addReminder} style={{ marginLeft: "0.5rem" }}>Add</button>

      <ul style={{ marginTop: "1rem" }}>
        {reminders.map((r, idx) => (
          <li key={idx}>
            ✅ {r.task} {r.recurring && <em>(recurring)</em>}
          </li>
        ))}
      </ul>
    </div>
  );
}
