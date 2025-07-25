// sections/GlimmersLog.tsx
"use client";
import { useState } from "react";

export default function GlimmersLog() {
  const [glimmer, setGlimmer] = useState("");
  const [log, setLog] = useState<string[]>([]);

  const addGlimmer = () => {
    if (glimmer.trim() !== "") {
      setLog([glimmer, ...log]);
      setGlimmer("");
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>🌞 Glimmers Log</h2>
      <p>Little moments that made you smile today. Save them — they matter.</p>

      <textarea
        value={glimmer}
        onChange={(e) => setGlimmer(e.target.value)}
        placeholder="e.g. A sunbeam hit your desk just right. You finished a plush. Robbie made you laugh."
        rows={3}
        style={{ width: "100%", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}
      />
      <button onClick={addGlimmer}>Add Glimmer</button>

      <ul style={{ marginTop: "2rem" }}>
        {log.map((entry, idx) => (
          <li key={idx} style={{ marginBottom: "1rem", background: "#f0f8ff", padding: "1rem", borderRadius: "6px" }}>
            🌱 {entry}
          </li>
        ))}
      </ul>
    </div>
  );
}
