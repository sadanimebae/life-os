// sections/LaunchPlanner.tsx
"use client";
import { useState } from "react";

type Launch = {
  title: string;
  phase: string;
  date: string;
  notes: string;
};

export default function LaunchPlanner() {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [form, setForm] = useState<Launch>({
    title: "",
    phase: "Craft It",
    date: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (form.title.trim()) {
      setLaunches([...launches, form]);
      setForm({ title: "", phase: "Craft It", date: "", notes: "" });
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>✨ Drop Launch Planner</h2>
      <p>Track your magical product or content launches by phase.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Drop Title or Theme" />
        <select name="phase" value={form.phase} onChange={handleChange}>
          <option>Craft It</option>
          <option>Tease It</option>
          <option>Bless It</option>
          <option>Launch It</option>
          <option>Reflect It</option>
        </select>
        <input name="date" type="date" value={form.date} onChange={handleChange} />
        <input name="notes" value={form.notes} onChange={handleChange} placeholder="Notes or tasks" />
        <button onClick={handleAdd}>Add Launch</button>
      </div>

      <ul>
        {launches.map((l, i) => (
          <li key={i}>
            <strong>{l.title}</strong> — Phase: {l.phase} | Date: {l.date}
            <br />
            <em>{l.notes}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
