// sections/GrowthArchive.tsx
"use client";
import { useState } from "react";

export default function GrowthArchive() {
  const [note, setNote] = useState("");
  const [archive, setArchive] = useState<string[]>([]);

  const saveNote = () => {
    if (note.trim() !== "") {
      setArchive([...archive, note]);
      setNote("");
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>🌱 Growth Archive</h2>
      <p>Log mindset shifts, self-love moments, and things you're proud of.</p>

      <textarea
        placeholder="Write about a moment you grew, even a little."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={4}
        style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", marginBottom: "1rem" }}
      />

      <button onClick={saveNote}>Save to Archive</button>

      <ul style={{ marginTop: "1.5rem" }}>
        {archive.map((entry, idx) => (
          <li key={idx} style={{ background: "#f4fff2", padding: "1rem", marginBottom: "1rem", borderRadius: "6px" }}>
            <strong>🌼 Growth Moment #{archive.length - idx}</strong>
            <p>{entry}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
