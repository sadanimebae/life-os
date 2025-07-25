// sections/MoodForecast.tsx
"use client";
import { useState } from "react";

const weeklyEnergy = [
  "🌕 Monday: Power surge — Great for focused work.",
  "🌖 Tuesday: Steady momentum — Plan, don’t force.",
  "🌗 Wednesday: Midweek fog — Soft progress only.",
  "🌘 Thursday: Emotional processing — Go slow.",
  "🌑 Friday: Fresh insights — Organize and recharge.",
  "🌒 Saturday: Cozy creativity — Let it flow.",
  "🌓 Sunday: Reset and reflect — Prep gently.",
];

export default function MoodForecast() {
  const [showTips, setShowTips] = useState(false);

  const lowEnergyIdeas = [
    "📺 Watch a comfort anime episode",
    "🧼 Fold laundry while listening to lofi",
    "🧶 Crochet for 15 minutes, no pressure to finish",
    "📖 Read one manga chapter or podcast snippet",
    "🕯️ Light a candle and update your planner",
  ];

  return (
    <div style={{ padding: "1rem", marginTop: "2rem", backgroundColor: "#f0f8ff", borderRadius: "8px" }}>
      <h2>🔮 Weekly Mood Forecast</h2>
      <ul>
        {weeklyEnergy.map((tip, i) => (
          <li key={i} style={{ marginBottom: "0.5rem" }}>{tip}</li>
        ))}
      </ul>

      <button onClick={() => setShowTips(!showTips)} style={{ marginTop: "1rem" }}>
        {showTips ? "Hide Low-Energy Ideas" : "Show Low-Energy Helpers"}
      </button>

      {showTips && (
        <ul style={{ marginTop: "1rem" }}>
          {lowEnergyIdeas.map((idea, i) => (
            <li key={i}>🌙 {idea}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
