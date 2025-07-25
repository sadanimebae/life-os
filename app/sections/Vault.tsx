// sections/Vault.tsx
"use client";
import { useState } from "react";

export default function Vault() {
  const [rewards, setRewards] = useState<string[]>([]);
  const [newReward, setNewReward] = useState("");

  const handleAdd = () => {
    if (newReward.trim() !== "") {
      setRewards([...rewards, newReward]);
      setNewReward("");
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>🧚 Sanctuary Vault</h2>
      <p>Soft rewards you can claim after streaks, resets, or just because you deserve it.</p>

      <input
        type="text"
        placeholder="Add reward: e.g. Plushie yarn, date night, new tea"
        value={newReward}
        onChange={(e) => setNewReward(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem", width: "70%" }}
      />
      <button onClick={handleAdd}>Add</button>

      <ul style={{ marginTop: "1rem" }}>
        {rewards.map((r, i) => (
          <li key={i}>🌸 {r}</li>
        ))}
      </ul>
    </div>
  );
}
