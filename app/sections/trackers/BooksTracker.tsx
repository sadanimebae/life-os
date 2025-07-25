// sections/trackers/BooksTracker.tsx
"use client";
import { useState } from "react";

export default function BooksTracker() {
  const [entry, setEntry] = useState("");
  const [log, setLog] = useState<string[]>([]);

  const handleAdd = () => {
    if (entry.trim() !== "") {
      setLog([...log, entry]);
      setEntry("");
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>📚 Books + Audiobooks</h2>
      <p>Log books, manga, or audiobooks you've read or are currently reading.</p>

      <input
        type="text"
        placeholder="e.g. The Midnight Library (audiobook)"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        style={{ width: "80%", padding: "0.5rem", marginRight: "0.5rem" }}
      />
      <button onClick={handleAdd}>Add</button>

      <ul style={{ marginTop: "1rem" }}>
        {log.map((item, idx) => (
          <li key={idx}>📖 {item}</li>
        ))}
      </ul>
    </div>
  );
}
