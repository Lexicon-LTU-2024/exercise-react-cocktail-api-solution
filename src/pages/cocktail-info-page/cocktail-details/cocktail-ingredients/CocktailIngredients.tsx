import { ReactElement } from "react";

interface ICocktailIngredientsProps {
  ingredients: string[];
  measures: string[];
}

export function CocktailIngredients(props: ICocktailIngredientsProps): ReactElement {
  return (
    <div>
      <p>Ingredients & Measurements</p>
      {props.ingredients.map((ing, i) => (
        <p key={ing}>
          <span className="list-item-text">
            {props.measures[i]} {ing}
          </span>
        </p>
      ))}
    </div>
  );
}
