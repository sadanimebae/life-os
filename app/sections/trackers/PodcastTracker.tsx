// sections/trackers/PodcastTracker.tsx
"use client";
import { useState } from "react";

export default function PodcastTracker() {
  const [podcast, setPodcast] = useState("");
  const [list, setList] = useState<string[]>([]);

  const handleAdd = () => {
    if (podcast.trim() !== "") {
      setList([...list, podcast]);
      setPodcast("");
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>🎧 Podcast Tracker</h2>
      <p>Log your favorite episodes or series and come back to reflect anytime.</p>

      <input
        type="text"
        placeholder="e.g. The Mindset Mentor — Ep. 125"
        value={podcast}
        onChange={(e) => setPodcast(e.target.value)}
        style={{ width: "80%", padding: "0.5rem", marginRight: "0.5rem" }}
      />
      <button onClick={handleAdd}>Add</button>

      <ul style={{ marginTop: "1rem" }}>
        {list.map((item, idx) => (
          <li key={idx}>🎙 {item}</li>
        ))}
      </ul>
    </div>
  );
}
