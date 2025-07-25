// sections/trackers/Recipes.tsx
"use client";
import { useState } from "react";

export default function Recipes() {
  const [recipe, setRecipe] = useState("");
  const [log, setLog] = useState<string[]>([]);

  const handleSave = () => {
    if (recipe.trim() !== "") {
      setLog([...log, recipe]);
      setRecipe("");
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>🍳 Cozy Kitchen Log</h2>
      <p>Track meals you’ve cooked or tried — add notes or just the name!</p>

      <input
        type="text"
        placeholder="e.g. Spicy ramen with tofu, egg sandwich with scallion mayo"
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)}
        style={{ width: "80%", padding: "0.5rem", marginRight: "0.5rem" }}
      />
      <button onClick={handleSave}>Add</button>

      <ul style={{ marginTop: "1rem" }}>
        {log.map((entry, idx) => (
          <li key={idx}>🍽️ {entry}</li>
        ))}
      </ul>
    </div>
  );
}
