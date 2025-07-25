// sections/ProductTracker.tsx
"use client";
import { useState } from "react";

type Product = {
  name: string;
  category: string;
  status: string;
  dropTag: string;
  notes: string;
};

export default function ProductTracker() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState<Product>({
    name: "",
    category: "Plushie",
    status: "Planning",
    dropTag: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (form.name.trim()) {
      setProducts([...products, form]);
      setForm({ name: "", category: "Plushie", status: "Planning", dropTag: "", notes: "" });
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>🧵 Product Tracker</h2>
      <p>Track plushies, clothing, keycaps, digital art, and more — by category and drop.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Product name" />
        <select name="category" value={form.category} onChange={handleChange}>
          <option>Plushie</option>
          <option>Clothing</option>
          <option>Accessory</option>
          <option>Clay Keycap</option>
          <option>Digital Art</option>
          <option>Crochet Tapestry</option>
          <option>Custom Order</option>
        </select>
        <select name="status" value={form.status} onChange={handleChange}>
          <option>Planning</option>
          <option>In Progress</option>
          <option>Complete</option>
          <option>Packaged</option>
          <option>Listed</option>
        </select>
        <input name="dropTag" value={form.dropTag} onChange={handleChange} placeholder="Drop or Tag (e.g. Spirited Fall)" />
        <input name="notes" value={form.notes} onChange={handleChange} placeholder="Notes, materials, etc." />
        <button onClick={handleAdd}>Add Product</button>
      </div>

      <ul>
        {products.map((p, i) => (
          <li key={i}>
            <strong>{p.name}</strong> — {p.category} | {p.status} | Drop: {p.dropTag}
            <br />
            <em>{p.notes}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
