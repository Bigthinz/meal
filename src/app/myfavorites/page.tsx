"use client";
import { useContext } from "react";
import Image from "next/image";
import { FavoritesContext } from "@/context/favorites-context";

const Page = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext) || {};

  return (
    <div>
      <h1 className="mb-10 font-bold">My Favories</h1>
      <ul>
        {favorites &&
          favorites.map((meal) => (
            <li key={meal.idMeal} className="space-y-2 ">
              <Image
                src={meal.strMealThumb}
                alt={meal.strMeal}
                width="100"
                height="100"
              />
              <p>{meal.strMeal}</p>
              <button
                onClick={() => removeFavorite && removeFavorite(meal.idMeal)}
              >
                Remove
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Page;
