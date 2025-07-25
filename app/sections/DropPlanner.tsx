// sections/DropPlanner.tsx
"use client";
import { useState } from "react";

export default function DropPlanner() {
  const [dropName, setDropName] = useState("");
  const [drops, setDrops] = useState<string[]>([]);

  const handleAdd = () => {
    if (dropName.trim() !== "") {
      setDrops([...drops, dropName]);
      setDropName("");
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>🎁 Drop Launch Calendar</h2>
      <p>Track your product drops and launch phases.</p>

      <input
        type="text"
        placeholder="Add drop name (e.g. Plushie Fall Drop)"
        value={dropName}
        onChange={(e) => setDropName(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem", width: "70%" }}
      />
      <button onClick={handleAdd}>Add Drop</button>

      <ul style={{ marginTop: "1rem" }}>
        {drops.map((drop, i) => (
          <li key={i}>✨ {drop}</li>
        ))}
      </ul>
    </div>
  );
}
