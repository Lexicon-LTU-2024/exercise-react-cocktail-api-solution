import { ReactElement, useState } from "react";
import { getRandomCocktail, ICocktail } from "../utils";
import { useTypedLoaderData } from "../hooks";
import { Link } from "react-router-dom";

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
    <article className="random-cocktail">
      <figure className="image" />
      <div className="content">
        <h5>{cocktail.name}</h5>
      </div>
      <div className="actions">
        <button onClick={handleOnClick}>"Another!"</button>
        <Link to={`cocktail/${cocktail.id}`}>
          <button>See more</button>
        </Link>
      </div>
    </article>
  );
}
