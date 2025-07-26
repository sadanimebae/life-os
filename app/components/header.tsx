// components/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Planner', path: '/planner' },
  { name: 'Creative', path: '/creative' },
  { name: 'Fitness', path: '/fitness' },
  { name: 'School', path: '/school' },
  { name: 'Finance', path: '/finance' },
  { name: 'Drops', path: '/drops' },
  { name: 'Emotions', path: '/emotions' },
  { name: 'Rewards', path: '/rewards' },
  { name: 'Overflow', path: '/overflow' },
  { name: 'Settings', path: '/settings' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-neutral-300 dark:border-neutral-700 sticky top-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-lg tracking-wide">
          Life OS 🌿
        </Link>
        <nav className="space-x-4 text-sm overflow-x-auto whitespace-nowrap">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`transition hover:underline ${
                pathname === item.path ? 'font-semibold text-rose-600 dark:text-rose-400' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
