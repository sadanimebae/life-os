// sections/WellnessTracker.tsx
"use client";
import { useState } from "react";

type Entry = {
  date: string;
  period: boolean;
  birthControl: boolean;
  vitamins: string;
  notes: string;
};

export default function WellnessTracker() {
  const [date, setDate] = useState("");
  const [period, setPeriod] = useState(false);
  const [birthControl, setBirthControl] = useState(false);
  const [vitamins, setVitamins] = useState("");
  const [notes, setNotes] = useState("");
  const [log, setLog] = useState<Entry[]>([]);

  const handleAdd = () => {
    if (date) {
      setLog([
        ...log,
        { date, period, birthControl, vitamins, notes }
      ]);
      setDate("");
      setPeriod(false);
      setBirthControl(false);
      setVitamins("");
      setNotes("");
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>🌿 Health + Wellness Log</h2>
      <p>Track your body, cycle, and vitamin routines.</p>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ padding: "0.5rem", marginBottom: "0.5rem" }}
      />

      <div>
        <label>
          <input type="checkbox" checked={period} onChange={() => setPeriod(!period)} />
          &nbsp; Period
        </label>
        <br />
        <label>
          <input type="checkbox" checked={birthControl} onChange={() => setBirthControl(!birthControl)} />
          &nbsp; Took birth control
        </label>
      </div>

      <input
        type="text"
        placeholder="Vitamins/supplements taken"
        value={vitamins}
        onChange={(e) => setVitamins(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", margin: "0.5rem 0" }}
      />

      <textarea
        placeholder="Extra notes (e.g. symptoms, cravings, water intake)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows={3}
        style={{ width: "100%", padding: "0.5rem" }}
      />

      <button onClick={handleAdd}>Log Entry</button>

      <ul style={{ marginTop: "1.5rem" }}>
        {log.map((entry, idx) => (
          <li key={idx} style={{ marginBottom: "1rem", background: "#f4f4f4", padding: "1rem", borderRadius: "8px" }}>
            <strong>{entry.date}</strong> – Period: {entry.period ? "Yes" : "No"}, BC: {entry.birthControl ? "Yes" : "No"}
            <p><strong>Vitamins:</strong> {entry.vitamins}</p>
            <p><strong>Notes:</strong> {entry.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
