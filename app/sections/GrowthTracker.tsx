// sections/GrowthTracker.tsx
"use client";
import { useState } from "react";

type Entry = {
  week: string;
  highlights: string;
  growthWins: string;
};

export default function GrowthTracker() {
  const [week, setWeek] = useState("");
  const [highlights, setHighlights] = useState("");
  const [growthWins, setGrowthWins] = useState("");
  const [entries, setEntries] = useState<Entry[]>([]);

  const handleAdd = () => {
    if (week && (highlights || growthWins)) {
      setEntries([...entries, { week, highlights, growthWins }]);
      setWeek("");
      setHighlights("");
      setGrowthWins("");
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>📈 Growth Tracker</h2>
      <p>Reflect weekly on progress across habits, wellness, content, and school.</p>

      <input
        type="text"
        placeholder="Week of (e.g. July 22–28)"
        value={week}
        onChange={(e) => setWeek(e.target.value)}
        style={{ padding: "0.5rem", width: "60%", marginBottom: "0.5rem" }}
      />

      <textarea
        placeholder="Highlights from this week (projects, moments, etc.)"
        value={highlights}
        onChange={(e) => setHighlights(e.target.value)}
        rows={3}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
      />

      <textarea
        placeholder="Growth wins (habits, wellness, content, school)"
        value={growthWins}
        onChange={(e) => setGrowthWins(e.target.value)}
        rows={3}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
      />

      <button onClick={handleAdd}>Add Weekly Recap</button>

      <ul style={{ marginTop: "1.5rem" }}>
        {entries.map((entry, idx) => (
          <li key={idx} style={{ marginBottom: "1rem", background: "#f0f0f0", padding: "1rem", borderRadius: "8px" }}>
            <strong>📅 {entry.week}</strong>
            <p><strong>Highlights:</strong> {entry.highlights}</p>
            <p><strong>Growth Wins:</strong> {entry.growthWins}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
