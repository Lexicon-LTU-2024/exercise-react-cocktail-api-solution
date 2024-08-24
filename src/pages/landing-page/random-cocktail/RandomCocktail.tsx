import "./RandomCocktail.css";

import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

import { getRandomCocktail, ICocktail, MIN_TABLET_SIZE } from "../../../utilities";
import { useTypedLoaderData } from "../../../hooks";
import { CocktailImage, Button } from "../../../components";

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
      <h1 className="cocktail-header">Random Cocktail of the day!</h1>
      <div className="cocktail">
        <CocktailImage alt={cocktail.name} src={cocktail.image} />
        <h2 className="name">{cocktail.name}</h2>
        <div className="actions">
          <Button onClick={handleOnClick}>"Another!"</Button>
          <Link to={`cocktail/${cocktail.id}`}>
            <Button>Try it out..</Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
