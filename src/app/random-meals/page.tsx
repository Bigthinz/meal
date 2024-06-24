"use client";

import { useState, useContext } from "react";
import axios from "axios";
import { FavoritesContext } from "@/context/favorites-context";
import { HeartIcon } from "lucide-react";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  [key: string]: any; // Additional properties can be added as needed
}

const RandomMeal: React.FC = () => {
  const [meal, setMeal] = useState<Meal | null>(null);
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext) || {};

  const isFavorite = (mealId: string) =>
    favorites?.some((meal: any) => meal.idMeal === mealId) || false;

  const generateRandomMeal = async () => {
    try {
      const { data } = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      setMeal(data.meals[0]);
    } catch (error) {
      console.error("Error fetching random meal:", error);
    }
  };

  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Random Meal Generator
          </h2>

          <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {meal && (
              <>
                <div key={meal.id} className="relative ">
                  <div className="w-full overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none lg:h-80">
                    <img
                      src={meal.strMealThumb}
                      alt={meal.strMealThumb}
                      className="object-cover object-center w-full h-full lg:h-full lg:w-full group-hover:opacity-75"
                    />
                  </div>
                  <div className="flex justify-between mt-4 ">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={meal.href}>
                          <span aria-hidden="true" className="inset-0 " />
                          {meal.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{meal.color}</p>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      isFavorite(meal.idMeal) && removeFavorite
                        ? removeFavorite(meal.idMeal)
                        : addFavorite && addFavorite(meal)
                    }
                  >
                    <HeartIcon
                      className={`hover:text-red-500 ${
                        isFavorite(meal.idMeal)
                          ? "text-red-500"
                          : "text-gray-500"
                      }`}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
          <button
            className="p-2 px-4 mt-2 bg-blue-200 rounded-md"
            onClick={generateRandomMeal}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomMeal;
