// sections/ContentSeriesBuilder.tsx
"use client";
import { useState } from "react";

type Series = {
  name: string;
  status: "Open" | "Complete";
  posts: string[];
};

export default function ContentSeriesBuilder() {
  const [seriesList, setSeriesList] = useState<Series[]>([]);
  const [newSeriesName, setNewSeriesName] = useState("");
  const [currentPost, setCurrentPost] = useState("");

  const handleAddSeries = () => {
    if (newSeriesName.trim()) {
      setSeriesList([
        ...seriesList,
        { name: newSeriesName, status: "Open", posts: [] },
      ]);
      setNewSeriesName("");
    }
  };

  const handleAddPost = (index: number) => {
    if (currentPost.trim()) {
      const updated = [...seriesList];
      updated[index].posts.push(currentPost);
      setSeriesList(updated);
      setCurrentPost("");
    }
  };

  const handleCloseSeries = (index: number) => {
    const updated = [...seriesList];
    updated[index].status = "Complete";
    setSeriesList(updated);
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>📚 Content Series Builder</h2>
      <p>Create and manage longform or repeating post series (e.g. TikTok themes).</p>

      <input
        type="text"
        placeholder="Series name (e.g. Learning to Find Myself)"
        value={newSeriesName}
        onChange={(e) => setNewSeriesName(e.target.value)}
        style={{ padding: "0.5rem", width: "70%", marginRight: "0.5rem" }}
      />
      <button onClick={handleAddSeries}>Create Series</button>

      <div style={{ marginTop: "2rem" }}>
        {seriesList.map((s, i) => (
          <div key={i} style={{ marginBottom: "2rem", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>{s.name} {s.status === "Complete" && "✅"}</h3>
            <p>Status: {s.status}</p>
            <ul>
              {s.posts.map((p, idx) => (
                <li key={idx}>📝 {p}</li>
              ))}
            </ul>

            {s.status === "Open" && (
              <>
                <textarea
                  placeholder="What’s changed since your last post?"
                  value={currentPost}
                  onChange={(e) => setCurrentPost(e.target.value)}
                  rows={3}
                  style={{ width: "100%", marginTop: "0.5rem", padding: "0.5rem" }}
                />
                <button onClick={() => handleAddPost(i)} style={{ marginRight: "1rem" }}>Add Post</button>
                <button onClick={() => handleCloseSeries(i)}>Mark as Complete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
