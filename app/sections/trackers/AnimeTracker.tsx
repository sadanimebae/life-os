// sections/trackers/AnimeTracker.tsx
"use client";
import { useState } from "react";

type AnimeEntry = {
  title: string;
  status: "Watching" | "Completed" | "Plan to Watch";
  mood: string;
  thoughts: string;
};

export default function AnimeTracker() {
  const [entries, setEntries] = useState<AnimeEntry[]>([]);
  const [newEntry, setNewEntry] = useState<AnimeEntry>({
    title: "",
    status: "Watching",
    mood: "",
    thoughts: "",
  });

  const addEntry = () => {
    if (newEntry.title.trim() !== "") {
      setEntries([newEntry, ...entries]);
      setNewEntry({ title: "", status: "Watching", mood: "", thoughts: "" });
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>📺 Anime + Shows Tracker</h2>
      <input
        type="text"
        placeholder="Title"
        value={newEntry.title}
        onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
        style={{ margin: "0.5rem", padding: "0.5rem" }}
      />
      <select
        value={newEntry.status}
        onChange={(e) =>
          setNewEntry({ ...newEntry, status: e.target.value as AnimeEntry["status"] })
        }
        style={{ margin: "0.5rem", padding: "0.5rem" }}
      >
        <option value="Watching">Watching</option>
        <option value="Completed">Completed</option>
        <option value="Plan to Watch">Plan to Watch</option>
      </select>
      <input
        type="text"
        placeholder="Mood (e.g. cozy, intense)"
        value={newEntry.mood}
        onChange={(e) => setNewEntry({ ...newEntry, mood: e.target.value })}
        style={{ margin: "0.5rem", padding: "0.5rem" }}
      />
      <textarea
        placeholder="Quick thoughts..."
        value={newEntry.thoughts}
        onChange={(e) => setNewEntry({ ...newEntry, thoughts: e.target.value })}
        style={{ width: "100%", marginTop: "0.5rem", padding: "0.5rem" }}
      />
      <button onClick={addEntry} style={{ marginTop: "1rem" }}>
        ➕ Add Entry
      </button>

      <ul style={{ marginTop: "2rem" }}>
        {entries.map((entry, idx) => (
          <li key={idx} style={{ marginBottom: "1rem", background: "#f4f4f4", padding: "1rem", borderRadius: "8px" }}>
            <strong>{entry.title}</strong> — {entry.status} ({entry.mood})
            <p>{entry.thoughts}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
