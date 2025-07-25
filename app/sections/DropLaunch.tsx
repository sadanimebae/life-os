// sections/DropLaunch.tsx
"use client";
import { useState } from "react";
import { useDropLink } from "../utils/useDropLink";

export default function DropLaunch() {
  const [dropName, setDropName] = useState("");
  const [drops, setDrops] = useState<string[]>([]);

  useDropLink("DropLaunch", dropName || "Unnamed Drop");

  const handleAdd = () => {
    if (dropName.trim() !== "") {
      setDrops([...drops, dropName]);
      setDropName("");
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>📦 Drop Launch Studio</h2>
      <p>Track your product or content drops and link them across Etsy, OnlyFans, and more.</p>

      <input
        type="text"
        placeholder="Drop name: e.g. Plushie Parade, Bunny Drop, OF Content Drop"
        value={dropName}
        onChange={(e) => setDropName(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem", width: "60%" }}
      />
      <button onClick={handleAdd}>Add Drop</button>

      <ul style={{ marginTop: "1.5rem" }}>
        {drops.map((drop, idx) => (
          <li key={idx} style={{ marginBottom: "0.75rem" }}>
            🌸 <strong>{drop}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
