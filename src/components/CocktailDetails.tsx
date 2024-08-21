import { Box, Typography as Text } from "@mui/material";
import { ReactElement } from "react";
import { ICocktail } from "../utils";
import { CocktailIngredients } from "./CocktailIngredients";
import { CocktailActions } from "./CocktailActions";

interface ICocktailDetails {
  cocktail: ICocktail;
}

export function CocktailDetails({ cocktail }: ICocktailDetails): ReactElement {
  return (
    <Box
      component="article"
      display="flex"
      flexDirection="column"
      gap="1rem"
      justifyContent="space-between"
      padding="1rem 1rem 1rem 0"
    >
      <Text variant="h4">{cocktail.name}</Text>
      <Text variant="body1">Best served in: {cocktail.glass}</Text>
      <CocktailIngredients ingredients={cocktail.ingredients} measures={cocktail.measures} />
      <Text variant="body1">{cocktail.instructions}</Text>
      <CocktailActions cocktail={cocktail} />
    </Box>
  );
}
