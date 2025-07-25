// sections/HomeNest.tsx
"use client";
import { useState } from "react";

export default function HomeNest() {
  const [ritual, setRitual] = useState("");
  const [rituals, setRituals] = useState<string[]>([]);

  const [wishlistItem, setWishlistItem] = useState("");
  const [wishlist, setWishlist] = useState<string[]>([]);

  const addRitual = () => {
    if (ritual.trim() !== "") {
      setRituals([...rituals, ritual]);
      setRitual("");
    }
  };

  const addWishlist = () => {
    if (wishlistItem.trim() !== "") {
      setWishlist([...wishlist, wishlistItem]);
      setWishlistItem("");
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>🏡 Home Nest</h2>
      <p>Track your cozy cleaning rituals, decor swaps, and home upgrades.</p>

      <div style={{ marginBottom: "1rem" }}>
        <h4>✨ Cleaning Rituals</h4>
        <input
          type="text"
          placeholder="Add ritual: e.g. Sunday deep clean, litter box M/W/F"
          value={ritual}
          onChange={(e) => setRitual(e.target.value)}
          style={{ marginRight: "0.5rem", padding: "0.5rem" }}
        />
        <button onClick={addRitual}>Add Ritual</button>
        <ul style={{ marginTop: "1rem" }}>
          {rituals.map((r, i) => (
            <li key={i}>🧼 {r}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4>🪴 Home Wishlist</h4>
        <input
          type="text"
          placeholder="Add wishlist item: e.g. Fairy lights, pastel throw pillows"
          value={wishlistItem}
          onChange={(e) => setWishlistItem(e.target.value)}
          style={{ marginRight: "0.5rem", padding: "0.5rem" }}
        />
        <button onClick={addWishlist}>Add Wishlist Item</button>
        <ul style={{ marginTop: "1rem" }}>
          {wishlist.map((item, i) => (
            <li key={i}>📝 {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
