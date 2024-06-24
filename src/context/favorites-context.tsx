"use client";

import React, {
  createContext,
  useState,
  ReactNode,
  useCallback,
  useMemo,
} from "react";

interface Meal {
  idMeal: string;
  [key: string]: any; // Additional properties can be added as needed
}

interface FavoritesContextType {
  favorites: Meal[];
  addFavorite: (meal: Meal) => void;
  removeFavorite: (idMeal: string) => void;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Meal[]>([]);

  const addFavorite = useCallback((meal: Meal) => {
    setFavorites((prevFavorites) => [...prevFavorites, meal]);
  }, []);

  const removeFavorite = useCallback((idMeal: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((meal) => meal.idMeal !== idMeal)
    );
  }, []);

  const value = useMemo(
    () => ({
      favorites,
      addFavorite,
      removeFavorite,
    }),
    [favorites, addFavorite, removeFavorite]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
