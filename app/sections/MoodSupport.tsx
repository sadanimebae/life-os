// sections/MoodSupport.tsx
"use client";
import { useState } from "react";

export default function MoodSupport() {
  const [mood, setMood] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const suggestionsMap: Record<string, string[]> = {
    low: [
      "Take 3 deep breaths with your eyes closed",
      "Light a candle and journal a tiny win",
      "Watch a comfort YouTuber while folding laundry",
      "Put on a playlist and crochet just one row"
    ],
    medium: [
      "Tidy your creative desk for 5 minutes",
      "Sketch or brainstorm a silly product idea",
      "Post a soft selfie to stories — no pressure",
      "Revisit your Drop Calendar — what's most exciting?"
    ],
    high: [
      "Record one TikTok using your vault idea",
      "Finish editing a drop listing and schedule it",
      "Batch content for 15 mins with your best vibe",
      "Set a timer and knock out a short school task"
    ],
  };

  const handleGenerate = () => {
    if (mood && suggestionsMap[mood]) {
      const options = suggestionsMap[mood];
      const random = options[Math.floor(Math.random() * options.length)];
      setSuggestion(random);
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>🌘 Mood-to-Action Converter</h2>
      <p>Select your energy and get a gentle next step.</p>

      <select
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        style={{ padding: "0.5rem", marginRight: "0.5rem" }}
      >
        <option value="">How’s your vibe?</option>
        <option value="low">🥺 Low Energy</option>
        <option value="medium">🙂 Kinda Okay</option>
        <option value="high">💫 Feeling Good</option>
      </select>
      <button onClick={handleGenerate}>Suggest Something</button>

      {suggestion && (
        <div style={{ marginTop: "1rem", padding: "1rem", background: "#f0f0f0", borderRadius: "8px" }}>
          <strong>✨ Try this:</strong>
          <p>{suggestion}</p>
        </div>
      )}
    </div>
  );
}
