import { ReactElement } from "react";
import { useCocktailContext } from "../hooks";
import { ICocktail } from "../utils";

interface ICocktailActionsProps {
  cocktail: ICocktail;
}

export function CocktailActions({ cocktail }: ICocktailActionsProps): ReactElement {
  const { addToFavorites, checkIfExistsInFavorites, removeFromFavorites } = useCocktailContext();
  const savedToFavorites = checkIfExistsInFavorites(cocktail.id);

  const handleOnClick = () => {
    if (savedToFavorites) return removeFromFavorites(cocktail.id);
    return addToFavorites(cocktail);
  };

  return (
    <div>
      <button onClick={handleOnClick}>
        {savedToFavorites ? "Remove from favorites" : "Save to favorites"}
      </button>
    </div>
  );
}
