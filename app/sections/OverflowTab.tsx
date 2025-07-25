// sections/OverflowTab.tsx
"use client";
import { useState } from "react";

export default function OverflowTab() {
  const [entries, setEntries] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addEntry = () => {
    if (input.trim() !== "") {
      setEntries([...entries, input]);
      setInput("");
    }
  };

  const removeEntry = (index: number) => {
    const updated = [...entries];
    updated.splice(index, 1);
    setEntries(updated);
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>🌀 Overflow Tab</h2>
      <p>Soft notes, stray thoughts, or random sparks — hold them here for now.</p>

      <textarea
        placeholder="Type anything here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={3}
        style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", marginBottom: "1rem" }}
      />

      <button onClick={addEntry}>Add</button>

      <ul style={{ marginTop: "1.5rem" }}>
        {entries.map((entry, i) => (
          <li key={i} style={{ background: "#eef6f9", padding: "0.75rem", marginBottom: "1rem", borderRadius: "6px" }}>
            {entry}
            <button
              onClick={() => removeEntry(i)}
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
