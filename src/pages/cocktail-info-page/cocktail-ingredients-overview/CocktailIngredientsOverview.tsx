import { ReactElement } from "react";
import { IngredientImage } from "./ingredient-image";
import { ImageSize, MIN_MOBILE_L_SIZE } from "../../../utilities";
import { useMediaQuery } from "usehooks-ts";

interface ICocktailIngredientsOverviewProps {
  ingredients: string[];
}

export function CocktailIngredientsOverview({
  ingredients,
}: ICocktailIngredientsOverviewProps): ReactElement {
  const isMobilLSize = useMediaQuery(MIN_MOBILE_L_SIZE);

  return (
    <section id="cocktail-ingredient-overview">
      <h1 className="title">Overview of Ingredients</h1>
      <p className="more-info">
        <em>( Click for more info )</em>
      </p>
      {ingredients.map((ing) =>
        isMobilLSize ? (
          <IngredientImage ingredient={ing} key={ing} />
        ) : (
          <IngredientImage ingredient={ing} key={ing} size={ImageSize.Medium} />
        )
      )}
    </section>
  );
}
