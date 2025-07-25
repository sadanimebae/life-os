// sections/CozyKitchen.tsx
"use client";
import { useState } from "react";

export default function CozyKitchen() {
  const [meal, setMeal] = useState("");
  const [recipe, setRecipe] = useState("");
  const [meals, setMeals] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<string[]>([]);

  const addMeal = () => {
    if (meal.trim() !== "") {
      setMeals([...meals, meal]);
      setMeal("");
    }
  };

  const addRecipe = () => {
    if (recipe.trim() !== "") {
      setRecipes([...recipes, recipe]);
      setRecipe("");
    }
  };

  return (
    <div style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>🍳 Cozy Kitchen</h2>
      <p>Track your meals and recipes with love.</p>

      <div style={{ marginBottom: "2rem" }}>
        <h4>🍲 Meals You Made</h4>
        <input
          type="text"
          placeholder="e.g. Udon + soft boiled egg, miso soup, sushi bowl"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
          style={{ marginRight: "0.5rem", padding: "0.5rem", width: "70%" }}
        />
        <button onClick={addMeal}>Add Meal</button>
        <ul style={{ marginTop: "1rem" }}>
          {meals.map((m, i) => (
            <li key={i}>🍽️ {m}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4>📖 Recipes to Keep</h4>
        <input
          type="text"
          placeholder="e.g. Onigiri fillings, Japanese curry, cozy tea blends"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
          style={{ marginRight: "0.5rem", padding: "0.5rem", width: "70%" }}
        />
        <button onClick={addRecipe}>Add Recipe</button>
        <ul style={{ marginTop: "1rem" }}>
          {recipes.map((r, i) => (
            <li key={i}>📝 {r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
