// sections/JapanTravelPlanner.tsx
"use client";
import { useState } from "react";

type TravelEntry = {
  date: string;
  activity: string;
  location: string;
  notes?: string;
};

export default function JapanTravelPlanner() {
  const [entries, setEntries] = useState<TravelEntry[]>([]);
  const [newEntry, setNewEntry] = useState<TravelEntry>({
    date: "",
    activity: "",
    location: "",
    notes: "",
  });

  const addEntry = () => {
    if (newEntry.date && newEntry.activity && newEntry.location) {
      setEntries([...entries, newEntry]);
      setNewEntry({ date: "", activity: "", location: "", notes: "" });
    }
  };

  return (
    <div id="travel" style={{ padding: "2rem" }}>
      <h2>🗾 Japan Trip Planner</h2>
      <p>Add your itinerary stops, Eki stamps, and important details.</p>

      <input
        type="text"
        placeholder="Date (e.g. Aug 15)"
        value={newEntry.date}
        onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
        style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
      />
      <input
        type="text"
        placeholder="Activity or Stop"
        value={newEntry.activity}
        onChange={(e) => setNewEntry({ ...newEntry, activity: e.target.value })}
        style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
      />
      <input
        type="text"
        placeholder="Location"
        value={newEntry.location}
        onChange={(e) => setNewEntry({ ...newEntry, location: e.target.value })}
        style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
      />
      <input
        type="text"
        placeholder="Extra Notes"
        value={newEntry.notes}
        onChange={(e) => setNewEntry({ ...newEntry, notes: e.target.value })}
        style={{ width: "100%", marginBottom: "0.5rem" }}
      />
      <button onClick={addEntry}>Add Entry</button>

      <ul style={{ marginTop: "1.5rem" }}>
        {entries.map((entry, idx) => (
          <li key={idx} style={{ marginBottom: "1rem" }}>
            <strong>{entry.date}</strong> — {entry.activity} @ {entry.location}
            {entry.notes && <p style={{ margin: 0 }}>📝 {entry.notes}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
