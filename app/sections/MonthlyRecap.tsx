// sections/MonthlyRecap.tsx
"use client";
import { useState } from "react";

export default function MonthlyRecap() {
  const [reflection, setReflection] = useState("");
  const [letter, setLetter] = useState("");
  const [moodWord, setMoodWord] = useState("");

  return (
    <div style={{ padding: "1rem" }}>
      <h2>🌕 Monthly Recap + Emotional Archive</h2>

      <label>
        🌼 Reflection Prompt:
        <textarea
          placeholder="What was your biggest emotional win this month?"
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          style={{ width: "100%", marginTop: "0.5rem" }}
        />
      </label>

      <label style={{ marginTop: "1rem", display: "block" }}>
        💌 Write a Soft Letter to Yourself:
        <textarea
          placeholder="Dear me, I'm proud of you for..."
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
          style={{ width: "100%", marginTop: "0.5rem" }}
        />
      </label>

      <label style={{ marginTop: "1rem", display: "block" }}>
        🌙 Mood Word for Next Month:
        <input
          type="text"
          placeholder="e.g. Rebirth, Softness, Glow"
          value={moodWord}
          onChange={(e) => setMoodWord(e.target.value)}
          style={{ marginTop: "0.5rem", padding: "0.5rem", width: "100%" }}
        />
      </label>
    </div>
  );
}
