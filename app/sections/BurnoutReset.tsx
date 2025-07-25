// sections/BurnoutReset.tsx
"use client";
import { useState } from "react";

export default function BurnoutReset() {
  const [isBurnedOut, setIsBurnedOut] = useState(false);
  const [comfortMode, setComfortMode] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const triggerReset = () => {
    setIsBurnedOut(true);
    setComfortMode(true);
    setLogs([...logs, new Date().toLocaleString()]);
  };

  const exitComfort = () => {
    setComfortMode(false);
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem", backgroundColor: comfortMode ? "#fdf6e3" : "transparent" }}>
      <h2>🧯 Burnout Reset</h2>
      <p>If you’re feeling overwhelmed, press the button below to activate comfort mode and log the reset.</p>

      {!comfortMode ? (
        <button onClick={triggerReset}>Trigger Comfort Mode</button>
      ) : (
        <>
          <p style={{ marginTop: "1rem" }}>🫧 Comfort Mode is ON — breathe, you’re safe.</p>
          <button onClick={exitComfort} style={{ marginTop: "1rem" }}>Exit Comfort Mode</button>
        </>
      )}

      <ul style={{ marginTop: "1.5rem" }}>
        {logs.map((log, idx) => (
          <li key={idx}>💾 Reset logged on {log}</li>
        ))}
      </ul>
    </div>
  );
}
