// sections/ContentSeries.tsx
"use client";
import { useState } from "react";

type SeriesEntry = {
  title: string;
  platform: string;
  part: number;
  status: "Planned" | "Posted";
};

export default function ContentSeries() {
  const [series, setSeries] = useState<SeriesEntry[]>([]);
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("TikTok");
  const [part, setPart] = useState(1);

  const addSeries = () => {
    if (title.trim() !== "") {
      setSeries([
        ...series,
        { title, platform, part, status: "Planned" }
      ]);
      setTitle("");
      setPart(1);
    }
  };

  const updateStatus = (index: number, newStatus: SeriesEntry["status"]) => {
    const updated = [...series];
    updated[index].status = newStatus;
    setSeries(updated);
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>📚 Content Series Builder</h2>
      <p>Track multi-part posts and long-form content ideas by platform and part.</p>

      <input
        type="text"
        placeholder="Series title (e.g. 'Learning to Find Myself')"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem", width: "45%" }}
      />

      <input
        type="number"
        min={1}
        placeholder="Part #"
        value={part}
        onChange={(e) => setPart(parseInt(e.target.value))}
        style={{ marginRight: "0.5rem", padding: "0.5rem", width: "80px" }}
      />

      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem" }}
      >
        <option value="TikTok">TikTok</option>
        <option value="Instagram">Instagram</option>
        <option value="OnlyFans">OnlyFans</option>
        <option value="X">X (Twitter)</option>
        <option value="ManyVids">ManyVids</option>
      </select>

      <button onClick={addSeries}>Add</button>

      <ul style={{ marginTop: "1.5rem" }}>
        {series.map((entry, idx) => (
          <li key={idx} style={{ marginBottom: "1rem" }}>
            <strong>{entry.title}</strong> (Part {entry.part}) — <em>{entry.platform}</em>
            <br />
            <select
              value={entry.status}
              onChange={(e) => updateStatus(idx, e.target.value as SeriesEntry["status"])}
              style={{ marginTop: "0.5rem" }}
            >
              <option value="Planned">📝 Planned</option>
              <option value="Posted">📤 Posted</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
}
