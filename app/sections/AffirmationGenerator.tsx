// sections/AffirmationGenerator.tsx
"use client";
import { useState } from "react";

const defaultAffirmations = [
  "You are allowed to reset without guilt.",
  "There is no such thing as too late.",
  "You are soft and strong at the same time.",
  "You’re doing better than you think.",
  "You can always pick it back up tomorrow.",
  "You don’t need to earn rest.",
  "Even slow days hold value.",
  "You’re building a life you love — one tiny step at a time.",
];

export default function AffirmationGenerator() {
  const [custom, setCustom] = useState("");
  const [allAffirmations, setAllAffirmations] = useState<string[]>(defaultAffirmations);
  const [current, setCurrent] = useState(defaultAffirmations[0]);

  const rotate = () => {
    const next = allAffirmations[Math.floor(Math.random() * allAffirmations.length)];
    setCurrent(next);
  };

  const addAffirmation = () => {
    if (custom.trim() !== "") {
      setAllAffirmations([...allAffirmations, custom]);
      setCustom("");
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem", background: "#fff9f4", borderRadius: "8px" }}>
      <h2>🪞 Daily Affirmation</h2>
      <p style={{ fontSize: "1.25rem", margin: "1rem 0" }}>“{current}”</p>

      <button onClick={rotate} style={{ marginBottom: "1rem" }}>🌱 Show Another</button>

      <div>
        <input
          type="text"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          placeholder="Add your own affirmation"
          style={{ padding: "0.5rem", marginRight: "0.5rem", width: "65%" }}
        />
        <button onClick={addAffirmation}>Add</button>
      </div>
    </div>
  );
}
