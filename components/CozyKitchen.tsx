'use client';

export default function CozyKitchen() {
  const recipes = ['Onigiri Bento', 'Chili Garlic Noodles', 'Matcha Pancakes'];

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">🍳 Cozy Kitchen</h2>
      <ul className="text-sm space-y-1">
        {recipes.map((r) => (
          <li key={r}>🍽️ {r}</li>
        ))}
      </ul>
    </div>
  );
}
