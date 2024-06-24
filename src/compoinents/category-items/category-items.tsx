"use client";
import { FavoritesContext } from "@/context/favorites-context";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { HeartIcon } from "lucide-react";
import React, { useContext } from "react";

export default function CategoryItems({ meals }: { meals: any }) {
  // const { addFavorite } = useContext(FavoritesContext) || {};

  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext) || {};

  const isFavorite = (mealId: string) =>
    favorites.some((meal: any) => meal.idMeal === mealId);

  return (
    <div className="mt-8">
      <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          {meals.map((meal: any) => (
            <li key={meal.id} className="flex py-6">
              <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="object-cover object-center w-full h-full"
                />
              </div>

              <div className="flex flex-col flex-1 ml-4">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <a href={meal.href}>{meal.strMeal}</a>
                    </h3>
                  </div>
                  {/* <p className="mt-1 text-sm text-gray-500">{meal.color}</p> */}
                </div>
              </div>
              <div
                onClick={() =>
                  isFavorite(meal.idMeal)
                    ? removeFavorite(meal.idMeal)
                    : addFavorite(meal)
                }
              >
                <HeartIcon
                  className={`hover:text-red-500 ${
                    isFavorite(meal.idMeal) ? "text-red-500" : "text-gray-500"
                  }`}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
