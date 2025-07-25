// sections/FocusFilter.tsx
"use client";
import { useState } from "react";

export default function FocusFilter() {
  const [focus, setFocus] = useState("All");

  const filters = [
    "All",
    "Content Creation",
    "Schoolwork",
    "Etsy Studio",
    "OnlyFans Studio",
    "Wellness",
    "Cleaning + Home",
    "Soft Reset",
    "Personal Projects",
  ];

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>🌀 Focus Filter</h2>
      <p>Highlight what you’re focusing on now — this doesn’t delete anything, just declutters.</p>

      <select
        value={focus}
        onChange={(e) => setFocus(e.target.value)}
        style={{ padding: "0.5rem", marginTop: "0.5rem", width: "80%" }}
      >
        {filters.map((f, idx) => (
          <option key={idx} value={f}>{f}</option>
        ))}
      </select>

      <p style={{ marginTop: "1rem" }}>
        🔍 You’re zoomed in on: <strong>{focus}</strong>
      </p>
    </div>
  );
}
