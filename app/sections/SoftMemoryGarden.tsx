// sections/SoftMemoryGarden.tsx
"use client";
import { useState } from "react";

export default function SoftMemoryGarden() {
  const [letter, setLetter] = useState("");
  const [log, setLog] = useState<string[]>([]);

  const handleSave = () => {
    if (letter.trim() !== "") {
      setLog([...log, letter]);
      setLetter("");
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>🌸 Soft Memory Garden</h2>
      <p>Write a gentle note to yourself for this month. You can always return to reflect.</p>

      <textarea
        placeholder="Dear me... (Write about your month, how you feel, what changed)"
        value={letter}
        onChange={(e) => setLetter(e.target.value)}
        rows={6}
        style={{ width: "100%", padding: "1rem", marginBottom: "1rem", borderRadius: "8px" }}
      />

      <button onClick={handleSave}>Save Reflection</button>

      <ul style={{ marginTop: "2rem" }}>
        {log.map((entry, idx) => (
          <li key={idx} style={{ marginBottom: "1.5rem", background: "#f5f5f5", padding: "1rem", borderRadius: "6px" }}>
            <strong>📝 Reflection #{log.length - idx}</strong>
            <p>{entry}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
