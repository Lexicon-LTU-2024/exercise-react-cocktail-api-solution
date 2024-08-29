import "./RandomCocktail.css";

import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

import { getRandomCocktail, ICocktail } from "../../../utilities";
import { useTypedLoaderData } from "../../../hooks";
import { CocktailImage, Button } from "../../../components";

export default function RandomCocktail(): ReactElement {
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
      <h3 className="cocktail-header">Random Cocktail of the day!</h3>
      <div className="cocktail">
        <CocktailImage alt={cocktail.name} src={cocktail.image} />
        <h3 className="name">{cocktail.name}</h3>
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
