import { Box, Button } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import { useCocktailContext } from "../hooks";
import { ICocktail } from "../utils";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface ICocktailActionsProps {
  cocktail: ICocktail;
}

export function CocktailActions({ cocktail }: ICocktailActionsProps): ReactElement {
  const { addToFavorites, checkIfExistsInFavorites, removeFromFavorites } = useCocktailContext();
  const savedToFavorites = checkIfExistsInFavorites(cocktail.id);

  const renderHeartIconVariant = (): ReactNode =>
    savedToFavorites ? <FavoriteIcon /> : <FavoriteBorderIcon />;

  const handleOnClick = () => {
    if (savedToFavorites) return removeFromFavorites(cocktail.id);
    return addToFavorites(cocktail);
  };

  return (
    <Box display="flex" justifyContent="flex-end">
      <Button endIcon={renderHeartIconVariant()} onClick={handleOnClick}>
        {savedToFavorites ? "Remove from favorites" : "Save to favorites"}
      </Button>
    </Box>
  );
}
