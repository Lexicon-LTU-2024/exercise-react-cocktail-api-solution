import { ReactElement } from "react";
import { ButtonVariant, ICocktail, MIN_MOBILE_L_SIZE } from "../../../../utilities";
import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import { Button, Image } from "../../../../components";

interface ISearchResultItemProps {
  cocktail: ICocktail;
}

export function SearchResultItem({ cocktail }: ISearchResultItemProps): ReactElement {
  const isMinMobilLSize = useMediaQuery(MIN_MOBILE_L_SIZE);

  const renderButtonLink = (): ReactElement => {
    if (isMinMobilLSize) {
      return (
        <Link className="g-link" to={`/cocktail/${cocktail.id}`}>
          View {cocktail.name}
        </Link>
      );
    }

    return (
      <Button type="button" variant={ButtonVariant.Outline}>
        <Link className="g-link" to={`/cocktail/${cocktail.id}`}>
          View
        </Link>
      </Button>
    );
  };

  return (
    <article className="search-result-item">
      {isMinMobilLSize && <Image alt={cocktail.name} src={cocktail.image} />}
      <h2>{cocktail.name}</h2>
      {renderButtonLink()}
    </article>
  );
}
