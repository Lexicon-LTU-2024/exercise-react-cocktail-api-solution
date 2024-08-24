import { ReactElement } from "react";
import { ICocktail } from "../../../utilities";
import { CocktailIngredients } from "./cocktail-ingredients";
import { CocktailActions } from "./cocktail-actions";

interface ICocktailDetails {
  cocktail: ICocktail;
}

export function CocktailDetails({ cocktail }: ICocktailDetails): ReactElement {
  return (
    <div>
      <h4>{cocktail.name}</h4>
      <p>Best served in: {cocktail.glass}</p>
      <CocktailIngredients ingredients={cocktail.ingredients} measures={cocktail.measures} />
      <p>{cocktail.instructions}</p>
      <CocktailActions cocktail={cocktail} />
    </div>
  );
}
