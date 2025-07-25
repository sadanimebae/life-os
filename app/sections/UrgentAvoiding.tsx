// sections/UrgentAvoiding.tsx
"use client";
import { useState } from "react";

export default function UrgentAvoiding() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAdd = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>⏳ Urgent But Avoiding</h2>
      <p>Low-shame space to log things you know you need to do, but are dreading.</p>
      <input
        type="text"
        placeholder="Add task you’re avoiding"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ width: "70%", padding: "0.5rem", marginRight: "0.5rem" }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul style={{ marginTop: "1rem" }}>
        {tasks.map((t, i) => (
          <li key={i}>😵 {t}</li>
        ))}
      </ul>
    </div>
  );
}
