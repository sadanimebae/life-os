// sections/ThemeToggle.tsx
"use client";
import { useState } from "react";

const themes = [
  "🌸 Spring Fairycore",
  "🏝️ Summer Isla Babe",
  "🍁 Autumn Cottage Witch",
  "❄️ Winter Ghibli Dream",
];

const lunarOverlay = [
  "🌑 New Moon — gentle reset",
  "🌓 First Quarter — soft push",
  "🌕 Full Moon — energy boost",
  "🌗 Last Quarter — reflect + release",
];

export default function ThemeToggle() {
  const [theme, setTheme] = useState("");
  const [lunar, setLunar] = useState("");

  return (
    <div style={{ padding: "1rem", marginTop: "2rem", backgroundColor: "#fdf6e3", borderRadius: "8px" }}>
      <h2>🪐 Seasonal & Lunar Sync</h2>

      <label>Pick your seasonal theme:</label>
      <select value={theme} onChange={(e) => setTheme(e.target.value)} style={{ margin: "0.5rem", padding: "0.5rem" }}>
        <option value="">— Choose Season —</option>
        {themes.map((t, i) => (
          <option key={i} value={t}>{t}</option>
        ))}
      </select>

      <label>Pick current moon phase:</label>
      <select value={lunar} onChange={(e) => setLunar(e.target.value)} style={{ margin: "0.5rem", padding: "0.5rem" }}>
        <option value="">— Choose Moon —</option>
        {lunarOverlay.map((l, i) => (
          <option key={i} value={l}>{l}</option>
        ))}
      </select>

      {theme && <p style={{ marginTop: "1rem" }}>🧵 Theme active: <strong>{theme}</strong></p>}
      {lunar && <p>🌘 Lunar overlay: <em>{lunar}</em></p>}
    </div>
  );
}
