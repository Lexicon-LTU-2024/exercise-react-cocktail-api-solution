import "./CocktailActions.css";

import { ReactElement } from "react";
import { ICocktail } from "../../../../utilities";
import { useCocktailContext } from "../../../../hooks";
import { Button } from "../../../../components";

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
    <div id="cocktail-actions">
      <Button onClick={handleOnClick}>
        {savedToFavorites ? "Remove from favorites" : "Save to favorites"}
      </Button>
    </div>
  );
}
