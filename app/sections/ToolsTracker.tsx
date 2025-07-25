// sections/ToolsTracker.tsx
"use client";
import { useState } from "react";

type Tool = {
  name: string;
  use: string;
  cost: string;
};

export default function ToolsTracker() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [name, setName] = useState("");
  const [use, setUse] = useState("");
  const [cost, setCost] = useState("");

  const addTool = () => {
    if (name.trim() !== "" && use.trim() !== "") {
      setTools([...tools, { name, use, cost }]);
      setName("");
      setUse("");
      setCost("");
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>🛠️ Tools + Tech Tracker</h2>
      <p>Track your subscriptions, platforms, apps, or anything digital you use often.</p>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Tool Name (e.g. DayOne)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "0.5rem", marginRight: "0.5rem", width: "30%" }}
        />
        <input
          type="text"
          placeholder="Use/Purpose (e.g. Journaling)"
          value={use}
          onChange={(e) => setUse(e.target.value)}
          style={{ padding: "0.5rem", marginRight: "0.5rem", width: "30%" }}
        />
        <input
          type="text"
          placeholder="Monthly Cost (optional)"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          style={{ padding: "0.5rem", width: "30%" }}
        />
      </div>

      <button onClick={addTool}>Add Tool</button>

      <ul style={{ marginTop: "1.5rem" }}>
        {tools.map((tool, idx) => (
          <li key={idx} style={{ marginBottom: "1rem", background: "#f1f1f1", padding: "0.75rem", borderRadius: "6px" }}>
            <strong>{tool.name}</strong> — <em>{tool.use}</em> {tool.cost && `($${tool.cost}/mo)`}
          </li>
        ))}
      </ul>
    </div>
  );
}
