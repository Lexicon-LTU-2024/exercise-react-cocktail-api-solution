import "./CocktailDetails.css";

import { ReactElement } from "react";
import { ICocktail } from "../../../utilities";
import { CocktailIngredients } from "./cocktail-ingredients";
import { CocktailActions } from "./cocktail-actions";

interface ICocktailDetails {
  cocktail: ICocktail;
}

export function CocktailDetails({ cocktail }: ICocktailDetails): ReactElement {
  return (
    <div id="cocktail-details">
      <h2 className="name">{cocktail.name}</h2>
      <p>
        <strong>Best served in:</strong> {cocktail.glass}
      </p>
      <CocktailIngredients ingredients={cocktail.ingredients} measures={cocktail.measures} />
      <p>{cocktail.instructions}</p>
      <CocktailActions cocktail={cocktail} />
    </div>
  );
}
