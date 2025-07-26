'use client';

import SanctuaryVault from '@/components/SanctuaryVault';
import ThemeToggle from '@/components/ThemeToggle';

export default function RewardsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Sanctuary Vault 🧚‍♀️</h1>
      <SanctuaryVault />
      <ThemeToggle />
    </section>
  );
}
