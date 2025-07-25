// sections/GiftLog.tsx
"use client";
import { useState } from "react";

type GiftEntry = {
  event: string;
  person: string;
  idea: string;
  status: "Planned" | "Purchased" | "Given";
};

export default function GiftLog() {
  const [entries, setEntries] = useState<GiftEntry[]>([]);
  const [event, setEvent] = useState("");
  const [person, setPerson] = useState("");
  const [idea, setIdea] = useState("");

  const addGift = () => {
    if (event && person && idea) {
      setEntries([
        ...entries,
        { event, person, idea, status: "Planned" },
      ]);
      setEvent("");
      setPerson("");
      setIdea("");
    }
  };

  const updateStatus = (index: number, newStatus: GiftEntry["status"]) => {
    const updated = [...entries];
    updated[index].status = newStatus;
    setEntries(updated);
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>🎁 Gift + Occasion Log</h2>
      <p>Remember special events and keep track of gifts thoughtfully.</p>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="e.g. Birthday, Christmas, Anniversary"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          style={{ marginRight: "0.5rem", padding: "0.5rem", width: "30%" }}
        />
        <input
          type="text"
          placeholder="e.g. Robbie, Mom, Jen"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
          style={{ marginRight: "0.5rem", padding: "0.5rem", width: "30%" }}
        />
        <input
          type="text"
          placeholder="e.g. New Switch case, Cozy candle, Ghibli print"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          style={{ padding: "0.5rem", width: "30%" }}
        />
        <button onClick={addGift} style={{ marginLeft: "0.5rem" }}>Add</button>
      </div>

      <ul>
        {entries.map((entry, idx) => (
          <li key={idx} style={{ marginBottom: "1rem" }}>
            <strong>{entry.event}</strong> for <em>{entry.person}</em> — 🎁 {entry.idea}
            <br />
            <select
              value={entry.status}
              onChange={(e) =>
                updateStatus(idx, e.target.value as GiftEntry["status"])
              }
              style={{ marginTop: "0.5rem" }}
            >
              <option value="Planned">📝 Planned</option>
              <option value="Purchased">🛍️ Purchased</option>
              <option value="Given">🎉 Given</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
}
