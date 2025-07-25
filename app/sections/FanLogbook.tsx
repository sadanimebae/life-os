// sections/FanLogbook.tsx
"use client";
import { useState } from "react";

type FanEntry = {
  name: string;
  platform: string;
  notes: string;
};

export default function FanLogbook() {
  const [entries, setEntries] = useState<FanEntry[]>([]);
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState("OnlyFans");
  const [notes, setNotes] = useState("");

  const addEntry = () => {
    if (name.trim() !== "") {
      setEntries([...entries, { name, platform, notes }]);
      setName("");
      setPlatform("OnlyFans");
      setNotes("");
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>📓 Fan Logbook</h2>
      <p>Track your connections, mutuals, and special fan notes.</p>

      <input
        type="text"
        placeholder="Fan or mutual name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem", width: "40%" }}
      />

      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem" }}
      >
        <option value="OnlyFans">OnlyFans</option>
        <option value="X">X (Twitter)</option>
        <option value="Instagram">Instagram</option>
        <option value="ManyVids">ManyVids</option>
        <option value="MyFreeCams">MyFreeCams</option>
        <option value="TikTok">TikTok</option>
      </select>

      <input
        type="text"
        placeholder="Notes or shared info"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        style={{ padding: "0.5rem", width: "50%", marginTop: "0.5rem" }}
      />

      <div style={{ marginTop: "0.5rem" }}>
        <button onClick={addEntry}>Add</button>
      </div>

      <ul style={{ marginTop: "1rem" }}>
        {entries.map((entry, idx) => (
          <li key={idx} style={{ marginBottom: "1rem" }}>
            <strong>{entry.name}</strong> — {entry.platform}
            <br />
            <em>{entry.notes}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
