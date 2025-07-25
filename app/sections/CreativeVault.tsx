// sections/CreativeVault.tsx
"use client";
import { useState, useEffect } from "react";

type ContentIdea = {
  title: string;
  details: string;
  tags: string[];
};

export default function CreativeVault({ vibe }: { vibe?: string }) {
  const [ideas, setIdeas] = useState<ContentIdea[]>([]);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [tags, setTags] = useState("");
  const [filteredIdeas, setFilteredIdeas] = useState<ContentIdea[]>([]);

  const handleAdd = () => {
    if (title.trim() === "") return;
    const tagArray = tags.split(",").map((tag) => tag.trim());
    const newIdea = { title, details, tags: tagArray };
    const updated = [newIdea, ...ideas];
    setIdeas(updated);
    setTitle("");
    setDetails("");
    setTags("");
    setFilteredIdeas(filterIdeasByVibe(updated, vibe));
  };

  const filterIdeasByVibe = (list: ContentIdea[], vibe?: string) => {
    if (!vibe) return list;
    const keyword = vibe.toLowerCase().split(" ").pop() || "";
    return list.filter((idea) =>
      idea.tags.some((tag) => tag.toLowerCase().includes(keyword))
    );
  };

  useEffect(() => {
    setFilteredIdeas(filterIdeasByVibe(ideas, vibe));
  }, [vibe, ideas]);

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>📦 Creative Vault</h2>
      <p>Log every idea — from TikToks to plushie designs, promo captions, and more.</p>

      <input
        type="text"
        placeholder="Title: e.g. Bunny with bubble tea gun"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginTop: "1rem" }}
      />
      <textarea
        placeholder="Details or notes..."
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        rows={4}
        style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
      />
      <input
        type="text"
        placeholder="Tags (comma-separated): e.g. plushie, TikTok, NSFW"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
      />
      <button onClick={handleAdd} style={{ marginTop: "1rem" }}>➕ Add Idea</button>

      <h3 style={{ marginTop: "2rem" }}>✨ Ideas for today’s vibe</h3>
      <ul>
        {filteredIdeas.map((idea, i) => (
          <li key={i} style={{ marginBottom: "1.5rem", padding: "1rem", background: "#f3f3f3", borderRadius: "8px" }}>
            <h4>{idea.title}</h4>
            <p>{idea.details}</p>
            <p><strong>Tags:</strong> {idea.tags.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
