// sections/EnergyForecast.tsx
"use client";
import { useState } from "react";

type EnergyEntry = {
  day: string;
  energy: "High" | "Medium" | "Low";
  notes: string;
};

export default function EnergyForecast() {
  const [entries, setEntries] = useState<EnergyEntry[]>([]);
  const [energy, setEnergy] = useState<EnergyEntry>({
    day: "",
    energy: "Medium",
    notes: "",
  });

  const handleLog = () => {
    if (energy.day && energy.notes.trim()) {
      setEntries([...entries, energy]);
      setEnergy({ day: "", energy: "Medium", notes: "" });
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>🌘 Energy Forecast</h2>
      <p>Track your weekly rhythm and how your energy flows. Suggestions may appear based on mood.</p>

      <input
        type="text"
        placeholder="Day (e.g. Monday, 7/22)"
        value={energy.day}
        onChange={(e) => setEnergy({ ...energy, day: e.target.value })}
        style={{ marginRight: "0.5rem", padding: "0.5rem" }}
      />

      <select
        value={energy.energy}
        onChange={(e) => setEnergy({ ...energy, energy: e.target.value as EnergyEntry["energy"] })}
        style={{ marginRight: "0.5rem", padding: "0.5rem" }}
      >
        <option value="High">💪 High</option>
        <option value="Medium">😌 Medium</option>
        <option value="Low">🫧 Low</option>
      </select>

      <input
        type="text"
        placeholder="Notes or vibe (optional)"
        value={energy.notes}
        onChange={(e) => setEnergy({ ...energy, notes: e.target.value })}
        style={{ padding: "0.5rem", width: "40%" }}
      />

      <button onClick={handleLog} style={{ marginLeft: "1rem" }}>Log Entry</button>

      <ul style={{ marginTop: "2rem" }}>
        {entries.map((entry, i) => (
          <li key={i} style={{ marginBottom: "1rem", background: "#f6f6f6", padding: "1rem", borderRadius: "6px" }}>
            <strong>{entry.day}</strong> — {entry.energy}
            <p>{entry.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
