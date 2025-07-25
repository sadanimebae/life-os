// sections/ToggleCenter.tsx
"use client";
import { useState } from "react";

export default function ToggleCenter() {
  const [theme, setTheme] = useState("CozyLofi + Plants");
  const [ambience, setAmbience] = useState({
    lofi: true,
    seasonal: false,
    holiday: false,
  });

  const handleAmbienceToggle = (key: keyof typeof ambience) => {
    setAmbience((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>🎛️ Theme & Ambience Control</h2>
      <p>Pick your base vibe and toggle extras like sound or seasonal style.</p>

      <div style={{ marginBottom: "1rem" }}>
        <label>🌿 Theme:</label>
        <select value={theme} onChange={handleThemeChange} style={{ marginLeft: "1rem" }}>
          <option>CozyLofi + Plants</option>
          <option>Spring Fairycore</option>
          <option>Summer Isla Babe</option>
          <option>Autumn Cottage Witch</option>
          <option>Winter Studio Ghibli Dream</option>
          <option>Holiday Magic</option>
        </select>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={ambience.lofi}
            onChange={() => handleAmbienceToggle("lofi")}
          />
          🎵 Lofi Ambience
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={ambience.seasonal}
            onChange={() => handleAmbienceToggle("seasonal")}
          />
          🍃 Seasonal Toggle
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={ambience.holiday}
            onChange={() => handleAmbienceToggle("holiday")}
          />
          🎄 Holiday Mode
        </label>
      </div>

      <p style={{ marginTop: "1rem" }}>
        Current Theme: <strong>{theme}</strong>
      </p>
    </div>
  );
}

