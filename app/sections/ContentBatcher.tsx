// sections/ContentBatcher.tsx
"use client";
import { useState } from "react";

type ContentIdea = {
  title: string;
  platform: string;
  status: "Idea" | "In Progress" | "Posted";
  type: "SFW" | "NSFW";
};

export default function ContentBatcher() {
  const [ideas, setIdeas] = useState<ContentIdea[]>([]);
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("Etsy");
  const [contentType, setContentType] = useState<"SFW" | "NSFW">("SFW");
  const [filter, setFilter] = useState<"All" | "SFW" | "NSFW">("All");

  const addIdea = () => {
    if (title.trim() !== "") {
      setIdeas([
        ...ideas,
        { title, platform, status: "Idea", type: contentType }
      ]);
      setTitle("");
    }
  };

  const updateStatus = (index: number, newStatus: ContentIdea["status"]) => {
    const updated = [...ideas];
    updated[index].status = newStatus;
    setIdeas(updated);
  };

  const filteredIdeas =
    filter === "All" ? ideas : ideas.filter((idea) => idea.type === filter);

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>🧵 Content Batching Studio</h2>
      <p>Add your content ideas and move them through planning stages.</p>

      <input
        type="text"
        placeholder="Post title or idea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem", width: "50%" }}
      />

      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem" }}
      >
        <option value="Etsy">Etsy</option>
        <option value="TikTok">TikTok</option>
        <option value="Instagram">Instagram</option>
        <option value="OnlyFans">OnlyFans</option>
        <option value="X">X (Twitter)</option>
        <option value="ManyVids">ManyVids</option>
        <option value="MyFreeCams">MyFreeCams</option>
      </select>

      <select
        value={contentType}
        onChange={(e) => setContentType(e.target.value as "SFW" | "NSFW")}
        style={{ marginRight: "0.5rem", padding: "0.5rem" }}
      >
        <option value="SFW">🌸 SFW</option>
        <option value="NSFW">🔞 NSFW</option>
      </select>

      <button onClick={addIdea}>Add</button>

      <div style={{ marginTop: "1.5rem" }}>
        <label htmlFor="filter">Filter by Type:</label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value as "All" | "SFW" | "NSFW")}
          style={{ marginLeft: "0.5rem", padding: "0.5rem" }}
        >
          <option value="All">🌐 All</option>
          <option value="SFW">🌸 SFW Only</option>
          <option value="NSFW">🔞 NSFW Only</option>
        </select>
      </div>

      <ul style={{ marginTop: "1.5rem" }}>
        {filteredIdeas.map((idea, idx) => (
          <li key={idx} style={{ marginBottom: "1rem" }}>
            <strong>{idea.title}</strong> — <em>{idea.platform}</em> ({idea.type})
            <br />
            <select
              value={idea.status}
              onChange={(e) => updateStatus(idx, e.target.value as ContentIdea["status"])}
              style={{ marginTop: "0.5rem" }}
            >
              <option value="Idea">🧠 Idea</option>
              <option value="In Progress">🛠 In Progress</option>
              <option value="Posted">📤 Posted</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
}
