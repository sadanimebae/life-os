// sections/Overflow.tsx
"use client";
import { useState } from "react";

export default function Overflow() {
  const [entry, setEntry] = useState("");
  const [overflowItems, setOverflowItems] = useState<string[]>([]);

  const handleAdd = () => {
    if (entry.trim() !== "") {
      setOverflowItems([...overflowItems, entry]);
      setEntry("");
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>🌀 Overflow Tab</h2>
      <p>Drop ideas, tasks, or thoughts you haven’t filed yet.</p>
      <input
        type="text"
        placeholder="Type it out and save it here..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        style={{ width: "70%", padding: "0.5rem", marginRight: "0.5rem" }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul style={{ marginTop: "1rem" }}>
        {overflowItems.map((item, idx) => (
          <li key={idx}>💭 {item}</li>
        ))}
      </ul>
    </div>
  );
}
