// components/Header.tsx
"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      padding: "1rem",
      borderBottom: "1px solid #ccc",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#f9f6f2"
    }}>
      <h2 style={{ margin: 0 }}>🌿 Life OS</h2>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link href="/">Home</Link>
        <Link href="#planner">Planner</Link>
        <Link href="#vault">Vault</Link>
        <Link href="#travel">Travel</Link>
        <Link href="#outfits">Lookbook</Link>
      </nav>
    </header>
  );
}
