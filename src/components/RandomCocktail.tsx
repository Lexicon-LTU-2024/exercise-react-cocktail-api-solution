import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

import { getRandomCocktail, ICocktail } from "../utils";
import { useTypedLoaderData } from "../hooks";
import { Button, CocktailImage } from ".";

export function RandomCocktail(): ReactElement {
  const initialRandomCocktail = useTypedLoaderData<ICocktail>();
  const [cocktail, setCocktail] = useState<ICocktail>(initialRandomCocktail);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsLoading(true);
    getRandomCocktail().then((randomCocktail) => {
      setCocktail(randomCocktail);
      setIsLoading(false);
    });
  };

  return (
    <article id="random-cocktail">
      <CocktailImage alt={cocktail.name} src={cocktail.image} />
      <h2 className="name">{cocktail.name}</h2>
      <div className="actions">
        <Button onClick={handleOnClick}>"Another!"</Button>
        <Link to={`cocktail/${cocktail.id}`}>
          <Button>Try it out..</Button>
        </Link>
      </div>
    </article>
  );
}
