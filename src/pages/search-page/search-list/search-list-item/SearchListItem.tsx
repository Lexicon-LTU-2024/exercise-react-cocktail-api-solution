import { ReactElement } from "react";
import { Button, CocktailImage } from "../../../../components";
import { ICocktail } from "../../../../utilities";

interface ISearchListItem {
  cocktail: ICocktail;
}

export function SearchListItem({ cocktail }: ISearchListItem): ReactElement {
  return (
    <article className="search-list-item">
      <CocktailImage alt={cocktail.name} src={cocktail.image} />
      <p>{cocktail.name}</p>
      <Button>See more</Button>
    </article>
  );
}
