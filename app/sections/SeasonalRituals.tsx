// sections/SeasonalRituals.tsx
"use client";
import { useState } from "react";

const ritualSuggestions = {
  "🌸 Spring Fairycore": ["Plant something small", "Write a letter to future you", "Tidy a cozy nook"],
  "🏝️ Summer Isla Babe": ["Hydrate + light skincare", "Make a tropical snack", "Wear something flowy"],
  "🍁 Autumn Cottage Witch": ["Cleanse with incense or candles", "Read under a blanket", "Soft journal your thoughts"],
  "❄️ Winter Ghibli Dream": ["Watch a comfort film", "Drink warm tea", "Ghibli sketch or draw"],
};

export default function SeasonalRituals() {
  const [theme, setTheme] = useState("🏝️ Summer Isla Babe");

  const rituals = ritualSuggestions[theme as keyof typeof ritualSuggestions] || [];

  return (
    <div style={{ padding: "1rem", marginTop: "2rem", backgroundColor: "#fff7ed", borderRadius: "8px" }}>
      <h2>🌙 Seasonal Ritual Suggestions</h2>
      <p>Refresh your magic with these soft rituals for your current theme:</p>

      <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem" }}>
        {rituals.map((ritual, idx) => (
          <li key={idx}>✨ {ritual}</li>
        ))}
      </ul>
    </div>
  );
}
