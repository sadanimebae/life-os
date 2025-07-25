// sections/DropCalendar.tsx
"use client";
import { useState } from "react";

type Drop = {
  title: string;
  date: string;
  platform: string;
};

export default function DropCalendar() {
  const [drops, setDrops] = useState<Drop[]>([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [platform, setPlatform] = useState("Etsy");

  const addDrop = () => {
    if (title && date) {
      setDrops([...drops, { title, date, platform }]);
      setTitle("");
      setDate("");
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>📅 Master Drop Calendar</h2>
      <p>Track every launch across platforms. Tie it to your batching studio or vibe system.</p>

      <input
        type="text"
        placeholder="Drop name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem" }}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem" }}
      />

      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem" }}
      >
        <option value="Etsy">Etsy</option>
        <option value="OnlyFans">OnlyFans</option>
        <option value="Instagram">Instagram</option>
        <option value="TikTok">TikTok</option>
        <option value="X">X (Twitter)</option>
        <option value="ManyVids">ManyVids</option>
        <option value="MyFreeCams">MyFreeCams</option>
        <option value="Twitch">Twitch</option>
        <option value="Other">Other</option>
      </select>

      <button onClick={addDrop}>Add</button>

      <ul style={{ marginTop: "1rem" }}>
        {drops.map((drop, i) => (
          <li key={i}>
            🧵 <strong>{drop.title}</strong> — {drop.platform} — <em>{drop.date}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
