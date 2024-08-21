import { createContext, ReactElement, ReactNode, useState } from "react";
import { ICocktail, ICocktailContext } from "../utils";

interface ICocktailProviderProps {
  children: ReactNode;
}

export const CocktailContext = createContext<ICocktailContext>({} as ICocktailContext);

export function CocktailProvider({ children }: ICocktailProviderProps): ReactElement {
  const [favorites, setFavorites] = useState<ICocktail[]>([]);

  const addToFavorites = (cocktail: ICocktail) => setFavorites([...favorites, cocktail]);

  const checkIfExistsInFavorites = (cocktailId: string): boolean =>
    favorites.some((favorite) => favorite.id === cocktailId);

  const removeFromFavorites = (cocktailId: string) =>
    setFavorites(favorites.filter((favorite) => favorite.id !== cocktailId));

  const values: ICocktailContext = {
    addToFavorites,
    checkIfExistsInFavorites,
    favorites,
    removeFromFavorites,
  };

  return <CocktailContext.Provider value={values}>{children}</CocktailContext.Provider>;
}
