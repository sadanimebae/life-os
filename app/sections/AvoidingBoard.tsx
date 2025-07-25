// sections/AvoidingBoard.tsx
"use client";
import { useState } from "react";

export default function AvoidingBoard() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index: number) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>⚠️ Urgent But Avoiding</h2>
      <p>No shame. Just a space to softly park the stuff that keeps getting put off.</p>

      <input
        type="text"
        placeholder="e.g. Schedule dentist, restock yarn, email back X"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{ padding: "0.5rem", width: "75%", marginRight: "0.5rem" }}
      />
      <button onClick={addTask}>Add</button>

      <ul style={{ marginTop: "1.5rem" }}>
        {tasks.map((task, idx) => (
          <li key={idx} style={{ marginBottom: "0.75rem", background: "#fdf0e7", padding: "0.75rem", borderRadius: "6px" }}>
            <span>{task}</span>
            <button
              onClick={() => removeTask(idx)}
              style={{ marginLeft: "1rem", background: "transparent", border: "none", color: "#c00" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
