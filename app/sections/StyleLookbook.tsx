// sections/StyleLookbook.tsx
"use client";
import { useState } from "react";

type Outfit = {
  name: string;
  vibe: string;
  type: string;
  posted: boolean;
  note: string;
};

export default function StyleLookbook() {
  const [fits, setFits] = useState<Outfit[]>([]);
  const [name, setName] = useState("");
  const [vibe, setVibe] = useState("");
  const [type, setType] = useState("Casual");
  const [note, setNote] = useState("");
  const [posted, setPosted] = useState(false);

  const addFit = () => {
    if (name.trim() !== "") {
      setFits([...fits, { name, vibe, type, note, posted }]);
      setName(""); setVibe(""); setType("Casual"); setNote(""); setPosted(false);
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>👗 Style Lookbook + Selfie Diary</h2>
      <p>Log your outfits, moods, and aesthetic vibes.</p>

      <input
        type="text"
        placeholder="Outfit name or description"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "60%", marginRight: "0.5rem", padding: "0.5rem" }}
      />

      <input
        type="text"
        placeholder="Vibe tag (e.g. Cottagecore, Island Babe)"
        value={vibe}
        onChange={(e) => setVibe(e.target.value)}
        style={{ width: "35%", marginRight: "0.5rem", padding: "0.5rem" }}
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem" }}
      >
        <option>Casual</option>
        <option>Event</option>
        <option>Content</option>
        <option>Drop Outfit</option>
        <option>Soft Selfie Only</option>
      </select>

      <label style={{ marginRight: "1rem" }}>
        <input
          type="checkbox"
          checked={posted}
          onChange={() => setPosted(!posted)}
          style={{ marginRight: "0.5rem" }}
        />
        Posted?
      </label>

      <br /><br />

      <textarea
        placeholder="Soft notes about the look, how you felt, or anything else"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={4}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
      />

      <button onClick={addFit}>Save Outfit</button>

      <ul style={{ marginTop: "1rem" }}>
        {fits.map((f, i) => (
          <li key={i} style={{ marginBottom: "1rem" }}>
            <strong>{f.name}</strong> — {f.vibe} — <em>{f.type}</em> {f.posted && "📤"}  
            <br />📝 {f.note}
          </li>
        ))}
      </ul>
    </div>
  );
}
