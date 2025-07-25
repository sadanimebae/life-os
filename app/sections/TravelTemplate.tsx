// sections/TravelTemplate.tsx
"use client";
import { useState } from "react";

type Trip = {
  name: string;
  startDate: string;
  endDate: string;
};

type TripEntry = {
  tripName: string;
  date: string;
  plan: string;
};

export default function TravelTemplate() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [entries, setEntries] = useState<TripEntry[]>([]);
  const [newTrip, setNewTrip] = useState<Trip>({
    name: "",
    startDate: "",
    endDate: "",
  });
  const [newEntry, setNewEntry] = useState<TripEntry>({
    tripName: "",
    date: "",
    plan: "",
  });

  const addTrip = () => {
    if (newTrip.name && newTrip.startDate && newTrip.endDate) {
      setTrips([...trips, newTrip]);
      setNewTrip({ name: "", startDate: "", endDate: "" });
    }
  };

  const addEntry = () => {
    if (newEntry.tripName && newEntry.date && newEntry.plan) {
      setEntries([...entries, newEntry]);
      setNewEntry({ tripName: "", date: "", plan: "" });
    }
  };

  return (
    <div style={{ padding: "2rem", marginTop: "2rem" }}>
      <h2>✈️ General Travel Planner</h2>
      <p>Create and plan for any trip in the future.</p>

      <h3>Add a Trip</h3>
      <input
        type="text"
        placeholder="Trip Name"
        value={newTrip.name}
        onChange={(e) => setNewTrip({ ...newTrip, name: e.target.value })}
        style={{ marginRight: "0.5rem" }}
      />
      <input
        type="text"
        placeholder="Start Date"
        value={newTrip.startDate}
        onChange={(e) => setNewTrip({ ...newTrip, startDate: e.target.value })}
        style={{ marginRight: "0.5rem" }}
      />
      <input
        type="text"
        placeholder="End Date"
        value={newTrip.endDate}
        onChange={(e) => setNewTrip({ ...newTrip, endDate: e.target.value })}
        style={{ marginBottom: "0.5rem" }}
      />
      <br />
      <button onClick={addTrip}>Add Trip</button>

      <h3 style={{ marginTop: "2rem" }}>Add Itinerary Entry</h3>
      <select
        value={newEntry.tripName}
        onChange={(e) => setNewEntry({ ...newEntry, tripName: e.target.value })}
        style={{ marginRight: "0.5rem" }}
      >
        <option value="">Select Trip</option>
        {trips.map((t, i) => (
          <option key={i} value={t.name}>{t.name}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Date"
        value={newEntry.date}
        onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
        style={{ marginRight: "0.5rem" }}
      />
      <input
        type="text"
        placeholder="Plan"
        value={newEntry.plan}
        onChange={(e) => setNewEntry({ ...newEntry, plan: e.target.value })}
        style={{ width: "60%" }}
      />
      <br />
      <button onClick={addEntry} style={{ marginTop: "0.5rem" }}>Add Entry</button>

      <ul style={{ marginTop: "2rem" }}>
        {entries.map((entry, i) => (
          <li key={i}>
            <strong>{entry.tripName}</strong> – {entry.date}: {entry.plan}
          </li>
        ))}
      </ul>
    </div>
  );
}
