// sections/DigitalProductStudio.tsx
"use client";
import { useState } from "react";

type Product = {
  name: string;
  theme: string;
  status: "Idea" | "Draft" | "Ready";
};

export default function DigitalProductStudio() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("Studio Ghibli");

  const handleAdd = () => {
    if (name.trim()) {
      setProducts([
        ...products,
        { name, theme, status: "Idea" }
      ]);
      setName("");
    }
  };

  const updateStatus = (index: number, newStatus: Product["status"]) => {
    const updated = [...products];
    updated[index].status = newStatus;
    setProducts(updated);
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>📁 Digital Product Studio</h2>
      <p>Organize your wallpapers, zines, and digital bundles here.</p>

      <input
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem", width: "60%" }}
      />

      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem" }}
      >
        <option value="Studio Ghibli">Studio Ghibli</option>
        <option value="Tropical Fairycore">Tropical Fairycore</option>
        <option value="Clean Girl">Clean Girl</option>
        <option value="Y2K Otaku">Y2K Otaku</option>
        <option value="Cottagecore">Cottagecore</option>
      </select>

      <button onClick={handleAdd}>Add</button>

      <ul style={{ marginTop: "1.5rem" }}>
        {products.map((p, i) => (
          <li key={i} style={{ marginBottom: "1rem" }}>
            <strong>{p.name}</strong> — <em>{p.theme}</em>
            <br />
            <select
              value={p.status}
              onChange={(e) => updateStatus(i, e.target.value as Product["status"])}
              style={{ marginTop: "0.5rem" }}
            >
              <option value="Idea">🧠 Idea</option>
              <option value="Draft">✍️ Draft</option>
              <option value="Ready">📤 Ready</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
}
