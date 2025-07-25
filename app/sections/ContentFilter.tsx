// sections/ContentFilter.tsx
"use client";
import { useState } from "react";

export default function ContentFilter({
  onChange
}: {
  onChange: (filter: "All" | "SFW" | "NSFW") => void;
}) {
  const [filter, setFilter] = useState<"All" | "SFW" | "NSFW">("All");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as "All" | "SFW" | "NSFW";
    setFilter(value);
    onChange(value);
  };

  return (
    <div style={{ marginTop: "2rem", padding: "1rem" }}>
      <h2>🔐 Content Filter</h2>
      <select value={filter} onChange={handleChange} style={{ padding: "0.5rem" }}>
        <option value="All">🌐 All Content</option>
        <option value="SFW">🌸 SFW Only</option>
        <option value="NSFW">🔞 NSFW Only</option>
      </select>
    </div>
  );
}
