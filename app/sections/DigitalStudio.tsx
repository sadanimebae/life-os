// sections/DigitalStudio.tsx
"use client";
import { useState } from "react";

type DigitalItem = {
  name: string;
  type: string;
  theme: string;
  price: string;
  status: "Idea" | "In Progress" | "Published";
};

export default function DigitalStudio() {
  const [items, setItems] = useState<DigitalItem[]>([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("Wallpaper");
  const [theme, setTheme] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState<DigitalItem["status"]>("Idea");

  const addItem = () => {
    if (name.trim() !== "" && theme.trim() !== "") {
      setItems([
        ...items,
        { name, type, theme, price, status }
      ]);
      setName(""); setTheme(""); setPrice(""); setStatus("Idea");
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>💾 Digital Product Studio</h2>
      <p>Create and track wallpapers, zines, bundles, and more.</p>

      <input
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem" }}
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem" }}
      >
        <option>Wallpaper</option>
        <option>Zine</option>
        <option>Printable</option>
        <option>Bundle</option>
        <option>Pattern PDF</option>
        <option>Other</option>
      </select>

      <input
        type="text"
        placeholder="Theme or Moodboard"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem" }}
      />

      <input
        type="text"
        placeholder="Price (optional)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem", width: "90px" }}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as DigitalItem["status"])}
        style={{ marginRight: "0.5rem", padding: "0.5rem" }}
      >
        <option>Idea</option>
        <option>In Progress</option>
        <option>Published</option>
      </select>

      <button onClick={addItem}>Add</button>

      <ul style={{ marginTop: "1rem" }}>
        {items.map((item, i) => (
          <li key={i}>
            🧷 <strong>{item.name}</strong> — {item.type} — {item.theme} — ${item.price || "Free"} — <em>{item.status}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
