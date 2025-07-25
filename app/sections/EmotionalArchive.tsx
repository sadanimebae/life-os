// sections/EmotionalArchive.tsx
"use client";
import { useState } from "react";

export default function EmotionalArchive() {
  const [glimmer, setGlimmer] = useState("");
  const [glimmers, setGlimmers] = useState<string[]>([]);

  const addGlimmer = () => {
    if (glimmer.trim() !== "") {
      setGlimmers([...glimmers, glimmer]);
      setGlimmer("");
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem", backgroundColor: "#faf3f0", borderRadius: "8px" }}>
      <h2>🪷 Emotional Archive</h2>
      <p>Track your glimmers, emotional wins, and small joys you don’t want to forget.</p>

      <input
        type="text"
        placeholder="A soft win or sweet glimmer..."
        value={glimmer}
        onChange={(e) => setGlimmer(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem", width: "60%" }}
      />
      <button onClick={addGlimmer}>Add Glimmer</button>

      <ul style={{ marginTop: "1.5rem" }}>
        {glimmers.map((g, i) => (
          <li key={i}>✨ {g}</li>
        ))}
      </ul>
    </div>
  );
}
