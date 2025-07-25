// sections/VibeSelector.tsx
"use client";
import { useState } from "react";

const vibeTags = [
  "🧶 Cozy Crafter",
  "🎮 Cozy Gamer Girl",
  "💋 Soft Egirl",
  "✨ Bimbo Brain",
  "🌸 Cottagecore Cutie",
  "🏝️ Island Babe",
  "🌿 Forest Nymph",
  "🌙 Dreamy Witch",
  "📚 Study Fairy",
  "🍵 Chill Tea Witch",
  "🔮 Studio Ghibli Soul",
  "🐾 Soft Otaku",
  "📦 Productive Goblin",
  "💻 Hustle Mode",
];

export default function VibeSelector({ onSelect }: { onSelect?: (vibe: string) => void }) {
  const [vibe, setVibe] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVibe(e.target.value);
    onSelect?.(e.target.value);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>🌤️ Today’s Vibe</h2>
      <select value={vibe} onChange={handleChange} style={{ padding: "0.5rem", width: "70%" }}>
        <option value="">Pick your current mood...</option>
        {vibeTags.map((v, i) => (
          <option key={i} value={v}>{v}</option>
        ))}
      </select>
      {vibe && <p style={{ marginTop: "1rem" }}>You’re channeling: <strong>{vibe}</strong></p>}
    </div>
  );
}
