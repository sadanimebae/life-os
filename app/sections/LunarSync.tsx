// sections/LunarSync.tsx
"use client";
import { useState } from "react";

export default function LunarSync() {
  const [entry, setEntry] = useState("");
  const [saved, setSaved] = useState<string[]>([]);

  const handleSave = () => {
    if (entry.trim() !== "") {
      setSaved([...saved, entry]);
      setEntry("");
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem", backgroundColor: "#f4f0ff", borderRadius: "8px" }}>
      <h2>🌑 New Moon Ritual</h2>
      <p>Use this space to plant seeds of intention during the new moon, or reflect during full moon shifts.</p>

      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Ritual prompt: What are you ready to release this cycle? What are you calling in?"
        rows={6}
        style={{ width: "100%", padding: "1rem", marginBottom: "1rem", borderRadius: "6px" }}
      />

      <button onClick={handleSave}>Save Ritual Entry</button>

      <ul style={{ marginTop: "1.5rem" }}>
        {saved.map((r, idx) => (
          <li key={idx} style={{ background: "#fff", padding: "1rem", marginBottom: "1rem", borderRadius: "6px" }}>
            <strong>🌘 Entry #{saved.length - idx}</strong>
            <p>{r}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
