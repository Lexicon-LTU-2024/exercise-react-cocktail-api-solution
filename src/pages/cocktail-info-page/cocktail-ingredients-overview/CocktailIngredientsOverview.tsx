import { ReactElement } from "react";
import { IngredientImage } from "./ingredient-image";
import { ImageSize } from "../../../utilities";

interface ICocktailIngredientsOverviewProps {
  ingredients: string[];
}

export function CocktailIngredientsOverview({
  ingredients,
}: ICocktailIngredientsOverviewProps): ReactElement {
  return (
    <section id="cocktail-ingredient-overview">
      <h1 className="title">Overview of Ingredients</h1>
      <p className="more-info">
        <em>( Click for more info )</em>
      </p>
      {ingredients.map((ing) => (
        <IngredientImage ingredient={ing} key={ing} size={ImageSize.Large} />
      ))}
    </section>
  );
}
