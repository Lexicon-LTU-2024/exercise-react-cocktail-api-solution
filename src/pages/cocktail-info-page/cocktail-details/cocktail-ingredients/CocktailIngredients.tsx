import { ReactElement } from "react";

interface ICocktailIngredientsProps {
  ingredients: string[];
  measures: string[];
}

export function CocktailIngredients(props: ICocktailIngredientsProps): ReactElement {
  return (
    <div id="cocktail-ingredients">
      <p>
        <strong>Ingredients</strong>
      </p>
      {props.ingredients.map((ing, i) => (
        <p key={ing}>
          {props.measures[i]} {ing}
        </p>
      ))}
    </div>
  );
}
